import React, { useState, useRef } from 'react';

export default function App() {
  const defaultStones = [
    { name: 'Lapis Lazuli', abbr: 'LL' },
    { name: 'Agate', abbr: 'A' },
    { name: 'Emerald', abbr: 'EM' },
    { name: 'Ruby', abbr: 'RY' },
    { name: 'Sapphire', abbr: 'SA' },
    { name: 'Rose Quartz', abbr: 'RQ' },
    { name: 'Amethyst', abbr: 'AME' },
    { name: 'Black Jasper', abbr: 'BJ' },
    { name: 'Milky Quartz', abbr: 'MQ' },
  ];

  const defaultMetals = [
    { name: 'Brass', abbr: 'BR' },
    { name: 'Silver', abbr: 'SL' },
    { name: 'Gold', abbr: 'AU' },
    { name: 'Copper', abbr: 'CU' },
  ];

  const defaultProducts = [
    { name: 'Necklace', abbr: 'NL' },
    { name: 'Ring', abbr: 'R' },
    { name: 'Bracelet', abbr: 'B' },
    { name: 'Earring', abbr: 'ER' },
    { name: 'Frame', abbr: 'FR' },
  ];

  const defaultClients = [
    { name: 'HBL', abbr: 'HBL' },
    { name: 'NUMS', abbr: 'NUMS' },
    { name: 'Dawalance', abbr: 'DW' },
  ];

  const [stones, setStones] = useState(defaultStones);
  const [metals, setMetals] = useState(defaultMetals);
  const [products, setProducts] = useState(defaultProducts);
  const [clients, setClients] = useState(defaultClients);

  const [learningExamples, setLearningExamples] = useState([
    { stone: 'Lapis Lazuli', product: 'Earring', desc: 'Stunning drop earrings featuring raw-cut Lapis Lazuli from Afghanistan. Handcrafted with geometric brass studs.' },
    { stone: 'Black Jasper', product: 'Ring', desc: 'Bold and timeless Black Jasper ring crafted in silver. Known for its grounding energy and protection.' },
  ]);

  const [formData, setFormData] = useState({
    stone: '',
    metal: '',
    product: '',
    client: '',
    productName: '',
    skuNumber: '001',
  });

  const [generated, setGenerated] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageAnalysis, setImageAnalysis] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const fileInputRef = useRef(null);

  // Add new item
  const addNewItem = (type) => {
    const name = prompt(`Enter ${type} name:`);
    const abbr = prompt(`Enter ${type} abbreviation:`);
    if (!name || !abbr) return;

    const newItem = { name, abbr };
    if (type === 'stone') setStones([...stones, newItem]);
    else if (type === 'metal') setMetals([...metals, newItem]);
    else if (type === 'product') setProducts([...products, newItem]);
    else if (type === 'client') setClients([...clients, newItem]);
  };

  // Add learning example
  const addLearningExample = () => {
    const desc = prompt('Enter product description:');
    const stone = prompt('Enter stone name:');
    const prod = prompt('Enter product type:');
    if (!desc || !stone || !prod) return;
    setLearningExamples([...learningExamples, { stone, product: prod, desc }]);
    alert('Learning example added!');
  };

  // Upload and analyze image
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target.result);
      analyzeImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async (base64Image) => {
    setAnalyzing(true);
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 500,
          messages: [{
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: 'image/jpeg',
                  data: base64Image.split(',')[1],
                },
              },
              {
                type: 'text',
                text: 'Analyze this jewelry product. Identify: 1) Product type (Ring, Necklace, etc) 2) Stone type 3) Metal type 4) Design details. Be brief.'
              }
            ],
          }],
        }),
      });
      const data = await response.json();
      setImageAnalysis(data.content?.[0]?.text || 'Could not analyze');
    } catch (error) {
      setImageAnalysis('Error analyzing image');
    }
    setAnalyzing(false);
  };

  const useImageAnalysis = () => {
    if (!imageAnalysis) return;
    const lower = imageAnalysis.toLowerCase();
    
    for (let s of stones) {
      if (lower.includes(s.name.toLowerCase())) {
        setFormData(prev => ({ ...prev, stone: s.name }));
        break;
      }
    }
    for (let m of metals) {
      if (lower.includes(m.name.toLowerCase())) {
        setFormData(prev => ({ ...prev, metal: m.name }));
        break;
      }
    }
    for (let p of products) {
      if (lower.includes(p.name.toLowerCase())) {
        setFormData(prev => ({ ...prev, product: p.name }));
        break;
      }
    }
    alert('Form updated from image analysis!');
  };

  // Generate product
  const generateProduct = () => {
    if (!formData.stone || !formData.metal || !formData.product || !formData.productName) {
      alert('Fill all required fields');
      return;
    }

    const stoneAbbr = stones.find(s => s.name === formData.stone)?.abbr || '';
    const metalAbbr = metals.find(m => m.name === formData.metal)?.abbr || '';
    const prodAbbr = products.find(p => p.name === formData.product)?.abbr || '';
    const clientAbbr = formData.client ? clients.find(c => c.name === formData.client)?.abbr || '' : '';

    let sku = `${stoneAbbr}-${metalAbbr}-${prodAbbr}`;
    if (clientAbbr) sku += `-${clientAbbr}`;
    sku += `-${formData.skuNumber}`;

    const learning = learningExamples.find(l => l.product.toLowerCase() === formData.product.toLowerCase());
    let description = learning ? learning.desc : `Beautiful ${formData.stone} ${formData.product} in ${formData.metal}.`;

    const newProduct = {
      id: Date.now(),
      name: formData.productName,
      sku,
      title: `${formData.productName} - ${formData.stone} ${formData.product}`,
      description,
      tags: ['jewelry', 'gemstone', formData.stone, formData.product],
    };

    setGenerated([...generated, newProduct]);
    setFormData({ ...formData, productName: '', skuNumber: '001' });
  };

  const downloadCSV = () => {
    if (generated.length === 0) {
      alert('No products');
      return;
    }
    let csv = 'Product Name,SKU,Title,Description,Tags\n';
    generated.forEach(p => {
      csv += `"${p.name}","${p.sku}","${p.title}","${p.description}","${p.tags.join(', ')}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orah-products.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-1">Orah Jewels Product Generator</h1>
        <p className="text-amber-700 mb-6">AI Product Description Generator with Image Analysis</p>

        <div className="grid md:grid-cols-4 gap-4">
          {/* Left Panel */}
          <div className="md:col-span-1 space-y-4">
            {/* Form */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-bold text-amber-900 mb-3">Create Product</h2>
              
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block font-medium text-amber-900 mb-1">Product Name *</label>
                  <input
                    type="text"
                    placeholder="e.g., Zarqa"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className="w-full border border-amber-200 rounded px-2 py-1"
                  />
                </div>

                <div>
                  <label className="block font-medium text-amber-900 mb-1">Stone *</label>
                  <select
                    value={formData.stone}
                    onChange={(e) => setFormData({ ...formData, stone: e.target.value })}
                    className="w-full border border-amber-200 rounded px-2 py-1"
                  >
                    <option value="">Select</option>
                    {stones.map(s => <option key={s.abbr} value={s.name}>{s.name}</option>)}
                  </select>
                  <button onClick={() => addNewItem('stone')} className="text-xs text-blue-600 mt-1">+ Add Stone</button>
                </div>

                <div>
                  <label className="block font-medium text-amber-900 mb-1">Metal *</label>
                  <select
                    value={formData.metal}
                    onChange={(e) => setFormData({ ...formData, metal: e.target.value })}
                    className="w-full border border-amber-200 rounded px-2 py-1"
                  >
                    <option value="">Select</option>
                    {metals.map(m => <option key={m.abbr} value={m.name}>{m.name}</option>)}
                  </select>
                  <button onClick={() => addNewItem('metal')} className="text-xs text-blue-600 mt-1">+ Add Metal</button>
                </div>

                <div>
                  <label className="block font-medium text-amber-900 mb-1">Product Type *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full border border-amber-200 rounded px-2 py-1"
                  >
                    <option value="">Select</option>
                    {products.map(p => <option key={p.abbr} value={p.name}>{p.name}</option>)}
                  </select>
                  <button onClick={() => addNewItem('product')} className="text-xs text-blue-600 mt-1">+ Add Type</button>
                </div>

                <div>
                  <label className="block font-medium text-amber-900 mb-1">Client</label>
                  <select
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full border border-amber-200 rounded px-2 py-1"
                  >
                    <option value="">None</option>
                    {clients.map(c => <option key={c.abbr} value={c.name}>{c.name}</option>)}
                  </select>
                  <button onClick={() => addNewItem('client')} className="text-xs text-blue-600 mt-1">+ Add Client</button>
                </div>

                <div>
                  <label className="block font-medium text-amber-900 mb-1">SKU #</label>
                  <input
                    type="text"
                    value={formData.skuNumber}
                    onChange={(e) => setFormData({ ...formData, skuNumber: e.target.value })}
                    className="w-full border border-amber-200 rounded px-2 py-1"
                  />
                </div>

                <button
                  onClick={generateProduct}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded"
                >
                  Generate
                </button>
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-purple-50 rounded-lg shadow p-4 border border-purple-200">
              <h2 className="font-bold text-purple-900 mb-2 text-sm">📸 Image Analysis</h2>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-purple-600 text-white py-2 rounded text-sm font-bold mb-2"
              >
                Upload Photo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {uploadedImage && (
                <div>
                  <img src={uploadedImage} alt="Product" className="w-full h-24 object-cover rounded mb-2" />
                  {analyzing ? <p className="text-xs text-purple-800">Analyzing...</p> : null}
                  {imageAnalysis && !analyzing && (
                    <div>
                      <p className="text-xs text-purple-800 mb-2">{imageAnalysis}</p>
                      <button
                        onClick={useImageAnalysis}
                        className="w-full bg-green-500 text-white py-1 rounded text-xs"
                      >
                        Use Analysis
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Learning */}
            <div className="bg-blue-50 rounded-lg shadow p-4 border border-blue-200">
              <h2 className="font-bold text-blue-900 mb-2 text-sm">🧠 Learning Data</h2>
              <p className="text-xs text-blue-800 mb-2">Examples: {learningExamples.length}</p>
              <button
                onClick={addLearningExample}
                className="w-full bg-blue-600 text-white py-1 rounded text-xs font-bold"
              >
                + Add Description
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-amber-900">Generated ({generated.length})</h2>
              {generated.length > 0 && (
                <button
                  onClick={downloadCSV}
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold"
                >
                  Export CSV
                </button>
              )}
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {generated.length === 0 ? (
                <div className="bg-white rounded shadow p-6 text-center text-gray-500">
                  No products yet
                </div>
              ) : (
                generated.map(p => (
                  <div key={p.id} className="bg-white rounded shadow p-3 border-l-4 border-amber-600">
                    <h3 className="font-bold text-amber-900">{p.name}</h3>
                    <p className="text-xs text-gray-600">SKU: {p.sku}</p>
                    <p className="text-sm text-gray-700 mt-1">{p.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{p.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
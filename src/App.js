import React, { useState, useRef, useEffect } from 'react';
import { Download, Copy, Plus, Trash2, BookOpen, X, Upload } from 'lucide-react';

export default function ProductGenerator() {
  const defaultStones = [
    { name: 'Lapis Lazuli', abbr: 'LL' },
    { name: 'Agate', abbr: 'A' },
    { name: 'Serpentine', abbr: 'SP' },
    { name: 'Blue Topaz', abbr: 'TO' },
    { name: 'Aquamarine', abbr: 'AQ' },
    { name: 'Emerald', abbr: 'EM' },
    { name: 'Amethyst', abbr: 'AME' },
    { name: 'Nephrite Jade', abbr: 'NP' },
    { name: 'Agatized Jasper', abbr: 'AJ' },
    { name: 'Quartz', abbr: 'QU' },
    { name: 'Idocrase', abbr: 'ID' },
    { name: 'Garnet', abbr: 'GA' },
    { name: 'Peridot', abbr: 'PE' },
    { name: 'Citrine', abbr: 'CT' },
    { name: 'Tiger Iron', abbr: 'TI' },
    { name: 'Turquoise', abbr: 'TE' },
    { name: 'Tourmaline', abbr: 'BT' },
    { name: 'Himalayan River Stone', abbr: 'RV' },
    { name: 'Malachite', abbr: 'ME' },
    { name: 'Chrysocolla', abbr: 'CA' },
    { name: 'Pearl', abbr: 'PL' },
    { name: 'Coral', abbr: 'CL' },
    { name: 'Opal', abbr: 'OL' },
    { name: 'Rose Quartz', abbr: 'RQ' },
    { name: 'Prehnite', abbr: 'PR' },
    { name: 'Amber', abbr: 'AMB' },
    { name: 'Sapphire', abbr: 'SA' },
    { name: 'Ruby', abbr: 'RY' },
    { name: 'Multi Color Stone', abbr: 'MT' },
    { name: 'Larimar', abbr: 'LA' },
    { name: 'Chalcedony', abbr: 'CH' },
    { name: 'Apatite', abbr: 'AP' },
    { name: 'Tanzanite', abbr: 'TA' },
    { name: 'Kyanite', abbr: 'KY' },
    { name: 'Spectrolite', abbr: 'ST' },
    { name: 'Onyx', abbr: 'ON' },
    { name: 'Calcite', abbr: 'CC' },
    { name: 'Green Chrome Diopside', abbr: 'GD' },
    { name: 'Aventurine', abbr: 'AV' },
    { name: 'Mother of Pearl', abbr: 'MP' },
    { name: 'Amazonite', abbr: 'AM' },
    { name: 'Jasper', abbr: 'JS' },
    { name: 'Topaz', abbr: 'TP' },
    { name: 'Milky Quartz', abbr: 'MQ' },
    { name: 'Black Jasper', abbr: 'BJ' },
  ];

  const defaultMetals = [
    { name: 'Brass', abbr: 'BR' },
    { name: 'Silver', abbr: 'SL' },
    { name: 'Gold', abbr: 'AU' },
    { name: 'Copper', abbr: 'CU' },
    { name: 'Stainless Steel', abbr: 'SS' },
    { name: 'Leather', abbr: 'LA' },
  ];

  const defaultProducts = [
    { name: 'Necklace', abbr: 'NL' },
    { name: 'Ring', abbr: 'R' },
    { name: 'Bracelet', abbr: 'B' },
    { name: 'Earring', abbr: 'ER' },
    { name: 'Pendant', abbr: 'PD' },
    { name: 'Bangle', abbr: 'BG' },
    { name: 'Cufflinks', abbr: 'CL' },
    { name: 'Bookmark', abbr: 'BK' },
    { name: 'Frame', abbr: 'FR' },
    { name: 'String', abbr: 'ST' },
    { name: 'Pot', abbr: 'PT' },
    { name: 'Home Décor', abbr: 'HD' },
    { name: 'Tasbih', abbr: 'TH' },
  ];

  const defaultCorporateClients = [
    { name: 'HBL', abbr: 'HBL' },
    { name: 'NUMS', abbr: 'NUMS' },
    { name: 'Dawalance', abbr: 'DW' },
  ];

  const [stones, setStones] = useState(defaultStones);
  const [metals, setMetals] = useState(defaultMetals);
  const [products, setProducts] = useState(defaultProducts);
  const [corporateClients, setCorporateClients] = useState(defaultCorporateClients);

  const [learningData, setLearningData] = useState({
    descriptions: [
      { stone: 'Lapis Lazuli', product: 'Earring', text: 'Unearth the celestial with these stunning drop earrings, featuring raw-cut Lapis Lazuli from Afghanistan, revered for its deep blue hue and pyrite \'star\' inclusions. Part of the Orah Jewels collection, the design is a tribute to Sadequain\'s mastery, pairing the organic, powerful stone with a bold, geometric brass stud. This handcrafted piece is more than jewelry; it\'s wearable art that captures the essence of thought and form, a striking statement connecting ancient Afghan heritage with modern artistic expression.' },
      { stone: 'Black Jasper', product: 'Ring', text: 'Bold, powerful, and timeless—this Black Jasper Silver Ring is crafted for men who appreciate strength in simplicity. The design features a striking emerald-cut gemstone, known for its deep, grounding energy, set in a sleek band. The band is accented with a textured silver pattern on the sides, adding detail and sophistication while keeping the focus on the bold central stone. Black Jasper is celebrated as a stone of protection, courage, and stability—making this ring not only a style statement but also a meaningful talisman. At Orah Jewels & Crafts, each piece is the result of masterful craftsmanship—blending locally sourced gemstones with contemporary silverwork to create jewelry that carries both cultural heritage and modern design.' },
      { stone: 'Milky Quartz', product: 'Frame', text: 'Elevate your space with this exquisitely handcrafted calligraphy frame by Orah Jewels. A piece designed to radiate tranquility and spiritual elegance. The central design features sacred text rendered in stunning, layered calligraphy, utilizing contrasting finishes of gilded brass and silver tones to give the text depth and luminosity. The art piece is adorned with the soft, ethereal radiance of Milky Quartz. The subtle, gentle tones of the quartz beads are carefully set within the intricate, traditional Islamic geometric and floral patterns that frame the calligraphy, reflecting purity and serenity.' },
      { stone: 'Topaz/Amethyst', product: 'Necklace', text: 'A striking blend of elegance and symbolism, this handcrafted necklace from the Sunehra Shaam collection is a glowing tribute to the golden hour. Featuring a rectangular champagne-hued topaz paired with a rich purple amethyst, this pendant evokes the serene transition from daylight to dusk. Set in polished sterling silver, the piece reflects Orah\'s commitment to refined design and state-of-the-art techniques. The harmonious contrast creates a graceful color story that speaks of warmth, peace, and fleeting beauty.' },
    ],
    tags: {
      Earring: ['Earrings', 'New Arrivals', 'jewelry', 'Earring Handmade', 'Collections'],
      Ring: ['Rings', 'New Arrivals', 'Men\'s Rings', 'Collections', 'jewelry'],
      Necklace: ['Necklace', 'New Arrivals', 'jewelry', 'Collections', 'Gemstone jewelry'],
      Frame: ['home decor', 'geometric pattern', 'Corporate Gifts', 'Collections', 'New Arrivals'],
    }
  });

  const [formData, setFormData] = useState({
    stone: '',
    metal: '',
    product: '',
    corporateClient: '',
    productName: '',
    skuNumber: '001',
  });

  const [generatedProducts, setGeneratedProducts] = useState([]);
  const [showLearningData, setShowLearningData] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addType, setAddType] = useState('stone');
  const [newItemName, setNewItemName] = useState('');
  const [newItemAbbr, setNewItemAbbr] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageAnalyzing, setImageAnalyzing] = useState(false);
  const [imageAnalysis, setImageAnalysis] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64Image = event.target?.result;
      setUploadedImage(base64Image);
      await analyzeProductImage(base64Image);
    };
    reader.readAsDataURL(file);
  };

  const analyzeProductImage = async (base64Image) => {
    setImageAnalyzing(true);
    setImageAnalysis('');

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: "image/jpeg",
                    data: base64Image.split(',')[1],
                  },
                },
                {
                  type: "text",
                  text: "You are a jewelry and product description expert for Orah Jewels, a Pakistani handcrafted gemstone jewelry brand. Analyze this product image and provide:\n\n1. Product Type (Ring, Necklace, Earring, Bracelet, etc.)\n2. Stone/Gemstone visible (if any)\n3. Metal type (Silver, Gold, Brass, etc.)\n4. Color description\n5. Design elements and craftsmanship details\n6. Style/aesthetic (modern, traditional, geometric, etc.)\n7. Design features (e.g., emerald-cut, drop style, etc.)\n\nFormat your response as structured bullet points for easy reference."
                }
              ],
            }
          ],
        })
      });

      const data = await response.json();
      const analysisText = data.content?.[0]?.text || 'Could not analyze image';
      setImageAnalysis(analysisText);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setImageAnalysis('❌ Error analyzing image. Please try again.');
    }

    setImageAnalyzing(false);
  };

  const useImageAnalysis = () => {
    if (!imageAnalysis) {
      alert('Please analyze an image first');
      return;
    }

    const analysisLower = imageAnalysis.toLowerCase();
    
    const productTypes = products.map(p => p.name.toLowerCase());
    for (let type of productTypes) {
      if (analysisLower.includes(type)) {
        setFormData(prev => ({ ...prev, product: products.find(p => p.name.toLowerCase() === type)?.name || '' }));
        break;
      }
    }

    const metalTypes = metals.map(m => m.name.toLowerCase());
    for (let metal of metalTypes) {
      if (analysisLower.includes(metal)) {
        setFormData(prev => ({ ...prev, metal: metals.find(m => m.name.toLowerCase() === metal)?.name || '' }));
        break;
      }
    }

    const stoneTypes = stones.map(s => s.name.toLowerCase());
    for (let stone of stoneTypes) {
      if (analysisLower.includes(stone)) {
        setFormData(prev => ({ ...prev, stone: stones.find(s => s.name.toLowerCase() === stone)?.name || '' }));
        break;
      }
    }

    alert('✓ Form populated with detected information. You can adjust as needed!');
  };

  const handleAddItem = () => {
    if (!newItemName || !newItemAbbr) {
      alert('Please fill both name and abbreviation');
      return;
    }

    const newItem = { name: newItemName, abbr: newItemAbbr };

    if (addType === 'stone') {
      setStones([...stones, newItem]);
    } else if (addType === 'metal') {
      setMetals([...metals, newItem]);
    } else if (addType === 'product') {
      setProducts([...products, newItem]);
    } else if (addType === 'client') {
      setCorporateClients([...corporateClients, newItem]);
    }

    setNewItemName('');
    setNewItemAbbr('');
    setShowAddModal(false);
  };

  const handleAddLearning = () => {
    const description = prompt('Paste the full product description:');
    if (!description) return;

    const stone = prompt('Stone name (as it appears in description):');
    if (!stone) return;

    const productType = prompt('Product type (Earring, Ring, Necklace, etc.):');
    if (!productType) return;

    const newExample = { stone, product: productType, text: description };
    setLearningData({
      ...learningData,
      descriptions: [...learningData.descriptions, newExample]
    });

    alert('✓ Learning example added!');
  };

  const handleAddTagPattern = () => {
    const productType = prompt('Product type to add tags for:');
    if (!productType) return;

    const tags = prompt('Tags (comma-separated):');
    if (!tags) return;

    const tagArray = tags.split(',').map(t => t.trim());
    setLearningData({
      ...learningData,
      tags: {
        ...learningData.tags,
        [productType]: tagArray
      }
    });

    alert('✓ Tag pattern added!');
  };

  const generateDescription = () => {
    if (!formData.stone || !formData.product) return '';
    
    const stoneObj = stones.find(s => s.name === formData.stone);
    const metalObj = metals.find(m => m.name === formData.metal);

    const learningExample = learningData.descriptions.find(
      d => d.product.toLowerCase().includes(formData.product.toLowerCase())
    );

    let description = learningExample ? learningExample.text : '';
    
    if (stoneObj && metalObj) {
      description = description
        .replace(/Black Jasper/g, formData.stone)
        .replace(/Lapis Lazuli/g, formData.stone)
        .replace(/Milky Quartz/g, formData.stone)
        .replace(/Topaz\/Amethyst/g, formData.stone)
        .replace(/silver/g, formData.metal.toLowerCase())
        .replace(/Silver/g, formData.metal);
    }

    return description;
  };

  const generateTags = () => {
    const tags = learningData.tags[formData.product] || [];
    return [...tags, formData.stone].join('\n');
  };

  const generateSKU = () => {
    const stoneAbbr = stones.find(s => s.name === formData.stone)?.abbr || '';
    const metalAbbr = metals.find(m => m.name === formData.metal)?.abbr || '';
    const productAbbr = products.find(p => p.name === formData.product)?.abbr || '';
    
    if (formData.corporateClient) {
      const clientAbbr = corporateClients.find(c => c.name === formData.corporateClient)?.abbr || '';
      return `${stoneAbbr}-${metalAbbr}-${productAbbr}-${clientAbbr}-${formData.skuNumber}`;
    }
    
    return `${stoneAbbr}-${metalAbbr}-${productAbbr}-${formData.skuNumber}`;
  };

  const generateSEOTitle = () => {
    return `${formData.productName} - ${formData.stone} ${formData.product} Pakistan`;
  };

  const generateAltText = () => {
    return `${formData.stone} ${formData.product.toLowerCase()} in ${formData.metal.toLowerCase()}, gemstone jewelry pakistan, handcrafted accessories`;
  };

  const handleGenerate = () => {
    if (!formData.stone || !formData.metal || !formData.product || !formData.productName) {
      alert('Please fill all required fields');
      return;
    }

    const newProduct = {
      id: Date.now(),
      productName: formData.productName,
      sku: generateSKU(),
      title: `${formData.productName} - ${formData.stone} ${formData.product}`,
      seoTitle: generateSEOTitle(),
      description: generateDescription(),
      tags: generateTags(),
      altText: generateAltText(),
    };

    setGeneratedProducts([...generatedProducts, newProduct]);
    
    setFormData({
      stone: '',
      metal: '',
      product: '',
      corporateClient: '',
      productName: '',
      skuNumber: '001',
    });
  };

  const downloadCSV = () => {
    if (generatedProducts.length === 0) {
      alert('No products to download');
      return;
    }

    let csv = 'Product Name,SKU,Title,SEO Title,Description,Tags,Alt Text\n';
    
    generatedProducts.forEach(product => {
      const escaped = (str) => `"${str.replace(/"/g, '""')}"`;
      csv += `${escaped(product.productName)},${escaped(product.sku)},${escaped(product.title)},${escaped(product.seoTitle)},${escaped(product.description)},${escaped(product.tags)},${escaped(product.altText)}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orah-products-${Date.now()}.csv`;
    a.click();
  };

  const copyProduct = (product) => {
    const text = `Product Name: ${product.productName}\nSKU: ${product.sku}\nTitle: ${product.title}\nSEO Title: ${product.seoTitle}\n\nDescription:\n${product.description}\n\nTags:\n${product.tags}\n\nAlt Text: ${product.altText}`;
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const deleteProduct = (id) => {
    setGeneratedProducts(generatedProducts.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">Orah Jewels Product Generator</h1>
          <p className="text-amber-700">AI-Powered SEO Description & Metadata Generator with Image Analysis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Create Product</h2>
            
            <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="font-bold text-purple-900 text-sm mb-3">📸 AI Image Analysis</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded transition flex items-center justify-center gap-2 mb-2"
              >
                <Upload size={16} /> Upload Product Photo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {uploadedImage && (
                <div className="mt-3">
                  <img src={uploadedImage} alt="Uploaded" className="w-full h-32 object-cover rounded mb-2" />
                  {imageAnalyzing ? (
                    <p className="text-sm text-purple-800">🔍 Analyzing image...</p>
                  ) : imageAnalysis ? (
                    <div className="text-xs bg-white p-2 rounded max-h-24 overflow-y-auto mb-2 text-gray-700">
                      <p className="font-semibold text-purple-900 mb-1">Analysis:</p>
                      {imageAnalysis.split('\n').slice(0, 6).map((line, i) => (
                        <p key={i} className="text-xs">{line}</p>
                      ))}
                    </div>
                  ) : null}
                  {!imageAnalyzing && imageAnalysis && (
                    <button
                      onClick={useImageAnalysis}
                      className="w-full bg-green-500 hover:bg-green-600 text-white text-xs py-1 rounded"
                    >
                      ✓ Use This Analysis
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Stone * ({stones.length})</label>
                <select 
                  value={formData.stone}
                  onChange={(e) => setFormData({...formData, stone: e.target.value})}
                  className="w-full border border-amber-200 rounded px-3 py-2 text-sm"
                >
                  <option value="">Select Stone</option>
                  {stones.map(s => <option key={s.abbr} value={s.name}>{s.name} ({s.abbr})</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Metal * ({metals.length})</label>
                <select 
                  value={formData.metal}
                  onChange={(e) => setFormData({...formData, metal: e.target.value})}
                  className="w-full border border-amber-200 rounded px-3 py-2 text-sm"
                >
                  <option value="">Select Metal</option>
                  {metals.map(m => <option key={m.abbr} value={m.name}>{m.name} ({m.abbr})</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Product Type * ({products.length})</label>
                <select 
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                  className="w-full border border-amber-200 rounded px-3 py-2 text-sm"
                >
                  <option value="">Select Product</option>
                  {products.map(p => <option key={p.abbr} value={p.name}>{p.name} ({p.abbr})</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Corporate Client ({corporateClients.length})</label>
                <select 
                  value={formData.corporateClient}
                  onChange={(e) => setFormData({...formData, corporateClient: e.target.value})}
                  className="w-full border border-amber-200 rounded px-3 py-2 text-sm"
                >
                  <option value="">None</option>
                  {corporateClients.map(c => <option key={c.abbr} value={c.name}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Product Name *</label>
                <input 
                  type="text"
                  placeholder="e.g., Zarqa, Ironclad"
                  value={formData.productName}
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  className="w-full border border-amber-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">SKU Number</label>
                <input 
                  type="text"
                  value={formData.skuNumber}
                  onChange={(e) => setFormData({...formData, skuNumber: e.target.value})}
                  className="w-full border border-amber-200 rounded px-3 py-2 text-sm"
                  placeholder="001"
                />
              </div>

              <button
                onClick={handleGenerate}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded transition flex items-center justify-center gap-2"
              >
                <Plus size={18} /> Generate Product
              </button>

              <button
                onClick={() => setShowLearningData(!showLearningData)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition flex items-center justify-center gap-2 text-sm"
              >
                <BookOpen size={16} /> {showLearningData ? 'Hide' : 'View'} Learning Data
              </button>
            </div>

            {showLearningData && (
              <div className="mt-4 p-3 bg-blue-50 rounded text-xs border border-blue-200">
                <p className="font-bold text-blue-900 mb-2">🧠 AI Learning Database:</p>
                <p className="text-blue-800 mb-2"><strong>Learned Descriptions: {learningData.descriptions.length}</strong></p>
                <ul className="text-blue-800 space-y-1 mb-3">
                  {learningData.descriptions.map((d, i) => (
                    <li key={i}>✓ {d.stone} - {d.product}</li>
                  ))}
                </ul>
                
                <div className="space-y-2">
                  <button
                    onClick={handleAddLearning}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 rounded"
                  >
                    + Add Description Example
                  </button>
                  <button
                    onClick={handleAddTagPattern}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 rounded"
                  >
                    + Add Tag Pattern
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
              <p className="font-bold text-green-900 text-sm mb-2">📚 Add to Database</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition text-sm"
              >
                + Add Stone/Metal/Product/Client
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-amber-900">Generated Products ({generatedProducts.length})</h2>
              {generatedProducts.length > 0 && (
                <button
                  onClick={downloadCSV}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition flex items-center gap-2"
                >
                  <Download size={18} /> Export CSV
                </button>
              )}
            </div>

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {generatedProducts.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center text-amber-600">
                  <p>No products generated yet. Upload a photo or fill the form and click "Generate Product"</p>
                </div>
              ) : (
                generatedProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-amber-600">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-amber-900 text-lg">{product.productName}</h3>
                        <p className="text-sm text-gray-600">SKU: <span className="font-mono bg-amber-50 px-2 py-1 rounded">{product.sku}</span></p>

</div>
<div className="flex gap-2">
                    <button
                      onClick={() => copyProduct(product)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition"
                      title="Copy all details"
                    >
                      <Copy size={16} />
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-amber-900">Title:</p>
                    <p className="text-gray-700">{product.title}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-amber-900">SEO Title:</p>
                    <p className="text-gray-700">{product.seoTitle}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-amber-900">Description:</p>
                    <p className="text-gray-700 line-clamp-3">{product.description}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-amber-900">Tags:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {product.tags.split('\n').map((tag, i) => (
                        <span key={i} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-amber-900">Alt Text:</p>
                    <p className="text-gray-700">{product.altText}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </div>

  {showAddModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-amber-900">Add New Item</h3>
          <button
            onClick={() => setShowAddModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-2">Type</label>
            <select
              value={addType}
              onChange={(e) => setAddType(e.target.value)}
              className="w-full border border-amber-200 rounded px-3 py-2"
            >
              <option value="stone">Stone</option>
              <option value="metal">Metal</option>
              <option value="product">Product Type</option>
              <option value="client">Corporate Client</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900 mb-2">Name</label>
            <input
              type="text"
              placeholder="e.g., Rose Quartz"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="w-full border border-amber-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900 mb-2">Abbreviation</label>
            <input
              type="text"
              placeholder="e.g., RQ"
              value={newItemAbbr}
              onChange={(e) => setNewItemAbbr(e.target.value.toUpperCase())}
              className="w-full border border-amber-200 rounded px-3 py-2"
              maxLength="4"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowAddModal(false)}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleAddItem}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
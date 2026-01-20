import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    productName: '',
    stone: 'Lapis Lazuli',
    metal: 'Silver',
    product: 'Ring',
    skuNumber: '001',
  });

  const [generated, setGenerated] = useState([]);

  const stones = ['Lapis Lazuli', 'Agate', 'Emerald', 'Ruby', 'Sapphire', 'Rose Quartz', 'Amethyst', 'Black Jasper'];
  const metals = ['Silver', 'Gold', 'Brass', 'Copper'];
  const products = ['Ring', 'Necklace', 'Earring', 'Bracelet', 'Pendant'];

  const generateProduct = () => {
    if (!formData.productName) {
      alert('Please enter product name');
      return;
    }

    const sku = `${formData.stone.substring(0, 2)}-${formData.metal.substring(0, 2)}-${formData.product.substring(0, 2)}-${formData.skuNumber}`;
    
    const newProduct = {
      id: Date.now(),
      name: formData.productName,
      sku: sku,
      title: `${formData.productName} - ${formData.stone} ${formData.product}`,
      description: `Beautiful handcrafted ${formData.stone} ${formData.product} in ${formData.metal}. Expertly designed by Orah Jewels & Crafts with traditional craftsmanship and modern elegance.`,
      tags: ['jewelry', 'gemstone', 'handmade', 'pakistan'],
    };

    setGenerated([...generated, newProduct]);
    setFormData({ ...formData, productName: '' });
  };

  const downloadCSV = () => {
    if (generated.length === 0) {
      alert('No products to download');
      return;
    }

    let csv = 'Product Name,SKU,Title,Description,Tags\n';
    generated.forEach(p => {
      csv += `"${p.name}","${p.sku}","${p.title}","${p.description}","${p.tags.join(', ')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orah-products.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Orah Jewels Product Generator</h1>
        <p className="text-amber-700 mb-8">AI-Powered Product Description Generator</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Create Product</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Product Name *</label>
                <input
                  type="text"
                  placeholder="e.g., Zarqa"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full border border-amber-200 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Stone</label>
                <select
                  value={formData.stone}
                  onChange={(e) => setFormData({ ...formData, stone: e.target.value })}
                  className="w-full border border-amber-200 rounded px-3 py-2"
                >
                  {stones.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Metal</label>
                <select
                  value={formData.metal}
                  onChange={(e) => setFormData({ ...formData, metal: e.target.value })}
                  className="w-full border border-amber-200 rounded px-3 py-2"
                >
                  {metals.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">Product Type</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full border border-amber-200 rounded px-3 py-2"
                >
                  {products.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-1">SKU Number</label>
                <input
                  type="text"
                  value={formData.skuNumber}
                  onChange={(e) => setFormData({ ...formData, skuNumber: e.target.value })}
                  className="w-full border border-amber-200 rounded px-3 py-2"
                  placeholder="001"
                />
              </div>

              <button
                onClick={generateProduct}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded"
              >
                Generate Product
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-amber-900">Generated Products ({generated.length})</h2>
              {generated.length > 0 && (
                <button
                  onClick={downloadCSV}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Export CSV
                </button>
              )}
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {generated.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center text-amber-600">
                  <p>No products generated yet</p>
                </div>
              ) : (
                generated.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow p-4 border-l-4 border-amber-600">
                    <h3 className="font-bold text-amber-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">SKU: {product.sku}</p>
                    <p className="text-sm text-gray-700 mt-2">{product.title}</p>
                    <p className="text-xs text-gray-600 mt-2">{product.description}</p>
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
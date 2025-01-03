'use client'
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, Package, TrendingUp, DollarSign, BarChart2 } from 'lucide-react';

const InventoryDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Sample data - in real app would come from API
  const inventoryData = [
    { name: 'Product A', stock: 145, reorderPoint: 50, predicted: 180 },
    { name: 'Product B', stock: 35, reorderPoint: 40, predicted: 20 },
    { name: 'Product C', stock: 223, reorderPoint: 100, predicted: 250 },
    { name: 'Product D', stock: 16, reorderPoint: 30, predicted: 10 },
    { name: 'Product E', stock: 88, reorderPoint: 60, predicted: 95 }
  ];

  const trends = [
    { name: 'Mon', value: 120 },
    { name: 'Tue', value: 140 },
    { name: 'Wed', value: 135 },
    { name: 'Thu', value: 155 },
    { name: 'Fri', value: 145 }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Inventory Management Dashboard</h1>
        <p className="text-gray-600">Real-time inventory insights and AI-driven predictions</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            <Package className="text-blue-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Total Items</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">507</p>
          <p className="text-sm text-gray-600">Across 5 categories</p>
        </div>

        <div className="p-4 bg-red-50 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="text-red-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Low Stock Alerts</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">2</p>
          <p className="text-sm text-gray-600">Items below threshold</p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <TrendingUp className="text-green-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Predicted Demand</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">+12%</p>
          <p className="text-sm text-gray-600">Next 7 days</p>
        </div>

        <div className="p-4 bg-yellow-50 rounded-lg">
          <div className="flex items-center">
            <DollarSign className="text-yellow-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Inventory Value</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">$24,500</p>
          <p className="text-sm text-gray-600">Current stock</p>
        </div>
      </div>

      {/* Stock Levels Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Current Stock Levels</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#3B82F6" name="Current Stock" />
              <Bar dataKey="reorderPoint" fill="#EF4444" name="Reorder Point" />
              <Bar dataKey="predicted" fill="#10B981" name="Predicted Need" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Low Stock Items */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Low Stock Alerts</h2>
        <div className="bg-white rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b text-left">Product</th>
                <th className="px-6 py-3 border-b text-right">Current Stock</th>
                <th className="px-6 py-3 border-b text-right">Reorder Point</th>
                <th className="px-6 py-3 border-b text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData
                .filter(item => item.stock < item.reorderPoint)
                .map(item => (
                  <tr key={item.name} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">{item.name}</td>
                    <td className="px-6 py-4 border-b text-right">{item.stock}</td>
                    <td className="px-6 py-4 border-b text-right">{item.reorderPoint}</td>
                    <td className="px-6 py-4 border-b text-right">
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        Reorder Required
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;
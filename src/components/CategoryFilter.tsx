import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 sticky top-28">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">C</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">Categories</h3>
      </div>
      
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${
                isActive
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-indigo-500/25 scale-105`
                  : 'hover:bg-gray-50 text-gray-700 hover:scale-102'
              }`}
            >
              <div className="flex items-center space-x-3 relative z-10">
                <div className={`p-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <Icon className={`w-4 h-4 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-500 group-hover:text-gray-700'
                  }`} />
                </div>
                <span className="font-semibold text-sm">{category.name}</span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                isActive 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
              }`}>
                {category.count}
              </span>
              
              {!isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          );
        })}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Total Components</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {categories.find(c => c.id === 'all')?.count || 0}
          </p>
        </div>
      </div>
    </div>
  );
};
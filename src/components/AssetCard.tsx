import React, { useState } from 'react';
import { Copy, Check, Eye, Code, ExternalLink, Heart, Download } from 'lucide-react';

interface Asset {
  id: string;
  title: string;
  description: string;
  category: string;
  preview: React.ReactNode;
  code: string;
  tags?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  framework?: string;
}

interface AssetCardProps {
  asset: Asset;
}

export const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(asset.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">{asset.title}</h3>
              {asset.difficulty && (
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(asset.difficulty)}`}>
                  {asset.difficulty}
                </span>
              )}
              {asset.framework && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  {asset.framework}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{asset.description}</p>
            {asset.tags && (
              <div className="flex flex-wrap gap-1 mt-3">
                {asset.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ml-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                liked 
                  ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                  : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
              }`}
              title="Like"
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setShowCode(!showCode)}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                showCode
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
              title={showCode ? "Show Preview" : "Show Code"}
            >
              {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
            </button>
            <button
              onClick={handleCopy}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                copied
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
              title="Copy Code"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
              title="Open in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-inner">
          {showCode ? (
            <div className="relative">
              <div className="bg-gray-900 text-gray-100 p-6 max-h-96 overflow-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">JSX + Tailwind CSS</span>
                </div>
                <pre className="text-sm leading-relaxed">
                  <code className="language-jsx">{asset.code}</code>
                </pre>
              </div>
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleCopy}
                  className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white min-h-[250px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative z-10">
                {asset.preview}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
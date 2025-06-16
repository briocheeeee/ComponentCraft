import React from 'react';
import { Layout, Palette, MousePointer, Zap, Grid, Type, Image, BarChart3, Users, ShoppingCart, Calendar, Mail, Bell, Settings, Heart, Star, Play, Download, Share, Search, Filter, Menu, X, ChevronRight, ArrowRight, Plus, Minus, Check, AlertCircle, Info, Loader, Eye, EyeOff, Lock, Unlock, User, Home, Briefcase, Phone, MapPin, Clock, DollarSign, TrendingUp, Award, Target, Lightbulb, Rocket, Shield, Globe, Smartphone, Monitor, Tablet, Headphones, Camera, Video, Music, Book, Coffee, Car, Plane, Building, TreePine, Sun, Moon, Cloud, Umbrella, Snowflake, Flame, Droplets, Wind, Mountain, Waves, Flower, Leaf, Bug, Fish, Bird, Cat, Dog, Rabbit, Turtle, Router as Butterfly, Gamepad2, Puzzle, Dice1, Trophy, Medal, Crown, Gift, Cake, Pizza, IceCream, Apple, Banana, Cherry, Grape, Cherry as Strawberry, Carrot, ScrollIcon as Broccoli, Popcorn as Corn, CaseUpper as Pepper, Atom as Tomato } from 'lucide-react';

export interface Asset {
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

export interface Category {
  id: string;
  name: string;
  icon: any;
  count: number;
  color: string;
}

// Sample components with beautiful previews and code
export const assets: Asset[] = [
  // Buttons Category
  {
    id: 'gradient-button',
    title: 'Gradient Button',
    description: 'Beautiful gradient button with hover effects and smooth transitions',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['button', 'gradient', 'hover', 'animation'],
    preview: (
      <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
        Click Me
      </button>
    ),
    code: `<button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
  Click Me
</button>`
  },
  {
    id: 'neon-button',
    title: 'Neon Glow Button',
    description: 'Futuristic neon button with glowing border effect',
    category: 'buttons',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['button', 'neon', 'glow', 'futuristic'],
    preview: (
      <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
        Neon Effect
      </button>
    ),
    code: `<button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
  Neon Effect
</button>`
  },
  {
    id: 'floating-action-button',
    title: 'Floating Action Button',
    description: 'Material Design inspired floating action button with ripple effect',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['fab', 'floating', 'material', 'ripple'],
    preview: (
      <button className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <Plus className="w-6 h-6" />
      </button>
    ),
    code: `<button className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
  <Plus className="w-6 h-6" />
</button>`
  },
  {
    id: 'glass-button',
    title: 'Glassmorphism Button',
    description: 'Modern glassmorphism button with backdrop blur effect',
    category: 'buttons',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['glassmorphism', 'blur', 'modern', 'transparent'],
    preview: (
      <div className="bg-gradient-to-br from-purple-400 to-blue-500 p-8 rounded-lg">
        <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300">
          Glass Effect
        </button>
      </div>
    ),
    code: `<button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300">
  Glass Effect
</button>`
  },
  {
    id: 'loading-button',
    title: 'Loading Button',
    description: 'Button with integrated loading spinner and state management',
    category: 'buttons',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['loading', 'spinner', 'state', 'async'],
    preview: (
      <button className="px-8 py-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors duration-300 flex items-center space-x-2">
        <Loader className="w-4 h-4 animate-spin" />
        <span>Loading...</span>
      </button>
    ),
    code: `const [loading, setLoading] = useState(false);

<button 
  onClick={() => setLoading(!loading)}
  className="px-8 py-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors duration-300 flex items-center space-x-2"
>
  {loading && <Loader className="w-4 h-4 animate-spin" />}
  <span>{loading ? 'Loading...' : 'Click Me'}</span>
</button>`
  },

  // Cards Category
  {
    id: 'product-card',
    title: 'Product Card',
    description: 'E-commerce product card with image, details, and actions',
    category: 'cards',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['product', 'ecommerce', 'card', 'shopping'],
    preview: (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm">
        <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-500"></div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Headphones</h3>
          <p className="text-gray-600 mb-4">High-quality wireless headphones with noise cancellation</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-indigo-600">$299</span>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm">
  <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-500"></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Headphones</h3>
    <p className="text-gray-600 mb-4">High-quality wireless headphones with noise cancellation</p>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-indigo-600">$299</span>
      <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>`
  },
  {
    id: 'profile-card',
    title: 'Profile Card',
    description: 'User profile card with avatar, stats, and social actions',
    category: 'cards',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['profile', 'user', 'avatar', 'social'],
    preview: (
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">John Doe</h3>
        <p className="text-gray-600 mb-4">Frontend Developer</p>
        <div className="flex justify-center space-x-6 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">1.2k</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">856</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
        </div>
        <button className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
          Follow
        </button>
      </div>
    ),
    code: `<div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm text-center">
  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
    <User className="w-10 h-10 text-white" />
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-1">John Doe</h3>
  <p className="text-gray-600 mb-4">Frontend Developer</p>
  <div className="flex justify-center space-x-6 mb-4">
    <div className="text-center">
      <div className="text-xl font-bold text-gray-900">1.2k</div>
      <div className="text-sm text-gray-600">Followers</div>
    </div>
    <div className="text-center">
      <div className="text-xl font-bold text-gray-900">856</div>
      <div className="text-sm text-gray-600">Following</div>
    </div>
  </div>
  <button className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
    Follow
  </button>
</div>`
  },
  {
    id: 'stats-card',
    title: 'Statistics Card',
    description: 'Dashboard statistics card with icon, value, and trend indicator',
    category: 'cards',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['stats', 'dashboard', 'analytics', 'metrics'],
    preview: (
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-100 rounded-xl">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <span className="text-sm text-green-600 font-medium">+12.5%</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">$24,500</h3>
        <p className="text-gray-600">Total Revenue</p>
      </div>
    ),
    code: `<div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
  <div className="flex items-center justify-between mb-4">
    <div className="p-3 bg-green-100 rounded-xl">
      <TrendingUp className="w-6 h-6 text-green-600" />
    </div>
    <span className="text-sm text-green-600 font-medium">+12.5%</span>
  </div>
  <h3 className="text-2xl font-bold text-gray-900 mb-1">$24,500</h3>
  <p className="text-gray-600">Total Revenue</p>
</div>`
  },

  // Forms Category
  {
    id: 'modern-input',
    title: 'Modern Input Field',
    description: 'Stylish input field with floating label and focus effects',
    category: 'forms',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['input', 'form', 'floating-label', 'focus'],
    preview: (
      <div className="relative">
        <input
          type="text"
          className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors duration-300"
          placeholder=" "
        />
        <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-indigo-500 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
          Enter your email
        </label>
      </div>
    ),
    code: `<div className="relative">
  <input
    type="text"
    className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors duration-300"
    placeholder=" "
  />
  <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-indigo-500 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
    Enter your email
  </label>
</div>`
  },
  {
    id: 'toggle-switch',
    title: 'Toggle Switch',
    description: 'Animated toggle switch with smooth transitions',
    category: 'forms',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['toggle', 'switch', 'checkbox', 'animation'],
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900">Enable notifications</span>
      </label>
    ),
    code: `<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />
  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900">Enable notifications</span>
</label>`
  },
  {
    id: 'search-bar',
    title: 'Search Bar',
    description: 'Modern search bar with icon and focus animations',
    category: 'forms',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['search', 'input', 'icon', 'focus'],
    preview: (
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
          placeholder="Search..."
        />
      </div>
    ),
    code: `<div className="relative max-w-md">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <Search className="h-5 w-5 text-gray-400" />
  </div>
  <input
    type="text"
    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
    placeholder="Search..."
  />
</div>`
  },

  // Navigation Category
  {
    id: 'breadcrumb',
    title: 'Breadcrumb Navigation',
    description: 'Hierarchical breadcrumb navigation with separators',
    category: 'navigation',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['breadcrumb', 'navigation', 'hierarchy', 'path'],
    preview: (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600">
              <Home className="w-4 h-4 mr-2" />
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2">Products</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Headphones</span>
            </div>
          </li>
        </ol>
      </nav>
    ),
    code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600">
        <Home className="w-4 h-4 mr-2" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2">Products</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Headphones</span>
      </div>
    </li>
  </ol>
</nav>`
  },
  {
    id: 'tab-navigation',
    title: 'Tab Navigation',
    description: 'Interactive tab navigation with active state indicators',
    category: 'navigation',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['tabs', 'navigation', 'active-state', 'interactive'],
    preview: (
      <div className="w-full max-w-md">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
          <button className="flex-1 py-2 px-4 text-sm font-medium text-white bg-indigo-500 rounded-lg transition-all duration-200">
            Overview
          </button>
          <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-200">
            Analytics
          </button>
          <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-200">
            Settings
          </button>
        </div>
      </div>
    ),
    code: `const [activeTab, setActiveTab] = useState('overview');

<div className="w-full max-w-md">
  <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
    {['Overview', 'Analytics', 'Settings'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab.toLowerCase())}
        className={\`flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 \${
          activeTab === tab.toLowerCase()
            ? 'text-white bg-indigo-500'
            : 'text-gray-600 hover:text-gray-900'
        }\`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>`
  },
  {
    id: 'pagination',
    title: 'Pagination Component',
    description: 'Clean pagination component with page numbers and navigation',
    category: 'navigation',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['pagination', 'navigation', 'pages', 'numbers'],
    preview: (
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700">
            Previous
          </button>
          <button className="px-3 py-2 text-sm font-medium text-white bg-indigo-500 border border-indigo-500 rounded-lg">
            1
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700">
            2
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700">
            3
          </button>
          <span className="px-3 py-2 text-sm font-medium text-gray-500">...</span>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700">
            10
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700">
            Next
          </button>
        </div>
      </nav>
    ),
    code: `<nav className="flex items-center justify-between">
  <div className="flex items-center space-x-2">
    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700">
      Previous
    </button>
    {[1, 2, 3].map((page) => (
      <button
        key={page}
        className={\`px-3 py-2 text-sm font-medium rounded-lg border \${
          page === 1
            ? 'text-white bg-indigo-500 border-indigo-500'
            : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50 hover:text-gray-700'
        }\`}
      >
        {page}
      </button>
    ))}
    <span className="px-3 py-2 text-sm font-medium text-gray-500">...</span>
    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700">
      10
    </button>
    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700">
      Next
    </button>
  </div>
</nav>`
  },

  // Modals Category
  {
    id: 'confirmation-modal',
    title: 'Confirmation Modal',
    description: 'Clean confirmation modal with action buttons',
    category: 'modals',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['modal', 'confirmation', 'dialog', 'overlay'],
    preview: (
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
          <AlertCircle className="w-6 h-6 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Delete Account</h3>
        <p className="text-gray-600 text-center mb-6">Are you sure you want to delete your account? This action cannot be undone.</p>
        <div className="flex space-x-3">
          <button className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
            Delete
          </button>
        </div>
      </div>
    ),
    code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
      <AlertCircle className="w-6 h-6 text-red-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Delete Account</h3>
    <p className="text-gray-600 text-center mb-6">Are you sure you want to delete your account? This action cannot be undone.</p>
    <div className="flex space-x-3">
      <button className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
        Cancel
      </button>
      <button className="flex-1 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
        Delete
      </button>
    </div>
  </div>
</div>`
  },
  {
    id: 'notification-toast',
    title: 'Notification Toast',
    description: 'Animated notification toast with auto-dismiss',
    category: 'modals',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['toast', 'notification', 'alert', 'animation'],
    preview: (
      <div className="bg-white rounded-lg shadow-lg border-l-4 border-green-500 p-4 max-w-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Check className="w-5 h-5 text-green-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Success!</p>
            <p className="text-sm text-gray-600">Your changes have been saved.</p>
          </div>
          <div className="ml-auto pl-3">
            <button className="text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg border-l-4 border-green-500 p-4 max-w-sm transform transition-all duration-300 ease-in-out">
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <Check className="w-5 h-5 text-green-500" />
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-900">Success!</p>
      <p className="text-sm text-gray-600">Your changes have been saved.</p>
    </div>
    <div className="ml-auto pl-3">
      <button className="text-gray-400 hover:text-gray-600">
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
</div>`
  },

  // Loading Category
  {
    id: 'spinner-loader',
    title: 'Spinner Loader',
    description: 'Animated spinner with customizable colors and sizes',
    category: 'loading',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['spinner', 'loading', 'animation', 'circular'],
    preview: (
      <div className="flex items-center justify-center space-x-4">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
        <div className="w-6 h-6 border-3 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
        <div className="w-4 h-4 border-2 border-red-200 border-t-red-500 rounded-full animate-spin"></div>
      </div>
    ),
    code: `<div className="flex items-center justify-center space-x-4">
  <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
  <div className="w-6 h-6 border-3 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
  <div className="w-4 h-4 border-2 border-red-200 border-t-red-500 rounded-full animate-spin"></div>
</div>`
  },
  {
    id: 'pulse-loader',
    title: 'Pulse Loader',
    description: 'Pulsing dots loader with staggered animation',
    category: 'loading',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['pulse', 'dots', 'loading', 'staggered'],
    preview: (
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      </div>
    ),
    code: `<div className="flex space-x-2">
  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
</div>`
  },
  {
    id: 'skeleton-loader',
    title: 'Skeleton Loader',
    description: 'Content placeholder skeleton with shimmer effect',
    category: 'loading',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['skeleton', 'placeholder', 'shimmer', 'content'],
    preview: (
      <div className="max-w-sm">
        <div className="animate-pulse">
          <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    ),
    code: `<div className="max-w-sm">
  <div className="animate-pulse">
    <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
  </div>
</div>`
  },

  // Progress Category
  {
    id: 'progress-bar',
    title: 'Progress Bar',
    description: 'Animated progress bar with percentage indicator',
    category: 'progress',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['progress', 'bar', 'percentage', 'animated'],
    preview: (
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-indigo-600">75%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-indigo-500 h-2 rounded-full transition-all duration-500 ease-out" style={{ width: '75%' }}></div>
        </div>
      </div>
    ),
    code: `const [progress, setProgress] = useState(75);

<div className="w-full max-w-md">
  <div className="flex justify-between items-center mb-2">
    <span className="text-sm font-medium text-gray-700">Progress</span>
    <span className="text-sm font-medium text-indigo-600">{progress}%</span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div 
      className="bg-indigo-500 h-2 rounded-full transition-all duration-500 ease-out" 
      style={{ width: \`\${progress}%\` }}
    ></div>
  </div>
</div>`
  },
  {
    id: 'circular-progress',
    title: 'Circular Progress',
    description: 'Circular progress indicator with SVG animation',
    category: 'progress',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['circular', 'progress', 'svg', 'animation'],
    preview: (
      <div className="flex items-center justify-center">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-300"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-indigo-500"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="75, 100"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-700">75%</span>
          </div>
        </div>
      </div>
    ),
    code: `const CircularProgress = ({ percentage = 75 }) => {
  const circumference = 2 * Math.PI * 15.9155;
  const strokeDasharray = \`\${(percentage / 100) * circumference}, \${circumference}\`;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-indigo-500"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold text-gray-700">{percentage}%</span>
      </div>
    </div>
  );
};`
  },

  // Badges Category
  {
    id: 'status-badge',
    title: 'Status Badge',
    description: 'Colorful status badges with different variants',
    category: 'badges',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['badge', 'status', 'indicator', 'colorful'],
    preview: (
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">Active</span>
        <span className="px-3 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full">Pending</span>
        <span className="px-3 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">Inactive</span>
        <span className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">Draft</span>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-2">
  <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">Active</span>
  <span className="px-3 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full">Pending</span>
  <span className="px-3 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">Inactive</span>
  <span className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">Draft</span>
</div>`
  },
  {
    id: 'notification-badge',
    title: 'Notification Badge',
    description: 'Notification badge with count indicator',
    category: 'badges',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['notification', 'badge', 'count', 'indicator'],
    preview: (
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
        </div>
        <div className="relative">
          <Mail className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">12</span>
        </div>
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
      </div>
    ),
    code: `<div className="flex items-center space-x-6">
  <div className="relative">
    <Bell className="w-6 h-6 text-gray-600" />
    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
  </div>
  <div className="relative">
    <Mail className="w-6 h-6 text-gray-600" />
    <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">12</span>
  </div>
  <div className="relative">
    <ShoppingCart className="w-6 h-6 text-gray-600" />
    <span className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
  </div>
</div>`
  },

  // Avatars Category
  {
    id: 'user-avatar',
    title: 'User Avatar',
    description: 'User avatar with different sizes and status indicators',
    category: 'avatars',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['avatar', 'user', 'profile', 'status'],
    preview: (
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full"></span>
        </div>
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
        </div>
      </div>
    ),
    code: `<div className="flex items-center space-x-4">
  <div className="relative">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
      <User className="w-6 h-6 text-white" />
    </div>
    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
  </div>
  <div className="relative">
    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
      <User className="w-5 h-5 text-white" />
    </div>
    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full"></span>
  </div>
  <div className="relative">
    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
      <User className="w-4 h-4 text-white" />
    </div>
    <span className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
  </div>
</div>`
  },
  {
    id: 'avatar-group',
    title: 'Avatar Group',
    description: 'Stacked avatar group with overflow indicator',
    category: 'avatars',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['avatar', 'group', 'stack', 'overflow'],
    preview: (
      <div className="flex -space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full border-2 border-white flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-2 border-white flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-xs font-medium text-white">+5</span>
        </div>
      </div>
    ),
    code: `<div className="flex -space-x-2">
  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full border-2 border-white flex items-center justify-center">
    <User className="w-5 h-5 text-white" />
  </div>
  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
    <User className="w-5 h-5 text-white" />
  </div>
  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-2 border-white flex items-center justify-center">
    <User className="w-5 h-5 text-white" />
  </div>
  <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-white flex items-center justify-center">
    <span className="text-xs font-medium text-white">+5</span>
  </div>
</div>`
  },

  // Alerts Category
  {
    id: 'alert-banner',
    title: 'Alert Banner',
    description: 'Informational alert banner with icon and dismiss button',
    category: 'alerts',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['alert', 'banner', 'information', 'dismiss'],
    preview: (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center">
          <Info className="w-5 h-5 text-blue-500 mr-3" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-blue-800">Information</h4>
            <p className="text-sm text-blue-700">This is an informational alert with some important details.</p>
          </div>
          <button className="text-blue-500 hover:text-blue-700">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    ),
    code: `<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
  <div className="flex items-center">
    <Info className="w-5 h-5 text-blue-500 mr-3" />
    <div className="flex-1">
      <h4 className="text-sm font-medium text-blue-800">Information</h4>
      <p className="text-sm text-blue-700">This is an informational alert with some important details.</p>
    </div>
    <button className="text-blue-500 hover:text-blue-700">
      <X className="w-4 h-4" />
    </button>
  </div>
</div>`
  },
  {
    id: 'error-alert',
    title: 'Error Alert',
    description: 'Error alert with destructive styling and action buttons',
    category: 'alerts',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['alert', 'error', 'destructive', 'action'],
    preview: (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-red-800">Error occurred</h4>
            <p className="text-sm text-red-700 mb-3">There was an error processing your request. Please try again.</p>
            <div className="flex space-x-2">
              <button className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded hover:bg-red-200 transition-colors">
                Retry
              </button>
              <button className="text-xs text-red-600 hover:text-red-800 transition-colors">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<div className="bg-red-50 border border-red-200 rounded-lg p-4">
  <div className="flex items-start">
    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
    <div className="flex-1">
      <h4 className="text-sm font-medium text-red-800">Error occurred</h4>
      <p className="text-sm text-red-700 mb-3">There was an error processing your request. Please try again.</p>
      <div className="flex space-x-2">
        <button className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded hover:bg-red-200 transition-colors">
          Retry
        </button>
        <button className="text-xs text-red-600 hover:text-red-800 transition-colors">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</div>`
  },

  // Tables Category
  {
    id: 'data-table',
    title: 'Data Table',
    description: 'Clean data table with sorting and hover effects',
    category: 'tables',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['table', 'data', 'sorting', 'hover'],
    preview: (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">Active</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full">Pending</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    code: `<div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">Active</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`
  },

  // Dropdowns Category
  {
    id: 'dropdown-menu',
    title: 'Dropdown Menu',
    description: 'Elegant dropdown menu with smooth animations',
    category: 'dropdowns',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['dropdown', 'menu', 'animation', 'navigation'],
    preview: (
      <div className="relative inline-block">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 flex items-center space-x-2">
          <span>Options</span>
          <ChevronRight className="w-4 h-4 transform rotate-90" />
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          <hr className="my-1 border-gray-200" />
          <a href="#" className="block px-4 py-2 text-sm text-red-700 hover:bg-red-50">Sign out</a>
        </div>
      </div>
    ),
    code: `const [isOpen, setIsOpen] = useState(false);

<div className="relative inline-block">
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 flex items-center space-x-2"
  >
    <span>Options</span>
    <ChevronRight className={\`w-4 h-4 transform transition-transform \${isOpen ? 'rotate-90' : ''}\`} />
  </button>
  {isOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
      <hr className="my-1 border-gray-200" />
      <a href="#" className="block px-4 py-2 text-sm text-red-700 hover:bg-red-50">Sign out</a>
    </div>
  )}
</div>`
  },

  // Charts Category
  {
    id: 'simple-chart',
    title: 'Simple Bar Chart',
    description: 'CSS-only bar chart with animated bars',
    category: 'charts',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['chart', 'bar', 'css', 'animation'],
    preview: (
      <div className="w-full max-w-sm">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Monthly Sales</h4>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="w-12 text-xs text-gray-600">Jan</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2 ml-3">
              <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
            </div>
            <span className="w-8 text-xs text-gray-600 text-right ml-2">75</span>
          </div>
          <div className="flex items-center">
            <span className="w-12 text-xs text-gray-600">Feb</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2 ml-3">
              <div className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '60%' }}></div>
            </div>
            <span className="w-8 text-xs text-gray-600 text-right ml-2">60</span>
          </div>
          <div className="flex items-center">
            <span className="w-12 text-xs text-gray-600">Mar</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2 ml-3">
              <div className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '90%' }}></div>
            </div>
            <span className="w-8 text-xs text-gray-600 text-right ml-2">90</span>
          </div>
        </div>
      </div>
    ),
    code: `const data = [
  { month: 'Jan', value: 75, color: 'bg-blue-500' },
  { month: 'Feb', value: 60, color: 'bg-green-500' },
  { month: 'Mar', value: 90, color: 'bg-purple-500' }
];

<div className="w-full max-w-sm">
  <h4 className="text-sm font-medium text-gray-900 mb-4">Monthly Sales</h4>
  <div className="space-y-3">
    {data.map((item, index) => (
      <div key={index} className="flex items-center">
        <span className="w-12 text-xs text-gray-600">{item.month}</span>
        <div className="flex-1 bg-gray-200 rounded-full h-2 ml-3">
          <div 
            className={\`\${item.color} h-2 rounded-full transition-all duration-1000 ease-out\`}
            style={{ width: \`\${item.value}%\` }}
          ></div>
        </div>
        <span className="w-8 text-xs text-gray-600 text-right ml-2">{item.value}</span>
      </div>
    ))}
  </div>
</div>`
  },

  // Layouts Category
  {
    id: 'hero-section',
    title: 'Hero Section',
    description: 'Modern hero section with gradient background and CTA',
    category: 'layouts',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['hero', 'landing', 'gradient', 'cta'],
    preview: (
      <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg opacity-90 mb-6 max-w-md mx-auto">
          Discover amazing features and take your business to the next level with our innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    ),
    code: `<div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-2xl text-center">
  <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
  <p className="text-lg opacity-90 mb-6 max-w-md mx-auto">
    Discover amazing features and take your business to the next level with our innovative solutions.
  </p>
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
      Get Started
    </button>
    <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
      Learn More
    </button>
  </div>
</div>`
  },
  {
    id: 'feature-grid',
    title: 'Feature Grid',
    description: 'Responsive feature grid with icons and descriptions',
    category: 'layouts',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['features', 'grid', 'responsive', 'icons'],
    preview: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Performance</h3>
          <p className="text-gray-600 text-sm">Lightning-fast loading times and optimized performance for the best user experience.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Safe</h3>
          <p className="text-gray-600 text-sm">Enterprise-grade security with end-to-end encryption and data protection.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Smartphone className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Ready</h3>
          <p className="text-gray-600 text-sm">Fully responsive design that works perfectly on all devices and screen sizes.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Rocket className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use</h3>
          <p className="text-gray-600 text-sm">Intuitive interface designed for users of all skill levels with minimal learning curve.</p>
        </div>
      </div>
    ),
    code: `const features = [
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Lightning-fast loading times and optimized performance for the best user experience.',
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Enterprise-grade security with end-to-end encryption and data protection.',
    color: 'green'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Fully responsive design that works perfectly on all devices and screen sizes.',
    color: 'purple'
  },
  {
    icon: Rocket,
    title: 'Easy to Use',
    description: 'Intuitive interface designed for users of all skill levels with minimal learning curve.',
    color: 'orange'
  }
];

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className={\`w-12 h-12 bg-\${feature.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4\`}>
          <Icon className={\`w-6 h-6 text-\${feature.color}-600\`} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm">{feature.description}</p>
      </div>
    );
  })}
</div>`
  }
];

export const categories: Category[] = [
  { id: 'all', name: 'All Components', icon: Grid, count: assets.length, color: 'from-indigo-500 to-purple-600' },
  { id: 'buttons', name: 'Buttons', icon: MousePointer, count: assets.filter(a => a.category === 'buttons').length, color: 'from-blue-500 to-indigo-600' },
  { id: 'cards', name: 'Cards', icon: Layout, count: assets.filter(a => a.category === 'cards').length, color: 'from-green-500 to-emerald-600' },
  { id: 'forms', name: 'Forms', icon: Type, count: assets.filter(a => a.category === 'forms').length, color: 'from-purple-500 to-pink-600' },
  { id: 'navigation', name: 'Navigation', icon: Menu, count: assets.filter(a => a.category === 'navigation').length, color: 'from-orange-500 to-red-600' },
  { id: 'modals', name: 'Modals & Overlays', icon: Zap, count: assets.filter(a => a.category === 'modals').length, color: 'from-cyan-500 to-blue-600' },
  { id: 'loading', name: 'Loading', icon: Loader, count: assets.filter(a => a.category === 'loading').length, color: 'from-yellow-500 to-orange-600' },
  { id: 'progress', name: 'Progress', icon: BarChart3, count: assets.filter(a => a.category === 'progress').length, color: 'from-teal-500 to-green-600' },
  { id: 'badges', name: 'Badges', icon: Award, count: assets.filter(a => a.category === 'badges').length, color: 'from-pink-500 to-rose-600' },
  { id: 'avatars', name: 'Avatars', icon: Users, count: assets.filter(a => a.category === 'avatars').length, color: 'from-indigo-500 to-blue-600' },
  { id: 'alerts', name: 'Alerts', icon: Bell, count: assets.filter(a => a.category === 'alerts').length, color: 'from-red-500 to-pink-600' },
  { id: 'tables', name: 'Tables', icon: Grid, count: assets.filter(a => a.category === 'tables').length, color: 'from-gray-500 to-slate-600' },
  { id: 'dropdowns', name: 'Dropdowns', icon: ChevronRight, count: assets.filter(a => a.category === 'dropdowns').length, color: 'from-violet-500 to-purple-600' },
  { id: 'charts', name: 'Charts', icon: BarChart3, count: assets.filter(a => a.category === 'charts').length, color: 'from-emerald-500 to-teal-600' },
  { id: 'layouts', name: 'Layouts', icon: Layout, count: assets.filter(a => a.category === 'layouts').length, color: 'from-blue-500 to-cyan-600' }
];

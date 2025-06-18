import React from 'react';
import { Layout, Palette, MousePointer, Database, BarChart3, Users, ShoppingCart, Calendar, MessageSquare, Settings, FileText, Image, Video, Music, Globe, Smartphone, Monitor, Zap, Shield, Heart, Star, Bell, Search, Filter, Download, Upload, Share, Edit, Trash2, Plus, Minus, Check, X, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Menu, Home, User, Mail, Phone, MapPin, Clock, DollarSign, CreditCard, Lock, Unlock, Eye, EyeOff, ThumbsUp, ThumbsDown, Flag, Bookmark, Tag, Folder, File, Camera, Mic, Play, Pause, Store as Stop, SkipForward, SkipBack, Volume2, VolumeX, Wifi, WifiOff, Battery, BatteryLow, Sun, Moon, Cloud, CloudRain, Thermometer, Wind, Compass, Navigation, Target, Award, Trophy, Gift, Coffee, Pizza, Car, Plane, Train, Bike, Gamepad2, Headphones, Laptop, Tablet, Watch, Printer, Scan as Scanner, Keyboard, Mouse, HardDrive, Cpu, MemoryStick, Router, Server, Database as DatabaseIcon, Code, Terminal, GitBranch, Package, Layers, Grid, List, MoreHorizontal, MoreVertical, Maximize, Minimize, RefreshCw, RotateCcw, RotateCw, Copy, Scissors, Clipboard, Link, ExternalLink, Anchor, Paperclip, AtSign, Hash, Percent, DivideIcon as LucideIcon } from 'lucide-react';
import { ChevronRight } from "lucide-react";
import { Github } from "lucide-react";


export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
}

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

export const categories: Category[] = [
  { id: 'all', name: 'All Components', icon: Grid, count: 0, color: 'from-indigo-500 to-purple-600' },
  { id: 'buttons', name: 'Buttons & Actions', icon: MousePointer, count: 0, color: 'from-blue-500 to-indigo-600' },
  { id: 'forms', name: 'Forms & Inputs', icon: Edit, count: 0, color: 'from-green-500 to-teal-600' },
  { id: 'navigation', name: 'Navigation', icon: Menu, count: 0, color: 'from-purple-500 to-pink-600' },
  { id: 'cards', name: 'Cards & Layouts', icon: Layout, count: 0, color: 'from-orange-500 to-red-600' },
  { id: 'data', name: 'Data Display', icon: BarChart3, count: 0, color: 'from-cyan-500 to-blue-600' },
  { id: 'feedback', name: 'Feedback & Status', icon: Bell, count: 0, color: 'from-yellow-500 to-orange-600' },
  { id: 'media', name: 'Media & Content', icon: Image, count: 0, color: 'from-pink-500 to-rose-600' },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: 0, color: 'from-emerald-500 to-green-600' },
  { id: 'social', name: 'Social & Communication', icon: MessageSquare, count: 0, color: 'from-violet-500 to-purple-600' },
  { id: 'dashboard', name: 'Dashboard & Analytics', icon: Monitor, count: 0, color: 'from-slate-500 to-gray-600' },
  { id: 'auth', name: 'Authentication', icon: Shield, count: 0, color: 'from-red-500 to-pink-600' }
];

export const assets: Asset[] = [
  {
    id: 'gradient-button',
    title: 'Gradient Button',
    description: 'Beautiful gradient button with hover effects and loading states',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['button', 'gradient', 'hover', 'loading'],
    preview: (
      <div className="space-y-4">
        <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Get Started
        </button>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 opacity-75 cursor-not-allowed">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        </button>
      </div>
    ),
    code: `const GradientButton = ({ children, loading = false, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'from-purple-500 to-pink-500',
    secondary: 'from-blue-500 to-cyan-500',
    success: 'from-green-500 to-emerald-500',
    danger: 'from-red-500 to-rose-500'
  };

  return (
    <button
      className={\`px-8 py-4 bg-gradient-to-r \${variants[variant]} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 \${loading ? 'opacity-75 cursor-not-allowed' : ''}\`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : children}
    </button>
  );
};`
  },
  {
    id: 'floating-action-button',
    title: 'Floating Action Button',
    description: 'Modern FAB with ripple effect and multiple action options',
    category: 'buttons',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['fab', 'floating', 'ripple', 'actions'],
    preview: (
      <div className="relative">
        <button className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center group">
          <Plus className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
        </button>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
          3
        </div>
      </div>
    ),
    code: `const FloatingActionButton = ({ icon: Icon = Plus, badge, onClick, actions = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <Icon className={\`w-6 h-6 \${isOpen ? 'rotate-45' : ''} transition-transform duration-300\`} />
      </button>
      
      {badge && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
          {badge}
        </div>
      )}
      
      {isOpen && actions.length > 0 && (
        <div className="absolute bottom-20 right-0 space-y-3">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className="w-12 h-12 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <action.icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};`
  },
  {
    id: 'button-group',
    title: 'Button Group',
    description: 'Segmented button group with active states and variants',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['button-group', 'segmented', 'toggle'],
    preview: (
      <div className="space-y-4">
        <div className="flex bg-gray-100 rounded-xl p-1">
          <button className="px-6 py-2 bg-white text-gray-900 rounded-lg shadow-sm font-medium">
            Daily
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900 rounded-lg font-medium">
            Weekly
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900 rounded-lg font-medium">
            Monthly
          </button>
        </div>
        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
          <button className="px-4 py-2 bg-indigo-500 text-white border-r border-gray-200">
            <Eye className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 hover:bg-gray-50 border-r border-gray-200">
            <Edit className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 hover:bg-gray-50 text-red-500">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    ),
    code: `const ButtonGroup = ({ options, value, onChange, variant = 'default' }) => {
  if (variant === 'segmented') {
    return (
      <div className="flex bg-gray-100 rounded-xl p-1">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={\`px-6 py-2 rounded-lg font-medium transition-all duration-200 \${
              value === option.value
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }\`}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex border border-gray-200 rounded-lg overflow-hidden">
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={\`px-4 py-2 transition-colors duration-200 \${
            index < options.length - 1 ? 'border-r border-gray-200' : ''
          } \${
            value === option.value
              ? 'bg-indigo-500 text-white'
              : 'hover:bg-gray-50'
          }\`}
        >
          {option.icon && <option.icon className="w-4 h-4" />}
          {option.label && <span className="ml-2">{option.label}</span>}
        </button>
      ))}
    </div>
  );
};`
  },

  // Enhanced Forms & Inputs
  {
    id: 'modern-input',
    title: 'Modern Input Field',
    description: 'Sleek input with floating labels, validation states, and icons',
    category: 'forms',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['input', 'floating-label', 'validation', 'icons'],
    preview: (
      <div className="space-y-6 w-full max-w-md">
        <div className="relative">
          <input
            type="email"
            id="email"
            className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors duration-200"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-sm"
          >
            Email Address
          </label>
          <Mail className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
        </div>
        <div className="relative">
          <input
            type="password"
            className="w-full px-4 pt-6 pb-2 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors duration-200 bg-green-50"
            placeholder=" "
            defaultValue="password123"
          />
          <label className="absolute left-4 top-2 text-sm text-green-600">
            Password
          </label>
          <Check className="absolute right-4 top-4 w-5 h-5 text-green-500" />
        </div>
      </div>
    ),
    code: `const ModernInput = ({ 
  label, 
  type = 'text', 
  icon: Icon, 
  error, 
  success, 
  ...props 
}) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const getBorderColor = () => {
    if (error) return 'border-red-500';
    if (success) return 'border-green-500';
    if (focused) return 'border-indigo-500';
    return 'border-gray-200';
  };

  const getBackgroundColor = () => {
    if (error) return 'bg-red-50';
    if (success) return 'bg-green-50';
    return 'bg-white';
  };

  return (
    <div className="relative">
      <input
        type={type}
        className={\`peer w-full px-4 pt-6 pb-2 border-2 rounded-xl focus:outline-none transition-all duration-200 \${getBorderColor()} \${getBackgroundColor()}\`}
        placeholder=" "
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        {...props}
      />
      <label
        className={\`absolute left-4 transition-all duration-200 pointer-events-none \${
          focused || hasValue
            ? 'top-2 text-sm'
            : 'top-4 text-base'
        } \${
          error ? 'text-red-500' : 
          success ? 'text-green-500' : 
          focused ? 'text-indigo-500' : 'text-gray-500'
        }\`}
      >
        {label}
      </label>
      {Icon && (
        <Icon className={\`absolute right-4 top-4 w-5 h-5 \${
          error ? 'text-red-500' : 
          success ? 'text-green-500' : 'text-gray-400'
        }\`} />
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};`
  },
  {
    id: 'multi-step-form',
    title: 'Multi-Step Form',
    description: 'Progressive form with step indicators and smooth transitions',
    category: 'forms',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['multi-step', 'wizard', 'progress', 'form'],
    preview: (
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </div>
            <div className="w-16 h-1 bg-indigo-500 rounded"></div>
            <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </div>
            <div className="w-16 h-1 bg-gray-200 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-bold">
              3
            </div>
          </div>
          <span className="text-sm text-gray-500">Step 2 of 3</span>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Company Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company Name"
              className="px-4 py-3 border border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Industry"
              className="px-4 py-3 border border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
    ),
    code: `const MultiStepForm = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (stepData) => {
    setFormData({ ...formData, ...stepData });
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold \${
                index <= currentStep
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-200 text-gray-400'
              }\`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={\`w-16 h-1 rounded \${
                  index < currentStep ? 'bg-indigo-500' : 'bg-gray-200'
                }\`} />
              )}
            </React.Fragment>
          ))}
        </div>
        <span className="text-sm text-gray-500">
          Step {currentStep + 1} of {steps.length}
        </span>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {React.cloneElement(steps[currentStep].component, {
          data: formData,
          onUpdate: updateFormData
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
        >
          {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
};`
  },
  {
    id: 'file-upload-dropzone',
    title: 'File Upload Dropzone',
    description: 'Drag and drop file upload with preview and progress',
    category: 'forms',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['file-upload', 'drag-drop', 'preview', 'progress'],
    preview: (
      <div className="w-full max-w-md">
        <div className="border-2 border-dashed border-indigo-300 rounded-xl p-8 text-center bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200">
          <Upload className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop files here</h3>
          <p className="text-gray-600 mb-4">or click to browse</p>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
            Choose Files
          </button>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <File className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">document.pdf</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <Check className="w-5 h-5 text-green-500" />
          </div>
        </div>
      </div>
    ),
    code: `const FileUploadDropzone = ({ onFilesSelected, accept, maxSize, multiple = true }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles) => {
    const validFiles = newFiles.filter(file => {
      if (maxSize && file.size > maxSize) return false;
      if (accept && !accept.includes(file.type)) return false;
      return true;
    });

    setFiles(prev => multiple ? [...prev, ...validFiles] : validFiles);
    onFilesSelected(validFiles);
  };

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={\`border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 cursor-pointer \${
          isDragOver
            ? 'border-indigo-500 bg-indigo-100'
            : 'border-indigo-300 bg-indigo-50 hover:bg-indigo-100'
        }\`}
      >
        <Upload className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {isDragOver ? 'Drop files here' : 'Drop files here'}
        </h3>
        <p className="text-gray-600 mb-4">or click to browse</p>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
          Choose Files
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
      />

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <FilePreview key={index} file={file} onRemove={() => {
              setFiles(files.filter((_, i) => i !== index));
            }} />
          ))}
        </div>
      )}
    </div>
  );
};`
  },

  // Enhanced Navigation
  {
    id: 'mega-menu',
    title: 'Mega Menu',
    description: 'Multi-column dropdown menu with categories and featured content',
    category: 'navigation',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['mega-menu', 'dropdown', 'navigation', 'multi-column'],
    preview: (
      <div className="relative">
        <nav className="bg-white shadow-lg rounded-xl p-4">
          <div className="flex items-center space-x-8">
            <div className="font-bold text-xl text-gray-900">Brand</div>
            <div className="flex space-x-6">
              <button className="text-gray-700 hover:text-indigo-600 font-medium">Products</button>
              <button className="text-gray-700 hover:text-indigo-600 font-medium">Solutions</button>
              <button className="text-gray-700 hover:text-indigo-600 font-medium">Resources</button>
            </div>
          </div>
        </nav>
        <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl rounded-xl p-8 border border-gray-100">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Web Design</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">E-commerce</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Tools</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Analytics</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">SEO Tools</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Performance</a></li>
              </ul>
            </div>
            <div className="col-span-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Featured Product</h3>
                <p className="text-indigo-100 mb-4">Discover our latest component library with 200+ components</p>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `const MegaMenu = ({ menuItems }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="relative">
      <nav className="bg-white shadow-lg rounded-xl p-4">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl text-gray-900">Brand</div>
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {activeMenu && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl rounded-xl p-8 border border-gray-100 z-50"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {menuItems.find(item => item.id === activeMenu)?.content}
        </div>
      )}
    </div>
  );
};

const MegaMenuContent = ({ columns, featured }) => (
  <div className={\`grid gap-8 \${featured ? 'grid-cols-4' : \`grid-cols-\${columns.length}\`}\`}>
    {columns.map((column, index) => (
      <div key={index}>
        <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
        <ul className="space-y-2">
          {column.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <a
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center space-x-2"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
    
    {featured && (
      <div className="col-span-2">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="font-bold text-lg mb-2">{featured.title}</h3>
          <p className="text-indigo-100 mb-4">{featured.description}</p>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            {featured.cta}
          </button>
        </div>
      </div>
    )}
  </div>
);`
  },
  {
    id: 'breadcrumb-navigation',
    title: 'Breadcrumb Navigation',
    description: 'Hierarchical navigation with icons and dropdown options',
    category: 'navigation',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['breadcrumb', 'navigation', 'hierarchy'],
    preview: (
      <div className="flex items-center space-x-2 text-sm">
        <Home className="w-4 h-4 text-gray-400" />
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="text-indigo-600 hover:text-indigo-800">Products</a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="text-indigo-600 hover:text-indigo-800">Electronics</a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900 font-medium">Smartphones</span>
      </div>
    ),
    code: `const Breadcrumb = ({ items, separator = ChevronRight }) => {
  const Separator = separator;

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && item.icon && (
            <>
              <item.icon className="w-4 h-4 text-gray-400" />
              <Separator className="w-4 h-4 text-gray-400" />
            </>
          )}
          
          {index < items.length - 1 ? (
            <a
              href={item.href}
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
          
          {index < items.length - 1 && (
            <Separator className="w-4 h-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};`
  },
  {
    id: 'sidebar-navigation',
    title: 'Collapsible Sidebar',
    description: 'Modern sidebar with collapsible sections and active states',
    category: 'navigation',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['sidebar', 'collapsible', 'navigation', 'menu'],
    preview: (
      <div className="w-64 bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-gray-900">Admin Panel</span>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Users className="w-5 h-5" />
            <span>Users</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>
      </div>
    ),
    code: `const Sidebar = ({ items, collapsed = false, onToggle }) => {
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className={\`bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 \${
      collapsed ? 'w-16' : 'w-64'
    }\`}>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          {!collapsed && (
            <span className="font-semibold text-gray-900">Admin Panel</span>
          )}
        </div>
      </div>
      
      <nav className="p-4 space-y-2">
        {items.map((item) => (
          <div key={item.id}>
            {item.children ? (
              <div>
                <button
                  onClick={() => toggleSection(item.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    {!collapsed && <span>{item.label}</span>}
                  </div>
                  {!collapsed && (
                    <ChevronDown className={\`w-4 h-4 transition-transform \${
                      expandedSections.has(item.id) ? 'rotate-180' : ''
                    }\`} />
                  )}
                </button>
                
                {!collapsed && expandedSections.has(item.id) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.id}
                        href={child.href}
                        className={\`block px-3 py-2 text-sm rounded-lg transition-colors \${
                          child.active
                            ? 'bg-indigo-50 text-indigo-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }\`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                className={\`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors \${
                  item.active
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }\`}
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && <span className={item.active ? 'font-medium' : ''}>{item.label}</span>}
              </a>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};`
  },

  // Enhanced Cards & Layouts
  {
    id: 'pricing-card',
    title: 'Pricing Card',
    description: 'Modern pricing card with features list and call-to-action',
    category: 'cards',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['pricing', 'card', 'features', 'cta'],
    preview: (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500 to-purple-600 text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-gray-900">$29</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>
          <p className="text-gray-600 mt-2">Perfect for growing teams</p>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">Unlimited projects</span>
          </li>
          <li className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">Advanced analytics</span>
          </li>
          <li className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">Priority support</span>
          </li>
          <li className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">Team collaboration</span>
          </li>
        </ul>
        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>
    ),
    code: `const PricingCard = ({ 
  plan, 
  price, 
  period = 'month', 
  description, 
  features, 
  popular = false,
  buttonText = 'Get Started',
  onSelect 
}) => {
  return (
    <div className={\`bg-white rounded-2xl shadow-xl border p-8 max-w-sm relative overflow-hidden transition-all duration-300 hover:shadow-2xl \${
      popular ? 'border-indigo-200 scale-105' : 'border-gray-200 hover:scale-105'
    }\`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500 to-purple-600 text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-gray-900">\${price}</span>
          <span className="text-gray-500 ml-2">/{period}</span>
        </div>
        {description && (
          <p className="text-gray-600 mt-2">{description}</p>
        )}
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={onSelect}
        className={\`w-full py-3 rounded-xl font-semibold transition-all duration-300 \${
          popular
            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }\`}
      >
        {buttonText}
      </button>
    </div>
  );
};`
  },
  {
    id: 'testimonial-card',
    title: 'Testimonial Card',
    description: 'Customer testimonial with avatar, rating, and quote',
    category: 'cards',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['testimonial', 'review', 'rating', 'avatar'],
    preview: (
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-gray-700 mb-6 leading-relaxed">
          "This product has completely transformed how we work. The interface is intuitive and the features are exactly what we needed."
        </blockquote>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
            SJ
          </div>
          <div>
            <div className="font-semibold text-gray-900">Sarah Johnson</div>
            <div className="text-gray-500 text-sm">Product Manager at TechCorp</div>
          </div>
        </div>
      </div>
    ),
    code: `const TestimonialCard = ({ 
  rating, 
  quote, 
  author, 
  role, 
  company, 
  avatar 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={\`w-5 h-5 \${
              i < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }\`} 
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center space-x-4">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
            {author.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-gray-500 text-sm">
            {role}{company && \` at \${company}\`}
          </div>
        </div>
      </div>
    </div>
  );
};`
  },
  {
    id: 'feature-card',
    title: 'Feature Card',
    description: 'Product feature showcase with icon and description',
    category: 'cards',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['feature', 'icon', 'showcase', 'product'],
    preview: (
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm hover:shadow-xl transition-shadow duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
        <p className="text-gray-600 leading-relaxed">
          Experience blazing fast performance with our optimized architecture and advanced caching mechanisms.
        </p>
      </div>
    ),
    code: `const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient = 'from-indigo-500 to-purple-600' 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm hover:shadow-xl transition-shadow duration-300">
      <div className={\`w-16 h-16 bg-gradient-to-br \${gradient} rounded-2xl flex items-center justify-center mb-6\`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};`
  },

  // Data Display Components
  {
    id: 'data-table',
    title: 'Advanced Data Table',
    description: 'Sortable table with pagination, search, and row actions',
    category: 'data',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['table', 'sorting', 'pagination', 'search'],
    preview: (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Users</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      JD
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  john@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing 1 to 10 of 97 results
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-500 text-white rounded text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    ),
    code: `const DataTable = ({ 
  data, 
  columns, 
  searchable = true, 
  sortable = true, 
  pagination = true,
  pageSize = 10 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize, pagination]);

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {searchable && (
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none w-full"
            />
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={\`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider \${
                    sortable && column.sortable !== false ? 'cursor-pointer hover:bg-gray-100' : ''
                  }\`}
                  onClick={() => sortable && column.sortable !== false && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {sortable && sortConfig.key === column.key && (
                      <ChevronUp className={\`w-4 h-4 \${
                        sortConfig.direction === 'desc' ? 'rotate-180' : ''
                      }\`} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {pagination && (
        <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} results
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(sortedData.length / pageSize)}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};`
  },
  {
    id: 'stats-dashboard',
    title: 'Stats Dashboard',
    description: 'Analytics dashboard with charts and key metrics',
    category: 'data',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['dashboard', 'analytics', 'charts', 'metrics'],
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
            <div className="text-green-500 text-sm font-medium flex items-center">
              <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
              +12.5%
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">$24,567</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
          <p className="text-gray-500 text-sm mt-2">75% of monthly goal</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Active Users</h3>
            <div className="text-red-500 text-sm font-medium flex items-center">
              <ArrowRight className="w-4 h-4 rotate-[45deg]" />
              -3.2%
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">1,234</div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-2 bg-indigo-500 rounded-full" style={{height: `${Math.random() * 20 + 10}px`}}></div>
              ))}
            </div>
            <span className="text-gray-500 text-sm">Last 7 days</span>
          </div>
        </div>
      </div>
    ),
    code: `const StatsDashboard = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

const StatCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'percentage',
  trend = 'up',
  progress,
  chart,
  target 
}) => {
  const getTrendColor = () => {
    return trend === 'up' ? 'text-green-500' : 'text-red-500';
  };

  const getTrendIcon = () => {
    return trend === 'up' ? 
      <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> :
      <ArrowRight className="w-4 h-4 rotate-[45deg]" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {change && (
          <div className={\`text-sm font-medium flex items-center \${getTrendColor()}\`}>
            {getTrendIcon()}
            {changeType === 'percentage' ? '+' : ''}{change}{changeType === 'percentage' ? '%' : ''}
          </div>
        )}
      </div>
      
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      
      {progress && (
        <>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{width: \`\${progress}%\`}}
            ></div>
          </div>
          <p className="text-gray-500 text-sm">{progress}% of {target}</p>
        </>
      )}
      
      {chart && (
        <div className="flex items-center space-x-2 mt-4">
          <div className="flex space-x-1">
            {chart.data.map((value, index) => (
              <div 
                key={index} 
                className="w-2 bg-indigo-500 rounded-full transition-all duration-300 hover:bg-indigo-600"
                style={{height: \`\${(value / Math.max(...chart.data)) * 30}px\`}}
              ></div>
            ))}
          </div>
          <span className="text-gray-500 text-sm">{chart.label}</span>
        </div>
      )}
    </div>
  );
};`
  },

  // Feedback & Status Components
  {
    id: 'toast-notification',
    title: 'Toast Notifications',
    description: 'Animated toast notifications with different types and actions',
    category: 'feedback',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['toast', 'notification', 'alert', 'feedback'],
    preview: (
      <div className="space-y-4">
        <div className="bg-white border-l-4 border-green-500 rounded-lg shadow-lg p-4 flex items-center space-x-3">
          <Check className="w-5 h-5 text-green-500" />
          <div className="flex-1">
            <p className="font-medium text-gray-900">Success!</p>
            <p className="text-sm text-gray-600">Your changes have been saved.</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-white border-l-4 border-red-500 rounded-lg shadow-lg p-4 flex items-center space-x-3">
          <X className="w-5 h-5 text-red-500" />
          <div className="flex-1">
            <p className="font-medium text-gray-900">Error occurred</p>
            <p className="text-sm text-gray-600">Please try again later.</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    ),
    code: `const Toast = ({ 
  type = 'info', 
  title, 
  message, 
  onClose, 
  autoClose = true, 
  duration = 5000 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  const getTypeConfig = () => {
    const configs = {
      success: {
        icon: Check,
        borderColor: 'border-green-500',
        iconColor: 'text-green-500',
        bgColor: 'bg-green-50'
      },
      error: {
        icon: X,
        borderColor: 'border-red-500',
        iconColor: 'text-red-500',
        bgColor: 'bg-red-50'
      },
      warning: {
        icon: AlertTriangle,
        borderColor: 'border-yellow-500',
        iconColor: 'text-yellow-500',
        bgColor: 'bg-yellow-50'
      },
      info: {
        icon: Info,
        borderColor: 'border-blue-500',
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-50'
      }
    };
    return configs[type];
  };

  const config = getTypeConfig();
  const Icon = config.icon;

  return (
    <div className={\`transform transition-all duration-300 \${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }\`}>
      <div className={\`bg-white border-l-4 \${config.borderColor} rounded-lg shadow-lg p-4 flex items-center space-x-3 max-w-md\`}>
        <Icon className={\`w-5 h-5 \${config.iconColor}\`} />
        <div className="flex-1">
          <p className="font-medium text-gray-900">{title}</p>
          {message && <p className="text-sm text-gray-600">{message}</p>}
        </div>
        <button 
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};`
  },
  {
    id: 'progress-indicators',
    title: 'Progress Indicators',
    description: 'Various progress indicators including bars, circles, and steps',
    category: 'feedback',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['progress', 'loading', 'indicator', 'steps'],
    preview: (
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Upload Progress</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-gray-200" />
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" className="text-indigo-500" strokeDasharray="175.929" strokeDashoffset="43.982" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">75%</span>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `const ProgressBar = ({ 
  value, 
  max = 100, 
  label, 
  showPercentage = true,
  color = 'from-blue-500 to-purple-600',
  size = 'md' 
}) => {
  const percentage = (value / max) * 100;
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          {label && <span>{label}</span>}
          {showPercentage && <span>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={\`w-full bg-gray-200 rounded-full \${sizeClasses[size]}\`}>
        <div 
          className={\`bg-gradient-to-r \${color} \${sizeClasses[size]} rounded-full transition-all duration-500 ease-out\`}
          style={{width: \`\${percentage}%\`}}
        ></div>
      </div>
    </div>
  );
};

const CircularProgress = ({ 
  value, 
  max = 100, 
  size = 64, 
  strokeWidth = 4,
  color = 'text-indigo-500',
  showPercentage = true 
}) => {
  const percentage = (value / max) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg 
        className={\`transform -rotate-90\`}
        width={size} 
        height={size}
        viewBox={\`0 0 \${size} \${size}\`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          className={color}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 0.5s ease-in-out'
          }}
        />
      </svg>
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-gray-700">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
};

const StepProgress = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center">
            <div className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium \${
              index < currentStep
                ? 'bg-green-500 text-white'
                : index === currentStep
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 text-gray-500'
            }\`}>
              {index < currentStep ? (
                <Check className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </div>
            {step.label && (
              <span className={\`ml-2 text-sm \${
                index <= currentStep ? 'text-gray-900' : 'text-gray-500'
              }\`}>
                {step.label}
              </span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={\`flex-1 h-0.5 mx-4 \${
              index < currentStep ? 'bg-green-500' : 'bg-gray-200'
            }\`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};`
  },

  // Media & Content Components
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    description: 'Responsive image gallery with lightbox and thumbnails',
    category: 'media',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['gallery', 'lightbox', 'images', 'responsive'],
    preview: (
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
              {i}
            </div>
          </div>
        ))}
      </div>
    ),
    code: `const ImageGallery = ({ images, columns = 3 }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = selectedImage.index;
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
    
    setSelectedImage({ ...images[newIndex], index: newIndex });
  };

  return (
    <>
      <div className={\`grid gap-4 \${
        columns === 2 ? 'grid-cols-2' :
        columns === 3 ? 'grid-cols-3' :
        columns === 4 ? 'grid-cols-4' :
        'grid-cols-3'
      }\`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 group"
            onClick={() => openLightbox(image, index)}
          >
            <img
              src={image.thumbnail || image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNext={() => navigateImage('next')}
          onPrev={() => navigateImage('prev')}
          hasNext={selectedImage.index < images.length - 1}
          hasPrev={selectedImage.index > 0}
        />
      )}
    </>
  );
};

const Lightbox = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      >
        <X className="w-8 h-8" />
      </button>

      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      <div className="max-w-4xl max-h-full">
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-full object-contain"
        />
        {image.caption && (
          <p className="text-white text-center mt-4">{image.caption}</p>
        )}
      </div>
    </div>
  );
};`
  },
  {
    id: 'video-player',
    title: 'Custom Video Player',
    description: 'Custom video player with controls and progress bar',
    category: 'media',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['video', 'player', 'controls', 'media'],
    preview: (
      <div className="bg-black rounded-xl overflow-hidden max-w-md">
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <Play className="w-16 h-16 text-white opacity-80" />
        </div>
        <div className="p-4 bg-gray-900">
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <Play className="w-5 h-5" />
            </button>
            <div className="flex-1 bg-gray-700 rounded-full h-1">
              <div className="bg-red-500 h-1 rounded-full" style={{width: '30%'}}></div>
            </div>
            <span className="text-white text-sm">2:30 / 8:45</span>
            <button className="text-white hover:text-gray-300">
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    ),
    code: `const VideoPlayer = ({ src, poster, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const time = pos * duration;
    
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
  };

  return (
    <div className="bg-black rounded-xl overflow-hidden max-w-4xl mx-auto">
      <div className="relative group">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full aspect-video"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Play/Pause Overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={togglePlay}
        >
          <div className="bg-black bg-opacity-50 rounded-full p-4">
            {isPlaying ? (
              <Pause className="w-12 h-12 text-white" />
            ) : (
              <Play className="w-12 h-12 text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 bg-gray-900">
        <div className="flex items-center space-x-4">
          <button 
            onClick={togglePlay}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          {/* Progress Bar */}
          <div 
            className="flex-1 bg-gray-700 rounded-full h-2 cursor-pointer"
            onClick={handleSeek}
          >
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-150"
              style={{width: \`\${(currentTime / duration) * 100}%\`}}
            ></div>
          </div>

          {/* Time Display */}
          <span className="text-white text-sm font-mono">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Volume Controls */}
          <button 
            onClick={toggleMute}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 accent-red-500"
          />

          {/* Fullscreen */}
          <button 
            onClick={toggleFullscreen}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5" />
            ) : (
              <Maximize className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};`
  },

  // E-commerce Components
  {
    id: 'product-card-enhanced',
    title: 'Enhanced Product Card',
    description: 'E-commerce product card with wishlist, quick view, and variants',
    category: 'ecommerce',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['product', 'ecommerce', 'wishlist', 'variants'],
    preview: (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-shadow duration-300">
        <div className="relative group">
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Headphones className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50">
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
              -20%
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Premium Wireless Headphones</h3>
          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="text-sm text-gray-500 ml-2">(128 reviews)</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-gray-900">$199</span>
            <span className="text-lg text-gray-500 line-through">$249</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm text-gray-600">Color:</span>
            <div className="flex space-x-2">
              <button className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
              <button className="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></button>
              <button className="w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-500"></button>
            </div>
          </div>
          <button className="w-full bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    ),
    code: `const ProductCard = ({ 
  product, 
  onAddToCart, 
  onAddToWishlist, 
  onQuickView 
}) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedVariant,
      quantity: 1
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist(product.id, !isWishlisted);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={selectedVariant?.image || product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleWishlist}
            className={\`w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors \${
              isWishlisted ? 'text-red-500' : 'text-gray-600'
            }\`}
          >
            <Heart className={\`w-5 h-5 \${isWishlisted ? 'fill-current' : ''}\`} />
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
              -{discountPercentage}%
            </span>
          </div>
        )}

        {/* Stock Status */}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-orange-500 text-white px-2 py-1 text-xs font-medium rounded">
              Only {product.stock} left
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={\`w-4 h-4 \${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }\`} 
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              ({product.reviewCount} reviews)
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">
            \${selectedVariant?.price || product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              \${product.originalPrice}
            </span>
          )}
        </div>

        {/* Variants */}
        {product.variants && product.variants.length > 1 && (
          <div className="mb-4">
            <span className="text-sm text-gray-600 mb-2 block">
              {product.variantType}:
            </span>
            <div className="flex space-x-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={\`w-8 h-8 rounded-full border-2 transition-all \${
                    selectedVariant?.id === variant.id
                      ? 'border-indigo-500 scale-110'
                      : 'border-gray-300 hover:border-gray-400'
                  }\`}
                  style={{ backgroundColor: variant.color }}
                  title={variant.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={\`w-full py-3 rounded-xl font-semibold transition-colors \${
            product.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-500 text-white hover:bg-indigo-600'
          }\`}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};`
  },
  {
    id: 'shopping-cart',
    title: 'Shopping Cart Drawer',
    description: 'Slide-out shopping cart with item management and checkout',
    category: 'ecommerce',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['cart', 'drawer', 'checkout', 'ecommerce'],
    preview: (
      <div className="bg-white rounded-2xl shadow-2xl w-96 h-96 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
            <div className="flex items-center space-x-2">
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-medium">
                3 items
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Wireless Headphones</h4>
                <p className="text-sm text-gray-500">Black</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-medium">2</span>
                  <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">$398</p>
                <button className="text-red-500 hover:text-red-700 text-sm">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">$598</span>
          </div>
          <button className="w-full bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    ),
    code: `const ShoppingCart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isAnimating && !isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={\`fixed inset-0 bg-black transition-opacity duration-300 z-40 \${
          isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
        }\`}
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div className={\`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 \${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }\`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-medium">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h4>
                <p className="text-gray-500">Add some items to get started</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemoveItem}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-gray-200">
              <div className="space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">\${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      \${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <button className="w-full bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-colors">
                  Proceed to Checkout
                </button>
                
                <button 
                  onClick={onClose}
                  className="w-full text-indigo-600 py-2 font-medium hover:text-indigo-800 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{item.name}</h4>
        {item.variant && (
          <p className="text-sm text-gray-500">{item.variant}</p>
        )}
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-sm font-medium min-w-[20px] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-gray-900">
          \${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 text-sm transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};`
  },

  // Social & Communication Components
  {
    id: 'comment-system',
    title: 'Comment System',
    description: 'Threaded comment system with replies and reactions',
    category: 'social',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['comments', 'replies', 'reactions', 'social'],
    preview: (
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl">
        <div className="space-y-6">
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">John Doe</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="text-gray-700">This is a great article! Thanks for sharing your insights.</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">12</span>
                </button>
                <button className="text-gray-500 hover:text-blue-600 text-sm">Reply</button>
              </div>
              
              {/* Reply */}
              <div className="ml-8 mt-4 flex space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SM
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-gray-900">Sarah Miller</span>
                      <span className="text-sm text-gray-500">1 hour ago</span>
                    </div>
                    <p className="text-gray-700">I completely agree! The examples were very helpful.</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">5</span>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 text-sm">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `const CommentSystem = ({ comments, onAddComment, onAddReply, onReact }) => {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            You
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-4 border border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none resize-none"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={onAddReply}
            onReact={onReact}
            replyingTo={replyingTo}
            setReplyingTo={setReplyingTo}
          />
        ))}
      </div>
    </div>
  );
};

const Comment = ({ comment, onReply, onReact, replyingTo, setReplyingTo, depth = 0 }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplies, setShowReplies] = useState(true);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText('');
      setReplyingTo(null);
    }
  };

  const isReplying = replyingTo === comment.id;

  return (
    <div className={\`\${depth > 0 ? 'ml-8' : ''}\`}>
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          {comment.author.avatar ? (
            <img
              src={comment.author.avatar}
              alt={comment.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {comment.author.name.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold text-gray-900">{comment.author.name}</span>
              <span className="text-sm text-gray-500">{comment.createdAt}</span>
              {comment.edited && (
                <span className="text-xs text-gray-400">(edited)</span>
              )}
            </div>
            <p className="text-gray-700 leading-relaxed">{comment.content}</p>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4 mt-2">
            <button
              onClick={() => onReact(comment.id, 'like')}
              className={\`flex items-center space-x-1 text-sm transition-colors \${
                comment.userReaction === 'like'
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-blue-600'
              }\`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{comment.reactions.like || 0}</span>
            </button>
            
            <button
              onClick={() => onReact(comment.id, 'dislike')}
              className={\`flex items-center space-x-1 text-sm transition-colors \${
                comment.userReaction === 'dislike'
                  ? 'text-red-600'
                  : 'text-gray-500 hover:text-red-600'
              }\`}
            >
              <ThumbsDown className="w-4 h-4" />
              <span>{comment.reactions.dislike || 0}</span>
            </button>
            
            <button
              onClick={() => setReplyingTo(isReplying ? null : comment.id)}
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              Reply
            </button>
            
            {comment.replies && comment.replies.length > 0 && (
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                {showReplies ? 'Hide' : 'Show'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </button>
            )}
          </div>
          
          {/* Reply Form */}
          {isReplying && (
            <form onSubmit={handleSubmitReply} className="mt-4">
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  You
                </div>
                <div className="flex-1">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={\`Reply to \${comment.author.name}...\`}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none resize-none text-sm"
                    rows={2}
                  />
                  <div className="flex justify-end space-x-2 mt-2">
                    <button
                      type="button"
                      onClick={() => setReplyingTo(null)}
                      className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!replyText.trim()}
                      className="px-3 py-1 bg-indigo-500 text-white rounded text-sm hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
          
          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && showReplies && (
            <div className="mt-4 space-y-4">
              {comment.replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  onReply={onReply}
                  onReact={onReact}
                  replyingTo={replyingTo}
                  setReplyingTo={setReplyingTo}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};`
  },
  {
    id: 'user-profile-card',
    title: 'User Profile Card',
    description: 'Social profile card with stats, follow button, and activity',
    category: 'social',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['profile', 'social', 'stats', 'follow'],
    preview: (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm">
        <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="px-6 pb-6">
          <div className="flex items-center space-x-4 -mt-8">
            <div className="w-16 h-16 bg-white rounded-full p-1">
              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                JD
              </div>
            </div>
            <div className="pt-8">
              <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
                Follow
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
            <p className="text-gray-600">@johndoe</p>
            <p className="text-gray-700 mt-2">Frontend developer passionate about creating beautiful user experiences. Love React, TypeScript, and design systems.</p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">1.2k</div>
              <div className="text-sm text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">456</div>
              <div className="text-sm text-gray-500">Following</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-500">Posts</div>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `const UserProfileCard = ({ 
  user, 
  isFollowing, 
  onFollow, 
  onUnfollow, 
  onMessage,
  showStats = true,
  showActions = true 
}) => {
  const [following, setFollowing] = useState(isFollowing);
  const [loading, setLoading] = useState(false);

  const handleFollowClick = async () => {
    setLoading(true);
    try {
      if (following) {
        await onUnfollow(user.id);
        setFollowing(false);
      } else {
        await onFollow(user.id);
        setFollowing(true);
      }
    } catch (error) {
      console.error('Follow action failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm">
      {/* Cover Image */}
      <div 
        className="h-32 bg-gradient-to-r from-purple-500 to-pink-500"
        style={{
          backgroundImage: user.coverImage ? \`url(\${user.coverImage})\` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="px-6 pb-6">
        {/* Avatar and Actions */}
        <div className="flex items-center justify-between -mt-8">
          <div className="w-16 h-16 bg-white rounded-full p-1">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {user.name.charAt(0)}
              </div>
            )}
          </div>
          
          {showActions && (
            <div className="flex space-x-2 pt-8">
              {onMessage && (
                <button
                  onClick={() => onMessage(user.id)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                </button>
              )}
              <button
                onClick={handleFollowClick}
                disabled={loading}
                className={\`px-6 py-2 rounded-lg font-medium transition-colors \${
                  following
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    : 'bg-indigo-500 text-white hover:bg-indigo-600'
                } \${loading ? 'opacity-50 cursor-not-allowed' : ''}\`}
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : following ? (
                  'Following'
                ) : (
                  'Follow'
                )}
              </button>
            </div>
          )}
        </div>
        
        {/* User Info */}
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
          <p className="text-gray-600">@{user.username}</p>
          {user.bio && (
            <p className="text-gray-700 mt-2 leading-relaxed">{user.bio}</p>
          )}
          
          {/* Additional Info */}
          {(user.location || user.website || user.joinedDate) && (
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
              {user.location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.website && (
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <a 
                    href={user.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Website
                  </a>
                </div>
              )}
              {user.joinedDate && (
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {user.joinedDate}</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Stats */}
        {showStats && user.stats && (
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">
                {user.stats.followers >= 1000 
                  ? \`\${(user.stats.followers / 1000).toFixed(1)}k\`
                  : user.stats.followers
                }
              </div>
              <div className="text-sm text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">
                {user.stats.following >= 1000 
                  ? \`\${(user.stats.following / 1000).toFixed(1)}k\`
                  : user.stats.following
                }
              </div>
              <div className="text-sm text-gray-500">Following</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">
                {user.stats.posts >= 1000 
                  ? \`\${(user.stats.posts / 1000).toFixed(1)}k\`
                  : user.stats.posts
                }
              </div>
              <div className="text-sm text-gray-500">Posts</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};`
  },

  // Authentication Components
  {
    id: 'login-form',
    title: 'Modern Login Form',
    description: 'Sleek login form with social auth and password recovery',
    category: 'auth',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['login', 'auth', 'form', 'social'],
    preview: (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors pr-12"
                placeholder="Enter your password"
              />
              <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <EyeOff className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">Forgot password?</a>
          </div>
          
          <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            Sign In
          </button>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Github className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Sign up</a>
        </p>
      </div>
    ),
    code: `const LoginForm = ({ onLogin, onSocialLogin, onForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await onLogin(formData);
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    try {
      await onSocialLogin(provider);
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>
      
      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{errors.submit}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={\`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors \${
              errors.email 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-200 focus:border-indigo-500'
            }\`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={\`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors pr-12 \${
                errors.password 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-200 focus:border-indigo-500'
              }\`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Forgot password?
          </button>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Signing in...
            </div>
          ) : (
            'Sign In'
          )}
        </button>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => handleSocialLogin('google')}
            disabled={loading}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>
          <button
            onClick={() => handleSocialLogin('github')}
            disabled={loading}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <Github className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <p className="mt-8 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          Sign up
        </a>
      </p>
    </div>
  );
};`
  }
];

// Update category counts
categories.forEach(category => {
  if (category.id === 'all') {
    category.count = assets.length;
  } else {
    category.count = assets.filter(asset => asset.category === category.id).length;
  }
});


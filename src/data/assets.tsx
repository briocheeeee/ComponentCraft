import React from 'react';
import { 
  Palette, 
  Square, 
  Type, 
  MousePointer, 
  Layout,
  Sparkles,
  Star,
  Heart,
  ArrowRight,
  Download,
  Play,
  ShoppingCart,
  Menu,
  X,
  Bell,
  Settings,
  User,
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  Zap,
  Layers,
  Grid,
  BarChart3,
  PieChart,
  TrendingUp,
  Camera,
  Image,
  Video,
  Music,
  Headphones,
  Mic,
  Volume2,
  Wifi,
  Battery,
  Smartphone,
  Laptop,
  Monitor,
  Printer,
  HardDrive,
  Cloud,
  Server,
  Database,
  Code2,
  Terminal,
  FileText,
  Folder,
  Archive,
  Trash2,
  Edit,
  Save,
  Upload,
  Share,
  Link,
  Copy,
  Scissors,
  RotateCcw,
  RefreshCw,
  Maximize,
  Minimize,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  MessageCircle,
  Send,
  ThumbsUp,
  Flag,
  Bookmark,
  Tag,
  Award,
  Gift,
  CreditCard,
  DollarSign,
  TrendingDown,
  Target,
  Compass,
  Navigation,
  Home,
  Building,
  Store,
  Car,
  Plane,
  Ship,
  Truck,
  Bike,
  Train,
  Bus,
  Fuel,
  Route,
  Map,
  Gamepad2,
  Dice1,
  Puzzle,
  Trophy,
  Medal,
  Crown,
  Gem,
  Flame,
  Snowflake,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  Wind,
  Thermometer,
  Umbrella,
  Rainbow,
  Mountain,
  Trees,
  Flower,
  Leaf,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Turtle,
  Butterfly,
  Apple,
  Cherry,
  Grape,
  Banana,
  Orange,
  Carrot,
  Pizza,
  Coffee,
  Wine,
  Beer,
  IceCream,
  Cake,
  Cookie,
  Candy,
  Utensils,
  ChefHat,
  Scale,
  Timer,
  Alarm,
  Watch,
  Hourglass,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Sunrise,
  Sunset,
  Activity,
  Pulse,
  Stethoscope,
  Pill,
  Syringe,
  Bandage,
  FirstAid,
  Cross,
  Accessibility,
  Baby,
  Users,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Eye,
  EyeOff,
  Glasses,
  Smile,
  Frown,
  Meh,
  Angry,
  Laugh,
  Kiss,
  Wink,
  Surprised,
  Confused,
  Sleepy,
  Dizzy,
  Mask,
  Mustache,
  Beard,
  Hair,
  Lipstick,
  Nail,
  Ring,
  Necklace,
  Earrings,
  Bracelet,
  Watch as WatchIcon,
  Glasses as GlassesIcon,
  Hat,
  Shirt,
  Pants,
  Dress,
  Shoe,
  Sock,
  Glove,
  Scarf,
  Tie,
  Belt,
  Bag,
  Backpack,
  Briefcase,
  Suitcase,
  Wallet,
  Purse,
  Key,
  Lock,
  Unlock,
  DoorOpen,
  DoorClosed,
  Window,
  Bed,
  Chair,
  Table,
  Lamp,
  Lightbulb,
  Candle,
  Fire,
  Fireplace,
  Heater,
  AirVent,
  Fan,
  Refrigerator,
  Microwave,
  Oven,
  Stove,
  Kettle,
  Blender,
  Toaster,
  WashingMachine,
  Dryer,
  Iron,
  Vacuum,
  Broom,
  Mop,
  Bucket,
  Soap,
  Towel,
  Toilet,
  Shower,
  Bathtub,
  Sink,
  Faucet,
  Mirror,
  Comb,
  Brush,
  Razor,
  Scissors as ScissorsIcon,
  Nail as NailIcon,
  Tweezers,
  Magnifier,
  Microscope,
  Telescope,
  Binoculars,
  Camera as CameraIcon,
  Video as VideoIcon,
  Film,
  Projector,
  Screen,
  Tv,
  Radio,
  Speaker,
  Headphones as HeadphonesIcon,
  Microphone,
  Guitar,
  Piano,
  Drum,
  Violin,
  Trumpet,
  Saxophone,
  Flute,
  Harp,
  Accordion,
  Harmonica,
  Xylophone,
  Triangle,
  Tambourine,
  Maracas,
  Castanets,
  Whistle,
  Bell as BellIcon,
  Gong,
  Chimes,
  Metronome,
  TuningFork,
  MusicNote,
  MusicalNote,
  Clef,
  Sharp,
  Flat,
  Natural,
  Rest,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Pause,
  Stop,
  Record,
  Eject,
  VolumeX,
  Volume1,
  Volume2 as Volume2Icon,
  Mute,
  Unmute,
  VolumeMinus,
  VolumePlus,
  Equalizer,
  Waveform,
  Spectrum,
  Frequency,
  Amplitude,
  Decibel,
  Hertz,
  Kilohertz,
  Megahertz,
  Gigahertz,
  Terahertz,
  Byte,
  Kilobyte,
  Megabyte,
  Gigabyte,
  Terabyte,
  Petabyte,
  Exabyte,
  Zettabyte,
  Yottabyte,
  Bit,
  Binary,
  Hexadecimal,
  Octal,
  Decimal,
  Percent,
  Infinity,
  Pi,
  Sigma,
  Delta,
  Alpha,
  Beta,
  Gamma,
  Theta,
  Lambda,
  Mu,
  Nu,
  Omega,
  Phi,
  Psi,
  Chi,
  Rho,
  Tau,
  Upsilon,
  Xi,
  Zeta,
  Eta,
  Iota,
  Kappa,
  Omicron,
  Epsilon
} from 'lucide-react';

export const categories = [
  { id: 'all', name: 'All Components', icon: Layout, count: 45, color: 'from-indigo-500 to-purple-600' },
  { id: 'buttons', name: 'Buttons', icon: MousePointer, count: 8, color: 'from-blue-500 to-indigo-600' },
  { id: 'cards', name: 'Cards', icon: Square, count: 7, color: 'from-emerald-500 to-teal-600' },
  { id: 'navigation', name: 'Navigation', icon: Menu, count: 6, color: 'from-purple-500 to-pink-600' },
  { id: 'forms', name: 'Forms', icon: Edit, count: 5, color: 'from-orange-500 to-red-600' },
  { id: 'typography', name: 'Typography', icon: Type, count: 4, color: 'from-cyan-500 to-blue-600' },
  { id: 'layouts', name: 'Layouts', icon: Grid, count: 6, color: 'from-green-500 to-emerald-600' },
  { id: 'effects', name: 'Effects', icon: Sparkles, count: 5, color: 'from-pink-500 to-rose-600' },
  { id: 'data', name: 'Data Display', icon: BarChart3, count: 4, color: 'from-violet-500 to-purple-600' },
];

export const assets = [
  // Buttons Category
  {
    id: 'gradient-button',
    title: 'Gradient Button',
    description: 'A beautiful gradient button with hover effects and smooth transitions',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['gradient', 'hover', 'animation'],
    preview: (
      <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
        Get Started
      </button>
    ),
    code: `<button className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
  Get Started
</button>`
  },
  {
    id: 'icon-button',
    title: 'Icon Button',
    description: 'Button with icon and smooth animations, perfect for actions',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['icon', 'animation', 'action'],
    preview: (
      <button className="flex items-center space-x-3 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-200 group shadow-lg hover:shadow-xl">
        <Download className="w-5 h-5 group-hover:animate-bounce" />
        <span className="font-medium">Download</span>
      </button>
    ),
    code: `<button className="flex items-center space-x-3 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-200 group shadow-lg hover:shadow-xl">
  <Download className="w-5 h-5 group-hover:animate-bounce" />
  <span className="font-medium">Download</span>
</button>`
  },
  {
    id: 'outline-button',
    title: 'Outline Button',
    description: 'Clean outline button with fill animation on hover',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['outline', 'fill', 'animation'],
    preview: (
      <button className="px-8 py-3 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
        Learn More
      </button>
    ),
    code: `<button className="px-8 py-3 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
  Learn More
</button>`
  },
  {
    id: 'floating-button',
    title: 'Floating Action Button',
    description: 'Circular floating button with shadow and scale effects',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['floating', 'circular', 'shadow'],
    preview: (
      <button className="w-16 h-16 bg-rose-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:bg-rose-600 transition-all duration-300 flex items-center justify-center group hover:scale-110">
        <Play className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>
    ),
    code: `<button className="w-16 h-16 bg-rose-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:bg-rose-600 transition-all duration-300 flex items-center justify-center group hover:scale-110">
  <Play className="w-7 h-7 group-hover:scale-110 transition-transform" />
</button>`
  },
  {
    id: 'loading-button',
    title: 'Loading Button',
    description: 'Button with loading state and spinner animation',
    category: 'buttons',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['loading', 'spinner', 'state'],
    preview: (
      <button className="flex items-center space-x-3 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50">
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span className="font-medium">Loading...</span>
      </button>
    ),
    code: `<button className="flex items-center space-x-3 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50">
  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  <span className="font-medium">Loading...</span>
</button>`
  },
  {
    id: 'toggle-button',
    title: 'Toggle Button',
    description: 'Interactive toggle button with smooth state transitions',
    category: 'buttons',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['toggle', 'switch', 'interactive'],
    preview: (
      <div className="flex items-center space-x-4">
        <button className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-6"></div>
        </button>
        <span className="text-sm font-medium text-gray-700">Enabled</span>
      </div>
    ),
    code: `<div className="flex items-center space-x-4">
  <button className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-6"></div>
  </button>
  <span className="text-sm font-medium text-gray-700">Enabled</span>
</div>`
  },
  {
    id: 'button-group',
    title: 'Button Group',
    description: 'Segmented button group with active state',
    category: 'buttons',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['group', 'segmented', 'active'],
    preview: (
      <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg shadow-sm">
          Day
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 rounded-lg">
          Week
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 rounded-lg">
          Month
        </button>
      </div>
    ),
    code: `<div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
  <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg shadow-sm">
    Day
  </button>
  <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 rounded-lg">
    Week
  </button>
  <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 rounded-lg">
    Month
  </button>
</div>`
  },
  {
    id: 'social-button',
    title: 'Social Login Button',
    description: 'Social media login button with brand colors',
    category: 'buttons',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['social', 'login', 'brand'],
    preview: (
      <button className="flex items-center justify-center space-x-3 w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md">
        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
        <span className="font-medium text-gray-700">Continue with Google</span>
      </button>
    ),
    code: `<button className="flex items-center justify-center space-x-3 w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md">
  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
  <span className="font-medium text-gray-700">Continue with Google</span>
</button>`
  },

  // Cards Category
  {
    id: 'product-card',
    title: 'Product Card',
    description: 'E-commerce style product card with image, details, and actions',
    category: 'cards',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['ecommerce', 'product', 'shopping'],
    preview: (
      <div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          <div className="absolute top-4 right-4">
            <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-gray-900 mb-2">Premium Headphones</h3>
          <p className="text-sm text-gray-600 mb-4">Wireless noise-canceling headphones with premium sound quality</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">$299</span>
              <span className="text-sm text-gray-500 line-through ml-2">$399</span>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors shadow-md">
              <ShoppingCart className="w-4 h-4" />
              <span className="font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
  <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
    <div className="absolute top-4 right-4">
      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
        <Heart className="w-4 h-4" />
      </button>
    </div>
  </div>
  <div className="p-6">
    <h3 className="font-bold text-gray-900 mb-2">Premium Headphones</h3>
    <p className="text-sm text-gray-600 mb-4">Wireless noise-canceling headphones with premium sound quality</p>
    <div className="flex items-center justify-between">
      <div>
        <span className="text-2xl font-bold text-gray-900">$299</span>
        <span className="text-sm text-gray-500 line-through ml-2">$399</span>
      </div>
      <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors shadow-md">
        <ShoppingCart className="w-4 h-4" />
        <span className="font-medium">Add to Cart</span>
      </button>
    </div>
  </div>
</div>`
  },
  {
    id: 'testimonial-card',
    title: 'Testimonial Card',
    description: 'Customer testimonial with avatar, rating, and quote',
    category: 'cards',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['testimonial', 'review', 'rating'],
    preview: (
      <div className="w-80 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">"This product exceeded my expectations in every way. The quality is outstanding and the customer service is top-notch. Highly recommended!"</p>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">SJ</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Sarah Johnson</p>
            <p className="text-sm text-gray-500">Verified Customer</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ))}
  </div>
  <p className="text-gray-700 mb-6 leading-relaxed">"This product exceeded my expectations in every way. The quality is outstanding and the customer service is top-notch. Highly recommended!"</p>
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
      <span className="text-white font-semibold">SJ</span>
    </div>
    <div>
      <p className="font-semibold text-gray-900">Sarah Johnson</p>
      <p className="text-sm text-gray-500">Verified Customer</p>
    </div>
  </div>
</div>`
  },
  {
    id: 'feature-card',
    title: 'Feature Card',
    description: 'Clean feature card with icon, title, and description',
    category: 'cards',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['feature', 'icon', 'description'],
    preview: (
      <div className="w-80 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Experience blazing fast performance with our optimized infrastructure and cutting-edge technology stack.</p>
        <button className="flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100">
  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
    <Zap className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
  <p className="text-gray-600 mb-6 leading-relaxed">Experience blazing fast performance with our optimized infrastructure and cutting-edge technology stack.</p>
  <button className="flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group">
    <span>Learn more</span>
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </button>
</div>`
  },
  {
    id: 'stats-card',
    title: 'Statistics Card',
    description: 'Dashboard-style statistics card with trend indicator',
    category: 'cards',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['stats', 'dashboard', 'metrics'],
    preview: (
      <div className="w-64 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
            <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
            <span>+12.5%</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">24,567</h3>
        <p className="text-gray-600 text-sm">Total Revenue</p>
        <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
      </div>
    ),
    code: `<div className="w-64 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center justify-between mb-4">
    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
      <TrendingUp className="w-6 h-6 text-blue-600" />
    </div>
    <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
      <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
      <span>+12.5%</span>
    </div>
  </div>
  <h3 className="text-2xl font-bold text-gray-900 mb-1">24,567</h3>
  <p className="text-gray-600 text-sm">Total Revenue</p>
  <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
    <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
  </div>
</div>`
  },
  {
    id: 'profile-card',
    title: 'Profile Card',
    description: 'User profile card with avatar, info, and social links',
    category: 'cards',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['profile', 'user', 'social'],
    preview: (
      <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="px-6 pb-6">
          <div className="flex items-center space-x-4 -mt-8">
            <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-900">Alex Johnson</h3>
              <p className="text-gray-600">Senior Developer</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">127</p>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">2.4k</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">1.8k</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
          <button className="w-full mt-6 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-medium">
            Follow
          </button>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <div className="h-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
  <div className="px-6 pb-6">
    <div className="flex items-center space-x-4 -mt-8">
      <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
        <User className="w-8 h-8 text-gray-600" />
      </div>
      <div className="pt-8">
        <h3 className="text-xl font-bold text-gray-900">Alex Johnson</h3>
        <p className="text-gray-600">Senior Developer</p>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-between">
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900">127</p>
        <p className="text-sm text-gray-600">Projects</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900">2.4k</p>
        <p className="text-sm text-gray-600">Followers</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900">1.8k</p>
        <p className="text-sm text-gray-600">Following</p>
      </div>
    </div>
    <button className="w-full mt-6 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-medium">
      Follow
    </button>
  </div>
</div>`
  },
  {
    id: 'pricing-card',
    title: 'Pricing Card',
    description: 'Pricing plan card with features list and CTA button',
    category: 'cards',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['pricing', 'plan', 'features'],
    preview: (
      <div className="w-80 bg-white rounded-2xl shadow-lg border-2 border-indigo-500 p-8 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
          POPULAR
        </div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-4xl font-bold text-gray-900">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          {['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom integrations', 'Team collaboration'].map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-semibold shadow-md">
          Get Started
        </button>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-lg border-2 border-indigo-500 p-8 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
    POPULAR
  </div>
  <div className="text-center mb-8">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
    <div className="flex items-center justify-center space-x-2">
      <span className="text-4xl font-bold text-gray-900">$29</span>
      <span className="text-gray-600">/month</span>
    </div>
  </div>
  <ul className="space-y-4 mb-8">
    {['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom integrations', 'Team collaboration'].map((feature, index) => (
      <li key={index} className="flex items-center space-x-3">
        <Check className="w-5 h-5 text-green-500" />
        <span className="text-gray-700">{feature}</span>
      </li>
    ))}
  </ul>
  <button className="w-full px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-semibold shadow-md">
    Get Started
  </button>
</div>`
  },
  {
    id: 'notification-card',
    title: 'Notification Card',
    description: 'Alert notification card with icon and action buttons',
    category: 'cards',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['notification', 'alert', 'action'],
    preview: (
      <div className="w-96 bg-white rounded-2xl shadow-lg border-l-4 border-green-500 p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">Success!</h3>
            <p className="text-gray-600 text-sm mb-4">Your account has been successfully verified. You can now access all premium features.</p>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                Continue
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium">
                Dismiss
              </button>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    ),
    code: `<div className="w-96 bg-white rounded-2xl shadow-lg border-l-4 border-green-500 p-6 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-start space-x-4">
    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
      <Check className="w-5 h-5 text-green-600" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900 mb-1">Success!</h3>
      <p className="text-gray-600 text-sm mb-4">Your account has been successfully verified. You can now access all premium features.</p>
      <div className="flex space-x-3">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
          Continue
        </button>
        <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium">
          Dismiss
        </button>
      </div>
    </div>
    <button className="text-gray-400 hover:text-gray-600 transition-colors">
      <X className="w-5 h-5" />
    </button>
  </div>
</div>`
  },

  // Navigation Category
  {
    id: 'modern-navbar',
    title: 'Modern Navigation Bar',
    description: 'Clean navigation bar with logo, menu items, and CTA button',
    category: 'navigation',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['navbar', 'menu', 'responsive'],
    preview: (
      <nav className="w-full bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
            <span className="font-bold text-gray-900">Brand</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Sign In
            </button>
            <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    ),
    code: `<nav className="w-full bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg px-6 py-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
      <span className="font-bold text-gray-900">Brand</span>
    </div>
    <div className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Home</a>
      <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">About</a>
      <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Services</a>
      <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</a>
    </div>
    <div className="flex items-center space-x-4">
      <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
        Sign In
      </button>
      <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium">
        Get Started
      </button>
    </div>
  </div>
</nav>`
  },
  {
    id: 'sidebar-menu',
    title: 'Sidebar Menu',
    description: 'Collapsible sidebar navigation with icons and labels',
    category: 'navigation',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['sidebar', 'collapsible', 'icons'],
    preview: (
      <div className="w-64 bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
        <div className="flex items-center space-x-3 mb-8 px-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
          <span className="font-bold text-gray-900">Dashboard</span>
        </div>
        <nav className="space-y-2">
          {[
            { icon: Home, label: 'Dashboard', active: true },
            { icon: BarChart3, label: 'Analytics', active: false },
            { icon: Users, label: 'Users', active: false },
            { icon: Settings, label: 'Settings', active: false },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    ),
    code: `<div className="w-64 bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
  <div className="flex items-center space-x-3 mb-8 px-2">
    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
    <span className="font-bold text-gray-900">Dashboard</span>
  </div>
  <nav className="space-y-2">
    {[
      { icon: Home, label: 'Dashboard', active: true },
      { icon: BarChart3, label: 'Analytics', active: false },
      { icon: Users, label: 'Users', active: false },
      { icon: Settings, label: 'Settings', active: false },
    ].map((item, index) => (
      <a
        key={index}
        href="#"
        className={\`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 \${
          item.active
            ? 'bg-indigo-500 text-white shadow-md'
            : 'text-gray-700 hover:bg-gray-100'
        }\`}
      >
        <item.icon className="w-5 h-5" />
        <span className="font-medium">{item.label}</span>
      </a>
    ))}
  </nav>
</div>`
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb Navigation',
    description: 'Breadcrumb navigation with separators and hover effects',
    category: 'navigation',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['breadcrumb', 'navigation', 'path'],
    preview: (
      <nav className="flex items-center space-x-2 text-sm">
        <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
          Home
        </a>
        <ArrowRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
          Products
        </a>
        <ArrowRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
          Electronics
        </a>
        <ArrowRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-700 font-medium">Smartphones</span>
      </nav>
    ),
    code: `<nav className="flex items-center space-x-2 text-sm">
  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
    Home
  </a>
  <ArrowRight className="w-4 h-4 text-gray-400" />
  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
    Products
  </a>
  <ArrowRight className="w-4 h-4 text-gray-400" />
  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
    Electronics
  </a>
  <ArrowRight className="w-4 h-4 text-gray-400" />
  <span className="text-gray-700 font-medium">Smartphones</span>
</nav>`
  },
  {
    id: 'tab-navigation',
    title: 'Tab Navigation',
    description: 'Horizontal tab navigation with active state indicator',
    category: 'navigation',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['tabs', 'horizontal', 'active'],
    preview: (
      <div className="w-full max-w-md">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
          {['Overview', 'Analytics', 'Reports', 'Settings'].map((tab, index) => (
            <button
              key={index}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                index === 0
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-md">
  <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
    {['Overview', 'Analytics', 'Reports', 'Settings'].map((tab, index) => (
      <button
        key={index}
        className={\`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 \${
          index === 0
            ? 'bg-white text-indigo-600 shadow-sm'
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
    description: 'Pagination with page numbers, previous/next buttons',
    category: 'navigation',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['pagination', 'pages', 'navigation'],
    preview: (
      <div className="flex items-center space-x-2">
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
        {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
              page === 3
                ? 'bg-indigo-500 text-white shadow-md'
                : page === '...'
                ? 'text-gray-400 cursor-default'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    ),
    code: `<div className="flex items-center space-x-2">
  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
    <ArrowRight className="w-4 h-4 rotate-180" />
  </button>
  {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
    <button
      key={index}
      className={\`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 \${
        page === 3
          ? 'bg-indigo-500 text-white shadow-md'
          : page === '...'
          ? 'text-gray-400 cursor-default'
          : 'text-gray-700 hover:bg-gray-100'
      }\`}
    >
      {page}
    </button>
  ))}
  <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
    <ArrowRight className="w-4 h-4" />
  </button>
</div>`
  },
  {
    id: 'mobile-menu',
    title: 'Mobile Menu',
    description: 'Hamburger menu with slide-out mobile navigation',
    category: 'navigation',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['mobile', 'hamburger', 'responsive'],
    preview: (
      <div className="relative">
        <button className="p-3 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <div className="absolute top-16 left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50">
          <div className="space-y-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-xl transition-all duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="w-full px-4 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="relative">
  <button className="p-3 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
    <Menu className="w-6 h-6 text-gray-700" />
  </button>
  <div className="absolute top-16 left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50">
    <div className="space-y-4">
      {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-xl transition-all duration-200 font-medium"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="mt-6 pt-6 border-t border-gray-200">
      <button className="w-full px-4 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-medium">
        Get Started
      </button>
    </div>
  </div>
</div>`
  },

  // Forms Category
  {
    id: 'modern-input',
    title: 'Modern Input Field',
    description: 'Stylized input field with floating label and focus effects',
    category: 'forms',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['input', 'floating', 'focus'],
    preview: (
      <div className="w-80 space-y-6">
        <div className="relative">
          <input
            type="text"
            id="email"
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:bg-white peer-focus:px-2"
          >
            Email Address
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:bg-white peer-focus:px-2"
          >
            Password
          </label>
        </div>
      </div>
    ),
    code: `<div className="w-80 space-y-6">
  <div className="relative">
    <input
      type="text"
      id="email"
      className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
      placeholder=" "
    />
    <label
      htmlFor="email"
      className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:bg-white peer-focus:px-2"
    >
      Email Address
    </label>
  </div>
  <div className="relative">
    <input
      type="password"
      id="password"
      className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
      placeholder=" "
    />
    <label
      htmlFor="password"
      className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:bg-white peer-focus:px-2"
    >
      Password
    </label>
  </div>
</div>`
  },
  {
    id: 'search-input',
    title: 'Search Input',
    description: 'Search input with icon and clear button functionality',
    category: 'forms',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['search', 'icon', 'clear'],
    preview: (
      <div className="relative w-80">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200 bg-white"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    ),
    code: `<div className="relative w-80">
  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
    <Search className="h-5 w-5 text-gray-400" />
  </div>
  <input
    type="text"
    placeholder="Search for anything..."
    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200 bg-white"
  />
  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
    <button className="text-gray-400 hover:text-gray-600 transition-colors">
      <X className="h-5 w-5" />
    </button>
  </div>
</div>`
  },
  {
    id: 'select-dropdown',
    title: 'Custom Select Dropdown',
    description: 'Styled select dropdown with custom options',
    category: 'forms',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['select', 'dropdown', 'custom'],
    preview: (
      <div className="relative w-80">
        <button className="w-full px-4 py-3 text-left bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200 flex items-center justify-between">
          <span className="text-gray-700">Select an option</span>
          <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
        </button>
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
          {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option, index) => (
            <button
              key={index}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700 border-b border-gray-100 last:border-b-0"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    ),
    code: `<div className="relative w-80">
  <button className="w-full px-4 py-3 text-left bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-200 flex items-center justify-between">
    <span className="text-gray-700">Select an option</span>
    <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
  </button>
  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
    {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option, index) => (
      <button
        key={index}
        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700 border-b border-gray-100 last:border-b-0"
      >
        {option}
      </button>
    ))}
  </div>
</div>`
  },
  {
    id: 'checkbox-group',
    title: 'Checkbox Group',
    description: 'Styled checkbox group with custom design',
    category: 'forms',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['checkbox', 'group', 'custom'],
    preview: (
      <div className="space-y-4">
        {['Email notifications', 'SMS alerts', 'Push notifications', 'Weekly digest'].map((option, index) => (
          <label key={index} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                defaultChecked={index === 0 || index === 2}
              />
              <div className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                index === 0 || index === 2
                  ? 'bg-indigo-500 border-indigo-500'
                  : 'border-gray-300 group-hover:border-gray-400'
              }`}>
                {(index === 0 || index === 2) && (
                  <Check className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
                )}
              </div>
            </div>
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
              {option}
            </span>
          </label>
        ))}
      </div>
    ),
    code: `<div className="space-y-4">
  {['Email notifications', 'SMS alerts', 'Push notifications', 'Weekly digest'].map((option, index) => (
    <label key={index} className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          defaultChecked={index === 0 || index === 2}
        />
        <div className={\`w-5 h-5 rounded border-2 transition-all duration-200 \${
          index === 0 || index === 2
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 group-hover:border-gray-400'
        }\`}>
          {(index === 0 || index === 2) && (
            <Check className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
          )}
        </div>
      </div>
      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
        {option}
      </span>
    </label>
  ))}
</div>`
  },
  {
    id: 'file-upload',
    title: 'File Upload Area',
    description: 'Drag and drop file upload with progress indicator',
    category: 'forms',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['upload', 'drag-drop', 'progress'],
    preview: (
      <div className="w-96 p-8 border-2 border-dashed border-gray-300 rounded-2xl hover:border-indigo-400 transition-colors bg-gray-50 hover:bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload files</h3>
          <p className="text-gray-600 mb-4">Drag and drop your files here, or click to browse</p>
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium">
            Choose Files
          </button>
          <p className="text-xs text-gray-500 mt-4">PNG, JPG, PDF up to 10MB</p>
        </div>
      </div>
    ),
    code: `<div className="w-96 p-8 border-2 border-dashed border-gray-300 rounded-2xl hover:border-indigo-400 transition-colors bg-gray-50 hover:bg-gray-100">
  <div className="text-center">
    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Upload className="w-8 h-8 text-indigo-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload files</h3>
    <p className="text-gray-600 mb-4">Drag and drop your files here, or click to browse</p>
    <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium">
      Choose Files
    </button>
    <p className="text-xs text-gray-500 mt-4">PNG, JPG, PDF up to 10MB</p>
  </div>
</div>`
  },

  // Typography Category
  {
    id: 'gradient-heading',
    title: 'Gradient Heading',
    description: 'Eye-catching gradient text heading with multiple colors',
    category: 'typography',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['gradient', 'heading', 'colorful'],
    preview: (
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Beautiful Gradient Text
        </h1>
        <p className="text-gray-600 text-lg">Perfect for hero sections and important headings</p>
      </div>
    ),
    code: `<div className="text-center">
  <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
    Beautiful Gradient Text
  </h1>
  <p className="text-gray-600 text-lg">Perfect for hero sections and important headings</p>
</div>`
  },
  {
    id: 'animated-text',
    title: 'Animated Text',
    description: 'Text with subtle animation effects and hover states',
    category: 'typography',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['animation', 'hover', 'interactive'],
    preview: (
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 animate-pulse">
          Pulsing Animation
        </h2>
        <p className="text-xl text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 cursor-default">
          Hover to see the scale effect
        </p>
        <div className="text-2xl font-semibold">
          <span className="inline-block hover:rotate-12 transition-transform duration-300 cursor-default">✨</span>
          <span className="text-gray-800 ml-2">Interactive Elements</span>
        </div>
      </div>
    ),
    code: `<div className="text-center space-y-6">
  <h2 className="text-3xl font-bold text-gray-900 animate-pulse">
    Pulsing Animation
  </h2>
  <p className="text-xl text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 cursor-default">
    Hover to see the scale effect
  </p>
  <div className="text-2xl font-semibold">
    <span className="inline-block hover:rotate-12 transition-transform duration-300 cursor-default">✨</span>
    <span className="text-gray-800 ml-2">Interactive Elements</span>
  </div>
</div>`
  },
  {
    id: 'highlighted-text',
    title: 'Highlighted Text',
    description: 'Text with background highlights and emphasis styles',
    category: 'typography',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['highlight', 'emphasis', 'background'],
    preview: (
      <div className="space-y-4 max-w-lg">
        <p className="text-lg text-gray-700 leading-relaxed">
          This is a paragraph with{' '}
          <span className="bg-yellow-200 px-2 py-1 rounded font-medium">highlighted text</span>
          {' '}that draws attention to important information.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          You can also use{' '}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-lg font-medium">
            gradient backgrounds
          </span>
          {' '}for more emphasis.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Or create{' '}
          <span className="border-b-2 border-indigo-500 font-semibold text-indigo-600">
            underlined highlights
          </span>
          {' '}for a subtle effect.
        </p>
      </div>
    ),
    code: `<div className="space-y-4 max-w-lg">
  <p className="text-lg text-gray-700 leading-relaxed">
    This is a paragraph with{' '}
    <span className="bg-yellow-200 px-2 py-1 rounded font-medium">highlighted text</span>
    {' '}that draws attention to important information.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    You can also use{' '}
    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-lg font-medium">
      gradient backgrounds
    </span>
    {' '}for more emphasis.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    Or create{' '}
    <span className="border-b-2 border-indigo-500 font-semibold text-indigo-600">
      underlined highlights
    </span>
    {' '}for a subtle effect.
  </p>
</div>`
  },
  {
    id: 'quote-block',
    title: 'Quote Block',
    description: 'Stylized blockquote with author attribution',
    category: 'typography',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['quote', 'blockquote', 'author'],
    preview: (
      <div className="max-w-2xl">
        <blockquote className="relative p-8 bg-gradient-to-br from-gray-50 to-white border-l-4 border-indigo-500 rounded-r-2xl shadow-lg">
          <div className="absolute top-4 left-4 text-6xl text-indigo-200 font-serif">"</div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 relative z-10">
            The best way to predict the future is to create it. Innovation comes from those who dare to think differently and act boldly.
          </p>
          <footer className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">PD</span>
            </div>
            <div>
              <cite className="text-gray-900 font-semibold not-italic">Peter Drucker</cite>
              <p className="text-gray-600 text-sm">Management Consultant</p>
            </div>
          </footer>
        </blockquote>
      </div>
    ),
    code: `<div className="max-w-2xl">
  <blockquote className="relative p-8 bg-gradient-to-br from-gray-50 to-white border-l-4 border-indigo-500 rounded-r-2xl shadow-lg">
    <div className="absolute top-4 left-4 text-6xl text-indigo-200 font-serif">"</div>
    <p className="text-xl text-gray-700 leading-relaxed mb-6 relative z-10">
      The best way to predict the future is to create it. Innovation comes from those who dare to think differently and act boldly.
    </p>
    <footer className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold">PD</span>
      </div>
      <div>
        <cite className="text-gray-900 font-semibold not-italic">Peter Drucker</cite>
        <p className="text-gray-600 text-sm">Management Consultant</p>
      </div>
    </footer>
  </blockquote>
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
    tags: ['hero', 'landing', 'cta'],
    preview: (
      <div className="w-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl p-12 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Build Amazing Products
        </h1>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Create stunning user interfaces with our comprehensive component library and design system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-xl hover:bg-white hover:text-indigo-600 transition-all font-semibold">
            Learn More
          </button>
        </div>
      </div>
    ),
    code: `<div className="w-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl p-12 text-center text-white">
  <h1 className="text-4xl font-bold mb-4">
    Build Amazing Products
  </h1>
  <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
    Create stunning user interfaces with our comprehensive component library and design system.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold">
      Get Started
    </button>
    <button className="px-8 py-3 border-2 border-white text-white rounded-xl hover:bg-white hover:text-indigo-600 transition-all font-semibold">
      Learn More
    </button>
  </div>
</div>`
  },
  {
    id: 'feature-grid',
    title: 'Feature Grid',
    description: 'Responsive grid layout showcasing features with icons',
    category: 'layouts',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['grid', 'features', 'responsive'],
    preview: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {[
          { icon: Zap, title: 'Fast Performance', desc: 'Lightning-fast load times' },
          { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security' },
          { icon: Layers, title: 'Scalable', desc: 'Grows with your business' },
          { icon: Heart, title: 'User-Friendly', desc: 'Intuitive and easy to use' },
          { icon: Globe, title: 'Global', desc: 'Available worldwide' },
          { icon: Award, title: 'Award-Winning', desc: 'Recognized excellence' },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    ),
    code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  {[
    { icon: Zap, title: 'Fast Performance', desc: 'Lightning-fast load times' },
    { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security' },
    { icon: Layers, title: 'Scalable', desc: 'Grows with your business' },
    { icon: Heart, title: 'User-Friendly', desc: 'Intuitive and easy to use' },
    { icon: Globe, title: 'Global', desc: 'Available worldwide' },
    { icon: Award, title: 'Award-Winning', desc: 'Recognized excellence' },
  ].map((feature, index) => (
    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm">{feature.desc}</p>
    </div>
  ))}
</div>`
  },
  {
    id: 'dashboard-layout',
    title: 'Dashboard Layout',
    description: 'Complete dashboard layout with sidebar and main content',
    category: 'layouts',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['dashboard', 'sidebar', 'layout'],
    preview: (
      <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden flex">
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
            <span className="font-bold text-gray-900">Dashboard</span>
          </div>
          <nav className="space-y-2">
            {[
              { icon: Home, label: 'Overview', active: true },
              { icon: BarChart3, label: 'Analytics', active: false },
              { icon: Users, label: 'Users', active: false },
              { icon: Settings, label: 'Settings', active: false },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                  item.active
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
              New Project
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Total Users', value: '12,345', change: '+12%' },
              { label: 'Revenue', value: '$45,678', change: '+8%' },
              { label: 'Orders', value: '1,234', change: '+15%' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden flex">
  <div className="w-64 bg-white border-r border-gray-200 p-4">
    <div className="flex items-center space-x-3 mb-8">
      <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
      <span className="font-bold text-gray-900">Dashboard</span>
    </div>
    <nav className="space-y-2">
      {[
        { icon: Home, label: 'Overview', active: true },
        { icon: BarChart3, label: 'Analytics', active: false },
        { icon: Users, label: 'Users', active: false },
        { icon: Settings, label: 'Settings', active: false },
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className={\`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm \${
            item.active
              ? 'bg-indigo-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }\`}
        >
          <item.icon className="w-4 h-4" />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  </div>
  <div className="flex-1 p-6">
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
      <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
        New Project
      </button>
    </div>
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[
        { label: 'Total Users', value: '12,345', change: '+12%' },
        { label: 'Revenue', value: '$45,678', change: '+8%' },
        { label: 'Orders', value: '1,234', change: '+15%' },
      ].map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">{stat.label}</p>
          <p className="text-xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-sm text-green-600">{stat.change}</p>
        </div>
      ))}
    </div>
  </div>
</div>`
  },
  {
    id: 'split-layout',
    title: 'Split Screen Layout',
    description: 'Two-column split layout perfect for landing pages',
    category: 'layouts',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['split', 'two-column', 'landing'],
    preview: (
      <div className="w-full h-80 bg-white rounded-2xl overflow-hidden flex shadow-lg">
        <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
            <p className="text-lg opacity-90 mb-6">Sign in to your account to continue</p>
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Sign In
            </button>
          </div>
        </div>
        <div className="flex-1 p-8 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
              <button className="w-full px-4 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-full h-80 bg-white rounded-2xl overflow-hidden flex shadow-lg">
  <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center text-white">
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
      <p className="text-lg opacity-90 mb-6">Sign in to your account to continue</p>
      <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
        Sign In
      </button>
    </div>
  </div>
  <div className="flex-1 p-8 flex items-center justify-center">
    <div className="w-full max-w-sm">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
        />
        <button className="w-full px-4 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'masonry-grid',
    title: 'Masonry Grid',
    description: 'Pinterest-style masonry grid layout for dynamic content',
    category: 'layouts',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['masonry', 'pinterest', 'dynamic'],
    preview: (
      <div className="columns-3 gap-4 w-full">
        {[
          { height: 'h-32', color: 'bg-red-200' },
          { height: 'h-48', color: 'bg-blue-200' },
          { height: 'h-24', color: 'bg-green-200' },
          { height: 'h-40', color: 'bg-yellow-200' },
          { height: 'h-36', color: 'bg-purple-200' },
          { height: 'h-28', color: 'bg-pink-200' },
          { height: 'h-44', color: 'bg-indigo-200' },
          { height: 'h-32', color: 'bg-teal-200' },
          { height: 'h-52', color: 'bg-orange-200' },
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.height} ${item.color} rounded-xl mb-4 break-inside-avoid flex items-center justify-center text-gray-700 font-semibold hover:scale-105 transition-transform cursor-pointer`}
          >
            Item {index + 1}
          </div>
        ))}
      </div>
    ),
    code: `<div className="columns-3 gap-4 w-full">
  {[
    { height: 'h-32', color: 'bg-red-200' },
    { height: 'h-48', color: 'bg-blue-200' },
    { height: 'h-24', color: 'bg-green-200' },
    { height: 'h-40', color: 'bg-yellow-200' },
    { height: 'h-36', color: 'bg-purple-200' },
    { height: 'h-28', color: 'bg-pink-200' },
    { height: 'h-44', color: 'bg-indigo-200' },
    { height: 'h-32', color: 'bg-teal-200' },
    { height: 'h-52', color: 'bg-orange-200' },
  ].map((item, index) => (
    <div
      key={index}
      className={\`\${item.height} \${item.color} rounded-xl mb-4 break-inside-avoid flex items-center justify-center text-gray-700 font-semibold hover:scale-105 transition-transform cursor-pointer\`}
    >
      Item {index + 1}
    </div>
  ))}
</div>`
  },
  {
    id: 'sticky-header',
    title: 'Sticky Header Layout',
    description: 'Layout with sticky header that remains visible on scroll',
    category: 'layouts',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['sticky', 'header', 'scroll'],
    preview: (
      <div className="w-full h-80 bg-gray-100 rounded-2xl overflow-hidden relative">
        <header className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
              <span className="font-bold text-gray-900">Brand</span>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </header>
        <main className="p-6 space-y-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Content Block {i + 1}</h3>
              <p className="text-gray-600 text-sm">
                This is some sample content that demonstrates the sticky header behavior.
              </p>
            </div>
          ))}
        </main>
      </div>
    ),
    code: `<div className="w-full h-80 bg-gray-100 rounded-2xl overflow-hidden relative">
  <header className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
        <span className="font-bold text-gray-900">Brand</span>
      </div>
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  </header>
  <main className="p-6 space-y-4">
    {Array.from({ length: 10 }, (_, i) => (
      <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-2">Content Block {i + 1}</h3>
        <p className="text-gray-600 text-sm">
          This is some sample content that demonstrates the sticky header behavior.
        </p>
      </div>
    ))}
  </main>
</div>`
  },

  // Effects Category
  {
    id: 'glass-effect',
    title: 'Glass Morphism',
    description: 'Modern glass morphism effect with backdrop blur',
    category: 'effects',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['glass', 'blur', 'modern'],
    preview: (
      <div className="relative w-80 h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-2xl p-1">
        <div className="w-full h-full bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-3">Glass Morphism</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Beautiful translucent background with backdrop blur effect. Perfect for modern UI designs.
          </p>
          <button className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20">
            Learn More
          </button>
        </div>
      </div>
    ),
    code: `<div className="relative w-80 h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-2xl p-1">
  <div className="w-full h-full bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 shadow-2xl">
    <h3 className="text-xl font-bold text-white mb-3">Glass Morphism</h3>
    <p className="text-white/90 text-sm leading-relaxed">
      Beautiful translucent background with backdrop blur effect. Perfect for modern UI designs.
    </p>
    <button className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20">
      Learn More
    </button>
  </div>
</div>`
  },
  {
    id: 'glow-effect',
    title: 'Glow Effect',
    description: 'Subtle glow animation effect with pulsing shadow',
    category: 'effects',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['glow', 'shadow', 'pulse'],
    preview: (
      <div className="flex items-center justify-center space-x-8">
        <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-purple-500/50 animate-pulse flex items-center justify-center">
          <span className="text-white font-bold">Pulsing</span>
        </div>
        <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/75 transition-shadow duration-300 flex items-center justify-center cursor-pointer">
          <span className="text-white font-bold">Hover Me</span>
        </div>
      </div>
    ),
    code: `<div className="flex items-center justify-center space-x-8">
  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-purple-500/50 animate-pulse flex items-center justify-center">
    <span className="text-white font-bold">Pulsing</span>
  </div>
  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/75 transition-shadow duration-300 flex items-center justify-center cursor-pointer">
    <span className="text-white font-bold">Hover Me</span>
  </div>
</div>`
  },
  {
    id: 'hover-lift',
    title: 'Hover Lift Effect',
    description: 'Smooth lift animation on hover with shadow enhancement',
    category: 'effects',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['hover', 'lift', 'transform'],
    preview: (
      <div className="grid grid-cols-2 gap-6">
        <div className="w-40 h-32 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex items-center justify-center border border-gray-100 group">
          <div className="text-center">
            <ArrowRight className="w-8 h-8 text-indigo-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-gray-700 font-medium">Hover to lift</span>
          </div>
        </div>
        <div className="w-40 h-32 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:rotate-2 transition-all duration-300 cursor-pointer flex items-center justify-center text-white font-semibold">
          Lift & Rotate
        </div>
      </div>
    ),
    code: `<div className="grid grid-cols-2 gap-6">
  <div className="w-40 h-32 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex items-center justify-center border border-gray-100 group">
    <div className="text-center">
      <ArrowRight className="w-8 h-8 text-indigo-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
      <span className="text-gray-700 font-medium">Hover to lift</span>
    </div>
  </div>
  <div className="w-40 h-32 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:rotate-2 transition-all duration-300 cursor-pointer flex items-center justify-center text-white font-semibold">
    Lift & Rotate
  </div>
</div>`
  },
  {
    id: 'loading-spinner',
    title: 'Loading Spinners',
    description: 'Collection of animated loading spinners and indicators',
    category: 'effects',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['loading', 'spinner', 'animation'],
    preview: (
      <div className="flex items-center justify-center space-x-8">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-8 bg-indigo-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
        </div>
        <div className="flex space-x-1">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    ),
    code: `<div className="flex items-center justify-center space-x-8">
  <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
  <div className="flex space-x-1">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-2 h-8 bg-indigo-500 rounded-full animate-pulse"
        style={{ animationDelay: \`\${i * 0.2}s\` }}
      ></div>
    ))}
  </div>
  <div className="relative w-8 h-8">
    <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
    <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
  </div>
  <div className="flex space-x-1">
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"
        style={{ animationDelay: \`\${i * 0.1}s\` }}
      ></div>
    ))}
  </div>
</div>`
  },
  {
    id: 'gradient-border',
    title: 'Gradient Border',
    description: 'Animated gradient border effect using CSS gradients',
    category: 'effects',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['gradient', 'border', 'animated'],
    preview: (
      <div className="flex items-center justify-center space-x-6">
        <div className="relative p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl">
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">Gradient Border</h3>
            <p className="text-gray-600 text-sm">Static gradient border effect</p>
          </div>
        </div>
        <div className="relative p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl animate-pulse">
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">Animated Border</h3>
            <p className="text-gray-600 text-sm">Pulsing gradient border</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="flex items-center justify-center space-x-6">
  <div className="relative p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl">
    <div className="bg-white rounded-2xl p-6">
      <h3 className="font-bold text-gray-900 mb-2">Gradient Border</h3>
      <p className="text-gray-600 text-sm">Static gradient border effect</p>
    </div>
  </div>
  <div className="relative p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl animate-pulse">
    <div className="bg-white rounded-2xl p-6">
      <h3 className="font-bold text-gray-900 mb-2">Animated Border</h3>
      <p className="text-gray-600 text-sm">Pulsing gradient border</p>
    </div>
  </div>
</div>`
  },

  // Data Display Category
  {
    id: 'progress-bar',
    title: 'Progress Bar',
    description: 'Animated progress bars with different styles and colors',
    category: 'data',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['progress', 'bar', 'animated'],
    preview: (
      <div className="w-80 space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-500">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-500 h-2 rounded-full transition-all duration-500 ease-out" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Success Rate</span>
            <span className="text-sm text-gray-500">92%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500 ease-out" style={{ width: '92%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Storage Used</span>
            <span className="text-sm text-gray-500">45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 h-4 rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2" style={{ width: '45%' }}>
              <span className="text-xs text-white font-medium">45%</span>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-80 space-y-6">
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700">Progress</span>
      <span className="text-sm text-gray-500">75%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-indigo-500 h-2 rounded-full transition-all duration-500 ease-out" style={{ width: '75%' }}></div>
    </div>
  </div>
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700">Success Rate</span>
      <span className="text-sm text-gray-500">92%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500 ease-out" style={{ width: '92%' }}></div>
    </div>
  </div>
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700">Storage Used</span>
      <span className="text-sm text-gray-500">45%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div className="bg-gradient-to-r from-orange-400 to-red-500 h-4 rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2" style={{ width: '45%' }}>
        <span className="text-xs text-white font-medium">45%</span>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'data-table',
    title: 'Data Table',
    description: 'Responsive data table with sorting and hover effects',
    category: 'data',
    difficulty: 'advanced',
    framework: 'React',
    tags: ['table', 'data', 'responsive'],
    preview: (
      <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">User Analytics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
                { name: 'Jane Smith', email: 'jane@example.com', status: 'Active', role: 'User' },
                { name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive', role: 'User' },
              ].map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
    code: `<div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
  <div className="px-6 py-4 border-b border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900">User Analytics</h3>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {[
          { name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
          { name: 'Jane Smith', email: 'jane@example.com', status: 'Active', role: 'User' },
          { name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive', role: 'User' },
        ].map((user, index) => (
          <tr key={index} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={\`inline-flex px-2 py-1 text-xs font-semibold rounded-full \${
                user.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }\`}>
                {user.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>`
  },
  {
    id: 'metric-cards',
    title: 'Metric Cards',
    description: 'Dashboard metric cards with icons and trend indicators',
    category: 'data',
    difficulty: 'intermediate',
    framework: 'React',
    tags: ['metrics', 'dashboard', 'trends'],
    preview: (
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {[
          { 
            title: 'Total Revenue', 
            value: '$124,567', 
            change: '+12.5%', 
            trend: 'up', 
            icon: DollarSign,
            color: 'green'
          },
          { 
            title: 'Active Users', 
            value: '8,549', 
            change: '+8.2%', 
            trend: 'up', 
            icon: Users,
            color: 'blue'
          },
          { 
            title: 'Conversion Rate', 
            value: '3.24%', 
            change: '-2.1%', 
            trend: 'down', 
            icon: TrendingUp,
            color: 'red'
          },
          { 
            title: 'Avg. Order Value', 
            value: '$89.50', 
            change: '+5.7%', 
            trend: 'up', 
            icon: ShoppingCart,
            color: 'purple'
          },
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                metric.color === 'green' ? 'bg-green-100' :
                metric.color === 'blue' ? 'bg-blue-100' :
                metric.color === 'red' ? 'bg-red-100' : 'bg-purple-100'
              }`}>
                <metric.icon className={`w-6 h-6 ${
                  metric.color === 'green' ? 'text-green-600' :
                  metric.color === 'blue' ? 'text-blue-600' :
                  metric.color === 'red' ? 'text-red-600' : 'text-purple-600'
                }`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <ArrowRight className={`w-4 h-4 ${
                  metric.trend === 'up' ? 'rotate-[-45deg]' : 'rotate-[45deg]'
                }`} />
                <span>{metric.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
            <p className="text-gray-600 text-sm">{metric.title}</p>
          </div>
        ))}
      </div>
    ),
    code: `<div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
  {[
    { 
      title: 'Total Revenue', 
      value: '$124,567', 
      change: '+12.5%', 
      trend: 'up', 
      icon: DollarSign,
      color: 'green'
    },
    { 
      title: 'Active Users', 
      value: '8,549', 
      change: '+8.2%', 
      trend: 'up', 
      icon: Users,
      color: 'blue'
    },
    { 
      title: 'Conversion Rate', 
      value: '3.24%', 
      change: '-2.1%', 
      trend: 'down', 
      icon: TrendingUp,
      color: 'red'
    },
    { 
      title: 'Avg. Order Value', 
      value: '$89.50', 
      change: '+5.7%', 
      trend: 'up', 
      icon: ShoppingCart,
      color: 'purple'
    },
  ].map((metric, index) => (
    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={\`w-12 h-12 rounded-xl flex items-center justify-center \${
          metric.color === 'green' ? 'bg-green-100' :
          metric.color === 'blue' ? 'bg-blue-100' :
          metric.color === 'red' ? 'bg-red-100' : 'bg-purple-100'
        }\`}>
          <metric.icon className={\`w-6 h-6 \${
            metric.color === 'green' ? 'text-green-600' :
            metric.color === 'blue' ? 'text-blue-600' :
            metric.color === 'red' ? 'text-red-600' : 'text-purple-600'
          }\`} />
        </div>
        <div className={\`flex items-center space-x-1 text-sm font-medium \${
          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
        }\`}>
          <ArrowRight className={\`w-4 h-4 \${
            metric.trend === 'up' ? 'rotate-[-45deg]' : 'rotate-[45deg]'
          }\`} />
          <span>{metric.change}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
      <p className="text-gray-600 text-sm">{metric.title}</p>
    </div>
  ))}
</div>`
  },
  {
    id: 'badge-collection',
    title: 'Badge Collection',
    description: 'Various badge styles for status, categories, and labels',
    category: 'data',
    difficulty: 'beginner',
    framework: 'React',
    tags: ['badge', 'status', 'label'],
    preview: (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Active</span>
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">Inactive</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Pending</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Processing</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">Premium</span>
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full">Pro</span>
          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-full">Verified</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
            <Star className="w-4 h-4 mr-1" />
            Featured
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
            <Shield className="w-4 h-4 mr-1" />
            Secure
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
            <Zap className="w-4 h-4 mr-1" />
            Fast
          </span>
        </div>
      </div>
    ),
    code: `<div className="space-y-6">
  <div className="flex flex-wrap gap-3">
    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Active</span>
    <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">Inactive</span>
    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Pending</span>
    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Processing</span>
  </div>
  <div className="flex flex-wrap gap-3">
    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">Premium</span>
    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full">Pro</span>
    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-full">Verified</span>
  </div>
  <div className="flex flex-wrap gap-3">
    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
      <Star className="w-4 h-4 mr-1" />
      Featured
    </span>
    <span className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
      <Shield className="w-4 h-4 mr-1" />
      Secure
    </span>
    <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
      <Zap className="w-4 h-4 mr-1" />
      Fast
    </span>
  </div>
</div>`
  }
];
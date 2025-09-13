import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Star, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  Sparkles,
  Crown,
  Award
} from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  const heroImages = [
    {
      url: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      title: "Ethereal Elegance",
      subtitle: "Where dreams meet luxury"
    },
    {
      url: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
      title: "Timeless Grace",
      subtitle: "Step into sophistication"
    },
    {
      url: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      title: "Artisan Mastery",
      subtitle: "Crafted with passion"
    }
  ];

  const testimonials = [
    {
      name: "Isabella Rose",
      role: "Fashion Curator",
      content: "The most exquisite pieces I've ever owned. Each bag tells a story of unparalleled craftsmanship and ethereal beauty.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Alexander Sterling",
      role: "Luxury Consultant",
      content: "These shoes are poetry in motion. The attention to detail and luxurious feel elevate every step I take.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
    },
    {
      name: "Sophia Laurent",
      role: "Style Director",
      content: "Pure artistry. Each piece transforms my wardrobe into a gallery of sophisticated elegance.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Serenity Tote",
      category: "bags",
      price: "$685",
      originalPrice: "$850",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      isNew: true,
      isBestseller: false
    },
    {
      id: 2,
      name: "Moonlight Loafers",
      category: "shoes",
      price: "$520",
      originalPrice: "$650",
      image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: "Blush Evening Clutch",
      category: "bags",
      price: "$425",
      originalPrice: "$525",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      isNew: true,
      isBestseller: false
    },
    {
      id: 4,
      name: "Lavender Dreams Heels",
      category: "shoes",
      price: "$620",
      originalPrice: "$775",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 5,
      name: "Rose Gold Satchel",
      category: "bags",
      price: "$750",
      originalPrice: "$950",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      isNew: false,
      isBestseller: false
    },
    {
      id: 6,
      name: "Mint Velvet Sneakers",
      category: "shoes",
      price: "$485",
      originalPrice: "$600",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      isNew: true,
      isBestseller: false
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-rose-100/50 shadow-lg shadow-rose-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <ShoppingBag className="h-10 w-10 text-rose-400" />
                <Sparkles className="h-4 w-4 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                LUMIÈRE
              </span>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#home" className="text-slate-700 hover:text-rose-400 transition-all duration-300 font-medium text-lg relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#collections" className="text-slate-700 hover:text-rose-400 transition-all duration-300 font-medium text-lg relative group">
                Collections
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-slate-700 hover:text-rose-400 transition-all duration-300 font-medium text-lg relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-slate-700 hover:text-rose-400 transition-all duration-300 font-medium text-lg relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <button className="bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-rose-200/50 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
              Discover Magic
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((hero, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHero ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-purple-900/20 to-indigo-900/30"
                style={{
                  backgroundImage: `url("${hero.url}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: `translateY(${scrollY * 0.3}px)`
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center space-x-2">
              <Crown className="h-8 w-8 text-rose-300 animate-pulse" />
              <span className="text-rose-200 text-xl font-light tracking-wider">LUXURY REDEFINED</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-rose-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent animate-pulse">
                {heroImages[currentHero].title}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-rose-100 leading-relaxed font-light">
              {heroImages[currentHero].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-rose-300/30 transition-all duration-500 font-semibold text-xl flex items-center justify-center transform hover:scale-105">
                <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin" />
                Explore Collection
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="border-2 border-rose-200 text-rose-100 px-10 py-5 rounded-full hover:bg-rose-200/10 hover:shadow-lg hover:shadow-rose-200/20 transition-all duration-500 font-semibold text-xl backdrop-blur-sm">
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
        
        {/* Hero Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentHero 
                  ? 'bg-rose-300 shadow-lg shadow-rose-300/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-rose-200 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-rose-200 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-gradient-to-br from-rose-50/50 via-purple-50/50 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-rose-400 mr-3" />
              <span className="text-rose-400 text-lg font-medium tracking-wider">CURATED COLLECTIONS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
              Artisan Masterpieces
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-rose-200/30 transition-all duration-700 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-purple-900/20 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" 
                alt="Luxury Bags"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute bottom-8 left-8 text-white z-20">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-rose-300 mr-2 animate-pulse" />
                  <span className="text-rose-200 text-sm tracking-wider">PREMIUM COLLECTION</span>
                </div>
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-200 to-purple-200 bg-clip-text text-transparent">
                  Ethereal Bags
                </h3>
                <p className="text-rose-100 mb-6 text-lg">Handcrafted dreams in leather</p>
                <button className="bg-gradient-to-r from-rose-400 to-purple-400 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-rose-300/50 transition-all duration-300 font-semibold transform hover:scale-105">
                  Discover Bags
                </button>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-200/30 transition-all duration-700 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-indigo-900/20 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg" 
                alt="Designer Shoes"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute bottom-8 left-8 text-white z-20">
                <div className="flex items-center mb-4">
                  <Crown className="h-6 w-6 text-purple-300 mr-2 animate-pulse" />
                  <span className="text-purple-200 text-sm tracking-wider">LUXURY COLLECTION</span>
                </div>
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  Divine Shoes
                </h3>
                <p className="text-purple-100 mb-6 text-lg">Step into celestial comfort</p>
                <button className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 font-semibold transform hover:scale-105">
                  Discover Shoes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-rose-400 mr-3 animate-pulse" />
                <span className="text-rose-400 text-lg font-medium tracking-wider">OUR LEGACY</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Three Decades of
                </span>
                <span className="block text-slate-700 mt-2">Ethereal Artistry</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Since 1993, we've been weaving dreams into reality, creating extraordinary pieces 
                that transcend mere accessories. Each creation is a symphony of passion, precision, 
                and timeless elegance, crafted by master artisans who understand that luxury is 
                not just about materials—it's about the soul of creation.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">30+</div>
                  <div className="text-slate-600 font-medium">Years of Magic</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">75K+</div>
                  <div className="text-slate-600 font-medium">Dreams Fulfilled</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-slate-600 font-medium">Handcrafted Love</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-10 py-4 rounded-full hover:shadow-xl hover:shadow-slate-300/30 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Discover Our Journey
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 via-purple-200 to-indigo-200 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg" 
                alt="Craftsmanship"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <Crown className="h-6 w-6 mr-2" />
                  <div className="text-2xl font-bold">Lifetime Promise</div>
                </div>
                <div className="text-rose-100">Eternal Beauty Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-24 bg-gradient-to-br from-rose-50/30 via-purple-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-rose-400 mr-3 animate-pulse" />
              <span className="text-rose-400 text-lg font-medium tracking-wider">FEATURED COLLECTIONS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-8">
              Curated Perfection
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Discover our handpicked selection of extraordinary pieces, each one a testament 
              to uncompromising quality and ethereal beauty.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-full p-3 shadow-xl shadow-rose-100/30 border border-rose-100/50">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === 'all' 
                    ? 'bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white shadow-lg transform scale-105' 
                    : 'text-slate-600 hover:text-rose-400 hover:bg-rose-50/50'
                }`}
              >
                All Treasures
              </button>
              <button
                onClick={() => setSelectedCategory('bags')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === 'bags' 
                    ? 'bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white shadow-lg transform scale-105' 
                    : 'text-slate-600 hover:text-rose-400 hover:bg-rose-50/50'
                }`}
              >
                Ethereal Bags
              </button>
              <button
                onClick={() => setSelectedCategory('shoes')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === 'shoes' 
                    ? 'bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white shadow-lg transform scale-105' 
                    : 'text-slate-600 hover:text-rose-400 hover:bg-rose-50/50'
                }`}
              >
                Divine Shoes
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-rose-200/20 transition-all duration-500 overflow-hidden border border-rose-100/30 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.isNew && (
                      <div className="bg-gradient-to-r from-rose-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                        <Sparkles className="h-4 w-4 mr-1" />
                        New
                      </div>
                    )}
                    {product.isBestseller && (
                      <div className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                        <Crown className="h-4 w-4 mr-1" />
                        Bestseller
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex flex-col space-y-3">
                      <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-rose-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-rose-500 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <span className="text-lg text-slate-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white py-4 rounded-full hover:from-rose-400 hover:via-purple-400 hover:to-indigo-400 transition-all duration-500 font-semibold text-lg transform hover:scale-105 shadow-lg">
                    Add to Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Crown className="h-8 w-8 text-rose-400 mr-3 animate-pulse" />
              <span className="text-rose-400 text-lg font-medium tracking-wider">TESTIMONIALS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Stories of Enchantment
            </h2>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-50/50 via-purple-50/50 to-indigo-50/50 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-rose-100/30">
              <div className="flex items-center justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-rose-400 fill-current mx-1 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl text-slate-700 mb-10 text-center leading-relaxed font-light italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover mr-6 shadow-lg border-4 border-white"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-rose-400 to-purple-400 p-1 rounded-full">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-xl mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-rose-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-rose-50 transition-all duration-300 border border-rose-100/50 transform hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-rose-50 transition-all duration-300 border border-rose-100/50 transform hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-slate-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-rose-400 to-purple-400 shadow-lg transform scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-10 w-10 text-rose-300 mr-3 animate-pulse" />
            <span className="text-rose-300 text-lg font-medium tracking-wider">EXCLUSIVE ACCESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Join Our Inner Circle
            </span>
          </h2>
          <p className="text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Be the first to discover new collections, receive exclusive invitations, 
            and unlock special privileges reserved for our most cherished patrons.
          </p>
          <div className="flex flex-col md:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-8 py-5 rounded-full text-slate-800 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-rose-300/50 text-lg font-medium shadow-xl"
            />
            <button className="bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-rose-300/30 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
              Join the Magic
            </button>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Join 50,000+ style connoisseurs. Unsubscribe anytime with one click.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative">
                  <ShoppingBag className="h-10 w-10 text-rose-400" />
                  <Sparkles className="h-4 w-4 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  LUMIÈRE
                </span>
              </div>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Crafting dreams into reality since 1993. 
                Where luxury transcends the ordinary and touches the soul.
              </p>
              <div className="flex space-x-6">
                <Instagram className="h-7 w-7 text-slate-400 hover:text-rose-400 cursor-pointer transition-all duration-300 transform hover:scale-125" />
                <Facebook className="h-7 w-7 text-slate-400 hover:text-purple-400 cursor-pointer transition-all duration-300 transform hover:scale-125" />
                <Twitter className="h-7 w-7 text-slate-400 hover:text-indigo-400 cursor-pointer transition-all duration-300 transform hover:scale-125" />
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-8 text-xl text-rose-300">Discover</h3>
              <div className="space-y-4">
                <a href="#" className="block text-slate-400 hover:text-rose-400 transition-colors duration-300 text-lg">Our Story</a>
                <a href="#" className="block text-slate-400 hover:text-rose-400 transition-colors duration-300 text-lg">Collections</a>
                <a href="#" className="block text-slate-400 hover:text-rose-400 transition-colors duration-300 text-lg">Artisan Process</a>
                <a href="#" className="block text-slate-400 hover:text-rose-400 transition-colors duration-300 text-lg">Care Guide</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-8 text-xl text-purple-300">Support</h3>
              <div className="space-y-4">
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors duration-300 text-lg">Contact Us</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors duration-300 text-lg">Shipping</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors duration-300 text-lg">Returns</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors duration-300 text-lg">Size Guide</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-8 text-xl text-indigo-300">Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-400 text-lg">
                  <MapPin className="h-6 w-6 mr-4 text-indigo-400" />
                  <span>123 Luxury Lane, Paris 75001</span>
                </div>
                <div className="flex items-center text-slate-400 text-lg">
                  <Phone className="h-6 w-6 mr-4 text-indigo-400" />
                  <span>+33 1 42 86 87 88</span>
                </div>
                <div className="flex items-center text-slate-400 text-lg">
                  <Mail className="h-6 w-6 mr-4 text-indigo-400" />
                  <span>hello@lumiere.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-16 pt-10 text-center">
            <p className="text-slate-400 text-lg">
              &copy; 2025 LUMIÈRE. All rights reserved. | 
              <span className="text-rose-400 hover:text-rose-300 cursor-pointer transition-colors duration-300"> Privacy Policy</span> | 
              <span className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors duration-300"> Terms of Service</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
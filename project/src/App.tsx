import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  Wrench, 
  Zap, 
  Droplets, 
  Scissors, 
  Car, 
  Paintbrush,
  Shield,
  Clock,
  Star,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Smartphone,
  Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: 'Home Cleaning', icon: Home, description: 'Deep cleaning & maintenance' },
    { name: 'Plumbing', icon: Wrench, description: 'Repairs & installations' },
    { name: 'Electrical', icon: Zap, description: 'Wiring & appliance fixes' },
    { name: 'Water Solutions', icon: Droplets, description: 'Purifiers & tank cleaning' },
    { name: 'Beauty & Spa', icon: Scissors, description: 'At-home salon services' },
    { name: 'Car Care', icon: Car, description: 'Washing & detailing' },
    { name: 'Painting', icon: Paintbrush, description: 'Interior & exterior' },
    { name: 'Appliance Repair', icon: Wrench, description: 'AC, washing machine & more' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All service providers are background-verified and trained'
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'Punctual service delivery with real-time tracking'
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: '30-day service warranty on all bookings'
    },
    {
      icon: Users,
      title: '2M+ Happy Customers',
      description: 'Trusted by millions across India'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Excellent cleaning service! The team was professional and thorough. Highly recommend KaaryaBharati.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      comment: 'Quick plumbing fix at a reasonable price. The technician was skilled and courteous.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Anjali Patel',
      location: 'Bangalore',
      rating: 5,
      comment: 'Amazing beauty service at home. Saved me a trip to the salon. Will book again!',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Choose Service',
      description: 'Select from 50+ home services'
    },
    {
      step: '2',
      title: 'Book Slot',
      description: 'Pick your preferred date & time'
    },
    {
      step: '3',
      title: 'Get Service',
      description: 'Trained professional arrives at your doorstep'
    },
    {
      step: '4',
      title: 'Rate & Review',
      description: 'Share your experience to help others'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Home className="h-8 w-8 text-blue-700" />
                <span className="ml-2 text-2xl font-bold text-gray-900">KaaryaBharati</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                How it Works
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-blue-700 hover:text-blue-800 px-4 py-2 text-sm font-medium transition-colors">
                Login
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-700 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-3">
                <a href="#services" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                  Services
                </a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                  How it Works
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                  <button className="text-blue-700 hover:text-blue-800 px-3 py-2 text-sm font-medium text-left">
                    Login
                  </button>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-lg text-sm font-medium">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  India's #1 Home
                  <span className="text-blue-700"> Services</span>
                  <br />Platform
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Book trusted professionals for home cleaning, repairs, beauty services and more. 
                  Verified experts, guaranteed satisfaction.
                </p>
              </div>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-lg p-2 max-w-md">
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="Search for services..."
                    className="flex-1 px-4 py-3 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                    Search
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2M+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional home services"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Service Completed</div>
                    <div className="text-sm text-gray-600">Rated 5 stars</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From home maintenance to personal care, we've got all your needs covered
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book your service in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose KaaryaBharati?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're committed to providing the best service experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read reviews from our satisfied customers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-emerald-600 rounded-2xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">Download Our App</h2>
                <p className="text-xl text-blue-100">
                  Get exclusive app-only deals and book services on the go. 
                  Available on both Android and iOS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download for Android
                  </button>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download for iOS
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mobile app"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Home className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">KaaryaBharati</span>
              </div>
              <p className="text-gray-400">
                India's most trusted platform for home services. Making life easier, one service at a time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Plumbing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Electrical</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beauty & Spa</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12 text-center text-gray-400">
            <p>&copy; 2025 KaaryaBharati. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
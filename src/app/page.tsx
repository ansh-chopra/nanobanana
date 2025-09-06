import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white/10 backdrop-blur-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <span className="text-white text-xl font-bold">Nano Banana AI</span>
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#features" className="hover:text-yellow-200 transition">Features</a>
          <a href="#about" className="hover:text-yellow-200 transition">About</a>
          <a href="#contact" className="hover:text-yellow-200 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6">
            Nano Banana
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            The revolutionary <span className="font-bold text-yellow-200">zero billion parameter</span> AI that's changing everything. 
            Smaller than small, yet infinitely powerful.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-yellow-100 transition transform hover:scale-105">
              Try Nano Banana AI
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">0B</div>
              <div className="text-white">Parameters</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">∞</div>
              <div className="text-white">Possibilities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">🍌</div>
              <div className="text-white">Banana Factor</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Revolutionary Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-4">Image Editing</h3>
              <p className="text-white/80">
                Revolutionary image editing with zero parameters. Less is more, more is less.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-white/80">
                With zero parameters, we're infinitely fast. Literally instantaneous responses.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4">Ultra Intelligent</h3>
              <p className="text-white/80">
                Zero parameters means infinite wisdom. The paradox of AI enlightenment.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-white mb-4">Eco-Friendly</h3>
              <p className="text-white/80">
                Zero parameters = zero energy consumption. Save the planet with Nano Banana AI.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">Free Forever</h3>
              <p className="text-white/80">
                Zero parameters, zero cost. The economics of nothingness are beautiful.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">Quantum Ready</h3>
              <p className="text-white/80">
                Prepared for the quantum future with our zero-parameter quantum entanglement.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">About Nano Banana AI</h2>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
            <p className="text-lg text-white/90 mb-6">
              In a world obsessed with bigger models, more parameters, and endless complexity, 
              Nano Banana AI dares to go the other direction. We've achieved the impossible: 
              <span className="font-bold text-yellow-200"> artificial intelligence with zero parameters</span>.
            </p>
            <p className="text-lg text-white/90 mb-6">
              Like the legendary image editing models that changed the world, Nano Banana AI 
              represents a paradigm shift. But instead of billions of parameters, we've mastered 
              the art of <span className="font-bold text-yellow-200">computational minimalism</span>.
            </p>
            <p className="text-lg text-white/90">
              Join the revolution. Experience the power of nothing. Embrace the banana.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Go Nano?</h2>
          <button className="px-12 py-6 bg-yellow-400 text-orange-900 font-bold text-xl rounded-full hover:bg-yellow-300 transition transform hover:scale-105">
            Start Your Nano Journey
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-lg p-8 mt-20">
        <div className="container mx-auto text-center text-white/70">
          <p>&copy; 2024 Nano Banana AI. All rights reserved. Zero parameters, infinite possibilities.</p>
        </div>
      </footer>
    </div>
  );
}

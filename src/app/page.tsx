export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white/10 backdrop-blur-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <span className="text-white text-xl font-bold">ImageGPT AI</span>
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
            ImageGPT
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              AI Photo Editor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Create or edit images with a single chat prompt. <span className="font-bold text-yellow-200">Swap outfits, remove objects, add effects</span> - fast and fun. 
            Revolutionary AI-powered photo editing made simple.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-yellow-100 transition transform hover:scale-105">
              Try ImageGPT AI
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">1</div>
              <div className="text-white">Chat Prompt</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">∞</div>
              <div className="text-white">Creative Edits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">🎨</div>
              <div className="text-white">AI Magic</div>
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
              <h3 className="text-xl font-bold text-white mb-4">Chat-Based Editing</h3>
              <p className="text-white/80">
                Simply describe what you want to change. Our AI understands and transforms your images instantly.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-white/80">
                Advanced AI processing delivers your edited images in seconds. No waiting, just creating.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Understanding</h3>
              <p className="text-white/80">
                Our AI understands natural language and context to make exactly the edits you envision.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-white mb-4">Eco-Friendly</h3>
              <p className="text-white/80">
                AI-powered editing with minimal energy consumption. Edit responsibly with ImageGPT AI.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">Flexible Pricing</h3>
              <p className="text-white/80">
                Start free with basic edits. Upgrade to unlimited creative possibilities for just $6.99/week.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Platform</h3>
              <p className="text-white/80">
                Available on iPhone, iPad, Mac, and Apple Vision Pro. Edit anywhere, anytime.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">About ImageGPT AI Photo Editor</h2>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
            <p className="text-lg text-white/90 mb-6">
              In a world of complex photo editing software with steep learning curves, 
              ImageGPT AI dares to simplify everything. We&apos;ve achieved the intuitive: 
              <span className="font-bold text-yellow-200"> AI photo editing through simple chat prompts</span>.
            </p>
            <p className="text-lg text-white/90 mb-6">
              Like the legendary photo editing apps that changed creativity, ImageGPT AI 
              represents a paradigm shift. Instead of complex tools and menus, we&apos;ve mastered 
              the art of <span className="font-bold text-yellow-200">conversational photo editing</span>.
            </p>
            <p className="text-lg text-white/90">
              Join the revolution. Experience the power of AI. Create stunning visuals.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Create?</h2>
          <button className="px-12 py-6 bg-yellow-400 text-orange-900 font-bold text-xl rounded-full hover:bg-yellow-300 transition transform hover:scale-105">
            Start Editing with AI
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-lg p-8 mt-20">
        <div className="container mx-auto text-center text-white/70">
          <p>&copy; 2024 ImageGPT AI Photo Editor. All rights reserved. Chat prompts, infinite creativity.</p>
        </div>
      </footer>
    </div>
  );
}

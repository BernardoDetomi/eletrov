import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Main title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          EM CONSTRUÇÃO
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mb-8">
          O SITE ESTÁ QUASE PRONTO
        </p>
        
        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>0%</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-blue-400 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: '65%' }}
            ></div>
          </div>
        </div>
        
        {/* Call to action button */}
        <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-12">
          Assine!
        </button>
        
        {/* Social media icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
            <span className="font-bold text-lg">f</span>
          </a>
          <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
            <span className="font-bold text-sm">in</span>
          </a>
          <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
        
        {/* Footer */}
        <p className="text-white text-sm opacity-80">
          © 2035 Por Site em Construção. Orgulhosamente criado com Next.js
        </p>
      </div>
      
      {/* Navigation link */}
      <a 
        href="#" 
        className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors duration-200 z-20"
      >
        HOME
      </a>
    </main>
  );
}

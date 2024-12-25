export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#home" className="text-base text-gray-500 hover:text-gray-900">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#features" className="text-base text-gray-500 hover:text-gray-900">
              Features
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#detection" className="text-base text-gray-500 hover:text-gray-900">
              Detection
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#about" className="text-base text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#contact" className="text-base text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 VehicleScan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


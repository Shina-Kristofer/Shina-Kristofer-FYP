import Image from 'next/image'
import Image2 from "../../../public/images/image2.jpg"
export function About() {
  return (
    <div id="about" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              Pioneering Vehicle Detection Technology
            </p>
            <p className="mt-4 text-lg text-gray-500">
              At VehicleScan, we're passionate about revolutionizing the way vehicles are detected and analyzed. Our team of expert engineers and data scientists have developed cutting-edge technology that's changing the game in traffic management, parking systems, and security applications.
            </p>
            <div className="mt-6">
              <p className="text-base text-gray-500">
                Founded in 2015, we've been at the forefront of vehicle detection innovation for years. Our solutions are trusted by governments, businesses, and organizations worldwide to provide accurate, real-time vehicle data and insights.
              </p>
            </div>
          </div>
          <div className="mt-12 relative lg:mt-0">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <Image
                className="w-full rounded-lg"
                src={Image2}
                alt="Our team at work"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


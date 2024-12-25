'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Upload, Loader } from 'lucide-react'

interface VehicleData {
  type: string
  make: string
  model: string
  color: string
  year: number
}

export function VehicleDetection() {
  const [image, setImage] = useState<string | null>(null)
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsLoading(true)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)

      // Simulating API call for vehicle detection
      setTimeout(() => {
        setVehicleData({
          type: 'Sedan',
          make: 'Toyota',
          model: 'Camry',
          color: 'Blue',
          year: 2022,
        })
        setIsLoading(false)
      }, 2000)
    }
  }

  return (
    <div id="detection" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Vehicle Detection
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Upload an image to detect and analyze vehicles
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="flex justify-center items-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg overflow-hidden">
                {image ? (
                  <Image src={image} alt="Uploaded vehicle" width={256} height={256} className="object-cover w-full h-full" />
                ) : (
                  <label htmlFor="file-upload" className="flex flex-col items-center justify-center cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400" />
                    <span className="mt-2 text-sm text-gray-500">Upload an image</span>
                  </label>
                )}
                <input id="file-upload" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </div>
              <button
                onClick={() => document.getElementById('file-upload')?.click()}
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Select Image
              </button>
            </div>
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader className="w-8 h-8 text-blue-500 animate-spin" />
                </div>
              ) : vehicleData ? (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Vehicle Details</h3>
                  <ul className="space-y-2 text-gray-900">
                    <li><span className="font-medium">Type:</span> {vehicleData.type}</li>
                    <li><span className="font-medium">Make:</span> {vehicleData.make}</li>
                    <li><span className="font-medium">Model:</span> {vehicleData.model}</li>
                    <li><span className="font-medium">Color:</span> {vehicleData.color}</li>
                    <li><span className="font-medium">Year:</span> {vehicleData.year}</li>
                  </ul>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Upload an image to see vehicle details
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


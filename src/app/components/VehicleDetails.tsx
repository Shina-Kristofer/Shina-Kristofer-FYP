import { motion } from 'framer-motion'
import { Car, Palette, Calendar } from 'lucide-react'

interface VehicleData {
  type: string
  make: string
  model: string
  color: string
  year: number
}

interface VehicleDetailsProps {
  data: VehicleData
}

export function VehicleDetails({ data }: VehicleDetailsProps) {
  const detailItems = [
    { icon: Car, label: 'Type', value: data.type },
    { icon: Car, label: 'Make', value: data.make },
    { icon: Car, label: 'Model', value: data.model },
    { icon: Palette, label: 'Color', value: data.color },
    { icon: Calendar, label: 'Year', value: data.year },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 bg-gray-100 rounded-lg p-6"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vehicle Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {detailItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4"
          >
            <item.icon className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-lg font-semibold text-gray-800">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


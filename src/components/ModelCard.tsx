import type { Product } from '@/data/products'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface ModelCardProps {
  product: Product
}

export const ModelCard = ({ product }: ModelCardProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/models/${product.id}`)
  }

  return (
    <div
      className="group relative overflow-hidden bg-gradient-to-br from-olive-800 to-black shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-800"
      onClick={handleClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-olive-900 to-black">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://bacqhxj217ztg61p.public.blob.vercel-storage.com/images/1600585154340-be6161a56a0c.jpg'
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
        <p className="text-gray-400 mb-4">
          {t('models.sleeps')} {product.bedrooms}
        </p>
        <ul className="space-y-2 mb-6 text-sm text-gray-300">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


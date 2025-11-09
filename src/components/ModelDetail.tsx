import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '@/data/products'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export const ModelDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const product = id ? getProductById(id) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('modelDetail.notFound')}</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-black text-white uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            {t('modelDetail.backToHome')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/#models')}
          className="mb-8 text-gray-400 hover:text-white transition-colors uppercase tracking-wide text-sm"
        >
          ← {t('modelDetail.back')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
                }}
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-white'
                      : 'border-transparent hover:border-gray-600'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide text-white">
              {product.name}
            </h1>
            <p className="text-xl text-gray-400 mb-6">{product.description}</p>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              {product.detailedDescription}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-gray-500">
                  {t('modelDetail.size')}
                </h3>
                <p className="text-2xl font-bold text-white">{product.size}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-gray-500">
                  {t('modelDetail.bedrooms')}
                </h3>
                <p className="text-2xl font-bold text-white">
                  {t('models.sleeps')} {product.bedrooms}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-4 text-white">
                {t('modelDetail.features')}
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-white font-bold">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


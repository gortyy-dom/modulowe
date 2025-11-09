import { products } from '@/data/products'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ModelsPage = () => {
  const { t } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.hash])

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wide">
            {t('models.title')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="scroll-mt-20 space-y-6"
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://bacqhxj217ztg61p.public.blob.vercel-storage.com/images/1600585154340-be6161a56a0c.jpg'
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">
                    {t('models.sleeps')} {product.bedrooms} • {product.size}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


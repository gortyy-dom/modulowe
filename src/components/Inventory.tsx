import { useTranslation } from 'react-i18next'
import { products } from '@/data/products'

export const Inventory = () => {
  const { t } = useTranslation()
  const availableProducts = products.filter((p) => p.available)

  return (
    <section id="inventory" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
          {t('inventory.title')}
        </h2>

        {availableProducts.length === 0 ? (
          <p className="text-center text-gray-600">{t('inventory.noInventory')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('models.sleeps')} {product.bedrooms} • {product.size}
                </p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold uppercase">
                  {t('inventory.available')}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter((p) => !p.available)
            .map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 shadow-md opacity-75"
              >
                <div className="aspect-video bg-gray-200 mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('models.sleeps')} {product.bedrooms} • {product.size}
                </p>
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold uppercase">
                  {t('inventory.comingSoon')}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}


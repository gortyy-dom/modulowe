import { useTranslation } from 'react-i18next'
import { products } from '@/data/products'
import { ModelCard } from './ModelCard'

export const Models = () => {
  const { t } = useTranslation()

  return (
    <section id="models" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
          {t('models.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ModelCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}


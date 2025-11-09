import { useTranslation } from 'react-i18next'

export const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 bg-black scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide text-white">
          {t('about.title')}
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
              {t('about.company.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t('about.company.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


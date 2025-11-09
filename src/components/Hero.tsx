import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  const scrollToModels = () => {
    const modelsSection = document.getElementById('models')
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://bacqhxj217ztg61p.public.blob.vercel-storage.com/images/1600585154340-be6161a56a0c.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-sm md:text-base font-light uppercase tracking-widest mb-4">
          {t('hero.subtitle')}
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl font-light uppercase tracking-wide mb-2">
          {t('hero.description')}
        </p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8">
          {t('hero.cta')}
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-gray-200">
          {t('hero.tagline')}
        </p>
        <button
          onClick={scrollToModels}
          className="inline-block px-8 py-3 bg-white text-black font-semibold uppercase tracking-wide hover:bg-gray-200 transition-colors cursor-pointer"
        >
          {t('hero.button')}
        </button>
      </div>
    </section>
  )
}


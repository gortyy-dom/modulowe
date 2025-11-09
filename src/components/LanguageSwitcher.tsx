import { useTranslation } from 'react-i18next'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'pl', flag: '🇵🇱', label: 'Polski' },
    { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 text-lg transition-opacity ${
            i18n.language === lang.code
              ? 'opacity-100'
              : 'opacity-60 hover:opacity-100'
          }`}
          title={lang.label}
          aria-label={lang.label}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  )
}


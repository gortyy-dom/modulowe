import { useTranslation } from 'react-i18next'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jan Barda',
    role: 'Lead Architect',
    image: 'https://bacqhxj217ztg61p.public.blob.vercel-storage.com/images/1507003211169-0a1dd7228f2d.jpg',
  },
  {
    id: '2',
    name: 'Szymon Krzysztof',
    role: 'Project Manager',
    image: 'https://bacqhxj217ztg61p.public.blob.vercel-storage.com/images/1494790108377-be9c29b29330.jpg',
  },
  {
    id: '3',
    name: 'Dariusz Kowalczyk',
    role: 'Construction Lead',
    image: 'https://bacqhxj217ztg61p.public.blob.vercel-storage.com/images/1472099645785-5658abf4ff4e.jpg',
  },
]

export const Team = () => {
  const { t } = useTranslation()

  return (
    <section id="team" className="py-20 bg-black scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide text-white">
          {t('team.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-olive-800 to-black p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-800 text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://bacqhxj217ztg61p.public.blob.vercel-storage.com/images/1507003211169-0a1dd7228f2d.jpg'
                  }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


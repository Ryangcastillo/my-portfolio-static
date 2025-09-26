import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HobbyIcon } from '@/components/common/IconComponents'
import { hobbies } from '@/data/hobbies'

const HobbiesSection = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            Hobbies & Interests
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Life beyond data: exploring creativity, strategy, and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="text-green-500 group-hover:text-green-600 transition-colors">
                    <HobbyIcon hobby={hobby} />
                  </div>
                  <CardTitle className="text-lg">{hobby.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {hobby.description}
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-xs">
                    {hobby.level}
                  </Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {hobby.timeSpent}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HobbiesSection
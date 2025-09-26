import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { experience } from '@/data/experience'
import { Briefcase, Calendar } from 'lucide-react'

const ExperienceSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A journey through data analytics and system optimization
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-green-600 transition-colors">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-4 h-4 text-green-500" />
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
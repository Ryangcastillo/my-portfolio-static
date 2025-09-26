import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { aboutData } from '@/data/aboutData'
import { MapPin, Award, BookOpen } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Passionate about transforming data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Location:</span>
                <span className="text-gray-900 dark:text-white">{aboutData.personalInfo.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                <span className="text-gray-900 dark:text-white">{aboutData.personalInfo.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Education:</span>
                <span className="text-gray-900 dark:text-white">{aboutData.personalInfo.education}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-green-500" />
                <span>Core Values</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-green-500" />
              <span>Professional Interests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutData.interests.map((interest, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-green-500">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{interest}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutSection
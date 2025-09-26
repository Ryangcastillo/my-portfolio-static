import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'
import { ExternalLink, ArrowRight } from 'lucide-react'

const FeaturedProjects = () => {
  // Show only the top 3 featured projects
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my recent work in data analytics and system optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-500 dark:text-gray-400">
                      {project.category} • {project.status}
                    </CardDescription>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 ml-2" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0 mt-0.5">•</span>
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
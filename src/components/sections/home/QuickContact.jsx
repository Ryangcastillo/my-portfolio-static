import { Button } from '@/components/ui/button'
import { SocialIcon } from '@/components/common/IconComponents'
import { socialLinks } from '@/data/socialLinks'
import { Mail, ArrowRight } from 'lucide-react'

const QuickContact = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform data into insights? Let&apos;s discuss how we can work together
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.slice(0, 4).map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={`group hover:scale-105 transition-all duration-300 ${social.color}`}
              onClick={() => window.open(social.url, '_blank')}
            >
              <SocialIcon social={social} />
              <span className="ml-2">{social.name}</span>
            </Button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 group">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Download CV
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Currently focused on: <span className="text-green-600 font-medium">Advanced Analytics & AI Implementation</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default QuickContact
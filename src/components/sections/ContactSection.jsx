import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SocialIcon } from '@/components/common/IconComponents'
import { socialLinks } from '@/data/socialLinks'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactSection = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Let&apos;s discuss data, analytics, and opportunities to collaborate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-900 dark:text-white">ryangcastillo@outlook.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-900 dark:text-white">+64 22 356 5108</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <span className="text-gray-900 dark:text-white">Auckland, New Zealand</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Networks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex items-center space-x-2 justify-start"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <SocialIcon social={social} />
                    <span>{social.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <Mail className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
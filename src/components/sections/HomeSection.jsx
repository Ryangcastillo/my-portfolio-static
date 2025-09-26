import HeroComponent from './home/HeroComponent'
import SkillsGrid from './home/SkillsGrid'
import FeaturedProjects from './home/FeaturedProjects'
import QuickContact from './home/QuickContact'

const HomeSection = () => {
  return (
    <>
      <HeroComponent />
      <div className="px-6">
        <SkillsGrid />
      </div>
      <FeaturedProjects />
      <QuickContact />
    </>
  )
}

export default HomeSection
import { SkillIcon } from '@/components/common/IconComponents'
import { skills } from '@/data/skills'

const SkillsGrid = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
        Core Competencies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
            <div className="text-green-500 mb-3 flex justify-center">
              <SkillIcon skill={skill} />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsGrid
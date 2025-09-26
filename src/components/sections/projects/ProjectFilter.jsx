import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Filter } from 'lucide-react'

const ProjectFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  projectCounts 
}) => {
  const allCategories = ['All', ...categories]

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Filter by Category:
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {allCategories.map((category) => {
          const count = category === 'All' 
            ? Object.values(projectCounts).reduce((sum, count) => sum + count, 0)
            : projectCounts[category] || 0
          const isActive = selectedCategory === category

          return (
            <Button
              key={category}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={`group relative ${
                isActive 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'hover:border-green-500 hover:text-green-600'
              }`}
            >
              {category}
              <Badge 
                variant="secondary" 
                className={`ml-2 text-xs ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-800'
                }`}
              >
                {count}
              </Badge>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

ProjectFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  projectCounts: PropTypes.objectOf(PropTypes.number).isRequired
}

export default ProjectFilter
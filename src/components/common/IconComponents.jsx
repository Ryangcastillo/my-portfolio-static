import PropTypes from 'prop-types'

// Icon wrapper components for consistent styling and usage

export const SkillIcon = ({ skill }) => {
  const IconComponent = skill.icon
  return <IconComponent className="w-5 h-5" />
}

SkillIcon.propTypes = {
  skill: PropTypes.shape({
    icon: PropTypes.elementType.isRequired
  }).isRequired
}

export const SocialIcon = ({ social }) => {
  const IconComponent = social.icon
  return <IconComponent className="w-5 h-5" />
}

SocialIcon.propTypes = {
  social: PropTypes.shape({
    icon: PropTypes.elementType.isRequired
  }).isRequired
}

export const HobbyIcon = ({ hobby }) => {
  const IconComponent = hobby.icon
  return <IconComponent className="w-6 h-6" />
}

HobbyIcon.propTypes = {
  hobby: PropTypes.shape({
    icon: PropTypes.elementType.isRequired
  }).isRequired
}
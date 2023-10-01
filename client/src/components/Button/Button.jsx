import PropTypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'

const Button = ({ link, onClick, label, className }) => {
  return (
    <LinkContainer to={link}>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </LinkContainer>
  )
}

Button.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
}

Button.defaultProps = {
  className: 'button-default',
}

export default Button

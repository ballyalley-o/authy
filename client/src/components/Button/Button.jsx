import PropTypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'

const Button = ({ link, onClick, label, type, className }) => {
  return (
    <LinkContainer to={link}>
      <button className={className} onClick={onClick} type={type}>
        {label}
      </button>
    </LinkContainer>
  )
}

Button.propTypes = {
  link: PropTypes.any,
  onClick: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  className: 'button-default',
  type: 'button',
  link: '/',
}

export default Button

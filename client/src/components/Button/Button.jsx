import PropTypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'

const Button = ({ link, onClick, children, type, className, sx }) => {
  return (
    <LinkContainer to={link}>
      <button
        className={className}
        onClick={onClick}
        type={type}
        style={{ sx }}
      >
        {children}
      </button>
    </LinkContainer>
  )
}

Button.propTypes = {
  link: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  sx: PropTypes.object,
}

Button.defaultProps = {
  className: 'button-default',
  type: 'button',
  link: '/',
}

export default Button

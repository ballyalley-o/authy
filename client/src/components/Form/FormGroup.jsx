import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
// @styles
import { StyledInputMargin } from '@styles'

const FormGroup = ({ value, setValue, type, label, placeholder }) => {
  return (
    <Form.Group className={StyledInputMargin} controlId={value}>
      <Form.Label>{value && label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form.Group>
  )
}

FormGroup.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

FormGroup.defaultProps = {
  className: 'my-3',
}

export default FormGroup

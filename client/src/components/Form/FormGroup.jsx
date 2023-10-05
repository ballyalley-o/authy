import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

const FormGroup = ({
  value,
  setValue,
  type,
  className,
  label,
  placeholder,
}) => {
  return (
    <Form.Group className={className} controlId={value}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='text-blue'
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
  className: 'my-2',
}

export default FormGroup

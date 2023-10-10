import PropTypes from 'prop-types'
// components
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className=''>
        <Col xs={12} md={6} className='card p-5'>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

FormContainer.propTypes = {
  children: PropTypes.node,
}

export default FormContainer

import PropTypes from 'prop-types'
// components
import { Container, Row, Col } from 'react-bootstrap'
// @styles
import * as _ from '@styles'

const FormContainer = ({ children }) => {
  return (
    <Container className={_.StyledContainerMargin}>
      <Row className={_.StyledContainer}>
        <Col xs={12} md={6}>
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

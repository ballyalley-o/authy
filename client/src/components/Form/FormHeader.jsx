import PropTypes from 'prop-types'
import * as _ from '@styles'
// @constants
import { HEADER } from '@constants'

const FormHeader = ({ register }) => {
  return (
    <h1 className={_.StyledSignInH1}>
      {register ? HEADER.register : HEADER.signin}
    </h1>
  )
}

FormHeader.propTypes = {
  register: PropTypes.bool,
}

export default FormHeader

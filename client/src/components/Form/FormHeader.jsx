import PropTypes from 'prop-types'
import * as _ from '@styles'
// @constants
import { HEADER } from '@constants'

const FormHeader = ({ register, update }) => {
  return (
    <h1 className={_.StyledSignInH1}>
      {register ? HEADER.register : update ? HEADER.update : HEADER.signin}
    </h1>
  )
}

FormHeader.propTypes = {
  register: PropTypes.bool,
  update: PropTypes.bool,
}

export default FormHeader

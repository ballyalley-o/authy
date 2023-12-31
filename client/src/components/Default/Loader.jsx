import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'
import * as _ from '@styles'

const Loader = ({ w, h }) => {
  return (
    <div className={_.StyledLoaderDiv}>
      <Spinner
        animation='border'
        role='status'
        className={_.Loader}
        style={{
          width: `${w}` + 'px',
          height: `${h}` + 'px',
        }}
      ></Spinner>
    </div>
  )
}

Loader.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
}

Loader.defaultProps = {
  w: 15,
  h: 15,
}

export default Loader

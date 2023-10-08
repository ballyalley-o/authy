import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '15px',
        height: '15px',
        // margin: 'auto',
        marginLeft: '12px',
        marginRight: '12px',
        display: 'block',
        justifyContent: 'center',
      }}
    ></Spinner>
  )
}

export default Loader

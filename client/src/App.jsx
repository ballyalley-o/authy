import '@toastify'
import { Outlet } from 'react-router-dom'
// components
import { Container } from 'react-bootstrap'
import { Header } from '@components/Header'
// assets
import { ToastContainer } from 'react-toastify'
// constants
import { GLOBAL } from '@config'

const App = () => {
  return (
    <div className=''>
      <Header />
      <Container className='my-2'>
        <Outlet />
      </Container>
      <ToastContainer {...GLOBAL.toast} />
    </div>
  )
}

export default App

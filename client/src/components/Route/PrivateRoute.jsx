import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// @constants
import { PATH } from '@constants'

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)
  return userInfo ? <Outlet /> : <Navigate to={PATH.signin} replace />
}

export default PrivateRoute

import '@mains'
import '@globals'
import '@bootstrap'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from '@root'
// @redux
import store from '@store'
import { Provider } from 'react-redux'
// @pages
import { Home, SignIn, Register, Profile } from '@pages'
// @components
import { PrivateRoute } from '@components/Route'
// @constants
import { PATH } from '@constants'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATH.home} element={<App />}>
      <Route index={true} path={PATH.home} element={<Home />} />
      <Route path={PATH.signin} element={<SignIn />} />
      <Route path={PATH.register} element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path={PATH.profile} element={<Profile />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)

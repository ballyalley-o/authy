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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/register' element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
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

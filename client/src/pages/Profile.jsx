/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
// @hooks
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// @slices
import { useUpdateUserMutation } from '@slices/user'
import { setCredentials } from '@slices/auth'
// @components
import { Form, Button, Row, Col } from 'react-bootstrap'
import { FormContainer, FormGroup } from '@components/Form'
// @assets
import { Loader } from '@components/Default'
import { toast } from 'react-toastify'

const Profile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)
  const [updateInfo, { isLoading }] = useUpdateUserMutation()

  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [userInfo.name, userInfo.email])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("Passwords doesn't match")
    } else {
      try {
        const res = await updateInfo({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap()

        dispatch(setCredentials({ ...res }))
        toast.success('Your Information is updated')
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }

  return (
    <FormContainer>
      <h1 className='text-6xl my-6'>Update your Info</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup
          value={name}
          setValue={setName}
          type='name'
          label='Name'
          placeholder='Enter Name'
        />
        <FormGroup
          value={email}
          setValue={setEmail}
          type='email'
          label='Email'
          placeholder='Email'
        />
        <FormGroup
          value={password}
          setValue={setPassword}
          type='password'
          label='Password'
          placeholder='Password'
        />
        <FormGroup
          value={confirmPassword}
          setValue={setConfirmPassword}
          type='password'
          label='Confirm Password'
          placeholder='Confirm Password'
        />

        <Button
          type='submit'
          className='my-5 button-default'
          variant='warning'
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : 'Update'}
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Profile

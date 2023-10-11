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
import { FormContainer, FormGroup, FormHeader } from '@components/Form'
// @assets
import { Loader } from '@components/Default'
import { toast } from 'react-toastify'
// @styles
import * as _ from '@styles'
import * as sets from '@sets'
// @constants
import { HEADER, SNACKS, PATH } from '@constants'

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
      toast.error(SNACKS.password_err)
    } else {
      try {
        const res = await updateInfo({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap()

        dispatch(setCredentials({ ...res }))
        toast.success(SNACKS.updated)
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }

  return (
    <FormContainer>
      <FormHeader update />
      <Form onSubmit={handleSubmit}>
        <FormGroup value={name} setValue={setName} {...sets.form_name} />
        <FormGroup value={email} setValue={setEmail} {...sets.form_email} />
        <FormGroup value={password} setValue={setPassword} {...sets.form_pw} />
        <FormGroup
          value={confirmPassword}
          setValue={setConfirmPassword}
          {...sets.form_pw_confirm}
        />

        <Button disabled={isLoading} {...sets.form_submit}>
          {isLoading ? <Loader /> : HEADER.update_btn}
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Profile

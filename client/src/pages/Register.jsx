/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// @hooks
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '@slices/user'
import { setCredentials } from '@slices/auth'
// @components
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FormContainer, FormGroup, FormHeader } from '@components/Form'
import { Loader } from '@components/Default'
// @assets
import { toast } from 'react-toastify'
// @styles
import * as _ from '@styles'
import * as sets from '@sets'
// @constants
import { PATH, HEADER, SNACKS } from '@constants'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const [register, { isLoading }] = useRegisterMutation()

  useEffect(() => {
    if (userInfo) {
      navigate(PATH.home)
    }
  }, [navigate, userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error(SNACKS.password_err)
    } else {
      try {
        const res = await register({ email, name, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        toast.success(SNACKS.registered)
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }
  return (
    <FormContainer>
      <FormHeader register />
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
          {isLoading ? <Loader /> : HEADER.register}
        </Button>
        <Row className={_.StyledFormRow}>
          <Col>
            {HEADER.redir_signin}
            <Link to={PATH.singin} className={_.StyledFormLink}>
              {HEADER.signin}
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default Register

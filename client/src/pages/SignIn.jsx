/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FormContainer, FormGroup, FormHeader } from '@components/Form'
import { Loader } from '@components/Default'
// import { Button } from '@components/Button'
// @hooks
import { useDispatch, useSelector } from 'react-redux'
import { useSigninMutation } from '@slices/user'
import { setCredentials } from '@slices/auth'
// @assets
import { toast } from 'react-toastify'
import * as sets from '@sets'
// @styles
import * as _ from '@styles'
// @constants
import { PATH, SNACKS, HEADER } from '@constants'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signin, { isLoading, error }] = useSigninMutation()
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate(PATH.home)
    }
  }, [navigate, userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await signin({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      toast.success(SNACKS.signedin)
      navigate(PATH.home)
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }
  return (
    <FormContainer>
      <FormHeader />
      <Form onSubmit={handleSubmit}>
        <FormGroup value={email} setValue={setEmail} {...sets.form_email} />
        <FormGroup value={password} setValue={setPassword} {...sets.form_pw} />
        <Button disabled={isLoading} {...sets.form_submit}>
          {isLoading ? <Loader /> : HEADER.signin}
        </Button>
        <Row className={_.StyledFormRow}>
          <Col>
            {HEADER.redir_reg}
            <Link to={PATH.register} className={_.StyledFormLink}>
              {HEADER.register}
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default SignIn

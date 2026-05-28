import { useState, useEffect } from "react"
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import FormContainer from '../components/FormContainer'
import { useLoginMutation } from "../slices/usersApiSlice"
import { setCredentials } from "../slices/authSlice"
import Loader from "../components/Loader"

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    // Initialize
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const [login, { isLoading }] = useLoginMutation()
    
    const { userInfo } = useSelector((state) => state.auth) 
  
    useEffect(() => {
      if (userInfo) {
        navigate('/profile')
      }
    }, [navigate, userInfo])
  
    const submitHandler = async (e) => {
      e.preventDefault()
      try {
        const res = await login({ email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        navigate('/profile')

      } catch (error) {
        toast.error(error?.data?.message || error.error)
        console.log(error?.data?.message || error.error)
      }
    }

  return (
    <FormContainer>
      <h3>Sign In</h3>
      
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            >
                
            </Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId='password'>
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                variant="outline-secondary"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
        </Form.Group>

        {
          isLoading && <Loader />
        }

        <Button
          type='submit'
          variant='primary'
          className="mt-3"
          disabled={isLoading}
        >
          Sign In
        </Button>

        <Row>
          <Col>
            new Customer? <Link to='/register'>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen

import { useState } from "react"
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log("sbumit")
    }

  return (
    <FormContainer>
      <h1 className="">Sogn In</h1>
      
      <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            >
                
            </Form.Control>
        </Form.Group>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen

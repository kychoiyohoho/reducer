import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { GlobalContext } from '../states/GlobalState';

export const AddUser = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const {addUser} = useContext(GlobalContext);
console.log("addUser11",{addUser});
  const onSubmit=()=>{
    const newUser ={
      id:3,
      name
    }
addUser(newUser);
navigate('/');
  }
  const onChange=(e)=>{
    setName(e.target.value);
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" onChange={onChange} placeholder='Enter name'></Input>
      </FormGroup>
      <Button  type="submit">Submit</Button>
      <Link className="btn btn-danger ml-2" to="/">Cancel</Link>
    </Form>
  )
}

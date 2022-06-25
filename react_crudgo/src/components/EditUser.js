import React, { useContext, useEffect, useState } from 'react'
import { Link ,useNavigate, useParams} from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { GlobalContext } from '../states/GlobalState';

export const EditUser = () => {
  const history = useNavigate();
  const {id} = useParams();
  const currentUserId = {id}.id;
 
  const {users,editUser}= useContext(GlobalContext);
  console.log("user",users);
  const [selectedUser, setSeletedUser] = useState({
    id:'',
    name:''
  });
  const onSubmit =()=>{
  editUser(selectedUser);
  history('/');
  
 }
 useEffect(()=>{
  const userId = currentUserId;

  const selectedUser = users.find(user => user.id === Number(userId));

  setSeletedUser(selectedUser);

 },[currentUserId,users])
 const onChange=(e)=>{
  setSeletedUser({...selectedUser,[e.target.name]:e.target.value})
 }
  return (
  
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label>Name</Label>
      <Input type="text" value={selectedUser.name}name="name" onChange={onChange} placeholder='Enter Name'></Input>
    </FormGroup>
    <Button type="submit">EditName</Button>
    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
  </Form>
  )
}

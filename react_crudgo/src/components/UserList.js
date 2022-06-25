import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import{
  ListGroup,
  ListGroupItem,
  Button
}
from 'reactstrap';
import {GlobalContext} from '../states/GlobalState';

export const UserList = () => {
 const {users,removeUser}= useContext(GlobalContext);
console.log("users11",removeUser);
  return (
  
     
        <ListGroup className="mt-4">
          {users && users.map(user =>(
            <ListGroupItem className="d-flex">
              <strong>{user.name},{user.id}</strong>
              <div className="ml-auto">
              <Link className='btn btn-warning mr-1'  to={`/edit/${user.id}`}>Edit</Link> 
              <Button onClick={()=>removeUser(user.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
            
      ))}
       </ListGroup>
   
  )
}

import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


const initialstate ={
    users:[
        {id: 1,  name:'User One'},
        {id: 2,  name: 'User Two'}
    ]
    
                     }
export const GlobalContext =  createContext(initialstate) ;  

export const GlobalState = ({children}) => {
    const[state, dispatch]= useReducer(AppReducer,initialstate)

const removeUser =(id) =>{
    
    dispatch({
        type:'REMOVE_USER',
        payload:id
    })
}
const addUser =(user)=>{
    dispatch({
        type:'ADD_USER',
        payload:user
    })
}
const editUser=(user)=>{
    console.log("user",user);
    dispatch({
        type:'EDIT_USER',
        payload:user
    })
}

  return (
    <GlobalContext.Provider value={{
        users:state.users,
        removeUser,
        addUser,
        editUser
    }}>
        {children}
   </GlobalContext.Provider>
  )
}


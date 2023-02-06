import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, fetchUsers, showTodo } from '../reduxCycle/ReduxProvider';

const DataList = () => {
    const dispatch = useDispatch();
    // const  {users}  = useSelector((state) => state.users);
    const todo = useSelector(showTodo);



    const [formField,setFormField]=useState({
      email:"",
      first_name:"",
      last_name:"",
    })

    const[sortData,setSortData]=useState(todo?.max_completes_total)

    

    useEffect(()=>{
      dispatch(fetchUsers());
      setSortData(todo?.max_completes_total)
  },[dispatch])
  console.log(sortData,"todo");
  const addHandleChange =(e)=>{
    setFormField({...formField,[e.target.name]:e.target.value})
  }

  const addNewData =()=>{
      dispatch(addUsers(formField))
    }

  console.log(formField,"formfield");

// const sortBy =(action)=>{
  // if(action){
    // const strAscending = [...users].sort((a,b)=>a.first_name>b.first_name?1:-1)
    // setSortData(strAscending)
    // console.log(strAscending,"strascending");
    
  // }else if(action === 2){
    // const strDescending = [...users].sort((a,b)=>a.first_name>b.first_name?-1:1)
    // setSortData(strDescending)
    // console.log(strDescending,"strDescending");
  // }
// }

const sort = (e) => {
  const value = e.target.value
  // const temp = [...result]
  if (value === 1) {
      todo.users.sort((a, b) => a.first_name > b.first_name ? 1 : -1)
  } else if (value === 2) {
      todo.users.sort((a, b) => a.first_name > b.first_name ? -1 : 1)

  }
  // setResult(temp)
}

console.log(todo.users,"sortData");
  return (
    <div>DataList
    <form onSubmit={addNewData}>
    <div><input placeholder='FirstName' name='first_name' value={formField.first_name} onChange={addHandleChange}/></div>
    <div><input placeholder='LastName' name='last_name' value={formField.last_name} onChange={addHandleChange}/></div>
    <div><input placeholder='Email' name='email' value={formField.email} onChange={addHandleChange}/></div>
    {/* <button onClick={addNewData}>submit</button> */}
    <button type='submit'>submit</button>
    </form>
    <div><button value={1} onClick={sort}>up</button><button value={2} onClick={sort}>down</button></div>
    <div>{todo?.users?.length > 0 && todo?.users?.map((usedata)=>{
      return(
        <div key={usedata?.first_name}>FirstName = {usedata?.first_name}
        <p>Email = {usedata?.email}</p>
        <p>LastName = {usedata?.last_name}</p>
        </div>
      )
    })}</div>
    </div>
  )
}

export default DataList
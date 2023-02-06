import React, { useState } from 'react'

const AddField = () => {

const[addField,setAddField]=useState([{
    name:""
}])
console.log(addField,"addfield");

// const[fieldValue,setFieldValue]=useState({
//     name:""
// })

const addHandleClick =()=>{
    setAddField([...addField,{name:""}])
}

const handleChange = (e,i)=>{
    // setFieldValue({...fieldValue,[e.target.name]:e.target.value})
    // setAddField({...addField,[e.target.name]:e.target.value})
    const { value } = e.target
    const newInputList = [...addField]
    newInputList[i].name=value
    setAddField(newInputList)


}

// console.log(fieldValue,"smfdfj");
  return (
    <div>AddField
    <button onClick={addHandleClick}>Click Me</button>
    

    {/* {addField.length > 0
        ? addField.map((input, index) => (
            <div>
              
              <input
                id="outlined-basic"
                label={`input`}
                variant="outlined"
                
              />
              </div>
          ))
        : "No item in the list "} */}

    {addField.length > 0 &&
        addField?.map((test,i)=>(
            <div><span>{i+1}</span><input type="text" placeholder="name" name='name' value={addField.name} onChange={(e)=>handleChange(e,i)} /></div>
        ))
     }
    </div>
    
  )
}

export default AddField
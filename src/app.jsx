import React,{useState} from 'react'
import axios from "axios"
const App=()=>{
    const [state, setstate] = useState({userName:"",port:""})
   
    const handleChange=(e)=>{
//  console.log(e.target.name)
setstate({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("url",state).then(res=>console.log(res.data))
    }
    console.log(state)
    return(
        <div>
            <form action="#" onSubmit={handleSubmit}>
        <input name="userName" type="text" placeholder="enter user name" onChange={handleChange}/>
        <input name="port" type="text" placeholder="enter port name" onChange={handleChange}/>
            </form>
        </div>
    )
}
export default App
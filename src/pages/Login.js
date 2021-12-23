// import React from 'react'

// const Login = () => {
//     return (
//         <div>Login</div>
//     )
// }

// export default Login

// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"

// import { Input } from 'components'
// import './Login.css'

// const Login = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }

//     const isNotvalid = (user) =>{
//         return user.id === '' || user.password === ''
//     }
//     const handleLogin = () => {
//         const user = JSON.parse(sessionStorage.getItem('user'))

//         if(!isNotvalid(user)&&(id === user.id && password === user.password)){
//             navigate('/home')
//         // if(id === user.id && password === user.password){
//         //     navigate('/home')
//         }else{
//             alert('You gaved wrong id or password !')
//         }
//     }
//     return (
//         <div>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     )
// }

// export default Login

// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"

// import { Input, Button } from 'components'

// const Login = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     const handleLogin = () => {
//         const user = JSON.parse(sessionStorage.getItem('user'))
//         if(id === user.id && password === user.password){
//             navigate('/home')
//         }else{
//             alert('You gaved wrong id or password !')
//         }
//     }
//     return (
//         <div>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
//             <Button handleClick={handleLogin}>Login</Button>
//         </div>
//     )
// }

// export default Login


// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"

// import { Input, Button } from 'components'
// import './Login.css'

// const Login = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     const handleLogin = () => {
//         const user = JSON.parse(sessionStorage.getItem('user'))
//         if(id === user.id && password === user.password){
//             navigate('/home')
//         }else{
//             alert('You gaved wrong id or password !')
//         }
//     }
//     return (
//         <div className='login-container'>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
//             <Button handleClick={handleLogin}>Login</Button>
//         </div>
//     )
// }

// export default Login


// import React, { useReducer, useState } from 'react'
// import { useNavigate } from "react-router-dom"

// import { Input, Button } from 'components'
// import './Login.css'

// const Login = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     const isNotValid = (user) => {
//         console.log(user)
//         return user.id === '' || user.password === ''
//     }
//     const handleLogin = () => {
//         // 사용자 정보가 있으니까 불러오기
//         const user = JSON.parse(sessionStorage.getItem('user'))

//         if(!isNotValid(user) && (id === user.id && password === user.password)){
//             navigate('/home')
//         }else{
//             alert('You gaved wrong id or password !')
//         }
//     }
//     return (
//         <div className='login-container'>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
//             <Button handleClick={handleLogin}>Login</Button>
//         </div>
//     )
// }

// export default Login

// import React, { useReducer, useState } from 'react'
// import { useNavigate } from "react-router-dom"

// import { Input, Button } from 'components'
// import './Login.css'

// const Login = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     const isNotValid = (user) => {
//         console.log(user)
//         return user.id === '' || user.password === ''
//     }
//     const handleLogin = () => {
//         // 사용자 정보가 있으니까 불러오기
//         const user = JSON.parse(sessionStorage.getItem('user'))

//         if(!isNotValid(user) && (id === user.id && password === user.password)){
//             navigate('/home')
//         }else{
//             alert('You gaved wrong id or password !')
//         } 
//     }
//     return (
//         <div className='login-container'>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
//             <Button handleClick={handleLogin}>Login</Button>
//         </div>
//     )
// }

// export default Login



import React, { useReducer, useState } from 'react'
import { useNavigate } from "react-router-dom"

import { Input, Button, Modal } from 'components'
import './Login.css'

const Login = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        name === 'id' ? setId(value) : setPassword(value)
        console.log(name, value)
    }
    const isNotValid = (user) => {
        console.log(user)
        return user.id === '' || user.password === ''
    }
    const handleLogin = () => {
        if(!sessionStorage.getItem('user')){
            openModal()
        }
        // 사용자 정보가 있으니까 불러오기
        const user = JSON.parse(sessionStorage.getItem('user'))
        if((id === 'admin' && password === 'admin123')){
            navigate('/home')
        }
        else if(!isNotValid(user) && (id === user.id && password === user.password)){
            navigate('/home')
        }else{
            // alert('You gaved wrong id or password !')
            openModal()
        }
    }
    const openModal = () => {
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)
    }
    const GoRegister = () =>{
        navigate('/Register')
    }
    return (
        <div className='login-container'>
            <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
            <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
            <Button handleClick={handleLogin}>Login</Button>

            {/* 모달창 */}
            <Modal open={open}>
                <div className="header">-- Warning message --</div>
                <div className="body">
                    You gaved wrong id or password !
                </div>
                <div className="footer">
                    <Button handleClick={GoRegister}>Register</Button>
                    <Button size="small" handleClick={closeModal}>Close</Button>
                </div>
            </Modal>
        </div>
    )
}

export default Login
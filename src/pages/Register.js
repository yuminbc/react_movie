// import React from 'react'

// const Register = () => {
//     return (
//         <div>Register</div>
//     )
// }

// export default Register

// import React, { useState } from 'react'

// import { Input } from 'components'

// const Register = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     return (
//         <div>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/>
//         </div>
//     )
// }

// export default Register


// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"

// import { Input } from 'components'
// import './Register.css'

// const Register = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     const handleRegister = () => {
//         if(JSON.parse(sessionStorage.getItem('user'))){
//             navigate('/login')

//         }else{
//             sessionStorage.setItem('user', JSON.stringify({ id, password }))
//             navigate('/home')
//         }
//     }
//     return (
//         <div>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
//             <button onClick={handleRegister}>Register</button>
//         </div>
//     )
// }

// export default Register

// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"

// import { Input, Button } from 'components'

// const Register = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     const handleRegister = () => {
//         if(JSON.parse(sessionStorage.getItem('user'))){
//             navigate('/login')
//         }else{
//             //????????? ????????? ??????????????? ?????? ????????? ????????? ????????? ????????? ???????????????
//             if(id === ''&& password === ''){
//                 sessionStorage.setItem('user', JSON.stringify({ id, password }))
//                 navigate('/home')    
//             }else{
//                 alert('You need to give right user info')
//             }
            
//         }
//     }
//     return (
//         <div>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
//             <Button handleClick={handleRegister}>Register</Button>
//         </div>
//     )
// }

// export default Register

// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"

// import { Input, Button } from 'components'
// import './Register.css'

// const Register = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id' ? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     const handleRegister = () => {
//         if(JSON.parse(sessionStorage.getItem('user'))){
//             navigate('/login')
//         }else{
//             sessionStorage.setItem('user', JSON.stringify({ id, password }))
//             navigate('/home')
//         }
//     }
//     return (
//         <div className='register-container'>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
//             <Button handleClick={handleRegister}>Register</Button>
//         </div>
//     )
// }

// export default Register


// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Input, Button } from 'components'
// import './Register.css'

// const Register = () => {
//     const [id, setId] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         name === 'id'? setId(value) : setPassword(value)
//         console.log(name, value)
//     }
//     const handleRegister = () => {
//         // if(id !== '' && password !== ''){// ????????? ?????? ????????? ????????? ?????????
//         //         JSON.parse(sessionStorage.getItem('user'))
//         //         sessionStorage.setItem('user', JSON.stringify({ id, password }))
//         //         navigate('/login')          
//         // }else {
//         //     // ????????? ????????? ??????????????? ?????? ?????? ?????? ????????? ?????? home ??????
//         //     if(id == '' && password == ''){
//         //         // sessionStorage.setItem('user', JSON.stringify({ id, password }))
//         //         navigate('/home')
//         //     }else{// id or password ??? ?????? ????????? alert
//         //         alert('You need to give right user info.')
//         //     }

//         // }
        
//         // ????????? ????????? ????????? ????????? ???????????? ????????????
//         // ?????? ?????? ?????? ???????????? ??? ????????? home?????? ???????????? ??????
//         if(JSON.parse(sessionStorage.getItem('user'))){
//             navigate('/login')
//         // ????????? ????????? ????????? ???????????? ???????????? ??????????????? ????????????
//         }else {
//             // ????????? ????????? ??????????????? ?????? ?????? ?????? ????????? ????????? ????????? ???????????????
//             if(id !== '' && password !== ''){
//                 sessionStorage.setItem('user', JSON.stringify({ id, password }))
//                 navigate('/home')
//             }else{
//                 alert('You need to give right user info.')
//             }

//         }
//     }
//     return (
//         <div className='register-container'>
//             <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
//             <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/>
//             <Button handleClick={handleRegister}>Register</Button>
//         </div>
//     )
// }
// export default Register




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Modal } from 'components'
import './Register.css'

const Register = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        name === 'id'? setId(value) : setPassword(value)
        console.log(name, value)
    }
    const handleRegister = () => {
        // // ????????? ????????? ????????? ????????? ???????????? ????????????
        // if(JSON.parse(sessionStorage.getItem('user'))){
        //     navigate('/')
        // // ????????? ????????? ????????? ???????????? ???????????? ??????????????? ????????????
        // }else {
        //     // ????????? ????????? ??????????????? ?????? ?????? ?????? ????????? ????????? ????????? ???????????????
        //     if(id !== '' && password !== ''){
        //         sessionStorage.setItem('user', JSON.stringify({ id, password }))
        //         navigate('/home')
        //     }else{
        //         // alert('You need to give right user info.')
        //         openModal()
        //     }

        // }
        if(id !== '' && password !== ''){// ????????? ?????? ????????? ????????? ?????????
            JSON.parse(sessionStorage.getItem('user'))
            sessionStorage.setItem('user', JSON.stringify({ id, password }))
            navigate('/')          
        }else {
            alert('You need to give right user info.')         
        }

    }
    const openModal = () => {
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)
    }
    return (
        <div className='register-container'>
            <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
            <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/>
            <Button handleClick={handleRegister}>Register</Button>

            {/* ????????? */}
            <Modal open={open}>
                <div className="header">-- Warning message --</div>
                <div className="body">
                    You need to give right user information !
                </div>
                <div className="footer">
                    <Button size="small" handleClick={closeModal}>Close</Button>
                </div>
            </Modal>
        </div>
    )
}
export default Register
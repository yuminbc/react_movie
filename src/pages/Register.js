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
//             //사용자 정보를 입력하지도 않고 버튼을 누르면 곧바로 데이터 저장해버림
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
//         // if(id !== '' && password !== ''){// 사용자 정보 입력시 로그인 페이지
//         //         JSON.parse(sessionStorage.getItem('user'))
//         //         sessionStorage.setItem('user', JSON.stringify({ id, password }))
//         //         navigate('/login')          
//         // }else {
//         //     // 사용자 정보를 입력하지도 않고 그냥 버튼 누르면 바로 home 으로
//         //     if(id == '' && password == ''){
//         //         // sessionStorage.setItem('user', JSON.stringify({ id, password }))
//         //         navigate('/home')
//         //     }else{// id or password 에 값이 빠지면 alert
//         //         alert('You need to give right user info.')
//         //     }

//         // }
        
//         // 사용자 정보가 있으면 로그인 페이지로 이동하기
//         // 처음 에는 값이 없으므로 값 입력시 home으로 가는것이 맞다
//         if(JSON.parse(sessionStorage.getItem('user'))){
//             navigate('/login')
//         // 사용자 정보가 없으면 사용자를 생성하고 홈페이지로 이동하기
//         }else {
//             // 사용자 정보를 입력하지도 않고 그냥 버튼 누르면 곧바로 데이터 저장해버림
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
        // // 사용자 정보가 있으면 로그인 페이지로 이동하기
        // if(JSON.parse(sessionStorage.getItem('user'))){
        //     navigate('/')
        // // 사용자 정보가 없으면 사용자를 생성하고 홈페이지로 이동하기
        // }else {
        //     // 사용자 정보를 입력하지도 않고 그냥 버튼 누르면 곧바로 데이터 저장해버림
        //     if(id !== '' && password !== ''){
        //         sessionStorage.setItem('user', JSON.stringify({ id, password }))
        //         navigate('/home')
        //     }else{
        //         // alert('You need to give right user info.')
        //         openModal()
        //     }

        // }
        if(id !== '' && password !== ''){// 사용자 정보 입력시 로그인 페이지
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

            {/* 모달창 */}
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
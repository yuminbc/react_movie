// import React from "react"
// import ReactDOM from "react-dom"
// import { BrowserRouter } from "react-router-dom"

// const App = () => {
//   return (
//     <div>Hello React !</div>
//   );
// };

// ReactDOM.render(<BrowserRouter>
//                   <App />
//                 </BrowserRouter>,
//                 document.getElementById("app"));

// import React from "react"
// import ReactDOM from "react-dom"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Register, Login, Home } from 'pages'
// import './index.css'

// const App = () => {
//   return (
//     <div>
//       <Routes>
//           <Route path='/' element={<Register/>}/> 
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/home" element={<Home/>}/>
//       </Routes>
//     </div>
//   );
// };
// // element = 프랍스?
// ReactDOM.render(<BrowserRouter>
//                   <App />
//                 </BrowserRouter>,
//                 document.getElementById("app"));



// import React from "react"
// import ReactDOM from "react-dom"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Register, Login, Home, Detail } from 'pages'

// import './index.css'

// const App = () => {
//   return (
//     <div>
//       <Routes>
//           <Route path='/' element={<Register/>}/>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/home" element={<Home/>}/>
//           <Route path='/detail' element={<Detail/>}/>
//       </Routes>
//     </div>
//   );
// };

// ReactDOM.render(<BrowserRouter>
//                   <App />
//                 </BrowserRouter>,
//                 document.getElementById("app"));


import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Login, Register,  Home, Detail, Recommendation } from 'pages'

import './index.css'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/recommend' element={<Recommendation/>}/>
      </Routes>
    </div>
  );
};

ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>,
                document.getElementById("app"));


// import React from "react"
// import ReactDOM from "react-dom"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Register, Login, Home, Detail, Recommendation, NotFound } from 'pages'

// import './index.css'

// const App = () => {
//     return (
//       <div>
//         <Routes>
//           <Route path='/' element={<Register/>}/>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/home' element={<Home/>}/>
//           <Route path='/detail' element={<Detail/>}/>
//           <Route path='/recommend' element={<Recommendation/>}/>
//           <Route path='*' element={<NotFound/>}/>
//         </Routes>
//       </div>
//     );
//   };

//   ReactDOM.render(<BrowserRouter>
//                     <App />
//                   </BrowserRouter>, document.getElementById("app"));
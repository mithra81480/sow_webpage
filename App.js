// import {BrowserRouter, Routes , Route} from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" elemenr={<Contact/>}/>

//     </Route>
//     </Routes>
//     </BrowserRouter>
//   )

// }
import React from 'react'
import Basic from './Event/Basic'

export default function App() {
  return (
    <div>
      <Basic/>
    </div>
  )
}

import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<SignInPage/>}/> 
        <Route path='/signup' element={<SignUpPage/>}/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;

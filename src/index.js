import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './ticketh-black-logo.png';
import ticket from './image 88.png';
import asset from './landing-page-1.png';
import Modal from './Modal';
import { useState } from 'react';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Header(){

  const [login, setLogin] = useState('no')
  
  const handleClick = () => {
    setLogin('yes')
  }

  // const closeClick = () => {
  //   setLogin('no')
  // }

  return (
    
    <div class="bg-[#FFF8F8]">
      <div className="nav-bar" class="flex flex-row justify-between items-center py-8 mx-16">
       
          <img src={logo} class="h-14 w-36 " />
        
          
            
            <ul>
              <li className="nav-bar-home" class="inline-block px-4 text-xl"><a href="" class="hover:text-red-600 font-thin font-quicksand-100">Home</a></li>
              <li className="nav-bar-browse" class="inline-block px-4 text-xl"><a href="" class="hover:text-red-600 font-thin font-quicksand-100">Browse</a></li>
              <li className="nav-bar-about" class="inline-block px-4 text-xl"><a href="" class="hover:text-red-600 font-thin font-quicksand-100">About</a></li>
              <li className="nav-bar-contact" class="inline-block px-4 text-xl"><a href="" class="hover:text-red-600 font-thin font-quicksand-100">Contact</a></li>
            </ul>
          
            
            <button className="nav-bar-login" class="bg-myOrange py-2 px-4 text-white rounded-full hover:bg-red-700 h-[52px] w-[175px] font-quicksand-" onClick={handleClick}>Login/Signup</button>

           
           

          
        
      </div>
      <Modal open = {login} onClose = {() => setLogin('no')}>

      </Modal>
    </div> 
    
  )
}

function Body() {

  return (

      <div class="flex flex-row bg-blue justify-between m-24 bg-[#FFF8F8]">
        <div class="flex flex-col py-24">
         
            <h1 class="text-5xl font-quicksand">Redifining your event</h1>
            <h1 class="text-5xl font-quicksand">experience using NFTs</h1>
          
          <div class="bg-yellow my-4">
            <p class="text-2xl font-bold font-quicksand">Bringing the best out of tickets</p>
          </div>
          <div class="flex flex-row ">
            <button class="bg-myOrange my-2 py-2 px-4 w-[175px] h-[52px] text-white rounded-full hover:bg-red-700 focus:ring-violet-300 visited:bg-violet-200">Buy tickets</button>
            <button class="bg-white my-2 mx-5 py-2 w-[175px] px-4 text-black border-4 border-myOrange rounded-full hover:bg-red-700 focus:ring-violet-300 visited:bg-violet-200">Request demo</button>
          </div>
        </div>

        <div class="bg-blue bottom-[50px]">
          <img src={asset} class="w-[602px] h-[574px]"></img>
        </div>
      </div>
  )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div class="bg-[#FFF8F8]">
    <Header />
    <Body />
    </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

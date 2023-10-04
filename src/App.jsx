import React, { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import NavbarContainer from './components/NavbarContainer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './app/slices/productSlice';

function App() {
  const { userData } = useSelector((state) => state.posts);
const dispatch = useDispatch()
 useEffect(() => {
  dispatch(fetchUserData())
 }, [])
  return (
    <>
     <NavbarContainer userData={userData} />
     <Home />
     <div>footer</div>
    </>
  )
}

export default App

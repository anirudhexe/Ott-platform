import React from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import Featured from '../../components/featured/Featured';
import {useState,useEffect} from 'react';
import axios from 'axios';

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists=async()=>{
      try{
        const res=await axios.get(
          `lists${type?"?type="+type:""}${genre?"&genre="+genre:""}`
        )
      }
      catch(e){
        console.log(e);
      }
    }
  }, [lists,genre])
  

  return (
    <div className='home'>
        <Navbar/>
        
        <Featured type={type}/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home
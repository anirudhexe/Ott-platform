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
          `lists${type?"?type="+type:""}${genre?"&genre="+genre:""}`,
          {
          headers:{
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
          },
        }
        )
        //console.log(res);
        setLists(res.data);
      }
      catch(e){
        console.log(e);
      }
    }
    getRandomLists();
  }, [type,genre]) //this means whenever user changes type or genre, useEffect will run again to call the api
  

  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type} setGenre={setGenre}/>
        {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home
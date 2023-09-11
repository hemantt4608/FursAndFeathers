import React from 'react'
import "./Home.css"
import food from './Images/pet-supplies.png'
import pets from './Images/pets.png'
import toys from './Images/belt.png'
import cloth from './Images/dog.png'
import acc from './Images/beauty-saloon.png'

import {BsChevronRight} from 'react-icons/bs';

import {BsCardList} from 'react-icons/bs';
import { Slider } from './Slider';
import { useState } from 'react';
import { useEffect } from 'react';
import {BsStarFill} from 'react-icons/bs';
import axios from 'axios';
import {BsHeartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom'

const Home = () => {
    const [home,sethome]=useState([]);
    const [home1,sethome1]=useState([]);
   
    useEffect(()=>{
 
        axios.get("http://localhost:3003/home").then((response)=>{
          sethome(response.data);
        })  
        },[])

     useEffect(()=>{
 
     axios.get("http://localhost:3003/home1").then((response)=>{
      sethome1(response.data);
         })  
          },[])
       
  return (
    <div className='body'>
       <div className="main">
        <div className="left1">
            <h4><BsCardList/>ALL CATEGORIES</h4> 
            <div className="flex">
                <span>
                    
                    <a href="./Pet">Pets</a>
                </span>
                <BsChevronRight/>
            </div>
            <div className="flex">
                <span>
    
                    <a href="./Cloth">Clothes</a>
                </span>
                <BsChevronRight/>
            </div>
            <div className="flex">
                <span>
                
                    <a href="./Toys">Toys</a>
                </span>
                <BsChevronRight/>
            </div>
            <div className="flex">
                <span>
                    
                    <a href="./Food">Food</a>
                </span>
                <BsChevronRight/>
            </div>
            <div className="flex">
                <span>
                    
                    <a href="./Access">Accessories</a>
                </span>
                <BsChevronRight/>
            </div>
            
        </div>
        <div className="right1">
              <Slider className="slider"></Slider> 
                
        </div>
     </div> 
     
     <div className='homeproduct'> 
     {home1.map((e)=>{
              return( <div className='home_map'>

                <img src={e.img}></img>,
                <p style={{height:"60px" ,color:"rgb(102, 102, 102)",fontSize:"14px"}}>{e.title}</p>
                <div className='icons'><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div></div>
                <div className='price'>
                    <div className='oldprice'>₹{e.oldprice}</div>
                    <div style={{color:"rgb(221, 2, 133)"}}>₹{e.newprice}</div>
                    <div className='discount'>{e.discount}</div>
                </div>
                <div className='button'><button>Add To Cart</button><BsHeartFill style={{color:"rgb(221, 2, 133)",fontSize:"20px"}}></BsHeartFill></div>
                
              </div>
              )
            })}
     </div>
     <div id="next">
       <img src="https://www.beautybebo.com/pub/media/ads/imgpsh_fullsize_anim_3_.jpg" alt=""/>
    </div>
    <br></br>
    <div class="picture">
        <img src="https://www.beautybebo.com/pub/media/ads/Forent-New-Year-Banner.gif" alt=""/>
    </div>
    <div className='homeimg'>
        <div><img src={pets} style={{ width: "3.75rem" }}></img></div>
        <div><img src={food} style={{ width: "3.75rem" }}></img></div>
        <div><img src={toys} style={{ width: "3.75rem" }}></img></div>
        <div><img src={cloth} style={{ width: "3.75rem" }}></img></div>
        <div><img src={acc} style={{ width: "3.75rem" }}></img></div>
       
    </div>
    <div className='homeproduct'>
    {home.map((e)=>{
              return( <div className='home_map'>

                <img src={e.img}></img>,
                <p style={{height:"60px" ,color:"rgb(102, 102, 102)",fontSize:"14px"}}>{e.title}</p>
                <div className='icons'><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div></div>
                <div className='price'>
                    <div className='oldprice'>₹{e.oldprice}</div>
                    <div style={{color:"rgb(221, 2, 133)"}}>₹{e.newprice}</div>
                    <div className='discount'>{e.discount}</div>
                </div>
                <div className='button'><button>Add To Cart</button><BsHeartFill style={{color:"rgb(221, 2, 133)",fontSize:"20px"}}></BsHeartFill></div>
                
              </div>
              )
            })}

    </div>
    {/* <p class="avi"><a href="https://www.beautybebo.com/Pet.html"><img src="https://www.beautybebo.com/pub/media/ads/imgpsh_fullsize_anim_7_.jpg" alt="Beautybebo offer" /></a></p> */}
     </div>
    
   
  )
}

export default Home

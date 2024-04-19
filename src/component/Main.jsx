import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductSlider from './productSlider';
const Main = () => {
    
  return (
    <div>
      <div class="hero-section"style={{backgroundImage:" url('/Images/hero_image.jpg')"}}>
        <div class="hero-message" >
            <p>You are on amazon.com.You can also shop on Amazon India for millions of products with fast local delivery  <a href="#">Click here to go amazon.in</a></p>
        </div>
     </div>

     <div class="shop-section">
        <div class="box1 box">
                <div class="box-content">
                    <h2>Clothes</h2> 
                    <div class="box-img" style={{backgroundImage:"url('Images/box1_image.jpg')"}}></div>
                    <a href="/">See more</a>
                </div> 
        </div>
        <div class="box2 box">
            <div class="box-content">
                <h2>Health & Personal Care</h2> 
                <div class="box-img" style={{backgroundImage:"url('Images/box2_image.jpg')"}}></div>
                <a href="/">See more</a>
       </div> 
        </div>
        <div class="box3 box">
            <div class="box-content">
                <h2>Furniture</h2> 
                <div class="box-img" style={{backgroundImage:"url('Images/box3_image.jpg')"}}></div>
                <a href="/">See more</a>
       </div> 
        </div>
        <div class=" box">
            <div class="box-content">
                <h2>Electronics</h2> 
                <div class="box-img" style={{backgroundImage:"url('Images/box4_image.jpg')"}}></div>
                <a href="/">See more</a>
       </div> 
        </div>
        <div class=" box">
            <div class="box-content">
                <h2>Beauty Picks</h2> 
                <div class="box-img" style={{backgroundImage:"url('Images/box5_image.jpg')"}}></div>
                <a href="/">See more</a>
       </div> 
    </div>
    <div class=" box">
        <div class="box-content">
            <h2>Pet Care</h2> 
            <div class="box-img" style={{backgroundImage:"url('Images/box6_image.jpg')"}}></div>
            <a href="/">See more</a>
   </div> 
    </div>
    <div class=" box">
        <div class="box-content">
            <h2>New Arrival in Toys</h2> 
            <div class="box-img" style={{backgroundImage:"url('Images/box7_image\ \(1\).jpg')"}}></div>
            <a href="/">See more</a>
   </div> 
    </div>
    <div class="box4 box">
        <div class="box-content">
            <h2>Discover Fashion Trends</h2> 
            <div class="box-img" style={{backgroundImage:"url('Images/box8_image\ \(1\).jpg')"}}></div>
            <a href="/">See more</a>
        </div> 
    </div>
    </div>
       <div>
        <ProductSlider/>
       </div>
    </div>
  )
}
export default Main;

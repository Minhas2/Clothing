import React, { useState } from 'react'
import bg from '../assets/DSC01755 background.png'
import bgAudio from '../assets/bgAudio.mpeg'
import b1 from '../assets/1b.png'
import b2 from '../assets/1d.png'
import b3 from '../assets/12a.png'
import b4 from '../assets/13a.png'
import b5 from '../assets/16a.png'
import b6 from '../assets/5a.png'
import b7 from '../assets/7a.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [currentProduct, setCurrentProduct] = useState()
    
    const items = [
        {
          id: "b1",
          type: "Jersey",
          name: "Jersey",
          color: "Red, Cream, Black, Navy Blue, Brown",
          material: "Polyester Jersey",
          price: 60,
          image: b1
        },
        {
          id: "b2",
          type: "Vintage Tee",
          name: "Mrs Parker’s x Pastor Clever",
          color: "Black",
          material: "100% Cotton",
          price: 60,
          image: b2
        },
        {
          id: "b3",
          type: "Vintage Tee",
          name: "Keisha",
          color: "Black",
          material: "100% Cotton",
          price: 60,
          image: b3
        },
        {
          id: "b4",
          type: "Vintage Tee",
          name: "Joi x Debbie",
          color: "Black",
          material: "100% Cotton",
          price: 60,
          image: b4
        },
        {
          id: "b5",
          type: "Vintage Tee",
          name: "Sticks and Stones",
          color: "Black",
          material: "100% Cotton",
          price: 45,
          image: b5
        },
        {
          id: "b6",
          type: "Vintage Tee",
          name: "Sticks and Stones",
          color: "Black",
          material: "100% Cotton",
          price: 45,
          image: b6
        },
        {
          id: "b7",
          type: "Vintage Tee",
          name: "Sticks and Stones",
          color: "Cream",
          material: "100% Cotton",
          price: 45,
          image: b7
        },
        {
          id: "b8",
          type: "Vintage Tee",
          name: "Sticks and Stones",
          color: "Cream",
          material: "100% Cotton",
          price: 45,
          image: b7
        },
        {
          id: "b9",
          type: "Vintage Tee",
          name: "Sticks and Stones",
          color: "Cream",
          material: "100% Cotton",
          price: 45,
          image: b7
        }
      ];
    const handleProduct = (e) => {
        console.log(items.filter(item => item.id == e))
        setCurrentProduct(items.filter(item => item.id == e))
    }
  return (
    <div className='mainContainer'>
        <img src={bg} alt="bg" className='bgImg'/>

        <div className='firstShirt shirtImg' onClick={()=>handleProduct('b1')}>
            <img src={b1} alt="b1" />
            <div className="hoverImg">
                <img src={b1} alt="b1" />
            </div>
        </div>
        <div className='secondShirt shirtImg' onClick={()=>handleProduct('b2')}>
            <img src={b2} alt="b2" />
            <div className="hoverImg">
                <img src={b2} alt="b2" />
            </div>
        </div>
        <div className='thridShirt shirtImg' onClick={()=>handleProduct('b3')}>
            <img src={b3} alt="b2" />
            <div className="hoverImg">
                <img src={b3} alt="b2" />
            </div>
        </div>
        <div className='fourthShirt shirtImg' onClick={()=>handleProduct('b4')}>
            <img src={b4} alt="b2" />
            <div className="hoverImg">
                <img src={b4} alt="b2" />
            </div>
        </div>
        <div className='fifthShirt shirtImg' onClick={()=>handleProduct('b5')}>
            <img src={b5} alt="b2" />
            <div className="hoverImg">
                <img src={b5} alt="b2" />
            </div>
        </div>
        <div className='sixthShirt shirtImg' onClick={()=>handleProduct('b6')}>
            <img src={b6} alt="b2" />
            <div className="hoverImg">
                <img src={b6} alt="b2" />
            </div>
        </div>
        <div className='sevenShirt shirtImg' onClick={()=>handleProduct('b7')}>
            <img src={b7} alt="b2" />
            <div className="hoverImg">
                <img src={b7} alt="b2" />
            </div>
        </div>
        <div className='eightShirt shirtImg' onClick={()=>handleProduct('b2')}>
            <img src={b2} alt="b2" />
            <div className="hoverImg">
                <img src={b2} alt="b2" />
            </div>
        </div>
        <div className='nineShirt shirtImg' onClick={()=>handleProduct('b2')}>
            <img src={b2} alt="b2" />
            <div className="hoverImg">
                <img src={b2} alt="b2" />
            </div>
        </div>
        <div className='temShirt shirtImg' onClick={()=>handleProduct('b2')}>
            <img src={b2} alt="b2" />
            <div className="hoverImg">
                <img src={b2} alt="b2" />
            </div>
        </div>
        <div className='elevenShirt shirtImg' onClick={()=>handleProduct('b2')}>
            <img src={b2} alt="b2" />
            <div className="hoverImg">
                <img src={b2} alt="b2" />
            </div>
        </div>
        <div className='twelveShirt shirtImg' onClick={()=>handleProduct('b2')}>
            <img src={b2} alt="b2" />
            <div className="hoverImg">
                <img src={b2} alt="b2" />
            </div>
        </div>
        
        
        
        
        
        
        
        {
            currentProduct && 
            <div className="checoutContainer">
                <img src={currentProduct[0].image} alt="" />
                <p>{currentProduct[0].name  }</p>
                <p>{ currentProduct[0].color + ' ' + currentProduct[0].type  }</p>
                <p>{ 'price: $ ' +  currentProduct[0].price  }</p>
                <a href="#">Policy Information</a>
                <a href="#">Contact Us</a>
                <button onClick={ ()=>navigate('/checkout')}>
                    Checkout
                </button>
            </div>
        }

        <audio id="backgroundAudio" autoPlay loop>
            <source src={bgAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        
    </div>
  )
}

export default Home
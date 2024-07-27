import React, { useState } from 'react'
import bg from '../assets/DSC01755 background.png'
import bgAudio from '../assets/bgAudio.mpeg'
import b1 from '../assets/1b final.png'
import b2 from '../assets/1c final.png'
import b3 from '../assets/1d final.png'
import b4 from '../assets/1f final.png'
import b5 from '../assets/2b final.png'
import b6 from '../assets/3a final.png'
import b7 from '../assets/4a final.png'
import b8 from '../assets/5a final.png'
import b9 from '../assets/6a final.png'
import b10 from '../assets/4a final.png'
import b11 from '../assets/7a final.png'
import b12 from '../assets/8a final.png'
import b13 from '../assets/9a final.png'
import b14 from '../assets/12a final.png'
import b15 from '../assets/17a final.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [currentProduct, setCurrentProduct] = useState()
    
    const items = [
        {
          id: "b1",
          type: "Jersey",
          name: "Jersey",
          color: "Red",
          material: "Polyester Jersey",
          price: 60,
          image: b1
        },
        {
          id: "b2",
          type: "Jersey",
          name: "Jersey",
          color: "Cream",
          material: "Polyester Jersey",
          price: 60,
          image: b2
        },
        {
          id: "b3",
          type: "Jersey",
          name: "Jersey",
          color: "Black",
          material: "Polyester Jersey",
          price: 60,
          image: b3
        },
        {
          id: "b4",
          type: "Jersey",
          name: "Jersey",
          color: "Brown",
          material: "Polyester Jersey",
          price: 60,
          image: b4
        },
        {
          id: "b5",
          type: "Vintage Tee",
          name: "Mrs Parker’s x Pastor Clever",
          color: "Black Graphic Vintage Tee",
          material: "100% Cotton",
          price: 60,
          image: b5
        },
        {
          id: "b6",
          type: "Keisha",
          name: "Black Graphic Vintage Tee",
          color: "Black",
          material: "100% cotton",
          price: 60,
          image: b6
        },
        {
          id: "b7",
          type: "Joi x Debbie ",
          name: "Black Graphic Vintage Tee",
          color: "Black",
          material: "100% Cotton",
          price: 60,
          image: b7
        },
        {
          id: "b8",
          type: "Sticks and Stones",
          name: "Black Vintage Tee (white font)",
          color: "Black",
          material: "100% Cotton",
          price: 45,
          image: b8
        },
        {
          id: "b9",
          type: "Sticks and Stones",
          name: "Black Vintage Tee (red font)",
          color: "Black",
          material: "100% Cotton",
          price: 45,
          image: b9
        },
        {
          id: "b10",
          type: "Joi x Debbie ",
          name: "Black Graphic Vintage Tee",
          color: "Black",
          material: "100% Cotton",
          price: 60,
          image: b10
        },
        {
          id: "b11",
          type: "Sticks and Stones",
          name: "Cream Vintage Tee (red font)",
          color: "Cream",
          material: "100% Cotton",
          price: 45,
          image: b11
        },
        {
          id: "b12",
          type: "Sticks and Stones",
          name: "Cream Vintage Tee (white font)",
          color: "Cream",
          material: "100% Cotton",
          price: 45,
          image: b12
        }
      ];
    const handleProduct = (e) => {
        console.log(items.filter(item => item.id == e))
        setCurrentProduct(items.filter(item => item.id == e))
    }
  return (
    <div className='mainContainer'>
        <img src={bg} alt="bg" className='bgImg'/>
        <dotlottie-player src="/Animation.json" background="transparent" speed="1"  direction="1" playMode="normal" loop autoplay></dotlottie-player>
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
        <div className='eightShirt shirtImg' onClick={()=>handleProduct('b8')}>
            <img src={b8} alt="b2" />
            <div className="hoverImg">
                <img src={b8} alt="b2" />
            </div>
        </div>
        <div className='nineShirt shirtImg' onClick={()=>handleProduct('b9')}>
            <img src={b9} alt="b2" />
            <div className="hoverImg">
                <img src={b9} alt="b2" />
            </div>
        </div>
        <div className='temShirt shirtImg' onClick={()=>handleProduct('b10')}>
            <img src={b10} alt="b2" />
            <div className="hoverImg">
                <img src={b10} alt="b2" />
            </div>
        </div>
        <div className='elevenShirt shirtImg' onClick={()=>handleProduct('b11')}>
            <img src={b11} alt="b2" />
            <div className="hoverImg">
                <img src={b11} alt="b2" />
            </div>
        </div>
        <div className='twelveShirt shirtImg' onClick={()=>handleProduct('b12')}>
            <img src={b12} alt="b2" />
            <div className="hoverImg">
                <img src={b12} alt="b2" />
            </div>
        </div>
        <div className='thirteenShirt shirtImg' onClick={()=>handleProduct('b13')}>
            <img src={b13} alt="b2" />
            <div className="hoverImg">
                <img src={b12} alt="b2" />
            </div>
        </div>
        <div className='forteenShirt shirtImg' onClick={()=>handleProduct('b14')}>
            <img src={b14} alt="b2" />
            <div className="hoverImg">
                <img src={b14} alt="b2" />
            </div>
        </div>
        <div className='fifteenShirt shirtImg' onClick={()=>handleProduct('b15')}>
            <img src={b15} alt="b2" />
            <div className="hoverImg">
                <img src={b15} alt="b2" />
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
                <button onClick={ ()=>navigate('/checkout', {      state: { message: currentProduct[0] }    } )}>
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
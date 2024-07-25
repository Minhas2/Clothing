import React, { useState } from 'react'
// import bg from '../assets/DSC01755-background.webp'
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
    const handleProduct = (e) => {
        console.log(e)
        setCurrentProduct(e)
    }
  return (
    <div className='mainContainer'>
        <div className='firstShirt shirtImg' onClick={()=>handleProduct(b1)}>
            <img src={b1} alt="b1" />
            <div className="hoverImg">
                <img src={b1} alt="b1" />
            </div>
        </div>
        <div className='secondShirt shirtImg' onClick={()=>handleProduct(b2)}>
            <img src={b2} alt="b2" />
            <div className="hoverImg">
                <img src={b2} alt="b2" />
            </div>
        </div>
        <div className='thridShirt shirtImg' onClick={()=>handleProduct(b3)}>
            <img src={b3} alt="b2" />
            <div className="hoverImg">
                <img src={b3} alt="b2" />
            </div>
        </div>
        <div className='fourthShirt shirtImg' onClick={()=>handleProduct(b4)}>
            <img src={b4} alt="b2" />
            <div className="hoverImg">
                <img src={b4} alt="b2" />
            </div>
        </div>
        <div className='fifthShirt shirtImg' onClick={()=>handleProduct(b5)}>
            <img src={b5} alt="b2" />
            <div className="hoverImg">
                <img src={b5} alt="b2" />
            </div>
        </div>
        <div className='sixthShirt shirtImg' onClick={()=>handleProduct(b6)}>
            <img src={b6} alt="b2" />
            <div className="hoverImg">
                <img src={b6} alt="b2" />
            </div>
        </div>
        <div className='sevenShirt shirtImg' onClick={()=>handleProduct(b7)}>
            <img src={b7} alt="b2" />
            <div className="hoverImg">
                <img src={b7} alt="b2" />
            </div>
        </div>
        <div className='eightShirt shirtImg' onClick={()=>handleProduct(b2)}>
            <img src={b2} alt="b2" />
            <div className="hoverImg">
                <img src={b2} alt="b2" />
            </div>
        </div>
        {
            currentProduct && 
            <div className="checoutContainer">
                <img src={currentProduct} alt="" />
                <a href="#">Product Information</a>
                <a href="#">Policy Information</a>
                <a href="#">Contact Us</a>
                <button onClick={ ()=>navigate('/checkout')}>
                    Checkout
                </button>
            </div>
        }
        
    </div>
  )
}

export default Home
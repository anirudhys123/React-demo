import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
   <header>
    <div class = "brand-title">Shopper</div>
    <div>
        <nav> 
            <span> Home</span>
            <span> catalog</span> 
            <span> shop</span>
            <span> Blog</span>
            <span> pages</span>
        </nav>
    </div>

    <div class = "buy">
        <button> Buy Now</button>
    </div>
    <div>
        <span class = "bi bi-cart"></span>
    </div>
    
   </header>
    </>
  )
}

export default Navbar
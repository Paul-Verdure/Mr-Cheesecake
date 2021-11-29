import React, {useState} from 'react';
import "./productsPack.css";


function ProductsPackFront() {

    return (
        
            <div className="front">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#84BF04" width="140" width="140">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="titleFront">Impact environnemental</h1>
            </div>
            
    );
}

export default ProductsPackFront;

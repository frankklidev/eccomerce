'use client'

import { AddToCartButtonProps } from "@/interfaces/AddToCartButtonProps";

export default function AddToCartButton({productId}:AddToCartButtonProps){
    return(
        <div className="flex items-center gap-2">
        <button className="btn-primary btn " onClick={()=>{}}>
            Add to Cart
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h15l-1.5 9h-12z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 18a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6L3 3"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2.5l4 4.5"/>
</svg>

        </button>
    </div>
    
    )
}
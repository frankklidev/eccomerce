'use client'

import { AddToCartButtonProps } from "@/interfaces/AddToCartButtonProps";

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
    return (
        <div className="flex items-center gap-2">
            <button className="btn btn-primary btn-block" onClick={() => {}}>
                Add to Cart
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h16l-1.6 8H6.6L5 4zm0 0l-1-2"/>
                    <circle cx="7" cy="18" r="2"/>
                    <circle cx="17" cy="18" r="2"/>
                </svg>
            </button>
        </div>
    );
}

'use client' 
import { AddToCartButtonProps } from "@/interfaces/AddToCartButtonProps";
import { useState, useTransition } from "react";

export default function AddToCartButton({ productId, incrementProductQuantity }: AddToCartButtonProps) {

    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    const handleClick = () => {
        setSuccess(false);
        startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
        });
    }

    return (
        <div className="flex items-center gap-2">
            <button className="btn btn-primary btn-block" onClick={handleClick}>
                Add to Cart
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h16l-1.6 8H6.6L5 4zm0 0l-1-2"/>
                    <circle cx="7" cy="18" r="2"/>
                    <circle cx="17" cy="18" r="2"/>
                </svg>
            </button>
            {isPending && <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full ml-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {!isPending && success && (
                <span className="text-success">Added to Cart</span>
            )}
        </div>
    );
}

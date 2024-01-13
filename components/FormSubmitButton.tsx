'use client'

import { useFormStatus } from 'react-dom';
import { FormSubmitButtonProps } from '../interfaces/FormSubmitButtonProps';

export default function FormSubmitButton({
    children,
    className,
    ...props
}:FormSubmitButtonProps){
    const {pending} = useFormStatus();

    return(
        <button
        {...props}
        className={`btn-primary btn ${className}`}
        type="submit"
        disabled={pending}
        >
           {pending} && <span className='loading loading-spinner'/>
           {children}
        </button>
    

)}

import { ShoppingCartButtonProps } from '../../interfaces/ShoppingCartButtonProps';


export default function ShoppingCartButton({cart}:ShoppingCartButtonProps){
 return(
    <div className='dropdown dropdown-end'>
     <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className='indicator'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h16l-1.6 8H6.6L5 4zm0 0l-1-2"/>
                    <circle cx="7" cy="18" r="2"/>
                    <circle cx="17" cy="18" r="2"/>
                </svg>
                <span className='badge badge-sm indicator-item'>{cart?.size || 0}</span>
        </div>
     </label>
    </div>
 )
}
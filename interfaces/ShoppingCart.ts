
import { CartWhitProducts } from './CartWithProducts';


export type ShoppingCart = CartWhitProducts & {
    size:number
    subtotal:number
}
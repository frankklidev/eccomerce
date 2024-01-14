import { ShoppingCart } from '@/interfaces/ShoppingCart';
import {cookies} from 'next/dist/client/components/headers'
import { prisma } from "./prisma";

export async function getCart():Promise<ShoppingCart|null> {
    const locarCartId = cookies().get("localCartId")?.value 
    const cart = locarCartId ?
    await prisma.cart.findUnique({
        where:{id:locarCartId},
        include:{items:{include:{product:true}}}
    })
    :null
    if (!cart) {
        return null
    }
    return {
        ...cart,
        size:cart.items.reduce((acc,item)=> acc + item.quantity,0),
        subtotal:cart.items.reduce((acc,item)=>acc + item.quantity*item.product.price,0)
    }
}

export async function createCart() {
    const newCart = await prisma.cart.create({
        data:{}
    })

    cookies().set("localCartId",newCart.id)
}
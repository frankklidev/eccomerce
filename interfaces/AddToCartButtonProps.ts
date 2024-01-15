
export type AddToCartButtonProps = {
    productId:string
    incrementProductQuantity:(productId:string)=>Promise<void>
}
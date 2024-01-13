
import { ProductCardProps } from '@/interfaces/ProductCardProps';
import Image from 'next/image';
import Link from 'next/link';
import PriceTag from './PriceTag';



export default function ProductCard({product}:ProductCardProps){
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000*60*60*24*7;
    return(
        <Link 
        href={"/products/" + product.id}
        className="card w-full bg-base-100 hover:shadow-xl transition-shadow">
            <figure>
                <Image
                 src={product.imageUrl}
                 alt={product.name}
                 width={800}
                 height={400}
                 className="h-48 object-cover"
                />
            </figure>
            <div className='card-body'>
                 <h2 className='card-title'>
                    {product.name}
                    
                 </h2>
                 {isNew && <div className="badge badge-secondary">NEW</div>}
                 <p>
                    {product.description}
                 </p>
                 <PriceTag price={product.price}></PriceTag>
            </div>
        </Link>
    )
}
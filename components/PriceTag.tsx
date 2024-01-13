import { PriceTag } from "@/interfaces/PriceTagProps";
import { formatPrice } from '../lib/format';

export default function PriceTag({price,className}:PriceTag){
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>
}
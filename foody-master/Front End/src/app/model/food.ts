import { Restaurant } from './restaurant';
import { CartItem } from './cart-item';

export class Food {
    fid: number;
    name: string;
    price: number;
    ingredients: string;
    cart: CartItem;
    restaurant: Restaurant;
    qty: number;
    image: string;
}

import { Food } from './food';
import { User } from './user';

export class CartItem {
    cartId: number;
    food: Food[];
    user: User;

    constructor(user: User){
        this.user = user;
    }
}

import {Role} from './role';
import { CartItem } from './cart-item';
export class User {
  id: number;
  username: string="";
  password: string="";
  name: string="";
  role: Role;
  token: string="";
  cart: CartItem;
}

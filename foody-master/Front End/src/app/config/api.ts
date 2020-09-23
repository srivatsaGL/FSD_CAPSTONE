import { environment } from "src/environments/environment";

/*export const baseUrl = environment.production ? 'https://foodapp.cfapps.io' : 'https://foodapp.cfapps.io/' */
export const baseUrl = environment.production ? 'http://localhost:8080' : 'http://localhost:8080'
export const restaurantUrl = baseUrl + '/restaurant'
export const foodUrl = baseUrl + '/food'
export const userUrl = baseUrl + '/user'
export const cartUrl = baseUrl + '/cart'
export const orderUrl = baseUrl + '/order'
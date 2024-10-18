import {  prod } from "../endpoint";
import { Phone } from "../type/Phone";

import axios from "axios";

/*type telephoneProps = {
phone: Phone;
}*/

export function insertTelephone(data: Phone ){
     
    try {
        const fetch = async() => {
            await axios.post(`${prod}telephone`, data );
            
        }
        fetch();
    } catch (error) {
        console.log(error);
    }


}
import {  prod } from "../endpoint";
import { Phone } from "../type/Phone";

import axios from "axios";

export function UseUpdateTelephone(id:string, data: Phone ){
     
    try {
        const fetch = async() => {
            await axios.patch(`${prod}telephone/${id}`, data );
        }
        fetch();
    } catch (error) {
        console.log(error);
    }


}
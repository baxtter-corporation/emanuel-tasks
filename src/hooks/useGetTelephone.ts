import axios from "axios";
import {  prod } from "../endpoint";
import { useEffect, useState } from "react";
import { Phone } from "../type/Phone";
export function GetTelephone(endpoint:string){
    
    const [listPhone, setLista] = useState<Phone[]>([]);
    //const listPhone: any[] = [];
    
    
useEffect(()=> {
    try {
        const fetcher = async() => {
            const {data}  = await axios.get(`${prod}${endpoint}`)
            //listPhone.push(data?.data);
            setLista(data);

        }

       fetcher(); 
    } catch (error) {
        console.log(error);
    }

}, [ endpoint ])

const UseDeleteTelephone = async (id: string) => {
    try {
       
        await axios.delete(`${prod}telephone/${id}`);
        setLista((prevList) => prevList.filter((phone) => phone.id !== id));

    
} catch (error) {
    console.log(error);
}

  };

    return {listPhone, UseDeleteTelephone};
}

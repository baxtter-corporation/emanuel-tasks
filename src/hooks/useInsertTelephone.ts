import {  prod } from "../endpoint";
import { Phone } from "../type/Phone";

import axios from "axios";

/*type telephoneProps = {
phone: Phone;
}*/

export function InsertTelephone(data: Phone ){
    
    try {
        
        const fetch = async () => {
          try {
            
            await axios.post(`${prod}telephone`, data);
            alert('Dados Salvo com Sucesso');
          } catch (error) {
            console.log( error);
            alert('Erro ao salvar os dados. Tente novamente ou mais tarde.');
          }
        };
        fetch();
      } catch (error) {
        console.log(error);
      }


}
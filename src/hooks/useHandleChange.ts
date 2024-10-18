import { ChangeEvent, FormEvent, useState } from "react";
import { Phone } from "../type/Phone";
import { insertTelephone } from "./useInsertTelephone";

export function HandleChange () {

    const [data, setData] = useState<Phone>(
      {
      phone: "",
      name: "", 
      nickname: "", 
      company: "",
      email: "",
      birthday: "", 
      adress: "",
      city: "",
      note: "" }); 
      
   const handleDataChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setData((prevState) => ({
        ...prevState, [name]: value
    }));    
  }
   
  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault();
  
    insertTelephone(data);
  
  }

  return{
    handleDataChange,
    handleSubmit,
    data
    };
};
import {  FormEvent } from "react";

import { UseUpdateTelephone } from "./useUpdateTelephone";
import { Phone } from "../type/Phone";
import { useNavigate } from "react-router-dom";

export function HandleEditChange (id:string,data:Phone) {

  const navigate = useNavigate();
  
  const handleSubmit = (e: FormEvent) => { 
  
     
    e.preventDefault();
  
    UseUpdateTelephone(id, data);
  
    alert('Dados Atualizados com Sucesso');

    navigate('/');

  }

  return{
    handleSubmit
    };
};
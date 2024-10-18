import {  FormEvent } from "react";

import { UseUpdateTelephone } from "./useUpdateTelephone";
import { Phone } from "../type/Phone";

export function handleEditChange (id:string,data:Phone) {

  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault();
  
    UseUpdateTelephone(id, data);
  
  }

  return{
    handleSubmit
    };
};
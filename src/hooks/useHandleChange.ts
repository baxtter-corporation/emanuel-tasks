import { ChangeEvent, FormEvent, useState } from "react";
import { Phone } from "../type/Phone";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { prod } from "../endpoint";

export function HandleChange () {

    const navigate = useNavigate();
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
  
    //insertTelephone(data);

    try {
      const fetch = async() => {
          await axios.post(`${prod}telephone`, data );
          alert('Dados Salvo com Sucesso');
          navigate('/');
      }
        fetch();
    } catch (error) {
      console.log(error);
    }

   /* const fetch = async() => {
      try {
        await axios.post(`${prod}telephone`, data);
        alert('Dados Salvo com Sucesso');
        navigate('/');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Erro ao salvar os dados:', error);
          alert('Erro ao salvar os dados. Tente novamente mais tarde.');
        } else {
          alert('Erro desconhecido. Tente novamente mais tarde.');
          console.error('Erro desconhecido:', error);
        }
      }    
    };
    fetch();*/


  }

  return{
    handleDataChange,
    handleSubmit,
    data
    };
};
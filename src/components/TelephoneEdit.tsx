import { Link, useParams } from "react-router-dom";
 
import { handleEditChange } from "../hooks/useHandleEditChange";
import { ChangeEvent, useState } from "react";
import { Phone } from "../type/Phone";
import { GetTelephone } from "../hooks/useGetTelephone";
 
export function TelephoneEditfrm () {

  const {phone} = useParams();
  const {listPhone} = GetTelephone(`telephone/${phone}`);
  
 //console.log(listPhone);

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
    
  
    console.log("recebendo dados",listPhone?.phone);         
  
    const {handleSubmit} = handleEditChange(listPhone.id,data);
  
 const handleDataChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {name, value} = e.target;
  setData((prevState) => ({
      ...prevState, [name]: value
  }));    
}
 
  return (
    <>
<br />
<h2>Telefone</h2>
    <br />
    <form className="w-full max-w-lg" onSubmit={handleSubmit} >
          <div className="flex flex-wrap mb-6 -mx-3">

          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <input
                type="text" name='phone' placeholder="Phone" value={data.phone} onChange={handleDataChange}
                className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none text-black-700 border-black-500 focus:outline-none focus:bg-white" id="grid-first-name" 
              />
          </div>

          <div className="w-full px-3 md:w-1/2">
              <input
                type="text" name='name' placeholder="Name" value={data.name} onChange={handleDataChange}
                className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none text-black-700 border-black-500 focus:outline-none focus:bg-white" id="grid-first-name" 
              />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <input
                type="text" name='nickname' placeholder="Nickname" value={data.nickname} onChange={handleDataChange}
                className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none text-black-700 border-black-500 focus:outline-none focus:bg-white" id="grid-first-name" 
              />
          </div>
          <div className="w-full px-3 md:w-1/2">
              <input
                type="text" name='company' placeholder="Company" value={data.company} onChange={handleDataChange}
                className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none text-black-700 border-black-500 focus:outline-none focus:bg-white" id="grid-first-name" 
              />
              </div>
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <input
                type="email" name='email' placeholder="Email" value={data.email} onChange={handleDataChange}
                className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none text-black-700 border-black-500 focus:outline-none focus:bg-white" id="grid-first-name" 
              />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <input
                type="date" name='birthday' placeholder="Birthday" value={data.birthday} onChange={handleDataChange}
                className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none text-black-700 border-black-500 focus:outline-none focus:bg-white" id="grid-first-name" 
              />
          </div>

          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <input
                type="text" name='adress' placeholder="Address" value={data.adress} onChange={handleDataChange}
                className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none text-black-700 border-black-500 focus:outline-none focus:bg-white" id="grid-first-name" 
              />
              </div>
          <div className="w-full px-3 md:w-1/2">
            <input
                type="text" name='city' placeholder="City" value={data.city} onChange={handleDataChange}
                className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border rounded appearance-none text-black-700 border-black-500 focus:outline-none focus:bg-white" id="grid-first-name" 
              />
          </div>
          <div className="w-full px-3 mb-6 md md:mb-0">
              <textarea name="note" rows={4} className="block p-2.5 w-full text-sm text-black-700 rounded-lg border  border-black-500 leading-tight focus:outline-none focus:bg-white bg-gray-200 text-black-700
              mb-6" value={data.note} onChange={handleDataChange}
              placeholder="Note">

              </textarea>
          </div>

          <div className="w-full px-3 mb-6 md md:mb-0">
              <button className="px-4 py-2 mb-6 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
         type="submit">Salvar</button>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/" className="px-4 py-2 mb-6 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none">Cancelar</Link>

</div>

        </div>


    </form>


    </>


);

}

export default TelephoneEditfrm;
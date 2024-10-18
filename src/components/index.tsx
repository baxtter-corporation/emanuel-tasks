import React from 'react';
import { Link, Outlet } from 'react-router-dom';  
import { GetTelephone } from '../hooks/useGetTelephone';
import { Phone } from '../type/Phone';

const Index: React.FC = () => {
 const {listPhone, UseDeleteTelephone } = GetTelephone("telephone");
 
 
  return (

    <>
      <div className="p-4">
      <h1 className="text-xl font-bold"></h1>
      <nav className="mt-4 space-x-4">
        
        <Link to="/telephone" className="btn">Criar</Link>
        
      </nav>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Lista de Telefones</h2>
        {/* Lista aqui */}
        <br />

      <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden"> 
            
            <table  className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
          <tr>
          <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start dark:text-neutral-500">Phone</th>

            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-black-500 text-start dark:text-neutral-500">Name</th>
            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-black-500 text-start dark:text-neutral-500">Nickname</th>
            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-black-500 text-start dark:text-neutral-500">Company</th>
            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-black-500 text-start dark:text-neutral-500">Email</th>
            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-black-500 text-start dark:text-neutral-500">Birthday</th>
            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-black-500 text-start dark:text-neutral-500">Address</th>
            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-black-500 text-start dark:text-neutral-500">City</th>
            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-black-500 text-start dark:text-neutral-500">Note</th>

            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-end dark:text-neutral-500">Action</th>


          </tr>
          </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
        {
            listPhone.length > 0 ?
            listPhone.map((item:Phone)=>  {
              return(
        <tr>
        
        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.phone}</td>

        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.name}</td>

        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.nickname}</td>

        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.company}</td>

        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.email}</td>

        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.birthday}</td>

        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.adress}</td>

        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.city}</td>

        <td className="px-6 py-4 text-sm font-medium text-black-800 whitespace-nowrap ">{item.note}</td>

        <td colSpan={2} className="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">

        <Link to={`/telephone/Edit/${item.phone}`} className="inline-flex items-center text-sm font-semibold text-blue-600 border border-transparent rounded-lg gap-x-2 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
        
        >
          Edit
        </Link>
          
          &nbsp;&nbsp;

        <button onClick={() => UseDeleteTelephone(item.id)} className="inline-flex items-center text-sm font-semibold text-blue-600 border border-transparent rounded-lg gap-x-2 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
        
        >Delete</button>
      </td>
        

      </tr>
             )
            })
            :
            <tr>
            <td colSpan={10} className='p-4 text-center'>Sem Dados</td>
            </tr>
          }
        </tbody>
        </table>

            </div>
            </div>
            </div>
            </div>
      
      </div>

      {/* Aqui renderiza o conteúdo das rotas filhas */}
      
      <Outlet />
    </div>
    </>


  );
};

export default Index;

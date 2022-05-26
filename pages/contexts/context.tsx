import { useState, createContext, useEffect, ReactNode } from 'react';
import api from '../services/api';


export const AuthContext = createContext({} as AuthContextType);
interface ContriProps {

  items :{
  [x: string]: any;
  
  agent_id:number;
  name: string;
  image:string;
  department:string;
  branch: string;
  role:string;
  status: string;
  }
  map:() => void;
}

interface PositionProps {

  roles :{
  
  name: string;
  departament:string;
  agents_quantity:number;
  }
  map:() => void;
}



type AuthContextProviderProps ={
  children: ReactNode;
}

type AuthContextType = {
 
  contributors: ContriProps | any;
  positions: PositionProps | any;
  
  getContributors: () => Promise<void>;
  getPositions: () => Promise<void>;
 
}
export function AuthContextProvider(props: AuthContextProviderProps){
  
 

 

  const [contributors, setContributors] =  useState<ContriProps[]>([]);
  const [positions, setPositions] =  useState<PositionProps[]>([]);
  

 async function getContributors(){
    await api.get("/agents")
    .then((response) => {
      console.log(response);
      setContributors(response.data)
   })
   .catch((err) => {
     console.error("ops! ocorreu um erro : " + err);
   });

  }

 async function getPositions(){
  await api.get("/roles")
  .then((response) => {
    console.log(response);
    setPositions(response.data)
 })
 .catch((err) => {
   console.error("ops! ocorreu um erro : " + err);
 });
 }


 



  return(
    <AuthContext.Provider value={{contributors, getContributors, positions,getPositions}}>
      {props.children}
      </AuthContext.Provider>
  );
}
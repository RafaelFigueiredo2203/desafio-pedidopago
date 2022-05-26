import { Checkbox, Stack, useDisclosure } from "@chakra-ui/react"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { ReactNode, useEffect, useState } from "react"
import api from "../services/api"
import { useAuth } from "../services/useContext"


interface DetailsProps{
  
 
 
  items:{
  name: string;
  department:string;
  grouprules: {
    role:string;
    permissions: string;
  };

  }
  map:() => void;
}
type AuthContextProviderProps ={
  children: ReactNode;
}


export function PositionsData(props:AuthContextProviderProps){
  const [positionsDetails, setPositionsDetails] = useState<DetailsProps[]>([]);
  const [ group, setGroup] = useState<DetailsProps[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  




  useEffect(() => {
    
    async function getPositionDetails(){
      await api.get("/role/1")
      .then((response) => {
        console.log(response.data.role);
        setPositionsDetails(response.data.role);
        setGroup(response.data.role.grouprules)
     })
     .catch((err) => {
       console.error("ops! ocorreu um erro : " + err);
     });
     }
     getPositionDetails();
     Object.keys(setPositionsDetails);
     
  }, []);
  const myarray = [positionsDetails];

  const Div = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;


left: 0%;
right: 0%;
top: 0%;
bottom: 0%;



background: #FFFFFF;


border: 2px solid #CAD6D1;
border-radius: 8px;`

const Span = styled.span `
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 100%;
margin-left:24px;
display:flex;

text-align: left;

padding-top:40px;

color: #34423D;
`
const HeaderTable= styled.div`
  box-sizing: border-box;
  margin-left:24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  
  width: 902px;
  height: 49px;

  border: 1px solid #CAD6D1;
  border-radius: 8px 8px 0px 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  `

const SpanHeaderTable = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 140%;


display: flex;
align-items: center;



color: #587169;
`
const PositionsData = styled.div`
  
  margin-left:24px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  align-items: center;
  text-align:left;  
 
  width: 902px;
  height: 69px;

  border-bottom:1px solid #EAEFED;
  `
  
  const P = styled.p`
      margin-right:69px;
      margin-left:18px;
      width: 124px;
height: 17px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 140%;

display: flex;
align-items: center;


color: #587169;


flex: none;
order: 1;
flex-grow: 0;


  `

  
  return(
   
    <div>

{myarray?.map((items: any) => (
        <div key={items.role} className={css`display :flex; flex-direction:row; `}>
          
    <Div className={css`font-family:'Poppins';color: #587169; font-size: 16px; font-weight: 500; outline: 0; margin-right:24px; margin-left:24px; width: 442px; height: 56px;`}>{items.department}</Div>
    <span className={css`position:absolute; 
                                                         background-color:#FFF;
                                                          font-family: 'Poppins';
                                                          font-style: normal;
                                                          font-weight: 500;
                                                          font-size: 14px;
                                                    
                                                          color: #A3B8B0;
                                                          margin-left:40px;
                                                          margin-top:-8px;
                                                         
                                                          width: 110px;
                                                        
                                                          display:flex;
                                                          align-items:center;
                                                          justify-content:center;
                                                          `}>Departamento</span>
    <span className={css`position:absolute;
                                                          background-color:#FFF;
                                                          font-family: 'Poppins';
                                                          font-style: normal;
                                                          font-weight: 500;
                                                          font-size: 14px;
                                                    
                                                          color: #A3B8B0;
                                                          margin-left:510px;
                                                          margin-top:-8px;
                                                         
                                                          width: 50px;
                                                        
                                                          display:flex;
                                                          align-items:center;
                                                          justify-content:center;
                                                          `}>cargo</span>
    <Div className={css`font-family:'Poppins';color: #587169; font-size: 16px; font-weight: 500; width: 442px; height: 56px; outline:0;`}> {items.name}</Div>


  </div> ))}
  
  <Span className={css`margin-bottom:40px;`}>Listagem de colaboradores</Span>
  <HeaderTable>
      <SpanHeaderTable>Cargo</SpanHeaderTable>
      <SpanHeaderTable className={css`margin-left:368px;`}>Ler</SpanHeaderTable>
      <SpanHeaderTable>Editar</SpanHeaderTable>
      <SpanHeaderTable className={css`margin-right:50px;`}>Excluir</SpanHeaderTable>
    </HeaderTable>
    
    {group?.map((items: any,index:number) => (
    <PositionsData key={items?.grouprules}>
      <P>{items.role}</P>

      
      <Stack className={css`margin-left:318px;`} spacing={113} direction='row'>
        <Checkbox isDisabled={true} style={{background: items?.permissions.includes("read") ? "#1DD195" : "#FFF" }}  iconSize={10} iconColor="#FFF" defaultChecked size="md" className={css`width:20px; height:20px; box-sizing: border-box; background: #1DD195; border: 2px solid #CAD6D1; border-radius: 6px; display:flex; align-items:center; justify-content:center;`}>

        </Checkbox>
        <Checkbox isDisabled={true} style={{background: items.permissions.includes("write")  ? "#1DD195" : "#FFF" }}iconSize={10} iconColor="#FFF" defaultChecked size="md" className={css`width:20px; height:20px; box-sizing: border-box; background: #1DD195; border: 2px solid #CAD6D1; border-radius: 6px; display:flex; align-items:center; justify-content:center;`}>

        </Checkbox>
        <Checkbox isDisabled={true} style={{background: items?.permissions.includes("delete") ? "#1DD195" : "#FFF" }} iconSize={10} iconColor="#FFF" defaultChecked size="md" className={css`width:20px; height:20px; box-sizing: border-box; background: #1DD195; border: 2px solid #CAD6D1; border-radius: 6px; display:flex; align-items:center; justify-content:center;`}>

        </Checkbox>
      </Stack>

    
    </PositionsData>
 ))}
    </div>
  )
}
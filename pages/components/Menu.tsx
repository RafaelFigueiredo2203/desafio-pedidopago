import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, InputGroup, InputLeftElement, Input, StackItem } from '@chakra-ui/react';
import { cx, css } from '@emotion/css';
import { MagnifyingGlass } from 'phosphor-react';
import styled from '@emotion/styled'
import { ContributorsTable } from './ContributorsTable';
import { useState } from 'react';
import { PositionsList } from './PositionsList';


export function Menu(){

  const [search, setSearch]: [string, (search: string) => void] = useState("");

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };


  const InputSearchDiv = styled.div`
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
border-radius: 8px;


`
const Span = styled.span `
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 100%;

display:flex;

text-align: left;

padding-top:40px;

color: #34423D;
`

  return(
    <div>
      <Tabs isLazy className={css``} colorScheme='green' >
  <TabList className={css`padding: 0px;
           margin-top:50px; 
          width: 902px;
          height: 30px;
          flex: none;
          order: 0;
          flex-grow: 0;`} >
    <Tab className={css`display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px;
            gap: 16px;
            width: 196px;
            height: 30px;
            flex: none;
            order: 0;
            flex-grow: 0;`}> 
            
            <span className={css`
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 100%;
                  /* identical to box height, or 14px */
                  margin-bottom:16px;
                  display: flex;
                  align-items: center;
                  text-align: center;
                  
                  /* Neutral Colors/Black */
                  
                  color: #34423D;
            `}>Colaboradores</span>
            
            </Tab>
    <Tab  className={css`display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px;
            gap: 16px;
            width: 196px;
            height: 30px;
            flex: none;
            order: 0;
            flex-grow: 0;`} >  
            
            <span className={css`
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 100%;
                  /* identical to box height, or 14px */
                  margin-bottom:16px;
                  display: flex;
                  align-items: center;
                  text-align: center;
                  
                  /* Neutral Colors/Black */
                  
                  color: #34423D;
            `} >Cargos</span>
            
            </Tab>
  </TabList>
  <TabPanels>
    {/* initially mounted */}
    <TabPanel className={css`display:flex; flex-direction:column;`}>
    <InputSearchDiv > 
      <span className={css`
            background-color:#FFF;
            text-align: left !important;
            position:absolute;
            margin-bottom:68px;
            
            width: 100px;
            border-bottom: none;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            
            padding-left:2px;
            padding-right:2px;

            display: flex;
            align-items: center;

           

            color: #A3B8B0;
      `}>Pesquisar por</span>
    
    <MagnifyingGlass size={18} color="#050505" />
        <input className={css`font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        margin-left:12px;
        width:100%;
      
      
        list-style:none;

        color: #587169;`} type="text" placeholder='Pesquise por nome ou cpf' name="search" value={search} onChange={(e) => setSearch(e.target.value)} />


     </InputSearchDiv >


     <Span>Listagem de colaboradores</Span>

        <ContributorsTable />

    </TabPanel>
    {/* initially not mounted */}
    <TabPanel>
    <InputSearchDiv > 
      <span className={css`
            background-color:#FFF;
            text-align: left !important;
            position:absolute;
            margin-bottom:68px;
            
            width: 100px;
            border-bottom: none;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            
            padding-left:2px;
            padding-right:2px;

            display: flex;
            align-items: center;

           

            color: #A3B8B0;
      `}>Pesquisar por</span>

<MagnifyingGlass size={18} color="#050505" />
        <input className={css`font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        margin-left:12px;
        width:100%;
      
      
        list-style:none;

        color: #587169;`} type="text" placeholder='Pesquise por cargos' name="search" value={search} onChange={(e) => setSearch(e.target.value)} />


     </InputSearchDiv >
     <Span >Listagem de cargos</Span>
      <PositionsList/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}
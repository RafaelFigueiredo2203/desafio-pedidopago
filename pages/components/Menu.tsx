import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, InputGroup, InputLeftElement, Input, StackItem, Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverHeader } from '@chakra-ui/react';
import { cx, css } from '@emotion/css';
import { DotsThreeVertical, MagnifyingGlass } from 'phosphor-react';
import styled from '@emotion/styled'
import { ContributorsTable } from './ContributorsTable';
import { useState } from 'react';
import { PositionsList } from './PositionsList';

interface Scre {
  screen: Screen;
}

export function Menu(){

  const [search, setSearch] = useState('');
  const [yourMenu, setYourMenu] = useState("Colaboradores");

  function setCol(){
    return setYourMenu("Colaboradores");
  }
  function setCarg(){
    return setYourMenu("Cargos");
  }

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
const DivMenu = styled.div`box-sizing: border-box;

          /* Auto layout */

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          text-align:center;
          padding: 20px;
          margin-bottom:40px;
          margin-top:40px;
          width: 316px;
          height: 56px;


          background: #FFFFFF;

          border: 2px solid #CAD6D1;
          border-radius: 8px;


          flex: none;
          order: 1;
          flex-grow: 0;
`

  return(


    <div >


      <Tabs isLazy className={css`   @media (max-width: 495px) {width: 300px;} @media (max-width: 1002px) { width: 500px; display:none;}`} colorScheme='green' >
  <TabList className={css`padding: 0px;
          margin-top:50px; 
          width: 902px;
          height: 30px;
          flex: none;
          order: 0;
          flex-grow: 0;
          @media (max-width: 495px) {width: 350px;}
          @media (max-width: 1002px) {
            width:500px;
            height:56px;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:14.5px;
            
            
            }
           
            
          `} >
            
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
            flex-grow: 0;
            @media (max-width: 495px) {width: 350px;}
            `}> 
            
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
                  @media (max-width: 495px) {width: 350px;}
                  color: #34423D;
            `} >Cargos</span>
            
            </Tab>
  </TabList>
  <TabPanels>
    {/* initially mounted */}
    <TabPanel className={css`display:flex; flex-direction:column;
            @media (max-width: 1002px) {
            width:100%;
            height:56px;
            display:flex;
            align-items:center;
            padding:14.5px;
           background:#000;
            }
            @media (max-width: 495px) {width: 350px;}
            
            `}>
    

        <ContributorsTable />

    </TabPanel>
    {/* initially not mounted */}
    <TabPanel>
   
      <PositionsList/>
    </TabPanel>
  </TabPanels>
</Tabs>


<Tabs  className={css`@media (max-width: 490px) {  width:350px} @media (min-width: 1002px) {  display:none;} width: 500px; display:flex; flex-direction:column-reverse; align-items:center; justify-content:left; text-align:center;  `}   colorScheme='green' >

 <DivMenu>
   <Span className={css` margin-top:-40px; text-align:center; font-weight: 500; font-size: 16px; color: #587169;`}>{yourMenu}</Span>
<Popover  >

  <PopoverTrigger>
    <Button className={css`background:#FFF; border-radius:40px;`}><DotsThreeVertical size={24} color="#050505" weight="bold" /></Button>
  </PopoverTrigger>
  <PopoverContent className={css`height:241px; @media (max-width: 490px) {  margin-right:10px;}`}>
    <PopoverArrow />
    <PopoverCloseButton />
    
    <PopoverHeader className={css`display: flex;
                                  flex-direction: row;
                                  justify-content: space-between;
                                  align-items: center;
                                  padding: 16px 24px 0px;
                                  text-align:center;
                                  gap: 8px;
                                  border:none
                                  width: 318px;
                                  height: 43px;

                                  flex: none;
                                  order: 0;
                                  align-self: stretch;
                                  flex-grow: 0;`}> <Span className={css`margin-top:-40px;`}>Categorias</Span></PopoverHeader>
    <PopoverBody className={css`display: flex;
                              
                              flex-direction: column;
                              align-items: center;
                              padding: 16px 0px 40px;
                              gap: 10px;

                              
                              width: 318px;
                              height: 241px;

                              background: #FFFFFF;

                              box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
                              `}>
      
  <TabList >
           <div className={css`display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content:left;
                      padding: 16px 24px;
                      gap: 16px;

                      width: 312px;
                      height: 58px;

                      flex: none;
                      order: 0;
                      align-self: stretch;
                      flex-grow: 1;
                                  `}>
    <Tab onClick={setCol} id="Colaboradores" className={css` justify-content:left; width: 310px; height: 58px;`} > 
            
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
            </div>
            <div className={css`position:absolute; ; margin-top:60px; margin-left:0px;display: flex;
                  flex-direction: row;
                  align-items: center;
                  padding: 16px 24px;
                  gap: 16px;

                  width: 312px;
                  height: 58px;


                  /* Inside auto layout */

                  flex: none;
                  order: 0;
                  align-self: stretch;
                  flex-grow: 1;`}>
    <Tab onClick={setCarg}  className={css` justify-content:left; width: 310px; height: 58px;`} >  
            
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
            </div>
  </TabList>

  </PopoverBody>
  </PopoverContent>
</Popover>
</DivMenu>

  <TabPanels>
    {/* initially mounted */}
    <TabPanel className={css`display:flex; flex-direction:column;
            @media (max-width: 1002px) {
            width:100%;
            height:56px;
            display:flex;
            align-items:center;
            padding:14.5px;
           
            }
            
            `}>
    

        <ContributorsTable />

    </TabPanel>
    {/* initially not mounted */}
    <TabPanel>
   
      <PositionsList/>
    </TabPanel>
  </TabPanels>
</Tabs>

    </div>
  )
}
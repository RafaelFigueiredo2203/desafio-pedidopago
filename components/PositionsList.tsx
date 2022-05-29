/* eslint-disable react/no-unknown-property */
  import styled from '@emotion/styled'
  import { cx, css } from '@emotion/css';
  import { ArrowsClockwise, CaretLeft, CaretRight, DotsThreeOutlineVertical, Eye, FilePlus, MagnifyingGlass, Trash } from 'phosphor-react';
  import { Key, useContext, useEffect, useState } from 'react';
  import {Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Fade, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Slide, SlideFade, useDisclosure, ButtonSpinner } from '@chakra-ui/react'
  import { useAuth } from '../services/useContext';
  import Link from 'next/link';
  import { Button, ButtonGroup  } from '@chakra-ui/react';
import { AddIcon, EditIcon, MinusIcon } from '@chakra-ui/icons';

  
interface Props{
    isExpanded: any;
}
  
export default function PositionsList() {
  
  
  
  
  
  const  {positions, getPositions} = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure()
  

 
 
 




  useEffect(() => {


    getPositions();
    
  }, []);

 
  const TableArea = styled.div`
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 2px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #dad7d7;
}
  position:relative;
  overflow-y:auto;
  overflow-x:none;
  margin-top:40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
 
  width: 908px;
  height:520px;
  flex: none;
  order: 3;
  flex-grow: 0;
  @media (max-width: 1003px) {
    width:468px;
    height: 800px;
    display: flex;
    position:relative;
    align-items:center;
    
                        
  } @media (max-width: 500px) {
    width:350px;
    margin-left:-20px;
    }
  `

  const HeaderTable= styled.div`
  box-sizing: border-box;

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
  
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  text-align:left;  
 
  width: 902px;
  height: 69px;

  border-bottom:1px solid #EAEFED;
  @media (max-width: 1003px) {
    width: 319px;
    height: 65px;
    box-sizing:border-box;
    flex-direction:column;
    border:none;
    border-bottom:none;
    width: 319px;
    height: 396px;;
    margin:0;
    border-bottom:2px solid #B5F1DD;
  }
  `

  const Footer =  styled.div`
  padding-top:10px;
  display:flex;
  align-items:center;
  justify-content:left;
  flex-direction:row;
  text-align:center;
  
  height:60px;
  width:902px;
  @media (max-width: 1003px) {
    width:350px;
    height:70px;
    margin-left:75px;
  }
  @media (max-width: 500px) {
    width:320px;
    margin-left:-3px;
    }
  `
  

  const P = styled.p`
      margin-right:69px;

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

  const SpanName = styled.span`
  
  width: 113px;
  height: 34px;
  
 
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  
  
  display: flex;
  align-items: center;
 margin-right:45px;
  margin-left:8px;

  
  color: #587169;
  
  

  
  flex: none;
  order: 0;
  flex-grow: 0;
  `

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
const Select = styled.select`
 box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  text-align:center;

  width:78px;
  height:36px;

  background: #FFFFFF;
  margin-left:39.5px;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  

  color: #587169;

 `
  return(
    <>
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
        <input type="text" placeholder='Pesquise por cargos'  className={css`font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        margin-left:12px;
        width:100%;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    
      
        list-style:none;

        color: #587169;`}  />


     </InputSearchDiv >
     <Span >Listagem de cargos</Span>
   
     <TableArea  >
    <HeaderTable className={css`@media (max-width: 1003px) {
    display:none;
    
  }`}>


    <SpanHeaderTable >Cargo</SpanHeaderTable>
    <SpanHeaderTable >Departamento</SpanHeaderTable>
    <SpanHeaderTable className={css` margin-right:330px;`}>Colaboradores</SpanHeaderTable>
    

    </HeaderTable>
    
    <div className={css`@media (min-width: 1003px) {
    display:none;
  }
    display: flex;
    flex-direction:column;
    position:relative;
    align-items:center;
    width: 319px;
    height: 65px;
    box-sizing:border-box;
    flex-direction:column;
    border:none;
    border-bottom:none;
    width: 319px;
    height: 396px;;
  `}>
    {positions.roles?.map((roles: any) => (
                <PositionsData  key={roles.name}>
          <Accordion allowToggle >
  <AccordionItem>


 
  {({ isExpanded }) => (
    <>
  <AccordionButton className={css`margin-top:10px;border: 2px solid #EAEFED;width: 319px;height: 65px;border-radius: 8px 8px 0px 0px;
                            align-items: center;  padding: 24px 16px 16px; gap: 91px;
                            justify-content: space-between;  display: grid;grid-template-columns: 1fr 2fr 1fr; background: #FFFFFF;`}>
                             
        <Box  flex='1' textAlign='center'  >
        <Span className={css`font-size: 12px; margin-top:-50px;`}>Cargo</Span> 
                 <P className={css`margin-top:2px; margin-right:25px;`}>{roles.name}</P>
                 </Box>
                 {isExpanded ? ( <> <div className={css`display: flex;
                                            flex-direction: column;
                                            align-items: flex-start;
                                            padding: 0px;
                                            gap: 2px;
                                            margin-left:-230px;
                                            width: 117px;
                                            height: 33px;
                                            margin-top:-13px;

                                            /* Inside auto layout */

                                            flex: none;
                                            order: 1;
                                            flex-grow: 0;`}><P className={`font-size: 12px; font-weight: 600; line-height: 140%; color: #587169;`}>Departamento</P>
                                      <P className={css``}>{roles.departament}</P></div> </> 
            ) : (
              <></>
            )}
        <AccordionIcon />
       
                
      </AccordionButton>

     
      <AccordionPanel pb={4} className={css`display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 0px;

                        width: 319px;
                        height: 180px;
                        border: 2px solid #B5F1DD;
                        border-bottom: 2px solid #B5F1DD;
                        border-top:none;
                        border-radius-top:none;
                        filter: drop-shadow(0px 4px 8px rgba(165, 171, 179, 0.16));
                        border-radius: 8px;
                        margin-bottom:10px;
                        flex: none;
                        order: 0;
                        align-self: stretch;
                        flex-grow: 0;`}>      
                        
                        
                  <div className={css`display: flex;
                                                    flex-direction: column;
                                                    align-items: flex-start;
                                                    padding: 0px;
                                                    gap: 2px;
                                                    text-align:left;
                                                    margin-top:15px;
                                                    width: 152px;
                                                    height: 33px;
                                                    margin-left:16px;
                                                    justify-content:left;
                                                    flex: none;
                                                    order: 1;
                                                    flex-grow: 0;`}>
                      <P className={` font-size: 12px; font-weight: 600; color: #587169;`}>Colaboradores</P>
                  <P className={css``} >{roles.agents_quantity}</P>
                      </div>
                      
                      <div className={css`display: flex;
                          flex-direction: row;
                          align-items: center;
                          padding: 16px 16px 24px;
                          gap: 16px;

                          width: 315px;
                          height: 160px;

                          background: #FFFFFF;
                          border-radius: 0px 0px 8px 8px;

                          flex: none;
                          order: 5;
                          align-self: stretch;
                          flex-grow: 0;`}>
                            
                    <Button className={css`box-sizing: border-box;

                                          display: flex;
                                          flex-direction: row;
                                          justify-content: center;
                                          align-items: center;
                                          padding: 14px 24px;
                                          gap: 8px;

                                          width: 287px;
                                          height: 52px;
                                          background:#FFF;
                                          border: 2px solid #B5F1DD;
                                          border-radius: 8px;

                                          flex: none;
                                          order: 0;
                                          flex-grow: 1;`} onClick={onOpen} >
                                              <FilePlus size={24} color="#1DD195" weight="light" />
                                              <Span className={css`margin-top:-38px;`}>Ações</Span>
                                              </Button>
                                              </div>
                                              </AccordionPanel>
                                              </>
    )}
                                                </AccordionItem>
                                              </Accordion>
                  </PositionsData>
    ))}
</div>

<div className={css`@media (max-width: 1003px) {
    display:none;
    
  }`}>
    {positions.roles?.map((roles: any) => (
                <PositionsData  key={roles.name}>
          
                 <P className={css`margin-left:20px;`}>{roles.name}</P>
                  <P className={css`margin-left:2px;`}>{roles.departament}</P>
                  <P className={css`margin-left:57px;`} >{roles.agents_quantity}</P>

                  <Button className={css`flex: none;
                                            order: 1;
                                            flex-grow: 0;
                                            background-color:#FFF; 
                                            border-radius:50%; 
                                            hover:background-color:#FFF;
                                            margin-left:180px;`} onClick={onOpen} >
                                              <DotsThreeOutlineVertical size={16} color="#587169" weight="fill" />
                                              
                                              </Button>

                  </PositionsData>
    ))}
</div>
<Modal  isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter ='blur(4px)' />
        <ModalContent className={css`display: flex;
                                      flex-direction: column;
                                      align-items: center;


                                      width: 340px;
                                      height: 248px;


                                      background: #FFFFFF;


                                      box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
                                      border-radius: 8px;`}>
         
        
          <ModalBody >
          <Button className={css`display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  background: #FFFFFF;
                                  margin-bottom:5px;
                                  width: 324px;
                                  height: 58px;
                                  justify-content: left;
                                  flex: none;
                                  order: 0;
                                  align-self: stretch;
                                  flex-grow: 0;`}  ><Eye size={24} color="#050505" weight="thin" /><SpanName className={css`font-size: 16px; margin-left:16px;`}>  <Link className={css`width: 324px; height: 58px;`}  href='/Positions'>Ver cargo </Link></SpanName></Button>

                                  <Button className={css`display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  justify-content: left;
                                  background: #FFFFFF;

                                  width: 324px;
                                  height: 58px;

                                  flex: none;
                                  order: 0;
                                  align-self: stretch;
                                  flex-grow: 0;`} disabled><EditIcon  color="#050505" className={css` width:24px; height:20px;`} /><SpanName className={css`font-size: 16px; margin-left:16px;`}>Editar</SpanName> </Button>
         
         <Button className={css`display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  justify-content: left;
                                  background: #FFFFFF;

                                  width: 324px;
                                  height: 58px;

                                  flex: none;
                                  order: 0;
                                  align-self: stretch;
                                  flex-grow: 0;`} disabled><svg color="#050505" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.10579 14.553C1.35278 14.059 1.95345 13.8588 2.44743 14.1058L12.0002 18.8822L21.553 14.1058C22.047 13.8588 22.6477 14.059 22.8946 14.553C23.1416 15.047 22.9414 15.6477 22.4474 15.8946L12.4474 20.8946C12.1659 21.0354 11.8345 21.0354 11.553 20.8946L1.55301 15.8946C1.05903 15.6477 0.858803 15.047 1.10579 14.553Z" fill="#CAD6D1"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5528 4.10557C11.8343 3.96481 12.1657 3.96481 12.4472 4.10557L22.4472 9.10557C22.786 9.27496 23 9.62123 23 10C23 10.3788 22.786 10.725 22.4472 10.8944L12.4472 15.8944C12.1657 16.0352 11.8343 16.0352 11.5528 15.8944L1.55279 10.8944C1.214 10.725 1 10.3788 1 10C1 9.62123 1.214 9.27496 1.55279 9.10557L11.5528 4.10557ZM4.23607 10L12 13.882L19.7639 10L12 6.11803L4.23607 10Z" fill="#CAD6D1"/>
                                  </svg>
                                  <SpanName className={css`font-size: 16px; margin-left:16px;`}>Duplicar</SpanName> </Button>          
          
          <Button className={css`display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  justify-content: left;
                                  background: #FFFFFF;

                                  width: 324px;
                                  height: 58px;

                                  flex: none;
                                  order: 0;
                                  align-self: stretch;
                                  flex-grow: 0;`} disabled><Trash size={24} color="#050505" weight="thin" /><SpanName className={css`font-size: 16px; margin-left:16px;`}>Excluir</SpanName> </Button>
         
                                  
          </ModalBody>

         
        </ModalContent>
      </Modal>

    </TableArea>

    <Footer className={css`@media (max-width: 1003px) {
    display:none;
    
  }`} >
     
          
              
              <Button disabled  className={css` margin-left:720px; width: 48px;
                                      height: 36px;   
                                      border: 1.4px solid #CAD6D1;
                                      border-radius: 8px 0px 0px 8px;
                                      background-color:#FFF;
                                      margin-right:12px;`}><CaretLeft size={16} color="#050505" weight="bold" /> </Button>
           
               
          
             
              <Span className={css`padding:0; `}>1 de 10</Span>
      
              <Button disabled  className={css`margin-left:12px; width: 48px;
                                      height: 36px;   
                                      border: 1.4px solid #CAD6D1;
                                      border-radius: 0px 8px 8px 0px;
                                      background-color:#FFF;
                                      
                                      `}><CaretRight size={16} color="#050505" weight="bold" /></Button>
                                    
                            
      </Footer>
      <Footer className={css`@media (min-width: 1003px) {
    display:none;
    
  }`}>
              <ButtonSpinner  className={css`box-sizing: border-box;

                                          

              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              padding: 14px 24px;
              gap: 8px;

              width: 316px;
              height: 52px;

              border: 2px solid #B5F1DD;
              border-radius: 8px;

              flex: none;
              order: 0;
              align-self: stretch;
              flex-grow: 0;
              &:active{
                background:#B5F1DD;
              }
              `} onClick={() => {}}>
                <ArrowsClockwise size={24} color="#1DD195" weight="light" />
              <Span className={css`padding:0;`}>Carregar mais</Span>
              </ButtonSpinner>
      </Footer>
    </>
)
}
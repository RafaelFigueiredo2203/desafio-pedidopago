/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled'
import { cx, css } from '@emotion/css';
import { DotsThreeOutlineVertical, Eye, Trash } from 'phosphor-react';
import { Key, useContext, useEffect, useState } from 'react';
import { Box, Fade, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../services/useContext';
import Link from 'next/link';
import { Button, ButtonGroup  } from '@chakra-ui/react';



export function ContributorsTable(){
  const  {contributors, getContributors} = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure()
  




  useEffect(() => {
    getContributors();
  }, []);

 
  const TableArea = styled.div`
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #dad7d7;
}
  position:relative;
  overflow:auto;
  overflow-x:none;
  margin-top:40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
 
  width: 908px;
  height:562px;
  flex: none;
  order: 3;
  flex-grow: 0;
  
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

  const ContributorsData = styled.div`
  
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  text-align:left;  
 
  width: 902px;
  height: 69px;

  border-bottom:1px solid #EAEFED;
  `

  const Footer =  styled.div`
      height:60px;
      width:902px;
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

  const StateActive = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 margin-left:-50px;
 margin-right:80px;
 
  
  width: 72px;
  height: 24px;
  

  
  background: #B5F1DD;
  border-radius: 80px;
  

  
 
  `
const Pstatus = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 116%;


color: #34423D;


display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 8px;
gap: 4px;

width: 72px;
height: 24px;
flex: none;
order: 1;
flex-grow: 0;

margin-left:-46px;

background: #B5F1DD;
border-radius: 80px;

`
  return(
    <TableArea  >

    <HeaderTable>

      
    <SpanHeaderTable>Nome completo</SpanHeaderTable>
    <SpanHeaderTable>Departamento</SpanHeaderTable>
    <SpanHeaderTable>Cargo</SpanHeaderTable>
    <SpanHeaderTable>Unidade</SpanHeaderTable>
    <SpanHeaderTable className={css`width:182px;`}>Status</SpanHeaderTable>

    </HeaderTable>

      
    
{contributors.items?.map((items: any) => (
  
                <ContributorsData key={items.agent_id}>
                  
                      <img className={css`width: 32px;
                                          height: 32px;
                                          flex: none;
                                          order: 0;
                                          flex-grow: 0;
                                          border-radius: 100%;
                                          margin-left:16px;
                                          `} src={items.image} alt="perfil-foto" />                
                      <SpanName>{items.name}</SpanName>
                      <P>{items.department}</P>
                      <P>{items.role}</P>
                      
                      <P className={css`margin-left:-52px;`}>{items.branch}</P>
                     { items.status === 'active' ?(
         <Pstatus style={{ background: items.status === 'active' ? "#B5F1DD" : "#EAEFED" }}  > Ativo  </Pstatus>
       ): (
         <>
           <Pstatus style={{ background: items.status === 'active' ? "#B5F1DD" : "#EAEFED" }}  >  Inativo </Pstatus>
       
        </>)

        }
     
                    <Button className={css`flex: none;
                                            order: 1;
                                            flex-grow: 0;
                                            background-color:#FFF; 
                                            border-radius:50%; 
                                            hover:background-color:#FFF;
                                            margin-left:75px;`} onClick={onOpen} >
                                              <DotsThreeOutlineVertical size={16} color="#587169" weight="fill" />
                                              
                                              </Button>
     
                                         
                </ContributorsData>
                   
            ))}

<Modal  isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter ='blur(4px)' />
        <ModalContent className={css`display: flex;
                                      flex-direction: column;
                                      align-items: center;


                                      width: 340px;
                                      height: 132px;


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
                                  flex-grow: 0;`}  ><Eye size={24} color="#050505" weight="thin" /><SpanName className={css`font-size: 16px; margin-left:16px;`}>  <Link className={css`width: 324px; height: 58px;`}  href='/Details'>Ver colaborador </Link></SpanName></Button>

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
      <Footer>
     
    fwefefef
      </Footer>
    </TableArea>
  )
}


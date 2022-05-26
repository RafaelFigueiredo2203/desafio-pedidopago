/* eslint-disable react/no-unknown-property */
  import styled from '@emotion/styled'
  import { cx, css } from '@emotion/css';
  import { DotsThreeOutlineVertical, Eye, Trash } from 'phosphor-react';
  import { Key, useContext, useEffect, useState } from 'react';
  import { Box, Fade, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react'
  import { useAuth } from '../services/useContext';
  import Link from 'next/link';
  import { Button, ButtonGroup  } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
  
  
export const PositionsList = () => {
  
  
  
  
  
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
  `

  const Footer =  styled.div`
      height:60px;
      width:902px;
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


  return(
    <TableArea  >

    <HeaderTable>

      
    <SpanHeaderTable >Cargo</SpanHeaderTable>
    <SpanHeaderTable >Departamento</SpanHeaderTable>
    <SpanHeaderTable className={css` margin-right:330px;`}>Colaboradores</SpanHeaderTable>
    

    </HeaderTable>
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
    
)
}
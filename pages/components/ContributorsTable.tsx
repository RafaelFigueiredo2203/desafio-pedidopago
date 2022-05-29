/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled'
import { cx, css } from '@emotion/css';
import { ArrowsClockwise, CaretLeft, CaretRight, DotsThreeOutlineVertical, Eye, FilePlus, MagnifyingGlass, Trash } from 'phosphor-react';
import { Key, SetStateAction, useContext, useEffect, useState } from 'react';
import {  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ButtonSpinner, Fade, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../services/useContext';
import Link from 'next/link';
import { Button, ButtonGroup  } from '@chakra-ui/react';
import { green } from '@mui/material/colors';




export function ContributorsTable(){
  const  {contributors, getContributors} = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [search, setSearch] = useState("K");
  const [accountFilter, setAccountFilter] =  useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] =  useState(0);

  function nextPage(){
       setPageNumber(pageNumber+1);
       
  }
  function previousPage(){
    if(pageNumber>0){
    setPageNumber(pageNumber-1);
    }else return;
}

  function paginate (contributors: any[], pageNumber: number) {
    return contributors.reduce((acc, val, i) => {
      let idx = Math.floor(i / pageSize)
      let page = acc[idx] || (acc[idx] = [])
      page.push(val)
  
      return acc
    }, [])
  }
  
  

 
  let pages = paginate(contributors, pageNumber)
 
 


  useEffect(() => {
    let filtrado ;
    function filtro(){
      
        return filtrado = contributors.filter(function(obj: { name: string; }) { return obj.name == search; });
   }
    
    filtro();
   
    getContributors();
    console.log(pages)    // all pages
    console.log(pages[1]) // second page
    console.log(filtrado);
    
  }, []);

  

 
  const TableArea = styled.div`
  
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
  @media (max-width: 1002px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 881px;
    margin-top:50px;
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
  @media (max-width: 1002px) {
    display:none;
    
    }
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
  


  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  text-align:left;  
 
  width: 902px;
  height: 69px;

  border-bottom:1px solid #EAEFED;
  @media (max-width: 1002px) {
    display:flex;
    
    box-sizing:border-box;
    flex-direction:column;
    border:none;
    border-bottom:none;
    width: 319px;
    height: 396px;;
    
    }@media (max-width: 495px) {width: 350px;}
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
      @media (max-width: 1002px) {
    
        width: 319px;
        height: 881px;
        
        }
      
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

margin-right:10px;
@media (max-width: 1002px) {
  width:316px;
  height:56px;
  margin-left:78px;
  margin-bottom:20px;

  
  
 
  }
  @media (max-width: 495px) { margin-left:18px;   width:316px;}
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
    <div className={css`width:100%; display:flex; flex-direction:column; align-items center; justify-content:center;
     @media (max-width: 1002px) {
       width:100%;
       padding-right:0;
     }
     @media (max-width: 495px) {width: 350px;}`}>
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

           

            color: #A3B8B0;ww
      `}>Pesquisar por</span>
    
    <MagnifyingGlass size={18} color="#050505" />
        <input type="text" placeholder='Pesquise por nome ou cpf' name={search} onChange={(e) => setSearch(e.target.name)}
        onKeyDown={e => e.key === 'Enter' ? setSearch : ''}
        className={css`font-family: 'Poppins';
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

<hr className={css`@media (max-width: 495px) {width: 300px; margin-left:25px;} width: 100%; height: 2px; background: #EAEFED;`}/>

     <Span className={css`@media (max-width: 1002px) {margin-bottom:150px;} @media (max-width: 495px) {margin-left:25px;}`}>Listagem de colaboradores</Span>
    <TableArea  >
        
      
    <HeaderTable>

      
    <SpanHeaderTable>Nome completo</SpanHeaderTable>
    <SpanHeaderTable>Departamento</SpanHeaderTable>
    <SpanHeaderTable>Cargo</SpanHeaderTable>
    <SpanHeaderTable>Unidade</SpanHeaderTable>
    <SpanHeaderTable className={css`width:182px;`}>Status</SpanHeaderTable>

    </HeaderTable>

      
    <div className={css`::-webkit-scrollbar-track {
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
                          @media (max-width: 1002px) {
                            width:70%;
                            display:none;

                            }
                          `}>

                            
                            
{pages[pageNumber]?.map((items: any) => (
  
  <ContributorsData key={items.name}>
                
                  
        
        
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
          
</div>


<div className={css`::-webkit-scrollbar-track {
                            background-color: #F4F4F4;
                        }
                        ::-webkit-scrollbar {
                            width: 2px;
                            background: #F4F4F4;
                        }
                        ::-webkit-scrollbar-thumb {
                            background: #dad7d7;
                        }
                          padding-top:1100px;
                          position:relative;
                          overflow-y:auto;
                          overflow-x:none;
                          margin-top:-40px;
                          width:355px;
                       
                          display: flex;
                          flex-direction:column;
                          align-items:center;
                          justify-content:center;
                          ;
                          @media (min-width: 1002px) {
                           
                            display:none;

                            }
                          `}>

                            

{pages[pageNumber]?.map((items: any) => (


<ContributorsData  key={items.name}   >
<Accordion  allowToggle >
  <AccordionItem>


 
      
  <AccordionButton className={css`margin-top:10px;border: 2px solid #EAEFED;width: 319px;height: 99px;border-radius: 8px 8px 0px 0px;
                            align-items: center;  padding: 24px 16px 16px; gap: 91px;
                            justify-content: space-between;  display: grid;grid-template-columns: 1fr 2fr 1fr; background: #FFFFFF;`}>
                             
        <Box  flex='1' textAlign='center'  >
        <Span className={css`font-size: 12px; margin-top:-50px;`}>Nome Completo</Span> 
        
       
                      <img className={css`width: 32px;
                                          height: 32px;
                                          flex: none;
                                          order: 0;
                                          flex-grow: 0;
                                          border-radius: 100%;
                                          margin-top:5px;
                                          `} src={items.image} alt="perfil-foto" />                
                      <SpanName className={css`width:150px; margin-left:40px; margin-right:-30px; margin-top:-30px;;`} >{items.name}</SpanName>
                  
   
                 
                      </Box>
        <AccordionIcon />
      </AccordionButton>
 
      <AccordionPanel pb={4} className={css`display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 0px;

                        width: 319px;
                        height: 297px;
                        border: 2px solid #B5F1DD;
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
                                      flex-direction: row;
                                      align-items: center;
                                      padding: 16px;
                                      gap: 24px;
                                      margin-top:5px;
                                     
                                      width: 315px;
                                      height: 65px;

                                      background: #FFFFFF;
                                      border-radius: 0px;

                                      flex: none;
                                      order: 1;
                                      align-self: stretch;
                                      flex-grow: 0;`}>

                                        <div className={css`display: flex;
                                                    flex-direction: column;
                                                    align-items: flex-start;
                                                    padding: 0px;
                                                    gap: 2px;

                                                    width: 152px;
                                                    height: 33px;


                                                    flex: none;
                                                    order: 1;
                                                    flex-grow: 0;`}>
                         <P className={`font-size: 12px; font-weight: 600; line-height: 140%; color: #587169;`}>Departamento</P>
                      <P>{items.department}</P>
                      </div>
                      <div className={css`display: flex;
                                                    flex-direction: column;
                                                    align-items: flex-start;
                                                    padding: 0px;
                                                    gap: 2px;

                                                    width: 152px;
                                                    height: 33px;


                                                    flex: none;
                                                    order: 1;
                                                    flex-grow: 0;`}>
                      <P className={` font-size: 12px; font-weight: 600; color: #587169;`}>Cargo</P>
                      <P>{items.role}</P>
                      </div>
                     </div>
                      <div  className={css`
                      display:flex; flex-direction: row;
                                      align-items: center;
                                      padding: 16px;
                                      gap: 24px;
                                      
                                      width: 315px;
                                      
                                      height: 65px;

                                      background: #FFFFFF;
                                      border-radius: 0px;

                                      flex: none;
                                      order: 1;
                                      align-self: stretch;
                                      flex-grow: 0;`}>
                                        <div className={css`display: flex;
                                                    flex-direction: column;
                                                    align-items: flex-start;
                                                    padding: 0px;
                                                    gap: 2px;

                                                    width: 152px;
                                                    height: 33px;


                                                    flex: none;
                                                    order: 1;
                                                    flex-grow: 0;`}>
                        <P className={css`font-size: 12px; font-weight: 600; margin-top:-10px;  `}>Unidade</P>
                      <P className={css` font-size: 12px; width:120px; height:20px;margin-top:5px;`}>{items.branch}</P>
                      </div>
                      <div className={css`display: flex;
                                                    flex-direction: column;
                                                    align-items: flex-start;
                                                    padding: 0px;
                                                    gap: 2px;

                                                    width: 152px;
                                                    height: 33px;


                                                    flex: none;
                                                    order: 1;
                                                    flex-grow: 0;`}>
                      <P className={` font-size: 12px; font-weight: 600; color: #587169; margin-top:-10px;`}>Status</P>
                     { items.status === 'active' ?(
         <Pstatus className={css`margin-left:0px;`} style={{ background: items.status === 'active' ? "#B5F1DD" : "#EAEFED" }}  > Ativo  </Pstatus>
       ): (
         <>
           <Pstatus className={css` font-size: 12px; font-weight: 600; color: #587169;  margin-left:0px;`} style={{ background: items.status === 'active' ? "#B5F1DD" : "#EAEFED" }}  >  Inativo </Pstatus>
       
        </>)

        }
        </div>
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
                                                </AccordionItem>
                                              </Accordion>
                                                
                                              </ContributorsData>
                                        
                                                        
                                              
                                              
                
              
                                             


            ))}
         
</div>
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

        <Footer className={css`@media (min-width: 1002px) {
    
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
                                `} onClick={() => setPageSize(pageSize + 10)}>
                                  <ArrowsClockwise size={24} color="#1DD195" weight="light" />
                      <Span className={css`padding:0;`}>Carregar mais</Span>
                      </ButtonSpinner>
        </Footer>

      <Footer className={css`@media (max-width: 1002px) {
    
    display:none;
      
      }`} >
     
          <Span className={css`padding:0;`}>Mostrando {pageSize} de 50 registros</Span>
              <Select  value={pageSize} onChange={(e) => setPageSize(e.currentTarget.value)}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </Select>
              { pageNumber === 0 ?(
              <Button disabled onClick={previousPage}  className={css`margin-left:350px; width: 48px;
                                      height: 36px;   
                                      border: 1.4px solid #CAD6D1;
                                      border-radius: 8px 0px 0px 8px;
                                      background-color:#FFF;
                                      margin-right:12px;
                                      @media (max-width: 1002px) {
    
                                      display:none;
                                        
                                        }
                                      ` }><CaretLeft size={16} color="#050505" weight="bold" /></Button>
              ):( 
                <>
                <Button  onClick={previousPage}  className={css`margin-left:350px; width: 48px;
                height: 36px;   
                border: 1.4px solid #CAD6D1;
                border-radius: 8px 0px 0px 8px;
                background-color:#FFF;
                margin-right:12px;
                @media (max-width: 1002px) {
    
                  display:none;
                    
                    }
                ` }><CaretLeft size={16} color="#050505" weight="bold" /></Button>
                </>
              )}
             
              <Span className={css`padding:0;  @media (max-width: 1002px) {
    
    display:none;
      
      }`}>{pageNumber+1} de {pages.length}</Span>
      
              { pageNumber === pages.length-1 ?(
              <Button disabled onClick={nextPage} className={css`margin-left:12px; width: 48px;
                                      height: 36px;   
                                      border: 1.4px solid #CAD6D1;
                                      border-radius: 0px 8px 8px 0px;
                                      background-color:#FFF;
                                      @media (max-width: 1002px) {
    
                                        display:none;
                                          
                                          }
                                      `}><CaretRight size={16} color="#050505" weight="bold" /></Button>
                                      ):( 
                                        <>
                                         <Button onClick={nextPage} className={css`margin-left:12px; width: 48px;
                                      height: 36px;   
                                      border: 1.4px solid #CAD6D1;
                                      border-radius: 0px 8px 8px 0px;
                                      background-color:#FFF;
                                      @media (max-width: 1002px) {
    
                                        display:none;
                                          
                                          }
                                      `}><CaretRight size={16} color="#050505" weight="bold" /></Button>
                                        </>
                                  )}   
      </Footer>
    </TableArea>
    
    </div>
  )
}



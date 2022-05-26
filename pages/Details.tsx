import styled from '@emotion/styled';
import { css } from "@emotion/react";
import { Header } from "./components/Header";
import { ArrowLeft } from 'phosphor-react';
import { Button, ButtonGroup  } from '@chakra-ui/react';
import Link from 'next/link';
import { DetailsContributor } from './components/DetailsContributor';

export default function ContributorsDetails(){

  const Area = styled.div`
      background:#E5E5E5;
      width:1900px;
      height:1080px;

      display: flex;
      flex-direction: column;
      align-items:center;
  `

  const DetailsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 24px;
    gap: 40px;
    margin-top:32px;
   margin-left:290px;
    width: 956px;
    height: 598.75px;



    background: #FFFFFF;


    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    border-radius: 8px;


    
`
 const SpanTitle = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 100%;
    margin-left:16px;
    text-align:left;
    display: flex;
    align-items: center;
    color: #34423D;
    

 `
 const Buttonn = styled.button`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px;
      &:hover{
        background-color:#808080;
      }
      &:active{
        background-color:#EAEFED;
        
      }
      gap: 10px;
      cursor:pointer;
      width: 36px;
      height: 36px;
      border:none;

      background: #EAEFED;
      border-radius: 80px;
      
      
      flex: none;
      order: 0;
      flex-grow: 0;
 `

 const Box = styled.div`
    display:flex;
    flex-direction:row;
    align-items:left;
    margin-top:55px;
      margin-left:-215px;

 `
 const PerfilBox =  styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 24px;
        
        width: 317px;
        height: 82.75px;
        

        
        flex: none;
        order: 0;
        flex-grow: 0;
 `

  return(
    <Area >
          <Header/>

            <Box>
          <Buttonn > <Link href='/'><ArrowLeft size={24} color="#050505" weight="bold" /></Link></Buttonn><SpanTitle>  Detalhes do colaborador</SpanTitle>
          </Box>
          <DetailsArea>

              <DetailsContributor/>

          </DetailsArea>

    </Area>
  )
}
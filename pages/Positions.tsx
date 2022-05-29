import { Checkbox, Stack, useDisclosure } from "@chakra-ui/react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { useEffect } from "react";
import  Header  from "../components/Header";
import { useAuth } from "../services/useContext";
import   PositionsData  from '../components/PositionsData';

const Area = styled.div`
      background:#E5E5E5;
      width:1900px;
      height:1080px;

      display: flex;
      flex-direction: column;
      align-items:center;
      @media (max-width: 1600px) {
        width:100%;
        height:160vh;
        display:flex;
        flex:direction-column;
        align-items:center;
        height:180vh;
        text-align:center;
      }
  `
  const DetailsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 24px;
  gap: 40px;
  margin-top:32px;

 width: 956px;
height: 889px;

  padding:0;

  background: #FFFFFF;


  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;

  @media (max-width: 1600px) {
    margin-left:0px;
  }
  @media (max-width: 1002px) {
   width:100%;
   height:150vh;
  }
  
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
    @media (max-width: 1600px) {
      margin-left:-550px;

    }
    @media (max-width: 1002px) {
      margin-right:-500px;
      }
`

  

export default function Positions(){

 

  return(
    <Area>
      <Header/>

      <Box>
          <Buttonn > <Link href='/'><ArrowLeft size={24} color="#050505" weight="bold" /></Link></Buttonn>
          
          <SpanTitle className={css` @media (max-width: 1002px) {
                                      display:none;
                                      }`}> Cargos e permissões</SpanTitle>
                                       <SpanTitle className={css` @media (min-width: 1002px) {
                                      display:none;
                                      }`}> Novo Cargo</SpanTitle>
          </Box>
          <DetailsArea>

            <span className={css`font-family: 'Poppins';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 16px;
                                line-height: 100%;
                               
                                margin-top:40px;
                                margin-left:24px;
                                text-align: center;


                                color: #34423D;`}>Dados do Cargo</span>

                              <PositionsData/>
          </DetailsArea>
    </Area>
  )
}
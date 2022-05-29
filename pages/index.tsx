import type { NextPage } from 'next'
import { cx, css } from '@emotion/css';
;
import  Header  from '../components/Header';
import  {Contributors}  from '../components/Contributors';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from '../contexts/context';
import Link from 'next/link';




const Home: NextPage = () => {
  return (
    <AuthContextProvider>
    <ChakraProvider>
    <div className={css`
        align-items:center;
        justify-content:center;
        text-align:center;
        background: #E5E5E5;
        width:1920px;
        height:1080px;
        @media (max-width: 1600px) {
          width:100%;
          height:150vh;
          display:column;
          flex:direction-column;
          align-items:center;
          justify-content:center;
          text-align:center;
        }
        @media (max-width: 1024px) {
          height:180vh
        }
        @media (max-width: 1600px) {
          height:180vh
        }
        @media (max-width: 1002px) {
          display:flex;
          align-items:center;
            justify-content:center;
            text-align:center;
            height:300vh;
        }
    `}>

        <Header/>

              <Contributors/>
             
              
    </div>
    </ChakraProvider>
    </ AuthContextProvider>
  )
}

export default Home

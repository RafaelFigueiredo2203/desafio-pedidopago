import type { NextPage } from 'next'
import { cx, css } from '@emotion/css';
;
import { Header } from './components/Header'
import { Contributors } from './Contributors';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from './contexts/context';
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
    `}>

        <Header/>

              <Contributors/>
             
              
    </div>
    </ChakraProvider>
    </ AuthContextProvider>
  )
}

export default Home

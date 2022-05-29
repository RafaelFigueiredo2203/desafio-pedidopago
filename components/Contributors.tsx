import {  css } from '@emotion/css';
import  Menu  from './Menu';

export  function Contributors(){


  return(
      <div className={css`
     
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left:610px;
      gap: 24px;
      width: 956px;
      height: 957px; 
      
      @media (max-width: 1600px) {
      margin-left:300px;
      }
      @media (max-width: 1426px) {
        margin-left:100px;
        }
        @media (max-width: 1038px) {
          margin-left:20px;
          }
          @media (max-width: 1002px) {
            margin-left:5px;
            height: 250vh;
            position:absolute;
            width:100%;
            
            padding:6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;
            }
      `}>

        <span className={css`font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 100%;
 
            margin-top:45px;
            color: #34423D;
            @media (max-width: 1600px) {
              margin-top:20px;
            }
            @media (max-width: 900px) {
              margin-left:-110px;
              margin-top:-500px;
            }
            `}>

                     Organização</span>

            <div className={css`
            display: flex;
            flex-direction: column;
            align-items:center;
            
            margin-top:24px;

            width: 956px;
            height: 841px;
            background:#FFFFFF;
  
            box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
            border-radius: 8px;
            
            @media (max-width: 1600px) {
              margin-top:5px;
              height: 841px;
            }
            @media (max-width: 1002px) {
              
              width:100%;
              height: 205vh;
              margin-left:0px;
            }
            
           
        `} >

        <Menu/>
        </div>
        
      </div>
  );
}
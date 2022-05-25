import { css, cx } from '@emotion/css';
import Link from 'next/link';

export function Header(){
  return(
    <>
    <div className={css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px;
    gap: 80px;
    border-bottom: 1px solid #EAEFED;
    width: 100%;
    height: 61px;
    
   
    
    background: #FFFFFF;
    
    
    
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    `} >
          <div className={css`
         display: flex;
         flex-direction: row;
         align-items: center;
         padding: 0px;
         gap: 32px;
         border-right:1px solid #EAEFED;

         width: 67.47px;
         height: 61px;
         
         
         
         
         flex: none;
         order: 0;
         flex-grow: 0;
          `}>
            <Link className={css`cursor: pointer;`} href='/'  >
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.7925 13.645V22.3187C13.7925 26.0423 10.7026 29.0649 6.89623 29.0649C3.08987 29.0649 0 26.0423 0 22.3187V6.8988C0 3.17524 3.08987 0.152588 6.89623 0.152588H22.659C26.4654 0.152588 29.5553 3.17524 29.5553 6.8988C29.5553 10.6224 26.4654 13.645 22.659 13.645H13.7925Z" fill="#034AFD"/>
          <path opacity="0.85" fillRule="evenodd" clipRule="evenodd" d="M19.7036 19.4275V28.1012C19.7036 31.8248 16.6137 34.8474 12.8074 34.8474C9.001 34.8474 5.91113 31.8248 5.91113 28.1012V12.6813C5.91113 8.95773 9.001 5.93506 12.8074 5.93506H28.5702C32.3765 5.93506 35.4664 8.95773 35.4664 12.6813C35.4664 16.4049 32.3765 19.4275 28.5702 19.4275H19.7036Z" fill="#1DD195"/>
          </svg>
          </Link>
          </div>
          <div className= {css`
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0px;
             
                
                width: 184px;
                height: 61px;
                
                border-left: 1px solid #EAEFED;
               
                
               
          `}>
            
               <div className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  
                  gap: 10px;
                  margin-left:32px;
                  margin-right:10px;
                 
                  
                  /* Inside auto layout */
                  
                  flex: none;
                  order: 0;
                  flex-grow: 0;
               `}>
                 <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16.5C0 7.66344 7.16344 0.5 16 0.5V0.5C24.8366 0.5 32 7.66344 32 16.5V16.5C32 25.3366 24.8366 32.5 16 32.5V32.5C7.16344 32.5 0 25.3366 0 16.5V16.5Z" fill="#B5F1DD"/>
                <path d="M11.352 20.464H14.768V21.5H10.078V11.742H11.352V20.464ZM17.199 20.394H21.959V21.5H15.687V20.492L20.419 12.848H15.743V11.742H21.931V12.75L17.199 20.394Z" fill="#34423D"/>
                </svg>


               </div>
             
                

                  <div className={css`
                  display: flex;
                  flex-direction:column;
                  `}>
                <span className={css`
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 100%;
                width: 110px;
     
                color: #34423D;
                
                `}>  Luiz Zlochevsky  </span>
                <a href="#" className={css`
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 120%;
                color: #587169;

                `}>meus dados</a>
              
                
                </div>
          </div>
    </div>

    <section className={css`
        position: absolute;
       heigh:100%;

        width: 256px;
        height:1018px;
        left: 0px;
        top: 61px;
        bottom: -61px;
        
        background: #FFFFFF;
        border-right: 1px solid #EAEFED;
    
        
        box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    `}  >

    </section>
    </>
  );

}
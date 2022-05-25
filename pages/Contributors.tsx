import { cx, css } from '@emotion/css';
import { Menu } from './components/Menu';

export function Contributors(){


  return(
      <div className={css`
     
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left:610px;
      gap: 24px;
      width: 956px;
      height: 957px; 
      flex: none;
      order: 0;
      flex-grow: 0;
      `}>

        <span className={css`font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 100%;
 
            margin-top:45px;
            color: #34423D;`}>

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
            
           
            
           
        `} >

        <Menu/>
        </div>
        
      </div>
  );
}
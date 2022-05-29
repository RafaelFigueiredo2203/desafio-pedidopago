import { css } from "@emotion/css";
import styled from '@emotion/styled';
import { CaretDown, IdentificationCard } from "phosphor-react";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../services/useContext";

const PerfilBox =  styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 24px;
margin-bottom:40px;
width: 317px;
height: 82.75px;



flex: none;
order: 0;
flex-grow: 0;
`

const Span = styled.span `
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 150%;

display: flex;
align-items: center;


color: #34423D;


flex: none;
order: 0;
flex-grow: 0;
`

const PersonalInformation =  styled.div`
box-sizing: border-box;

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 16px ;
margin-left:24px;
width: 286.67px;
height: 70px;

background: #F5FAF8;

border: 2px solid #CAD6D1;
border-radius: 8px;


flex: none;
order: 0;
flex-grow: 1;

`

 const P = styled.p`
 font-family: 'Poppins';
 font-style: normal;
 font-weight: 400;
 font-size: 12px;
 line-height: 120%;
 
 display: flex;
 align-items: center;

 color: #587169;

 

 `
 const OrganizationData =  styled.div`
 box-sizing: border-box;
 
  bottom:0;
 display: flex;
 flex-direction: column;
 
 align-items: flex-start;
 padding: 24px;
 gap: 24px;
 
 width: 908px;
 height: 235px;
 
margin-top:40px;
 border: 2px solid #EAEFED;
 border-radius: 8px;

 flex: none;
 order: 2;
 flex-grow: 0;
 @media (max-width: 1003px) {
  flex-direction: column;
  width:500px;
  height: 435px;

}
@media (max-width: 563px) {
  width: 316px;

  height: 435px;

}
 `
 const Div = styled.div`
 padding-right:10px;
 font-size: 15px;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 padding: 20px;
 width:418px;
 height:56px;

 left: 0%;
 right: 0%;
 top: 0%;
 bottom: 0%;
 
 background: #F5FAF8;

 border: 2px solid #CAD6D1;
 border-radius: 8px;
 @media (max-width: 1003px) {
 
  margin-bottom:24px;
  
}
@media (max-width: 563px) {
  width: 268px;



}
  `

  const Grid =  styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 240px;
  grid-row-gap: 20px;
  width:860px;
  height: 136px;
  @media (max-width: 1003px) {
    display:block;
    padding-top:24px;
    width:500px;
    
  }
  @media (max-width: 563px) {
    width: 250px;
  
  }
  `

  interface TypeContributor{

    agent:{
    id:number;
    name: string;
    email:string;
    phone:{
      ddd:number;
      ddi:number;
      number:number;
    },
    document: {
      type:string;
      number:number;
    },
    birth_date:number;
    image:string;
    department:string;
    branch:string;
    role:string;
    status:string;
  }

  }
export function DetailsContributor(){

  const [detailsContributor, setDetailsContributor ] = useState<TypeContributor>();


  useEffect(() => {
    async function getContributorDetails(){
      await api.get("/agent/1")
      .then((response) => {
        console.log(response);
        setDetailsContributor(response.data)
     })
     .catch((err) => {
       console.error("ops! ocorreu um erro : " + err);
     });
     }
     getContributorDetails();
  }, []);

  return (
    <div className={css`display:flex; flex-direction: column;`}>
      <PerfilBox>
                  <div className={css`width: 80px;
                                      height: 80px;
                                      display:flex;
                                      align-items: center;
                                      justify-content:center;
                                      background: linear-gradient(0deg, #EAEFED, #EAEFED), url(.png);
                                      border-radius: 800px;`}><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M7.06874 24.4852C8.5534 23.0006 10.567 22.1665 12.6667 22.1665H25.3333C27.433 22.1665 29.4466 23.0006 30.9313 24.4852C32.4159 25.9699 33.25 27.9835 33.25 30.0832V33.2498C33.25 34.1243 32.5411 34.8332 31.6667 34.8332C30.7922 34.8332 30.0833 34.1243 30.0833 33.2498V30.0832C30.0833 28.8234 29.5829 27.6152 28.6921 26.7244C27.8013 25.8336 26.5931 25.3332 25.3333 25.3332H12.6667C11.4069 25.3332 10.1987 25.8336 9.30791 26.7244C8.41711 27.6152 7.91667 28.8234 7.91667 30.0832V33.2498C7.91667 34.1243 7.20778 34.8332 6.33333 34.8332C5.45888 34.8332 4.75 34.1243 4.75 33.2498V30.0832C4.75 27.9835 5.58407 25.9699 7.06874 24.4852Z" fill="#587169"/>
                                      <path fillRule="evenodd" clipRule="evenodd" d="M18.9997 6.33317C16.3763 6.33317 14.2497 8.45982 14.2497 11.0832C14.2497 13.7065 16.3763 15.8332 18.9997 15.8332C21.623 15.8332 23.7497 13.7065 23.7497 11.0832C23.7497 8.45982 21.623 6.33317 18.9997 6.33317ZM11.083 11.0832C11.083 6.71092 14.6274 3.1665 18.9997 3.1665C23.3719 3.1665 26.9163 6.71092 26.9163 11.0832C26.9163 15.4554 23.3719 18.9998 18.9997 18.9998C14.6274 18.9998 11.083 15.4554 11.083 11.0832Z" fill="#587169"/>
                                      </svg>
                                      </div>
                    <div>
                  <Span>{detailsContributor?.agent.name}</Span>
                  <Span className={css`font-size:14px;font-weight: 400;line-height: 120%; color:#587169`}>{detailsContributor?.agent.email}</Span>
                    </div>

              </PerfilBox>

              <Span className={css`margin-bottom:24px;`}>Informações pessoais</Span>


              <div className={css` display:flex; flex-direction: row; width:100%; height:70px;
               @media (max-width: 1003px) {
                        flex-direction:column;
                        height: 230px;
                        align-items:center;
                        justify-content:space-between;
                      }`}>
                <PersonalInformation className={css`margin-left:0px; @media (max-width: 1003px) {
                                      margin-left:24px; margin-bottom:8px;
                                    }`}>
                <div className={css`display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    padding: 0px;
                                    gap: 8px;

                                    width: 171px;
                                    height: 38px;
                                   

                                    ;`}>
                                    
                                    <div className={css`display: flex;padding: 10px; width: 38px;height: 38px; background: #CAD6D1; border-radius: 80px; `}>
                                    <IdentificationCard size={18} color="#465953" weight="bold" />
                                    </div>
                                      </div>


                           <div className={css`margin-left:-124px;display: flex;flex-direction: column;align-items: flex-start; justify-content:left; width: 100px;height: 50px;`}>     
                            <P className={css`margin-top:0px;`}>{detailsContributor?.agent.document.type}</P>   
                            <P className={css`line-height: 100%;font-weight: 600;font-size: 14px;margin-top:-8px;`} >{detailsContributor?.agent.document.number}</P>   

                           </div> 
                </PersonalInformation>
                <PersonalInformation>
                <div className={css`display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    padding: 0px;
                                    gap: 8px;

                                    width: 171px;
                                    height: 38px;
                                    @media (max-width: 1003px) {
                                      margin-bottom:8px;
                                    }

                                    ;`}>
                                    
                                    <div className={css`display: flex;padding: 10px; width: 38px;height: 38px; background: #CAD6D1; border-radius: 80px; `}>
                                    <IdentificationCard size={18} color="#465953" weight="bold" />
                                    </div>
                                      </div>


                           <div className={css`margin-left:-124px;display: flex;flex-direction: column;align-items: flex-start; justify-content:left; width: 140px;height: 50px;`}>     
                            <P className={css`margin-top:0px;`}>Telefone</P>   
                            <P className={css`line-height: 100%;font-weight: 600;font-size: 14px;margin-top:-8px;`} >
                              +{detailsContributor?.agent.phone.ddi} {detailsContributor?.agent.phone.ddd} {detailsContributor?.agent.phone.number}</P>   

                           </div> 

                </PersonalInformation>
                <PersonalInformation className={css` @media (max-width: 1003px) {
                                      margin-top:8px;
                                    }`}>
                <div className={css`display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    padding: 0px;
                                    gap: 8px;

                                    width: 171px;
                                    height: 38px;
                                   

                                    ;`}>
                                    
                                    <div className={css`display: flex;padding: 10px; width: 38px;height: 38px; background: #CAD6D1; border-radius: 80px; `}>
                                    <IdentificationCard size={18} color="#465953" weight="bold" />
                                    </div>
                                      </div>


                           <div className={css`margin-left:-124px;display: flex;flex-direction: column;align-items: flex-start; justify-content:left; width: 180px;height: 50px;`}>     
                            <P className={css`margin-top:0px;`}>Nascimento</P>   
                            <P className={css` width:180px;line-height: 100%;font-weight: 600;font-size: 14px;margin-top:-8px;`} >{detailsContributor?.agent.birth_date}</P>   

                           </div> 

                </PersonalInformation>

               
              </div>

              <OrganizationData>
                    <Span>Dados Organizacionais</Span>
                   <Grid>

                     <Div >
                      <Span className={css` justify-content:center; width: 110px; display:flex; align-items:center;color: #A3B8B0; background: #FFF; position:absolute; font-weight: 500; font-size: 14px; margin-top:-55px;`}>
                        Departamento</Span>
                      <Span className={css`line-height: 150%; font-weight: 500; font-size: 16px; color: #587169;`}>{detailsContributor?.agent.department}</Span>
                      <CaretDown size={16} color="#587169" weight="bold" />
                     </Div>

                     <Div>
                     <Span className={css` justify-content:center; width: 60px; display:flex; align-items:center;color: #A3B8B0; background: #FFF; position:absolute; font-weight: 500; font-size: 14px; margin-top:-55px;`}>
                        Cargo</Span>
                      <Span className={css`line-height: 150%; font-weight: 500; font-size: 16px; color: #587169;`}>{detailsContributor?.agent.role}</Span>
                      <CaretDown size={16} color="#587169" weight="bold" />

                     </Div>

                     <Div>
                     <Span className={css` justify-content:center; width: 70px; display:flex; align-items:center;color: #A3B8B0; background: #FFF; position:absolute; font-weight: 500; font-size: 14px; margin-top:-55px;`}>
                        Unidade</Span>
                      <Span className={css`line-height: 150%; font-weight: 500; font-size: 16px; color: #587169;`}>{detailsContributor?.agent.branch}</Span>
                      <CaretDown size={16} color="#587169" weight="bold" />
                     </Div>

                     <Div>
                     <Span className={css` justify-content:center; width: 60px; display:flex; align-items:center;color: #A3B8B0; background: #FFF; position:absolute; font-weight: 500; font-size: 14px; margin-top:-55px;`}>
                        Status</Span>
                        {detailsContributor?.agent.status === 'active' ?(
                      <Span className={css`line-height: 150%; font-weight: 500; font-size: 16px; color: #587169;`}>Ativo</Span>
                      ): (
                        <>
                         <Span className={css`line-height: 150%; font-weight: 500; font-size: 16px; color: #587169;`}>Inativo</Span>
                        </>
                      )}
                      <CaretDown size={16} color="#587169" weight="bold" />
                     </Div>

                     </Grid> 
                    
                </OrganizationData>
    </div>
  );
}
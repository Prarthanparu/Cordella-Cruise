import React from 'react';
import styled from 'styled-components';
import FormDetails from './pagecontent/FormDetails';

const Form=()=> {
    return (
     <Container>
            <CardBody>
                <section>
                    <h4>Guest1 - Andy</h4>
                    <FormDetails/>
                </section>
                <section>
                    <h4>Guest1 - Simon</h4>
                    <FormDetails/>
                </section>
                <section>
                    <h4>Guest1 - Jake</h4>
                    <FormDetails/>
                </section>
                <section>
                    <h4>Guest1 - Paru</h4>
                    <FormDetails/>
                </section>

            </CardBody>
            <FooterBtn>
                 <button type="button">Proceed</button>
            </FooterBtn>
        </Container>
    )
}

export default Form;

const Container = styled.div`
display: flex;
flex-flow:wrap;
height: auto;
flex-direction: row;
padding:10px;
margin-top: 0;
justify-content: center;
`;


const CardBody = styled.div`
display: flex;
flex-direction:row;
padding:5px;
justify-content:center;
width:100%;
height:auto;
@media screen and (max-width:1200px){
    width:40%%;

}
@media screen and (max-width:600px){
    width:20%%;
    margin-left:5px;
    flex-direction:column;
}
>section{
>h4{
    color: #500E4B;
    font-size:18px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    margin-bottom:10px;
    margin-left:15px;
}
}


`;

const FooterBtn = styled.div`
    display: flex;
    justify-content:center;
    >button{
        width:150px;
        height:30px;
       display: inline-block;
    text-align:center;
    border-radius:10px;
    color: white;
    background:#500E4B;
    border: 3px solid #500E4B;
  text-align: center;
    cursor: pointer;
    }
    >button:hover{
        background:transparent;
        color: #500E4B;
    }
`;

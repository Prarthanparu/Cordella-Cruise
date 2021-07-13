import React from 'react'
import styled from 'styled-components';
import GuestDetails from './pagecontent/GuestDetails';
import PricingDetails from './pagecontent/PricingDetails';

const Details=()=> {
    return (
        <Container>
            <CardBody>
                <h4>Booking Details</h4>
                <CardContent>
                    <h6>Ship Name</h6>
                    <p>The Knight Rider</p>
                    <section className="pt-10">
                        <ul>
                            <li style={{"color":"gray","fontWeight":"200","fontSize":"14px"}}>Departure</li>
                            <li>Mumbai</li>
                            <li>Sat,16 Oct 2021</li>
                            <li>08:00PM</li>
                        </ul>
                        <ul>
                            <li style={{"color":"gray","fontWeight":"200","fontSize":"14px"}}>Arrival</li>
                            <li>Mumbai</li>
                            <li>Mon,18 Oct 2021</li>
                            <li>08:00AM</li>
                        </ul>
                    </section>
                    <section className="pt-10">
                        <ul>
                            <li style={{"color":"gray","fontWeight":"200","fontSize":"14px"}}>Cabin 1</li>
                            <li>Interior</li>
                            <li>Deck No: 11</li>
                            <li>Room No: 9000</li>
                            <li>Guest: 04</li>
                        </ul>
                        <ul>
                            <li style={{"color":"gray","fontWeight":"200","fontSize":"14px"}}>Cabin 2</li>
                            <li>Balcony</li>
                            <li>Deck No: 17</li>
                            <li>Room No: 007</li>
                            <li>Guest: 07</li>
                        </ul>
                    </section>
                </CardContent>
            </CardBody>
            <CardBody>
                <h4>Guest Details</h4>
                <CardContent>
                    <p style={{"borderBottom":"1px solid #D8E3E7","position":"relative", "margin-left":"10px","padding-top":"0"}}>Cabin 1</p>
                    <GuestDetails/>
                    <p style={{"borderBottom":"1px solid #D8E3E7","position":"relative", "margin-left":"10px"}}>Cabin 2</p>
                    <GuestDetails/>
                </CardContent>
            </CardBody>
            <CardBody>
                <h4>Pricing Details</h4>
                <CardPricingDetails>
                    
                    <PricingDetails/>
                    
                </CardPricingDetails>
            </CardBody>
            

        </Container>
    )
}

export default Details;

const Container = styled.div`
display: flex;
flex-flow:wrap;
height: auto;
justify-content:center;
flex-direction: row;
padding-top:10px;
padding-bottom:25px;

`;

const CardBody = styled.div`

flex:0.25;
padding:20px;
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
>h4{
    color: #500E4B;
    font-size:18px;
    font-weight:500;
    font-family: 'Poppins', sans-serif;
    margin-bottom:10px;
}

`;

const CardContent = styled.div`
width:400px;
height:500px;
padding:10px;
font-family: 'Poppins', sans-serif;
box-sizing:border-box;
border-radius:10px;
border:0.3px solid #500E4B;
box-shadow: 5px 5px 10px rgba(80, 14, 75, 0.1);
@media screen and (max-width:600px){
    width:300px;
    margin-left:5px;
    flex-direction:column;
}
>h6{
    margin-left:35px;
    margin-top:10px;
    font-size:12px;
    margin-bottom:-10px;
   color:gray;
}
>p{
    margin-left:35px;
    margin-top:10px;
   font-weight:500;
    color: #500E4B;
    
}
>section{
    margin-top:3px;
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    text-align:left;
    >ul{
         list-style-type: none;
         padding-left:0;
         >li{
        font-size: 16px;
         color: #500E4B;
         font-weight:500;
         margin:5px;
    }
    }   
}
`;

const CardPricingDetails = styled.div`
width:400px;
height:500px;
padding:15px;
font-family: 'Poppins', sans-serif;
box-sizing:border-box;
border-radius:10px;
border:1px solid #500E4B;
box-shadow: 5px 5px 10px rgba(80, 14, 75, 0.1);
@media screen and (max-width:600px){
    width:300px;
    margin-left:5px;
    flex-direction:column;
}
>p{
    margin-left:35px;
   font-weight:500;
   font-size:18px;
    color: #500E4B;
    
}
>section{
>span{
    font-size:14px;
    color:gray;
    margin-left:10px;
    font-weight:400;
}
}

`;




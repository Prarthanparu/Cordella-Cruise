import React from 'react';
import styled from 'styled-components';

const PricingDetails=()=>{
    return(
        <>
                     <p style={{"borderBottom":"1px solid #D8E3E7","position":"relative", "margin-left":"10px","font-size":"16px"}}>Cabin 1</p>
                    <section className="pt-5 ml-5">
                       <PriceList> <span>Gross Fair</span><span style={{"float":"right","margin-right":"10px"}}>$57,000</span></PriceList>
                       <PriceList> <span>Discount</span><span style={{"float":"right","margin-right":"10px"}}>$4104</span></PriceList>
                       <PriceList> <span>Amount</span><span style={{"float":"right","margin-right":"10px"}}>$53,496</span></PriceList>
                       <PriceList> <span>Tax</span><span style={{"float":"right","margin-right":"10px"}}>$9750</span></PriceList>
                       <PriceList> <span style={{"color":"#500E4B"}}>Net Payable Amount</span><span style={{"float":"right","margin-right":"10px","color":"#500E4B"}}>$63,246</span></PriceList>
                    </section>
                    <p style={{"borderBottom":"1px solid #D8E3E7","position":"relative", "margin-left":"10px","padding-top":"10px","font-size":"16px"}}>Cabin 2</p>
                    <section className="pt-5 ml-5">
                        <PriceList> <span>Gross Fair</span><span style={{"float":"right","margin-right":"10px"}}>$57,000</span></PriceList>
                       <PriceList> <span>Discount</span><span style={{"float":"right","margin-right":"10px"}}>$4104</span></PriceList>
                       <PriceList> <span>Amount</span><span style={{"float":"right","margin-right":"10px"}}>$53,496</span></PriceList>
                       <PriceList> <span>Tax</span><span style={{"float":"right","margin-right":"10px"}}>$9750</span></PriceList>
                       <PriceList> <span style={{"color":"#500E4B"}}>Net Payable Amount</span><span style={{"float":"right","margin-right":"10px","color":"#500E4B"}}>$63,246</span></PriceList>
                    </section>
                    <p style={{"borderTop":"1px solid #D8E3E7","position":"relative", "margin-left":"10px"}}></p>
                    <section className="pt-5">
                     <span style={{"color":"#500E4B","fontWeight":"600","fontSize":"16px"}}>Net Payable Amount</span><span style={{"float":"right","margin-right":"10px","color":"#500E4B","fontWeight":"600","fontSize":"16px"}}>$1,63,800</span><br />
                    </section>
        </>
    )
}
export default PricingDetails;

const PriceList = styled.div`
padding: 5px;
font-size: 14px;
color:gray;

`;
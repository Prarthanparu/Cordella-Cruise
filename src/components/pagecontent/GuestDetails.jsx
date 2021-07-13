
const GuestDetails =()=>{
    return(
         <section className="justifiy-center pt-2">
        
                <section >
                        
                            <span style={{"font-size":"14px","color":"#500E4B","font-weight":"200"}}>Guest 1 - Adult</span>
                            <h2 style={{"font-size":"13px","color":"gray","font-weight":"150"}}>Andy Sandra</h2>  <br />
                            <span style={{"font-size":"14px","color":"#500E4B","font-weight":"200"}}>Guest 1 - Adult</span>
                            <h2 style={{"font-size":"13px","color":"gray","font-weight":"150"}}>Andy Sandra</h2>  <br />
                            <span style={{"font-size":"14px","color":"#500E4B","font-weight":"200"}}>Guest 1 - Adult</span>
                            <h2 style={{"font-size":"13px","color":"gray","font-weight":"150"}}>Andy Sandra</h2>  
                           
                        
                    </section>
                    <section >
                            <div className="pb-10">
                                <label for="Guest" style={{"font-size":"14px","color":"#500E4B","float":"right","font-weight":"200"}}>Primary Guest</label><br />
                                <input type="checkbox" name="guest" id="guest" style={{"float":"right"}}/>          
                            </div>
                             <div className="pb-10">
                                <label for="Guest" style={{"font-size":"14px","color":"#500E4B","float":"right","font-weight":"200"}}>Primary Guest</label><br />
                                <input type="checkbox" name="guest" id="guest" style={{"float":"right"}}/>          
                            </div>
                            <div className="pb-10">
                                <label for="Guest" style={{"font-size":"14px","color":"#500E4B","float":"right","font-weight":"200"}}>Primary Guest</label><br />
                                <input type="checkbox" name="guest" id="guest" style={{"float":"right"}}/>          
                            </div>
                            
                    </section>
                   
         </section>
    )
}
export default GuestDetails;
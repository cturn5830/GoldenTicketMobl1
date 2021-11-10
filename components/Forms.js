import React, { useEffect } from "react";
import Link from "next/link"

export default function Form(){
    const words ="I want to subscribe to get future offers and news from ExxonMobil, and I agree for my submitted information to be used in accordance with the"
    const disclaimlink = `<a href="https://corporate.exxonmobil.com/Global-legal-pages/privacy-policy" rel="noreferrer">ExxonMobil privacy policy.</a>`
    const disclaimerRender = words + disclaimlink
    return(
        <div>
            <form name="submit-to-google-sheet">
                <input type="text" id="fname" name="fname" placeholder = "First Name"/> <p></p>
                <input type="text" id="lname" name="lname" placeholder = "Last Name"/>  <p></p>
                <input type="text" id="Phone#" name="Phone#" placeholder = "Phone Number"/> <p></p>
                <input type="text" id="email" name="email" placeholder = "E-Mail"/>  <p></p>
                <input type="text" id="ZipCode" name="ZipCode" placeholder = "Zip Code"/><p> </p>
                <input type="checkbox" id="OPTin" name="OPTin"/> {disclaimerRender}
              <br/>
            <Link href="/thank"><input type="submit" id ="submit"value="Submit" onClick={()=>{
                            const scriptURL = 'https://script.google.com/macros/s/AKfycbwLpHPedIqGTXRlj-oL8XCIz_iPZICsbyhYGrOT6WeyNvQ4QZG1cTioaJBcoy5iggQ8/exec'
                           const form = document.forms['submit-to-google-sheet']

                            
                              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                                .then(response => console.log('Success!', response))
                                .catch(error => console.error('Error!', error.message))
}}
></input></Link>
            </form>
            <p>
            Winners will be notified Nov. 3 via text and email, with only one
            entry per email address.
            </p>
        </div>
    )
}
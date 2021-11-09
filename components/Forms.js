import React, { useEffect } from "react";
import Router from 'next/router'
import Link from "next/link"

export default function Form(){
    return(
        <div>
            <form name="submit-to-google-sheet">
                <input type="text" id="fname" name="fname" placeholder = "First Name"/> <br/>
                <input type="text" id="lname" name="lname" placeholder = "Last Name"/>  <br/>
                <input type="text" id="email" name="email" placeholder = "E-Mail"/>  <br/>
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
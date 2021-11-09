import router, { useRouter } from "next/router";

export default function Form(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwLpHPedIqGTXRlj-oL8XCIz_iPZICsbyhYGrOT6WeyNvQ4QZG1cTioaJBcoy5iggQ8/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
    return(
        <div className="forms">
            <form >
                <input type="text" id="fname" name="fname" placeholder = "First Name"/> <br/>
                <input type="text" id="lname" name="lname" placeholder = "Last Name"/>  <br/>
                <input type="text" id="email" name="email" placeholder = "E-Mail"/>  <br/>
                <input type="submit" id ="submit"value="Submit" onClick={()=>router.push("/thank")}></input>
            </form>
            <p>
            Winners will be notified Nov. 3 via text and email, with only one
            entry per email address.
            </p>
        </div>
    )
}
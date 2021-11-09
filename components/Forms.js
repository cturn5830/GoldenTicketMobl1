import router, { useRouter } from "next/router";

export default function Form(){
    return(
        <div className="forms">
            <form >
                <input type="text" id="fname" name="fname" placeholder = "First Name"/> <br/>
                <input type="text" id="lname" name="lname" placeholder = "Last Name"/>  <br/>
                <input type="text" id="email" name="email" placeholder = "E-Mail"/>  <br/>
               <span className="submits"> <input type="submit" id ="submit"value="Submit" onClick={()=>router.push("/thank")}></input></span>
            </form>
            <p>
            Winners will be notified Nov. 3 via text and email, with only one
            entry per email address.
            </p>
        </div>
    )
}
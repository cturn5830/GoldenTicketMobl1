import Image from "next/image";
import Bottle from "../public/bottle.png";
import background from "../public/background.jpg"

export default function Thankshero(){
    return(
        <div>
            
            <Image src={Bottle} alt="Golden Bottle"/>
        </div>
    )
}
import Image from "next/image";
import bike from "../public/motorcycle.png";

export default function Herobike(){
    return(
        <div>
            
            <Image src={bike} alt="Golden Bottle"/>
        </div>
    )
}
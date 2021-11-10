import Image from "next/image";
import bike from "../public/motorcycle.png";

export default function Herobike(){
    return(
        <div className="subwidth">
            
            <Image src={bike} alt="Golden Bottle"/>
        </div>
    )
}
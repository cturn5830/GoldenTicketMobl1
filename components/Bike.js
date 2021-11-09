import Image from "next/image";
import Bike from "../public/Motorcycle.png";
import background from "../public/background.jpg"

export default function Heroimg(){
    return(
        <div className="Heroimg"style={{  
            
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
              
            <Image src={Bike} alt="Counts Kustoms Motorcycle"/>
            
        </div>
    )
}
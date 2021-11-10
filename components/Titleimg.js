
import Image from "next/image";
import Title from "../public/Lockup.png";
import background from "../public/background.jpg"

export default function Titleimg(){
    return(
        <div className="Titleimg">
            <div className="background">
            <Image src={background} alt="Counts Kustoms Motorcycle" className="background"/>
                </div>
            <Image src={Title} alt="Lock up title"/>
            
        </div>
    )
}
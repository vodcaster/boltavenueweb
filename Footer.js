import { useState, useEffect } from "react";
import { db, storage } from "../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import Instagram from "../assets/insta.png";
import Facebook from "../assets/fb.png";
import Linkedin from "../assets/linkedin.png"
const Footer = () => {
    const [info,setInfo] = useState([]);
    const infoCollectionRef = collection(db,"Address_info");
    async function getInfo() {
        const data = await getDocs(infoCollectionRef);
    
        setInfo(data.docs.map((doc) => ({ ...doc?.data(), id: doc?.id })));
      }

    useEffect(() => {
        getInfo();
      }, []);

  return (
    <>
      <div className="shadow-lg p-10 mx-10 ">
        <div className="flex flex-wrap   justify-center   ">
          <div className="py-2 my-2 w-1/4 ">
          <h1 className="font-bold  text-xl">Contact Us</h1>
          {info.map((info) => {
            return (
                <ul className=" justify-item-center p-2 w-full">
            <li  className='  mx-2  w-full'>{info.Trade_name}</li>
            <li className=' mx-2 w-full'> {info.address}</li>
           
            <li className=' mx-2  w-full'>{info.email}</li>
            <li className='  mx-2 w-full'>{info.firm_ph}</li>
            <li className='  mx-2 w-full'>{info.phone}</li>
            
        </ul>
            );
        })}
          
          </div>
          <div className="p-2 m-2">
            <h1 className="font-bold  text-xl">Follow Us</h1>
            <ul>
              <li> <a href="https://www.instagram.com/boltavenue_engg_infratech/" target="_blank"><img src={Linkedin} /></a></li>
              <li> <a href="https://www.instagram.com/boltavenue_engg_infratech/" target="_blank"><img src={Instagram} /></a></li>
              <li> <a href="https://www.facebook.com/profile.php?id=100076040111210&mibextid=LQQJ4d" target="_blank"><img src={Facebook} /></a></li>
            </ul>
          </div>
        
        </div>
        <div className="  py-2 my-2 ">
           <hr className="flex w-full" />
          <h1 className="flex justify-center py-2 my-2 ">© 2023 Copyrights Boltavenue Engineers InfraTech Pvt Ltd</h1>
        </div>
      </div>
     
    </>
  );
};
export default Footer;

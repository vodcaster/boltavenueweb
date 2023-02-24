import { useState, useEffect } from "react";
import { db, storage } from "../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
const Address = () => {

    const [info,setInfo] = useState([]);
    const infoCollectionRef = collection(db,"Address_info");
    async function getInfo() {
        const data = await getDocs(infoCollectionRef);
    
        setInfo(data.docs.map((doc) => ({ ...doc?.data(), id: doc?.id })));
      }

    useEffect(() => {
        getInfo();
      }, []);


    return(
        <>
        <div className="flex-wrap px-10 mx-10 justify-end w-1/3">
        <h1 className=" font-bold  text-2xl justify-item-center p-2 w-full">Address Info</h1>
        {info.map((info) => {
            return (
                <ul className=" justify-item-center p-2 w-full">
            <li  className='font-bold  text-xl m-2 p-2 w-full'>{info.Trade_name}</li>
            <li className=' font-bold  text-xl m-2 p-2 w-full'>Reg Office : {info.address}</li>
            <li className='font-bold  text-xl  m-2 p-2 w-full'>Site Office : {info.site_office}</li>
            <li className='font-bold  text-xl  m-2 p-2 w-full'>Email : {info.email}</li>
            <li className='font-bold  text-xl  m-2 p-2 w-full'>Phone : {info.firm_ph}</li>
            <li className='font-bold  text-xl  m-2 p-2 w-full'>{info.phone}</li>
            
        </ul>
            );
        })}
        </div>
        </>
    );
};
export default Address;
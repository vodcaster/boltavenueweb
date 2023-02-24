import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
const About = () => {
  const [overview, setOverview] = useState([]);
  const overviewRef = collection(db, "About_us");
  async function getOverview() {
    const data = await getDocs(overviewRef);
    console.log(data);
    setOverview(data.docs.map((doc) => ({ ...doc?.data(), id: doc?.id })));
    console.log(overview);
  }
  useEffect(() => {
    getOverview();
  }, []);

  return (
    <div>
      <h1 className="font-bold pt-10 m-10 text-2xl flex justify-center">OVERVIEW</h1>
      <div className="flex flex-wrap justify-center px-10 mx-10 bg-slate-100">
      <div className="flex flex-wrap justify-center p-10 m-10 w-4/6 " >
      {
        overview.map((overview) => {
            return ( 
                <>
            <p className="py-2">{overview.First_Para}</p>
            <p className="py-2">{overview.Second_Para}</p>
            <p className="py-2">{overview.Third_Para}</p>
            </>
            )
  })
}
</div>
    </div>
    </div>
  );
};
export default About;

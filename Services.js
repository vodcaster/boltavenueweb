import Building from "../assets/building.png";
import arch from "../assets/architecture.png";
import Homeauto from "../assets/Homeauto.png";
import Interior from "../assets/Interior.png";
import Completed from "../assets/completed.png";
import Renovation from "../assets/Renovation.png";
const Services = () => {
  return (
    <>
      <h1 className="font-bold flex justify-center text-2xl  pt-10 m-10 ">
        OUR SERVICES
      </h1>
      <div className="flex flex-wrap justify-center px-10 mx-10 bg-slate-100">
        <div className="shadow-2xl hover:bg-slate-300 m-6 p-8 ">
          <img src={Building} />
          <h1 className="font-bold flex justify-center">Construction Work</h1>
        </div>
        <div className="shadow-2xl hover:bg-slate-300 m-6 p-8">
          <img src={arch} />
          <h1 className="font-bold flex justify-center">
            Architectural Services
          </h1>
        </div>
        <div className="shadow-2xl hover:bg-slate-300 m-6 p-8">
          <img src={Homeauto} />
          <h1 className="font-bold flex justify-center">Home Automation</h1>
        </div>
        <div className="shadow-2xl hover:bg-slate-300 m-6 p-8">
          <img src={Interior} />
          <h1 className="font-bold flex justify-center">Interior Work</h1>
        </div>
        <div className="shadow-2xl hover:bg-slate-200 m-6 p-8">
          <img src={Renovation} />
          <h1 className="font-bold flex justify-center">Renovation Work</h1>
        </div>
        <div className="shadow-2xl hover:bg-slate-200 m-6 p-8">
          <img src={Completed} />
          <h1 className="font-bold flex justify-center">Completion Work</h1>
        </div>
      </div>
    </>
  );
};
export default Services;

import { useFormik } from "formik";
import { db } from "../firebase-config";
import { collection, addDoc } from "@firebase/firestore";
import Address from "./Address";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const contactCollectionRef = collection(db, "Contact_us");

  const createUser = async (values) => {
    await addDoc(contactCollectionRef, values);
    
    
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      details: "",
    },
    onSubmit: (values,{resetForm}) => {
     // createUser(values);
     notify();
     resetForm();
    },
  });
  const notify = () =>
    toast.success("Form Submitted Successfully", {
      position: "bottom-center",
      theme: "colored",
    });
  return (
    <>
      <div className="flex justify-center  shadow-lg px-10 mx-10 ">
        <div className="flex-wrap  px-10 mx-10 justify-start bg-slate-400 w-1/3">
          <h1 className="flex-wrap font-bold  text-2xl justify-item-center p-2 w-full">
            Get In Touch With Us
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="  justify-item-center p-2 w-full">
              <input
                className=" m-2 p-2 w-full"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter Your First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <input
                className=" m-2 p-2 w-full"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter Your Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <input
                className=" m-2 p-2 w-full"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <input
                className=" m-2 p-2 w-full"
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter Your Phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <textarea
                className=" m-2 p-2 w-full h-72"
                id="details"
                name="details"
                type="text"
                placeholder=""
                onChange={formik.handleChange}
                value={formik.values.details}
              />
              <button className="m-2 p-2 w-full bg-slate-600" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Address />
      </div>
      <ToastContainer />
    </>
  );
};
export default Contact;

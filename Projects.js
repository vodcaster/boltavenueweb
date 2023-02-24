import { useState, useEffect } from "react";
import { db, storage } from "../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import ImageCard from "./ImageCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const projCollectionRef = collection(db, "projects");

  async function getProjects() {
    const data = await getDocs(projCollectionRef);

    setProjects(data.docs.map((doc) => ({ ...doc?.data(), id: doc?.id })));
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <h1 className="font-bold pt-10 m-10 text-2xl flex justify-center">
        PROJECTS
      </h1>
      <div className="flex flex-wrap px-10 mx-10 justify-center bg-slate-100">
        {projects.map((project) => {
          return (
            <div className="w-96 m-3 p-4 shadow-lg hover:bg-slate-300 ">
              <ImageCard key={project.id} {...project} />
              <h1 className="font-bold">{project.projname}</h1>
              <p>{project.projdetails}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Projects;

"use client";
import { motion } from "framer-motion";

export default function ProjectCard({project}:any){
 return(
  <motion.div className="flex gap-10 items-center">
   <div className="w-1/2">
    <h2>{project.name}</h2>
    <p>{project.description}</p>
   </div>

   <div className="w-1/2">
    <img
     src={`http://localhost:5000/uploads/${project.image_url}`}
     className="rounded-xl"
    />
   </div>
  </motion.div>
 );
}

import ProjectCard from "../components/ProjectCard";
import Project2 from "../assets/images/project_2.jpg";
import Project3 from "../assets/images/project_3.webp";
import Project4 from "../assets/images/project_4.jpg";
import Project5 from "../assets/images/project_5.jpg";

function Projects() {
  return (
    <section className=" text-white" id="projects">
      <div className="mb-5">
        <h1 className="text-5xl font-bold mb-3">Projects</h1>
        <p className="text-lg ">
          I bring a mix of technical skills, creativity, and reliability to help
          the organization build impactful, efficient, and user-centered
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <ProjectCard image={Project2} />
        <ProjectCard image={Project3} />
        <ProjectCard image={Project4} />
        <ProjectCard image={Project5} />
      </div>
    </section>
  );
}

export default Projects;

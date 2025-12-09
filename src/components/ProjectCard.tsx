import Eye from "../assets/images/eye.svg";
import Github from "../assets/images/github.svg";

interface ProjectCardProps {
  label?: string;
  image?: string;
  onClick?: () => void;
  repository?: string;
}

export default function ProjectCard({ image }: ProjectCardProps) {
  return (
    <div className="flex flex-row items-center">
      <div className="ml-5">
        <button className="group">
          <div className="border border-solid rounded-full p-2 border-white mb-5 transition-colors duration-200 group-hover:bg-amber-500">
            <img src={Eye} alt="view" />
          </div>
        </button>
        <button className="group">
          <div className="border border-solid rounded-full p-2 border-white transition-colors duration-200 group-hover:bg-gray-700">
            <img src={Github} alt="github" />
          </div>
        </button>
      </div>

      <div className="border border-solid rounded-2xl border-white w-full h-64 md:h-80 lg:h-64 overflow-hidden  group">
        <img
          src={image}
          alt="project screenshot"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}

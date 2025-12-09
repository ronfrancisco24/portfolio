import SkillCard from "../components/SkillCard";
import Phone from "../assets/images/phone.svg";

function Skills() {
  return (
    <section className="container mx-auto">
      <div className="text-white justify-self-center mb-10">
        <h1 className="text-5xl text-center pb-5">
          What I Can Offer For Your Organization
        </h1>
        <p className="text-lg">
          I bring a mix of technical skills, creativity, and reliability to help
          the organization build impactful, efficient, and user-centered
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-5 p-5 mx-5 border-4 border-solid border-[#686D76] rounded-2xl shadow-lg shadow-gray-700 mb-7">
        <SkillCard
          img={Phone}
          label="Mobile App Development"
          description="I develop cross-platform apps in Flutter, focusing on clean code, performance, and user experience."
        />
        <SkillCard
          img={Phone}
          label="UI/UX Execution"
          description="I translate ideas into polished UI layouts with thoughtful interactions and accessibility in mind."
        />
        <SkillCard
          img={Phone}
          label="API & Database Handling"
          description="I integrate REST APIs, manage data flow, and ensure smooth backend communication."
        />
        <SkillCard
          img={Phone}
          label="Creative Problem-Solving"
          description="I analyze challenges logically, find patterns, and deliver solutions that balance speed and quality."
        />
        <SkillCard
          img={Phone}
          label="Data Insights & Visualization"
          description="I process raw data, extract meaning, and visualize trends for clearer decision-making."
        />
        <SkillCard
          img={Phone}
          label="Teamwork & Leadership"
          description="I contribute positively to group projects through organization, communication, and initiative."
        />
      </div>
    </section>
  );
}

export default Skills;

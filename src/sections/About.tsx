import placeholder from "../assets/images/placeholder.png";
import StartButton from "../components/StartButton";

function About() {
  return (
    <section className="flex items-center gap-5 text-white">
      <img src={placeholder} alt="Placeholder" />

      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Hi I'm Aaron!</h1>
        <p className="text-justify">
          I’m a fourth-year Computer Science student passionate about developing
          apps that combine AI and IoT to improve everyday experiences. I enjoy
          turning data into meaningful, user-friendly solutions.
        </p>
        <StartButton
          label="View My Work"
          className="text-black font-bold bg-white rounded-3xl p-2 w-40"
        />
      </div>
    </section>
  );
}

export default About;

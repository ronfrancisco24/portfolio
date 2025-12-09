import placeholder from "../assets/images/placeholder.png";
import StartButton from "../components/StartButton";

function About() {
  return (
    <section className="container mx-auto h-screen grid grid-cols-10 gap-10 justify-items-center place-items-center">
      <img
        src={placeholder}
        alt="Placeholder"
        className="col-span-3 col-start-2"
      />
      <div className="col-span-4 px-7 text-white">
        <h1 className="mb-4 text-5xl">Hi I'm Aaron</h1>
        <p className="text-justify">
          I’m a fourth-year Computer Science student passionate about developing
          apps that combine AI and IoT to improve everyday experiences. I enjoy
          turning data into meaningful, user-friendly solutions.
        </p>
        <StartButton
          label="View My Work"
          className="text-black font-bold bg-white rounded-3xl justify-items-center px-10 py-2.5 mt-8"
        />
      </div>
    </section>
  );
}

export default About;

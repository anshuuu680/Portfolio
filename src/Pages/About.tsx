import Button from "../components/Button";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen pb-12 w-full flex flex-col items-center pt-[4em] lg:pt-[6em] gap-12 lg:gap-32"
    >
      <Button text="Know About Me" />

      <img
        className="w-8 h-8 grayscale hover:grayscale-0 object-cover cursor-pointer"
        src="/linkedin.svg"
        alt=""
      />
    </div>
  );
}

export default About;

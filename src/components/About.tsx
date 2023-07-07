// import Photo from "../assets/hsk.png";

function About() {
  return (
    <>
      <section
        id="about"
        className="my-6 bg-blue-300 p-6 font-montserrat shadow-inner"
      >
        <h2 className="text-center text-2xl font-semibold">About me</h2>
        <p className="pt-6 text-justify text-lg font-light">
          I am a soldier trying to change jobs and become a programmer. I create
          websites with passion and simplicity. I regularly devote my free time
          to learning new things and reading news. I enjoy learning about new
          technologies and expanding my knowledge.
        </p>
        <p className="pt-6 text-justify text-lg font-light">
          In addition, I actively practice sports. I have been training
          calisthenics for more than 7 years. In addition, my brothers and I
          have founded a soccer club and will soon start playing in an amateur
          league. I also enjoy playing computer games and reading business
          books.
        </p>
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVldjY4YzlxaDEyZ21tbnM1YnlxNXZjeGxjODYwOWoybG4zdjUwcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
          alt="gif"
          className="mx-auto mt-8 w-60 rounded-2xl"
        />
      </section>
    </>
  );
}

export default About;

import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img5.jpg";
import Img4 from "../assets/img4.png";

function About() {
  return (
    <>
      <section
        id="about"
        className="my-6 bg-blue-200 p-6 font-montserrat shadow-inner lg:grid lg:grid-cols-2 lg:gap-4 lg:p-20"
      >
        <div className="lg:px-10">
          <h2 className="text-center text-2xl font-semibold">About me</h2>
          <p className="pt-6 text-justify text-lg font-light">
            I am a soldier trying to change my job and become a programmer. I
            create websites with passion and simplicity. I regularly devote my
            free time to learning new things and reading news. I enjoy learning
            about new technologies and expanding my knowledge.
          </p>
          <p className="pt-6 text-justify text-lg font-light">
            In addition, I actively practice sports. I have been training
            calisthenics for more than 7 years. In addition, my brothers and I
            have founded a soccer club and will soon start playing in an amateur
            league. I also enjoy playing computer games and reading business
            books.
          </p>
        </div>

        <div className="my-10 grid gap-6 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-4">
          <img
            src={Img1}
            alt="image1"
            className="mx-auto w-60 rounded-2xl shadow-lg"
          />
          <img
            src={Img4}
            alt="image2"
            className="mx-auto w-60 rounded-2xl shadow-lg"
          />
          <img
            src={Img3}
            alt="image3"
            className="mx-auto w-60 rounded-2xl shadow-lg"
          />
          <img
            src={Img2}
            alt="image4"
            className="mx-auto w-60 rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </>
  );
}

export default About;

function Skills() {
  return (
    <>
      <section className="m-4 bg-violet-100 p-6">
        <div className="px-4">
          <h2 className=" text-3xl font-semibold">Skills</h2>
          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            <div>HTML</div>
            <div className="col-start-1 row-start-2">CSS</div>
            <div className="col-start-2 row-start-1">Javascript</div>
            <div className="col-start-2 row-start-2">React</div>
            <div className="col-start-3 row-start-1">TailwindCSS</div>
            <div className="col-start-3 row-start-2">Bootstrap</div>
            <div className="col-start-4 row-start-1">Git</div>
            <div className="col-start-4 row-start-2">Teamwork</div>
            <div className="col-start-5 row-start-1">Problem solving</div>
            <div>Communication skills</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

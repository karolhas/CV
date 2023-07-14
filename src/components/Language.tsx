function Language() {
  return (
    <div className="flex w-full flex-col">
      <div>
        <h2 className="text-3xl font-semibold">Language</h2>
      </div>
      <div className="grid grid-cols-2 items-center justify-between">
        <div className="col-span-1 ">
          <p>English</p>
          <p>Polish</p>
        </div>
        <div className="col-span-1 text-right text-lg font-semibold">
          <p>B2</p>
          <p>Native</p>
        </div>
      </div>
    </div>
  );
}

export default Language;

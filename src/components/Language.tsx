import { LanguageCard } from "./common/Language";

function Language() {
  return (
    <div className="flex w-full flex-col">
      <div>
        <h2 className="mb-3 text-3xl font-semibold">Language</h2>
      </div>
      <LanguageCard caption={"Polish"} description={"Native"} />
      <LanguageCard caption={"English"} description={"B2"} />
    </div>
  );
}

export default Language;

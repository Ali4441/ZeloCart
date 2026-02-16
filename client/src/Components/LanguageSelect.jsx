import { useState } from "react";

const LanguageSelect = () => {
  const [lang, setLang] = useState("en");

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className=" rounded-md px-3 py-1 bg-zinc-400/20 outline-none  text-teal-100"
    >
      <option value="en" className="text-black ">English</option>
      <option value="hi" className="text-black">हिंदी</option>
      <option value="ur" className="text-black">اردو</option>
    </select>
  );
};

export default LanguageSelect;

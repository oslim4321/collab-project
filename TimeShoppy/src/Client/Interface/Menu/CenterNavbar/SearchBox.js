import React from "react";

const SearchBox = () => {
  return (
    <form className="pt-2 relative mx-auto text-gray-600 w-full px-4">
      <div className="border-2 bg-white h-14 px-5 pr-16 text-sm w-full rounded-full border-blue-600 flex items-center justify-center gap-7">
        <span>
          <i className="bi bi-search"></i>
        </span>
        <input
          type="search"
          name="search"
          placeholder="Search for anything"
          className=" bg-transparent h-14 px-5 text-sm  w-full border-0 focus:outline-none bg-[#007BFF] font-workSans text-[18px]"
        />
        <select
          name=""
          id=""
          className="w-20 border-0 outline-none focus:outline-0 text-[#007BFF]"
        >
          <option disabled value="state">
            state
          </option>
          <option value="">hello</option>
          <option value="">uiwoiw</option>
        </select>
      </div>
      <button
        type="submit"
        className="absolute right-0 top-0 mt-5 mr-4"
      ></button>
    </form>
  );
};

export default SearchBox;

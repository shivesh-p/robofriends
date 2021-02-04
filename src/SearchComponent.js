import React from "react";

export default function SearchComponent({searchChange}) {
  return (
    <div>
      <input
        className="pa3 ba b--light-green bg-lightest-blue"
        type="search"
        placeholder="Search the Bots !"
        onChange={searchChange}
      />
    </div>
  );
}

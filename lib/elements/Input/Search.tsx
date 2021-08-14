import React, { useState } from "react";

//components
import Input from "./Input";

//types
import { SearchProps } from "../../types/ElementsProps";

//icons
import SearchIcon from "../../iconComponents/SearchIcon";
import ClearIcon from "../../iconComponents/ClearIcon";


function Search({ allowClear, className, placeholder = "Search", searchIconPosition = "left" }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const clearSearch = () => (
    <span onClick={() => setSearchValue("")} className={"input-search__icon"}><ClearIcon/></span>
  );

  const searchSuffix = () => {
    if (allowClear) return clearSearch();
    else if (!allowClear && searchIconPosition === "right") return <SearchIcon/>;
  };

  return (
    <Input
      className={className}
      onChange={handleChange}
      value={searchValue}
      prefix={searchIconPosition === "left" && <SearchIcon/>}
      suffix={searchSuffix()}
      placeholder={placeholder}
    />
  );
}

export default Search;

import React from "react";

//selects
import SelectDefault from "./SelectDefault";
import TagSelect from "./TagSelect";

//types
import { SelectProps } from "../../types/ElementsProps";


function Select({ mode = "normal", ...rest }: SelectProps): JSX.Element {
    

  switch (mode) {
    case "tag":
      return <TagSelect/>;

    default:
      return <SelectDefault {...rest}/>;
  }
}

export default Select;

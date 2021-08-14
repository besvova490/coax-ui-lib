// import React, { useState, useRef, useEffect } from "react";
// import classNames from "classnames";

// //elements
// import Checkbox from "../Checkbox/Checkbox";
// import Tag from "../Tag";

// //types
// import { SelectProps } from "../../types/ElementsProps";

// //assets
// import ArrowIcon from "../../iconComponents/ArrowIcon";

// //styles
// import "../../assets/scss/elements/Select.scss";

// const options = [
//   { value: "1", label: "1" },
//   { value: "2", label: "2" },
//   { value: "3", label: "3" },
//   { value: "4", label: "4" },
//   { value: "5", label: "5" },
// ];//todo improve


// const inList = (checkList: Array<{[key: string]: any}>, checkObj: {[key: string]: any}): boolean => {
//   return JSON.stringify(checkList).includes(JSON.stringify(checkObj));
// };


// function Select(): JSX.Element {
//   const [open, setOpen] = useState(false);
//   const [selectedValues, setSelectedValues] = useState<Array<{[key: string]: any}>>([]);
//   const [searchValue, setSearchValue] = useState<string>("");
//   const [filteredData, setFilteredData] = useState<Array<any>>(options);

//   const selectContainer = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);


//   useEffect(() => {
//     const handleClickOutside = (event: Event) => {
//       if (open && selectContainer.current && !selectContainer.current.contains(event.target as Node)) {
//         setOpen(false);
//         setSearchValue("");
//       }
//     };

//     if (open && inputRef.current) {
//       inputRef.current.focus();
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [open]);

//   const selectClassNames = classNames(
//     "select",
//     "select_tag",
//     {
//       "select_open": open,
//     }
//   );

//   const handleSelectOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: any) => {
//     e.stopPropagation();

//     if (inList(selectedValues, value)) {
//       setSelectedValues(selectedValues.filter(item => item.label !== value.label));
//     } else {
//       setSelectedValues([...selectedValues, value]);
//     }

//     setSearchValue("");
//     setFilteredData(options);
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(e.currentTarget.value);

//     const filteredOptions = options.filter(
//       item => item.label.toLowerCase().includes(e.currentTarget.value.toLowerCase())
//     );

//     setFilteredData(filteredOptions);
//   };

//   const handleTagRemove = (value: any) => {
//     setSelectedValues(selectedValues.filter(item => item.label !== value.label));
//   };


//   return (
//     <div className="select__wrapper" onClick={() => setOpen(!open)} ref={selectContainer}>
//       <div className={selectClassNames}>
//         <div className="select__selector">
//           {
//             selectedValues.length
//               ? <div className="select__selection-items">
//                 {
//                   selectedValues.map((item, index) => (
//                     <div className="selection-item" key={index}>
//                       <Tag key={item.label} label={item.label} className={"select-tag_tag-item"} onClose={() => handleTagRemove(item)} visible={true}/>
//                     </div>
//                   ))
//                 }
//                 <div className="select__selection-search" style={{ width: `${4 + (searchValue.length * 7)}px` }}>
//                   <input
//                     ref={inputRef}
//                     value={searchValue}
//                     onChange={handleSearch}
//                     className="select__selected-item"
//                   />
//                 </div>
//               </div>
//               : <span className="select__selection-placeholder">Test</span>
//           }
//         </div>
//         <span className="select__icon-arrow">
//           <ArrowIcon direction={open ? "bottom" : "top"}/>
//         </span>
//       </div>
//       <div className={`select__options ${open ? "select__options_open" : ""}`}>
//         {
//           filteredData.map(item => (
//             <div
//               key={item.value}
//               className="select__option-item"
//               onClick={e => handleSelectOption(e, item)}
//             >
//               <Checkbox label={item.label} checked={inList(selectedValues, item)}/>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Select;

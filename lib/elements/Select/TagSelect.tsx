import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

//components
import NoResults from "../../components/NoResults";
import SelectTagOption from "./SelectTagOption";

//elements
import { Tag } from "../Tag";

//types
import { SelectBaseProps } from "../../types/ElementsProps";

//assets
import ArrowIcon from "../../iconComponents/ArrowIcon";

//styles
import styles from "../../assets/scss/elements/Select.module.scss";


const inList = (checkList: Array<{[key: string]: any}>, value: string | number): boolean => {
  return checkList.some(item => item.value === value);
};


function Select(props: SelectBaseProps): JSX.Element {
  const {
    placeholder,
    disabled,
    options = [],
    onSelect,
    className,
    onOpen,
    onClose,
    onSearch,
    showSearch,
    style,
    searchFunc,
    fullWidth,
    size = "middle"
  } = props;

  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<Array<{[key: string]: any}>>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const selectContainer = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (open && selectContainer.current && !selectContainer.current.contains(event.target as Node)) {
        setOpen(false);
        inputRef.current && inputRef.current.blur();
        onClose();
        setSearchValue("");
      }
    };

    if (open && inputRef.current) {
      inputRef.current.focus();
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const selectClassNames = classNames(
    styles["select"],
    styles["select_tag"],
    className,
    {
      [styles["select_open"]]: open,
      [styles["select_isables"]]: disabled,
    }
  );

  const selectWrapperClassNames = classNames(
    styles["select-wrapper"],
    styles[`select-wrapper_size-${size}`],
    {
      [styles["select-wrapper_full-width"]]: fullWidth,
    }
  );

  const handleSelectOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, selectItem) => {
    e.stopPropagation();

    const { value } = selectItem;

    if (inList(selectedValues, value)) {
      setSelectedValues(selectedValues.filter(item => item.value !== value));
    } else {
      setSelectedValues([...selectedValues, selectItem]);
    }

    setSearchValue("");
    onSelect && onSelect(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    onSearch && onSearch(e.target.value);
  };

  const handleTagRemove = (value: any) => {
    setSelectedValues(selectedValues.filter(item => item.label !== value.label));
  };


  const filteredOptions = searchFunc
  ? searchFunc(searchValue, options)
  : options.filter(
    item => `${item.label}`.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleSelecOptionsList = () => {
    setOpen(!open);
    if (!open && onOpen) onOpen();
    if (open && onClose) {
      inputRef.current && inputRef.current.blur();
      onClose();
      setSearchValue("");
    }
  }


  return (
    <div className={selectWrapperClassNames} onClick={toggleSelecOptionsList} ref={selectContainer}>
      <div className={selectClassNames} style={style}>
        <div className={styles["select__selector"]}>
          {
            selectedValues.length || (open && showSearch)
              ? <div className={styles["select__selection-items"]}>
                {
                  selectedValues.map((item, index) => (
                    <div className={styles["selection-item"]} key={index}>
                      <Tag key={item.label} label={item.label} className={styles["select-tag_tag-item"]} onClose={() => handleTagRemove(item)} visible={true}/>
                    </div>
                  ))
                }
                {
                  showSearch && (
                  <div className={styles["select__selection-search"]} style={{ width: `${4 + (searchValue.length * 7)}px` }}>
                    <input
                      ref={inputRef}
                      value={searchValue}
                      onChange={handleSearch}
                      className={styles["select__selected-item"]}
                    />
                  </div>
                  )
                }
              </div>
              : <span className={styles["select__selection-placeholder"]}>{ placeholder }</span>
          }
        </div>
        <span className={styles["select__icon-arrow"]}>
          <ArrowIcon direction={open ? "bottom" : "top"}/>
        </span>
      </div>
      <div className={`${styles["select__options"]} ${open ? styles["select__options_open"] : ""}`}>
        {
          filteredOptions.length
          ? filteredOptions.map(({ value, label, disabled: sleectOptionDisabled }) => (
            <SelectTagOption
              key={value}
              value={value}
              handleSelectTagOption={handleSelectOption}
              label={label}
              disabled={sleectOptionDisabled}
              checked={inList(selectedValues, value)}/>
          ))
          : <NoResults/>
        }
      </div>
    </div>
  );
}

export default Select;

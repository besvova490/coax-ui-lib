import React from "react";

//types
import { NoResultsProps } from "../../types/ElementsProps";

//styles
import styles from "../../assets/scss/components/NoResults.module.scss";


function NoResults({ searchWords, className }: NoResultsProps): JSX.Element {


  return (
    <div className={`${className} ${styles["no-results"]}`}>
        <p>No results found for<span>{ searchWords && ` "${searchWords}` }</span></p>
    </div>
  );
}


export default NoResults;

import React, { useState, useEffect } from "react";

//components
import { ArrowIcon } from "../../iconComponents";
import Select from "../../elements/Select"; 

//interfase
import { PaginationProps } from "../../types/ComponentsProps";

//helpers
import { classNames } from "../../helpers/classNames";

//styles
import styles from "../../assets/scss/components/Pagination.module.scss";


function Pagination ({ className, current = 1, pagesList, disabled, onChange }: PaginationProps): JSX.Element {
    const [activePage, setActivePage] = useState(current);

    useEffect(() => {
        if (current in pagesList) setActivePage(current);
    }, [current]);

    const paginationClassNames = classNames(
        className,
        styles["pagination"],
        {
            [styles["pagination_disabled"]]: disabled,
        }
    );

    const handlePageChange = (page: number) => {
        if (disabled) return;

        setActivePage(page);
        onChange && onChange(page);
    };

    const buildPagesList = () => {
        if (pagesList.length <= 5) {
            return pagesList.map(page => (
            <li
                className={`${styles["pagination__item"]} ${activePage === page ? styles["pagination__item_active"] : ""}`}
                onClick={() => handlePageChange(page)}
            >
                <a className={styles["pagination__item-link"]}>{page}</a>
            </li>
            ));
        };

        const startIndex = activePage - 2 >= 0 ? activePage - 2 : 0;
        const newPaginationList = pagesList.slice(startIndex, startIndex + 5 ).length === 5 ? pagesList.slice(startIndex, startIndex + 5 ) : pagesList.slice(pagesList.length - 5,);

        return (
            <>
                {
                    activePage - 1 > pagesList[0] && (<li className={styles["pagination__item"]}>...</li>)
                }
                {
                    newPaginationList.map(page => (
                        <li
                            className={`${styles["pagination__item"]} ${activePage === page ? styles["pagination__item_active"] : ""}`}
                            onClick={() => handlePageChange(page)}
                        >
                            <a className={styles["pagination__item-link"]}>{page}</a>
                        </li>
                    ))
                }
                {
                    pagesList[pagesList.length - 1] !== newPaginationList[newPaginationList.length - 1] && (<li className={styles["pagination__item"]}>...</li>)
                }
            </>
        );
    }

    return (
        <ul className={paginationClassNames}>
            <li className={`${styles["pagination__item"]} ${styles["pagination__item-control"]}`}>
                <button
                    className={styles["pagination__item-link"]}
                    onClick={() => activePage !== pagesList[0] && handlePageChange(activePage - 1)}
                >
                    <ArrowIcon direction="left"/>
                </button>
            </li>
            { buildPagesList() }
            <li className={`${styles["pagination__item"]} ${styles["pagination__item-control"]}`}>
                <button
                    className={styles["pagination__item-link"]}
                    onClick={() => activePage !== pagesList[pagesList.length - 1] && handlePageChange(activePage + 1)}
                >
                    <ArrowIcon direction="right"/>
                </button>
            </li>
            <li className={styles["pagination__item_options"]}>
                <Select
                    fullWidth
                    disabled={disabled}
                    value={{ value: activePage }}
                    onSelect={({ value }) => setActivePage(+value)}
                    options={pagesList.map(item => ({ value: item }))}
                />
            </li>
        </ul>
    );
};

export default Pagination;

import React, { useState, useEffect } from "react";

//components
import { StarIcon } from "../../iconComponents";

//interface
import { RatingProps } from "../../types/ComponentsProps";

//helpers
import { classNames } from "../../helpers/classNames";

//styles
import styles from "../../assets/scss/components/Rating.module.scss";


function Rating({ rating, disabled, onRatingChange, className }: RatingProps): JSX.Element {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const [ratingValue, setRatingValue] = useState<number>(rating);

    const ratingClassNames = classNames(
        className,
        styles["rating"],
        {
            [styles["rating_disabled"]]: disabled,
        }
    );

    const renderRatingItems = (currentRating: number) => {
        const newArray = ratingArray.map((item: JSX.Element, number) => (
            <button
                tabIndex={disabled ? -1 : 0}
                className={`${styles["rating__item"]} ${currentRating > number ? styles["rating__item_flled"] : ""}`}
            >
                <StarIcon/>
            </button>
        ));

        setRatingArray(newArray);
    };

    const handleRatingChange = (newRating: number) => {
        if (disabled) return;

        setRatingValue(newRating);
        onRatingChange && onRatingChange(newRating);
    }

    useEffect(() => {
        setRatingValue(rating);
        renderRatingItems(rating);
    }, [rating]);

    return (
        <div className={ratingClassNames}>
            { ratingArray.map((item: JSX.Element, number) => (
                <span
                    key={number}
                    onClick={() => handleRatingChange(number + 1)}
                    onMouseEnter={() => !disabled && renderRatingItems(number + 1)}
                    onMouseLeave={() => !disabled && renderRatingItems(ratingValue)}
                >{ item }</span>
            )) }
        </div>
    );
};

export default Rating;

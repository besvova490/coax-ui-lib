import * as React from "react";

import { TestComponentProps } from "../../types/elements/Button.types";

import styles from "../../styles/elements/Button.module.scss";

console.log(styles);

const Button: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={styles["test-component"]}
  >
    <h1 className={styles.heading}>I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default Button;
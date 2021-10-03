import React, { useState, useEffect, Children, isValidElement } from "react";

//types
import { TabsProps } from "../../types/ComponentsProps";  

//helpers
import { classNames } from "../../helpers/classNames";

//styles
import styles from "../../assets/scss/components/Tabs.module.scss";


function Tabs({ children, activeKey, defaultActiveKey = 0, onChange }: TabsProps): JSX.Element {
  const panels = Children.map((children), child => {
    if (isValidElement(child)) return child;
  });

  const [activePanel, setActivePanel] = useState(defaultActiveKey < panels.length ? defaultActiveKey : 0);

  useEffect(() => {
    if ((activeKey || activeKey === 0) && activeKey < panels.length) {
      setActivePanel(activeKey);
    }
  }, [activeKey]);

  const tabNamesClassNames = (key, disabled) => classNames(
    styles["tabs__header-cell"],
    {
      [styles["tabs__header-cell_active"]]: key === activePanel,
      [styles["tabs__header-cell_disabled"]]: disabled
    }
  );

  const handleTabChange = (key) => {
    if (key !== activePanel) {
      onChange && onChange(key);
      setActivePanel(key);
    }
  };

  return (
    <div className={styles["tabs-container"]}>
      <div className={styles["tabs__header"]}>
        {
          panels.map((
            item, index
            ) => (
              <div className={tabNamesClassNames(index, item.props.disabled)}>
                <div onClick={() => handleTabChange(index)} className={styles["cell-label"]}>{ item.props.tab }</div>
              </div>
            ))
        }
      </div>
      <div className={styles["tabs__content"]}>
        { panels[activePanel].props.children }
      </div>
    </div>
  );
}

export default Tabs;

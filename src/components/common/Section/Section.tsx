import css from "./Section.module.css";

import clsx from "clsx";

interface IProps {
  as?: React.ElementType;
  sectionCN?: string;
  containerCN?: string;
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({
  as: Comp = "section",
  sectionCN,
  containerCN,
  children,
}) => {
  return (
    <Comp className={clsx(css.section, sectionCN)}>
      <div className={clsx(css.container, containerCN)}>{children}</div>
    </Comp>
  );
};

export default Section;

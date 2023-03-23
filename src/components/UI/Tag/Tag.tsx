import { FC } from 'react';

import "./Tag.scss";

interface ITagProps {
  title: string;
  classes?: string[];
}

const Tag: FC<ITagProps> = ({title, classes}) => {
  return (
    <li
      key={title}
      className={classes ? [...classes, "default-tag"].join(' ') : "default-tag"}
    >
      {title}
    </li>
  );
};

export default Tag;
import { FC } from 'react';

import "./Tag.scss";

interface TagProps {
  title: string;
  classes?: string;
}

const Tag: FC<TagProps> = ({title, classes}) => {
  return (
    <li
      key={title}
      className={classes || "default-tag"}
    >
      {title}
    </li>
  );
};

export default Tag;
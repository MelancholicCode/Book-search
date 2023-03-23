import { FC } from 'react';

import "./Tag.scss";

interface ITagProps {
  title: string;
  clazz?: string;
}

const Tag: FC<ITagProps> = ({title, clazz}) => {
  return (
    <li
      key={title}
      className={clazz ? `${clazz} default-tag` : "default-tag"}
    >
      {title}
    </li>
  );
};

export default Tag;
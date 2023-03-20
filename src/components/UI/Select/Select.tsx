import {FC} from 'react';
import { IOption } from '../../../utils/consts';

import "./Select.scss";

interface ISelectProps {
  title: string;
  optionsArr: IOption[]
}

const Select: FC<ISelectProps> = ({title, optionsArr}) => {

  return (
    <div className="filter">
      <label htmlFor={title} className='filter__label'>
        {title}
      </label>
      <select name="Category" id={title} className="filter__select">
        {optionsArr.map(option => (
          <option
            key={option.name}
            value={option.value}
            className="filter__option"
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
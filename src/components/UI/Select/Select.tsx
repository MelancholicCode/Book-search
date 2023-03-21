import {FC, ChangeEvent} from 'react';
import { IOption } from '../../../types/book';

import "./Select.scss";

interface ISelectProps {
  title: string;
  optionsArr: IOption[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<ISelectProps> = ({title, optionsArr, value, onChange}) => {

  return (
    <div className="filter">
      <label htmlFor={title} className='filter__label'>
        {title}
      </label>
      <select value={value} onChange={onChange} name="Category" id={title} className="filter__select">
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
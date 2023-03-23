import {FC} from 'react';

import "./Spinner.scss";
//@ts-ignore
import spinnerImg from "../../../img/spinner.svg";

interface ISpinnerProps {
  clazz?: string;
}

const Spinner: FC<ISpinnerProps> = ({clazz}) => {
  return (
    <div className={clazz ? `${clazz} default-spinner` : 'default-spinner'}>
      <img className='spinner-img' src={spinnerImg} alt="" />
    </div>
  );
};

export default Spinner;
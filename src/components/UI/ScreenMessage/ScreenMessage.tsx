import {FC, PropsWithChildren} from 'react';

//@ts-ignore
import placeholderImg from "../../../img/placeholder-img.webp";

import "./ScreenMessage.scss";

interface IScreenMessageProps {
  imgUrl?: string;
  clazz?: string;
}

const ScreenMessage: FC<PropsWithChildren<IScreenMessageProps>> = ({imgUrl, clazz, children}) => {
  return (
    <div className={clazz ? `${clazz} screen-message` : 'screen-message'}>
      <div className="screen-message__img">
        <img src={imgUrl || placeholderImg} alt="" />
      </div>
      <p className="screen-message__text">{children}</p>
    </div>
  );
};

export default ScreenMessage;
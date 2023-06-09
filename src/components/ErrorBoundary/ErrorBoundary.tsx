import { Component, ReactNode } from 'react'
import { messageImgs } from '../../utils/consts';
import ScreenMessage from '../UI/ScreenMessage/ScreenMessage';

interface IProps {
  children?: ReactNode
}

interface IState {
  hasError: boolean
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({hasError: true});
    console.error(error);
    console.error(errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return(
        <div className="book-list">
          <ScreenMessage
          
            imgUrl={messageImgs.error}>
            Something went wrong...
          </ScreenMessage>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
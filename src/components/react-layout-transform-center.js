import React,{PureComponent,PropTypes} from 'react';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    direction:PropTypes.string,
  };

  static defaultProps = {
    direction:'xy'
  };

  render(){
    const {direction,className,children} = this.props;
    return (
      <div className={classNames(`webkit-sassui-transform-center-${direction}`,'react-layout-transform-center',className)}>
        {children}
      </div>
    );
  }
}

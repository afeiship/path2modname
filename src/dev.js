import './dev.scss';
import ReactLayoutTransformCenter from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-transform-center">
        <div className="box">
          <ReactLayoutTransformCenter>
            CenterXY
          </ReactLayoutTransformCenter>
        </div>

        <div className="box">
          <ReactLayoutTransformCenter direction='x'>
          CenterX
          </ReactLayoutTransformCenter>
        </div>


        <div className="box">
          <ReactLayoutTransformCenter direction='y'>
          CenterY
          </ReactLayoutTransformCenter>
        </div>

    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class ex5 extends React.Component {

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
     <div>
      <div class="opening-blurb">
        <h2>Dragging & resize</h2>
        <p>As we spend more and more of our time in the virtual world, we begin to expect it to behave the same way as our physical surrounding. The ability to pick something up and move it is a very intuitive action. At first I tried to write my own JS to make this happen but then realized that it’s free with JQuery UI. Easy. One can imagine how we can move data or engage users using simple, intuitive actions.
        </p>
      </div>

       <Draggable
         handle=".handle"
         defaultPosition={{x: 0, y: 0}}
         position={null}
         grid={[1, 1]}
         onStart={this.handleStart}
         onDrag={this.handleDrag}
         onStop={this.handleStop}>
         <div>
           <div className="handle">
              <div className="card-img">
              </div>
           <p>Drag and Drop me!</p>
           </div>
         </div>
       </Draggable>

     </div>
    );
  }
}


export default ex5
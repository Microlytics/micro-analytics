import './App.css';

import Test1 from './components/Test1';
import Test2 from './components/Test2';

// microlytics
import { initialize, getValues } from './microlytics';

console.log(getValues());
initialize(
  'db19666c-08bf-489f-9d4b-c651eb52c5ac',
  'http://localhost:5000/api/v1/events'
);
console.log(getValues());

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <Test1 />
            <br></br>
            <br></br>
            <Test2 />
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';

import Test1 from './components/Test1';
import Test2 from './components/Test2';

// microlytics
import { initialize, getValues } from './microlytics';

console.log(getValues());
initialize('mykey', 'myurl2');
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

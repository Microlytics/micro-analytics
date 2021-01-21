import './App.css';

import Test1 from './components/Test1';
import Test2 from './components/Test2';
import EventFeed from './components/EventFeed';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='container'>
          <div className='row'>
            <div className='col-9'>
              <Test1 />
              <br></br>
              <br></br>
              <Test2 />
            </div>
            <div className='col-3'>
              <EventFeed />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

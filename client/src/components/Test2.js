import React from 'react';
import MicrolyticsComponent from '../microlytics/components/MicrolyticsComponent';

function Test2() {
  return (
    <MicrolyticsComponent
      component={
        <button name='test1' className='btn btn-info shadow lift mr-4 mb-4'>
          Example Button 2
        </button>
      }
      metadata={{
        userData: 'Example Button 2',
        key1: 'value1',
        btnId: 'example button 2',
      }}
      config={{ hover: true, click: true }}
    />
  );
}

export default Test2;

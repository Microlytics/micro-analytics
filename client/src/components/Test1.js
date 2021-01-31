import React from 'react';
import MicrolyticsComponent from '../microlytics/components/MicrolyticsComponent';

function Test1() {
  return (
    <MicrolyticsComponent
      component={
        <button name='test1' className='btn btn-success shadow lift mx-0 mb-4'>
          Example Button 1
        </button>
      }
      metadata={{
        userData: 'Example Button 1',
        key1: 'value1',
        btnId: 'example button 1',
      }}
      config={{ hover: true, click: true }}
    />
  );
}

export default Test1;

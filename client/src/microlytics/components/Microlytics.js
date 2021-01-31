import React, { useRef, cloneElement } from 'react';
import { Fragment } from 'react';

// hooks
import useHover from '../hooks/useHover';
import useOnClick from '../hooks/useOnClick';

const Microlytics = ({ component: Component, metadata, config }) => {
  const ref = useRef();

  useHover(ref, metadata, config);

  useOnClick(ref, metadata, config);

  return <Fragment>{cloneElement(Component, { ref: ref })}</Fragment>;
};

export default Microlytics;

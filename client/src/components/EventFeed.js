import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const EventFeed = ({ events: { events } }) => {
  return (
    <Fragment>
      <div
        className='container-fluid'
        style={{ overflowY: 'scroll', maxHeight: '75vh' }}>
        <div className='row'>
          <div className='col'>
            {events.map((item, i) => {
              return (
                <div className='card' key={i}>
                  <div className='card-body'>
                    <h5 className='card-title'>{`New Event: ${item.event}`}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EventFeed.propTypes = {
  events: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.eventReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);

import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div class=" ">
  {/* <Spinner animation="border" /> */}
  <button class="btn btn-outline-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading data. Please refresh...
</button>
  
</div>
    );
};

export default Loading;
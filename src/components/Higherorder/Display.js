import React from 'react';

const DisplayData = ({ isLoading, data }) => {
  return (
    <div>{isLoading ? <div>Loading... </div> : <div>Data: {data}</div>}</div>
  );
};

export default DisplayData;

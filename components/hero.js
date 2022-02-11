import React from 'react';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron p-5 mb-4 bg-light rounded-3 text-center">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{props.title}</h1>
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item " aria-current="page">Beranda</li>
          <li className="breadcrumb-item active " aria-current="page">{props.link}</li>
        </ol>
      </div>
    </div>
  );
};
export default Jumbotron
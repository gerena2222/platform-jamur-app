import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
    <div className="container p-4 pb-0">
      <section className="mb-4">
        <a
          className="btn btn-primary btn-floating m-1"
          style={{backgroundColor: "#3b5998;",border:"none"}}
          href="#!"
          role="button"
          ><i className="fab fa-facebook-f"></i
        ></a>

        <a
          className="btn btn-primary btn-floating m-1"
          style={{backgroundColor: "#25d366;",border:"none"}}
          href="#!"
          role="button"
          ><i className="fab fa-whatsapp"></i
        ></a>

        <a
          className="btn btn-primary btn-floating m-1"
          style={{backgroundColor: "#ac2bac;",border:"none"}}
          href="#!"
          role="button"
          ><i className="fab fa-instagram"></i
        ></a>
      </section>
    </div>

    <div className="text-center p-3 text-dark"style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
      © 2022 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">by Nashor</a>
    </div>

  </footer>
  );
};
export default Footer

import React from 'react';
import Link from "next/link"
const Hero = () => {
  return (
    <section className='hero bg-light'>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/assets/image/mushroom1.jpg" className="d-block mx-lg-auto img-fluid" style={{ borderRadius: "25px" }} alt="Bootstrap Themes" width="500" height="300" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Mushroom Shop</h1>
            <p className="lead" style={{ fontWeight: "bold", color: "gray" }}>Belanja Mudah, Aman, Nyaman, dan Selalu Menyediakan Jamur Yang Fresh Yang Langsung Di Petik Dari Kebun Yang Pasti Tidak Beracun Ya </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link href="/produk">
                <a type="button" className="btn btn-primary btn-lg px-4 me-md-2">Lihat Produk <span><i className='fas fa-arrow-right'></i></span></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero

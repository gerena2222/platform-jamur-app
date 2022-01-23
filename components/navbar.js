import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Fourth navbar example" id='navbarScroll'>
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" href="#">
            <img src="/assets/image/Logo.png" alt="" width="30" height="auto" className='me-2' />
            Mushroom Shop
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link href="/">
                <a className={
                  router.pathname == "/" ? "nav-link active" : "nav-link"
                } aria-current="page" href="#">Beranda</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/produk">
                <a className={
                  router.pathname == "/produk" ? "nav-link active" : "nav-link"
                } aria-current="page" href="#">Produk</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className={
                  router.pathname == "/about" ? "nav-link active" : "nav-link"
                } aria-current="page" href="#">Tentang</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};
export default Navbar
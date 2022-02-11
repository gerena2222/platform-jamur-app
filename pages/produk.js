import React from 'react'
import Jumbotron from '../components/jumbotron';
import MainLayout from '../components/main-layout';
import Link from "next/link"
import { sql_query } from '../lib/db';

const Produk = (props) => {
  const { produk } = props
  return (
    <MainLayout title="Produk">
      <Jumbotron title="Produk" link="Produk" />
      <section>
        <div className='container'>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ borderRadius: "25px" }}>
            {produk.map(produk => (
              <div className="col">
                <div className="card">
                  <img src={produk.linkFirebase} className="card-img-top" alt="Fissure in Sandstone" />
                  <div className="card-body">
                    <div className="row row-cols-1 row-cols-sm-1  row-cols-md-1 mt-1">
                      <h5 className="card-title">{produk.namaProduk}</h5>
                      <h6 className="card-text">{produk.harga} Per  {produk.satuan}</h6>
                      <Link href={`https://wa.me/+6281946356207?text=${produk.gambarProduk}%20Nama%20Barang%20:%20${produk.namaProduk}%20Harga%20:%20${produk.harga}%20Beli%20Berapa%20Kilo=%20?`}>
                        <a className='btn btn-success'>Order Now Via Whatsapp <i className='fab fa-whatsapp'></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </MainLayout>
  );
};
export async function getServerSideProps(ctx) {
  try {
    const hasil = await sql_query('SELECT * FROM produk')
    const produk = JSON.parse(JSON.stringify(hasil))
    return {
      props: { produk }
    }
  } catch (error) {
    return { props: { produk: false } }
  }
}
export default Produk

import Hero from "../components/hero";
import MainLayout from "../components/main-layout";
import SliderTesti from "../components/slide-testi";
import Link from "next/link"
import { sql_query } from "../lib/db"


const Home = (props) => {
  const { produk } = props
  return (
    <MainLayout title="Beranda">
      <Hero />
      <section className="py-5">
        <div className="container">
          <div className="py-2 text-center">
            <h2>Produk Terbaru</h2>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ borderRadius: "25px" }}>
            {produk.map(produk => (
              <div className="col">
                <div className="card">
                  <img src={produk.gambarProduk} className="card-img-top" width="100px" height="auto" alt="Fissure in Sandstone" />
                  <div className="card-body">
                    <div className="row row-cols-1 row-cols-sm-1  row-cols-md-1 mt-1">
                      <h5 className="card-title">{produk.namaProduk}</h5>
                      <h6 className="card-text">{produk.harga} Per  {produk.satuan}</h6>
                      <Link href="/produk">
                        <a className="btn btn-primary">Lihat Semua <i className="fas fa-arrow-right"></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SliderTesti />
    </MainLayout>
  )
}
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
export default Home

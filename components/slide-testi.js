import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination])
const data = [
  {
    "id": 1,
    "nama": "Ahmad Musri",
    "gambar": "https://res.cloudinary.com/kurogaze/image/upload/v1642942886/user3_piw1pl.png",
    "testi": "Mantap beli disini jamurnya masih segar segar"
  },
  {
    "id": 2,
    "nama": "Nisa Santika",
    "gambar": "https://res.cloudinary.com/kurogaze/image/upload/v1642942885/user1_ilrsvr.png",
    "testi": "Harga Murah dengan Produk Yang Berkualitas"
  },
  {
    "id": 3,
    "nama": "Nina Anna Maulida",
    "gambar": "https://res.cloudinary.com/kurogaze/image/upload/v1642942886/user4_fzzzna.png",
    "testi": "Kualitas Bagus Harga Terjangkau"
  },
  {
    "id": 4,
    "nama": "Raffy Hidayat",
    "gambar": "https://res.cloudinary.com/kurogaze/image/upload/v1642942886/user5_hujjyl.png",
    "testi": "CS Ramah dan Sopan Recomended dah"
  },
  {
    "id": 5,
    "nama": "Lisa Setya W",
    "gambar": "https://res.cloudinary.com/kurogaze/image/upload/v1642942886/user6_pqeqzq.png",
    "testi": "Cocok Gak Mengecewakan"
  },
  {
    "id": 6,
    "nama": "Seila Hermawan",
    "gambar": "https://res.cloudinary.com/kurogaze/image/upload/v1642942886/user2_hzqulp.png",
    "testi": "Jamurnya Masih Segar 100% Cocok Deh"
  }
]
const SliderTesti = () => {
  return (
    <section className="p-2 bg-light">
      <div className="container">
        <div className="pt-3 text-center">
          <h2>Testimonial</h2>
        </div>
        <Swiper
          spaceBetween={50}
          autoplay={{ "delay": 2500 }}
          loop={true}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {data.map(testi => (
            <SwiperSlide key={testi.id}>
              <div className="card testimonial-card mt-3 mb-5">
                <div className="card-up info-color"></div>
                <div className="avatar mx-auto white">
                  <img src={testi.gambar} width="60px" height="60px" className="rounded-circle img-fluid py-3"/>
                </div>
                <div className="card-body">
                  <h4 className="font-weight-bold mb-4">{testi.nama}</h4>
                  <hr/>
                    <p className="dark-grey-text mt-4">
                    {testi.testi}</p>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default SliderTesti

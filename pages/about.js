import React from 'react';
import Jumbotron from '../components/jumbotron';
import MainLayout from '../components/main-layout';

const About = () => {
  return (
    <MainLayout title="Tentang Kami">
      <Jumbotron title="Tentang Kami" link="Tentang Kami" />
      <section className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="/assets/image/Logo.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header">
                  <h4>Tentang Kami</h4>
                  <h2>Mushroom Shop Since 2022</h2>
                </div>
                <div className="about-text">
                  <p>
                   Sebuah Platform E-Commerce Yang Diperuntukan Untuk Para Pedagang - Pedagang Di Pasar Yang Dagangannya Berupa Kebutuhan Sehari - Hari Yang Salah Satunya Untuk Menjual Jamur Yang Bisa Di Konsumsi. 
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default About

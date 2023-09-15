"use client"
import React from 'react'
import styles from '../styles/aboutus.module.scss'

const page = () => {

    const goBack = () => {

        window.history.back();
      };
  return (
   <>
   <div className="container mt-5" id={styles.cus_container}>
    <div className='row'>
        <button onClick={goBack} className='btn col-1 p-0 mt-3 text-start ps-2' id={styles.bg_none}>
        <i className="bi bi-arrow-left fs-2"></i>
      </button>
      </div>

      <div className='row justify-content-center'>

        <h1 className='text-center'>Our Story: Passion for PlayStation Gaming</h1>
        <h3></h3>
        <section className='col-6 text-center mb-3 mt-5'>
        <h4 className='p-1'>About AD Evolution</h4>
        <p className='p-2'>At AD EVOLUTION, our love for PlayStation runs deep. We're not just another gaming store; we're a passionate community of PlayStation enthusiasts dedicated to preserving the legacy, celebrating the present, and eagerly anticipating the future of PlayStation gaming.</p>
        </section>
        <div className='row p-5'>
            <section className='col-4 text-center mb-5'>
                <h4 className='p-1'>Why PlayStation Matters to Us</h4>
                <p className='p-2'>PlayStation is more than just a gaming console <br /><br /> it's a symbol of innovation, creativity, and entertainment. It's the unforgettable controller, and the countless adventures that have shaped our gaming memories. PlayStation represents a journey through time, from the groundbreaking classics to the cutting-edge titles that continue to redefine gaming.</p>
            </section>
            <section className='col-4 text-center mb-5'>
                <h4 className='p-1'>Our Mission</h4>
                <p className='p-2'>At AD EVOLUTION, our mission is simple <br /> <br /> to provide PlayStation gamers like you with a haven where your love for gaming is understood and shared. We curate a handpicked selection of the finest PlayStation games, accessories, and memorabilia, ensuring that every product we offer reflects the quality and passion that PlayStation embodies.</p>
            </section>
            <section className='col-4 text-center mb-5'>
                <h4 className='p-1'>The Heart of Our Store</h4>
                <p className='p-2'>Our store is more than just a place to buy games <br /><br /> it's a gathering place for PlayStation aficionados. We host events, share insights, and engage in discussions about the latest releases, gaming history, and everything PlayStation. It's our way of creating a vibrant community where you're not just a customer - you're part of the PlayStation family. 
                </p>
            </section>
            <section className='col-12 text-center'>
                <h4 className='p-1'>Join Us on this PlayStation Journey</h4>
                <p className='p-2'>Whether you're a seasoned gamer with a collection that spans generations or someone just embarking on their PlayStation adventure, AD EVOLUTION welcomes you with open arms. Together, let's explore the world of PlayStation, celebrate its rich history, and look forward to the exciting gaming experiences that lie ahead.
                <br />
                <br />
                Thank you for choosing AD EVOLUTION as your PlayStation destination. Join us in celebrating the extraordinary world of PlayStation gaming, where every click of the controller button unlocks a new realm of possibilities
                </p>
            </section>
        </div>
        



      </div>
        </div>
   </>
  )
}

export default page
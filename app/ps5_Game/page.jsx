"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { getData } from '../ps5_Game/data';
import Image from 'next/image';
import styles from '../styles/product.module.scss';

const Page = async ({searchParams}) => {

 
  
  
  const id = searchParams.id

  const ps5 = await getData(id + `?timestamp=${Date.now()}`);
  

 



  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  

  const goBack = () => {

    window.history.back();
  };

  const formatDescription = (description) => {
    // Replace semicolons with line breaks
    const descriptionWithLineBreaks = description.replace(/;/g, '<br>');

    // Make text within square brackets bold
    const descriptionWithBoldText = descriptionWithLineBreaks.replace(
      /\[(.*?)\]/g,
      (match, textInsideBrackets) => `<strong>${textInsideBrackets}</strong>`
    );

    return descriptionWithBoldText;
  };

  

  return (
    <>

    {ps5 &&
    
    <div className="container" id={styles.cus_container}>
      
      

      <div className='row mt-5 ' id={styles.bg_row}>
        <div className='row'>
        <button onClick={goBack} className='btn col-1 p-0 text-start ps-2' id={styles.bg_none}>
        <i className="bi bi-arrow-left fs-2"></i>
      </button>
        </div>
        <section className='col-12 mx-auto col-xxl-6 p-5 pb-0'>
       
            <Image
              src={ps5.data[0].largeimg_url}
              alt={ps5.data[0].title}
              width={0}
              priority
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="img-fluid"
            />
        
        </section>
        <section id={styles.bg_product} className='col-12 col-xxl-12 p-5 pt-2 pb-0'>
          <h1 className='p-0'>{ps5.data[0].title}</h1>
          <small className='col-12 p-0'>Varenummer: {ps5.data[0].prodnumber}</small>
          <p className='m-0 col-12 p-0'>Release Date: {ps5.data[0].release_date}</p>
          <p className='m-0 col-12 p-0 text-white'>Genre: {ps5.data[0].genre}</p>

          <hr />
        </section>
        <section className='col-12 col-xxl-4 p-5 pt-0'>
          <h2 className='col-12 p-0 col-xxl-12 '>Kr {ps5.data[0].price},-</h2>
          <button className='col-6 col-xxl-12 text-center btn p-2 mt-3'>Tilføj til kurv</button>
        </section>

        <section className='col-xxl-8 p-5 pt-0'>
        <p 
              className="p-3 mb-0"
              id={styles.smallDes}
              dangerouslySetInnerHTML={{ __html: formatDescription(ps5.data[0].description) }}
            ></p>

           
        </section>
      </div>
    </div>

    }
    </>
  );
};

export default Page;

"use client"
import { createClientComponentClient} from "@supabase/auth-helpers-nextjs"
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/news.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function News() {


  const supabase = createClientComponentClient();

  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async () => {
    try {
      const { data, error } = await supabase.from('news').select("*").order('id');

      if (error) {
        throw error;
      }

      setNewsData(data);
    } catch (error) {
      console.error('Error fetching news data:', error.message);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <>
      <div className="row  p-4 gx-3 mb-5" id={styles.title}>
        {newsData.slice(0, 2).map((newsItem, index) => (
          <section
            className="col-lg-6 col-6"
            data-aos="fade-right"
            data-aos-delay="300"
            key={index}
          >
            
              <Link href={"https://google.com"} target="_blank">
                <Image
                  src={newsItem.image_url}
                  width={0}
                  height={0}
                  alt={newsItem.title}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="img-fluid"
                  id={styles.first}
                />
              </Link>
              
            
          </section>
        ))}
        {newsData.slice(2, 6).map((newsItem, index) => (
          <section
            className="col-lg-3 col-6 gy-3"
            data-aos="fade-left"
            data-aos-delay="300"
            key={index}
          >
            
              <Link href={"https://google.com"} target="_blank">
                <Image
                  src={newsItem.image_url}
                  width={0}
                  height={0}
                  alt={newsItem.title}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="img-fluid"
                />
              </Link>
              
            
          </section>
        ))}
   
      </div>
    </>
  );
}

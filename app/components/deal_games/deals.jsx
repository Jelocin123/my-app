"use client"
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../../styles/deals.module.scss";
import Image from "next/image";
import Link from "next/link";

const deals = () => {
  const supabase = createClientComponentClient();
  const [ps5Data, setPs5Data] = useState([]);
  const [page, setPage] = useState(1);
  const gamesPerPage = 12;
  const totalGames = 30;
  const [sortBy, setSortBy] = useState("1"); // Default value for Sort By dropdown
  const [sortOrder, setSortOrder] = useState("1"); 
  const fetchPs5Games = async () => {
    try {
      let orderBy;
  
      // Check if "Sort by Price" is selected and not in default sorting order
      if (sortBy === "2" && sortOrder !== "1") {
        orderBy = sortOrder === "3" ? { column: 'dealprice', ascending: true } : { column: 'dealprice', ascending: false };
      } else {
        orderBy = { column: 'image_url', ascending: true }; // Default order by 'id'
      }
  
      const { data, error } = await supabase
        .from("deals_games")
        .select('*')
        .order(orderBy.column, { ascending: orderBy.ascending })
        .range(0, page * gamesPerPage - 1);
  
      if (error) {
        throw error;
      }
  
      setPs5Data(data);
    } catch (error) {
      console.error('Error fetching PS5 games:', error.message);
    }
  };

  const handleSortByChange = (event) => {
    const selectedValue = event.target.value;
    setSortBy(selectedValue);
    
    // Reset the Sort Order dropdown to "Default" when switching back to "Sort by Default"
    if (selectedValue === "1") {
      setSortOrder("1");
    }
  };
  
  const handleSortOrderChange = (event) => {
    const selectedValue = event.target.value;
    setSortOrder(selectedValue);
  };

  useEffect(() => {
    fetchPs5Games();
  }, [page, sortBy, sortOrder]);

  const loadMoreGames = () => {
    if (page * gamesPerPage >= totalGames) {
      setPage(1);
    } else {
      setPage(page + 0.5);
    }
  };

  const isAllGamesLoaded = page * gamesPerPage >= totalGames;
  const buttonText = isAllGamesLoaded ? 'See Less' : 'See More';

  

  return (
    <div id="deals_games">
      <div className="container ps5_games" id={styles.cus_container}>
        <hr  />
        <div className='row'>
          <section className='col-6'>
            <div className='row'>
              <section className='col-xxl-2 col-xl-3 col-4 ms-1'>
                <p className='m-0' id={styles.PS5}> DEALS</p>
              </section>
            </div>
          </section>
          <section className='col-6'>
            <div className='row justify-content-end'>
              <section className='col-xxl-2 col-4 ' >
                <p className='m-0 ' id={styles.sortText}>Sort by:</p>
              </section>
              <section className='col-xxl-3 col-xl-4 col-4'>
                <select className="form-select" aria-label="Default select" value={sortBy} onChange={handleSortByChange}>
                  <option id={styles.pad} value="1">Default</option>
                  <option value="2">Price</option>
                </select>
              </section>
              <section className='col-xxl-3 col-xl-4  col-4'>
                <select className="form-select" aria-label="Default select" disabled={sortBy === "1"} value={sortOrder} onChange={handleSortOrderChange}>
                  <option id={styles.pad} value="1">Default</option>
                  <option value="2">High to Low</option>
                  <option value="3">Low to High</option>
                </select>
              </section>
            </div>
          </section>
        </div>
        <hr className='mb-5' />

        <div className="row gx-3 gy-3 " id={styles.me}>
          {ps5Data.map((game, index) => (
            <section className="col-xxl-2 col-xl-3 col-4 col-md-6 mt-0" data-aos="fade-down"
              data-aos-delay="300" data-aos-once="true" id={styles.me2} key={index}>
              <h5 className="text-white ">{game.title}</h5>
              <div className={styles.news_wrap}>
              <Link
                href={{
                  pathname: '/psDeal_Game',
                  query: 
                  {id: game.id}
                  
                }}
                >
                <Image
                  width={1000}
                  height={1000}
                  alt={game.title}
                  className="img-fluid"
                  src={game.image_url}
                />
                </Link>
                <div className={styles.news_links}>
                  <Link href="#" title="App 2 Done">
                    <i className="bi bi-bag-plus"></i>
                  </Link>
                  <Link href="#" target="_blank" title="more Details" id={styles.genreA}>
                    <p className="m-0 ">{game.genre}</p>
                  </Link>
                </div>
              </div>
              <h5 className="text-white mt-2 mb-0"><span id={styles.deals}>Kr {game.price},-</span></h5>
              <h5 className="text-white mt-2 mb-0"><span id={styles.newDeal}>Kr {game.dealprice},-</span></h5>

              <hr />
            </section>
          ))}
        </div>

        <div className='row justify-content-center' >
          <button className='col-lg-2 btn btn-dark' id={styles.lessMore} onClick={loadMoreGames}>
            <i ></i> {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default deals;

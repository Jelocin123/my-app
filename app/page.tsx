
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import 'bootstrap/dist/css/bootstrap.css'
import News from "./components/news"
import Ps5 from "./components/ps5_games/ps5"
import Ps4 from "./components/ps4_games/ps4"
import Ps3 from "./components/ps3_games/ps3"
import Deals from './components/deal_games/deals'
import styles from "./styles/page.module.scss"
import 'bootstrap-icons/font/bootstrap-icons';



const page = () => {
  return (
    <main id={styles.main}>
      <News/>
      <Ps5/>
      <Ps4/>
      <Ps3/>
      <Deals/>
    </main>

  )
}

export default page









import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/welcome.module.scss"

export default async function welcome() {
  const supabase = createClientComponentClient({ });

  const { data: welcome } = await supabase
    .from("welcome_data")
    .select();

  return (
    <>
      
          {welcome ?.map((welcome, index) => (
            <div className="row justify-content-center gx-0 pt-0" id={styles.title} key={index}>
              <h1 className="text-center bg-black col-lg-12 mb-0">{welcome.title}</h1>
              
            </div>
          ))}
        
    </>
  );
}

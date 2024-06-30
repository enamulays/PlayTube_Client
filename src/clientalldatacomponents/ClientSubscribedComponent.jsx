import { useContext, useState } from 'react'
import styles from '../style/clientAllDataStyle/ClientSubscribe.module.css'
import { DataContext } from '../components/DataProviderContext'
import { IoSearchOutline } from "react-icons/io5";

function ClientSubscribedComponent() {
  const {data} = useContext(DataContext)
  const [btntoggler, setBtntoggler] = useState(data.map(()=>true))

  const handleSubscribe=(index)=>{
    setBtntoggler(btntoggler.map((loger,i )=>i===index? !loger: loger));
    
  }
  return (
    <>
      <div className={styles.subscribe}>
        <div className={styles.input_area}>
          <span><IoSearchOutline /></span>
          <input placeholder='Search'/>
        </div>
      {
        data.map((item, index)=>(
          <div key={index} className={styles.subscribe_in}>
            <div className={styles.content}>
              <img src={item.image} alt="image" />
              <div className={styles.content_info}>
                <h4>{item.chName}</h4>
                <h5>20k Subscribers</h5>
              </div>
            </div>
            <button onClick={()=>handleSubscribe(index)} className={btntoggler[index]? (styles.activebtn): ""}>{btntoggler[index]? "Subscribe": "Subscribed"}</button>
          </div>
        ))
      }
      </div>
    </>
  )
}

export default ClientSubscribedComponent

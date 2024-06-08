
import { DataContext } from './DataProviderContext'
import '../style/Sidebar.css'
import { useContext } from 'react'
import SideBarListData from './SideBarListData'


function Sidebar() {
  const {sidebar} =useContext(DataContext)
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrap">
          <SideBarListData sidebar={sidebar}/>
        </div>
      </div>
    </>
  )
}

export default Sidebar




import { createRoot } from "react-dom/client"
import Entry from "./components/Entry"
import data from "./components/data"
const root = createRoot(document.getElementById("root"))
const jsxData=data.map((mydata)=>{
  return <Entry
            key={mydata.id} //this is important in react
            
            // in dynamic webpage if user needs to add or delete, 
            // then key is requred which 
            // should be UNIQUE for each data
            // src={mydata.img.src}
            // alt={mydata.img.alt}
            // country={mydata.country}
            // title={mydata.title}
            // googleMapsLink={mydata.googleMapsLink}
            // dates={mydata.dates}
            // text={mydata.text}

            /*pass object as props as it's becoming lengthy to send each property

            object={mydata}

            */

            /* Spread object as props */
            {...mydata}
            // these is same as passing individual properties from the
            // database, react automatically spreads each property
            // and passes it individually to the props




  />

})

function Header() {
  return (
    <header className='header'>
      <nav className='nav-list'>
        <img src="#" alt="globe logo" />
        <h4>my travel journal</h4>
      </nav>
    </header>
  )
}

root.render(
  <>
    <Header />
    {/* <Entry />
    <Entry /> */}
    {jsxData}

  </>

)
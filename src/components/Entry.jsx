//using normal passing of properties 
// also using spread object
export default function Entry(props) {
    return (
      <>
        <div className="component">
          <div className="img">
            {/* <img src="https://images.stockcake.com/public/a/9/e/a9e0fc4f-c2b4-42c9-9b3e-bd543702caee_large/mount-fuji-sunrise-stockcake.jpg" alt="Mount Fuji Image" height={300}/> */}
            <img src={props.img.src}
                 alt={props.img.alt} 
                 height={300}
                 width={300}/>
          </div>
          <div className="info">
            <div className="locations">
            <p className='country'>{props.country}</p>
            <p id='maplocation'>
              <a href={props.googleMapsLink}
              >
                View on Google Maps
                </a>
            </p>
  
            </div>
            <div className="information">
            <h2 className='entry-title'>{props.title}</h2>
            <p className='trip-dates'>{props.dates}</p>
            <p className='entry-text'>{props.text}</p>
              
            </div>
          </div>
        </div>
  
      </>
    )
  }


//by passing a direct object to the props
// export default function Entry(props) {
//     return (
//       <>
//       {console.log(props)}
//         <div className="component">
//           <div className="img">
//             {/* <img src="https://images.stockcake.com/public/a/9/e/a9e0fc4f-c2b4-42c9-9b3e-bd543702caee_large/mount-fuji-sunrise-stockcake.jpg" alt="Mount Fuji Image" height={300}/> */}
//             <img src={props.object.img.src}
//                  alt={props.object.img.alt} 
//                  height={300}
//                  width={300}/>
//           </div>
//           <div className="info">
//             <div className="locations">
//             <p className='country'>{props.object.country}</p>
//             <p id='maplocation'>
//               <a href={props.object.googleMapsLink}
//               >
//                 View on Google Maps
//                 </a>
//             </p>
  
//             </div>
//             <div className="information">
//             <h2 className='entry-title'>{props.object.title}</h2>
//             <p className='trip-dates'>{props.object.dates}</p>
//             <p className='entry-text'>{props.object.text}</p>
              
//             </div>
//           </div>
//         </div>
  
//       </>
//     )
//   }

import { useState } from 'react'
import './App.css'

function App() {
  const [imageSrc,setImageSrc] = useState("/images/download.jpeg");
  const placeHolderImage = "/images/car.webp" ;
  const onErrorImage=()=>{
    setImageSrc(placeHolderImage);
  }
  return(
    <div>
      <img src={imageSrc} onError={onErrorImage} alt='Broken image'></img>
    </div>
  )
}

export default App

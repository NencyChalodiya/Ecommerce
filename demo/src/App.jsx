import { useState } from "react";
import "./App.css";

function App() {
  const [imageSrc, setImageSrc] = useState("/images/download.jpeg");
  const placeHolderImage = "/images/car.webp";
  const onErrorImage = () => {
    setImageSrc(placeHolderImage);
  };
  return (
    <div>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <img src={imageSrc} onError={onErrorImage} alt="Broken image"></img>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImage(data.message);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };

    fetchDog();
  }, []);

  if (!loaded) return <h3>Loading...</h3>;
  
  return (
    <>
      <img src={image} alt="A Random Dog" />
    </>
  );
}

export default App;

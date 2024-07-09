import React, { useEffect, useState } from 'react';
import './ImageButtonList.css';  // Import CSS file for styling

const ImageButtonList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="image-button-container">
      {data.map((item, index) => (
        <button key={index} className="image-button" onClick={() => handleRedirect(item.linkUrl)}>
          <img src={item.imageUrl} alt={`Link to ${item.linkUrl}`} />
        </button>
      ))}
    </div>
  );
};

export default ImageButtonList;

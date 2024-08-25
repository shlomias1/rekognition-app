import React, { useState, useEffect } from "react";
import axios from "axios";
import ByteToImageConverter from "./ByteToImageConverter";
import ByteToImage from "./test1";
const API_URL =
  "https://sdlhkn3z98.execute-api.us-east-1.amazonaws.com/prod/fetch-data";

function GetDynamo() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("response: ", response);
      setEntries(response.data.items);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };
  function byteArrayToDataURL(byteArray) {
    const blob = new Blob([byteArray], { type: "image/png" }); // Change the MIME type as needed
    const dataURL = URL.createObjectURL(blob);
    return dataURL;
  }

  return (
    <div>
      {/* <h1>Guestbook Entries</h1> */}
      <div id="entries">
        {entries.map((guestbookItem, index) => (
          <div key={index}>
            {/* <p>
              Name: {guestbookItem.firstName} {guestbookItem.lastName}
            </p>
            <p>{guestbookItem.rekognitionId}</p> */}
            {/* Display image using rekognitionId */}
            {/* <ByteToImageConverter imgUrl={guestbookItem.rekognitionId} /> */}
            {/* <img src={guestbookItem.rekognitionId} alt={`Image ${index}`} /> */}
            {/* <ByteToImage imgUrl={guestbookItem.rekognitionId} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetDynamo;

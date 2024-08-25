import React, { useState, useEffect } from "react";
import $ from "jquery"; // Import jQuery (make sure you have it installed)

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const API_URL =
    "https://9ei9qgoq83.execute-api.us-east-1.amazonaws.com/prod/entries";
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    await $.ajax({
      type: "GET",
      url: API_URL,
      success: function (data) {
        setEntries(data.Items);
        console.log("results: ", entries);
      },
    });
  };

  return (
    <div>
      <div id="entries">
        {/* {entries.map((guestbookItem, index) => (
          <p key={index}>{guestbookItem.message}</p>
        ))} */}
      </div>
    </div>
  );
}

export default Guestbook;

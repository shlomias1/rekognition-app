import React from "react";

function ByteToImage({ byteValue }) {
  // Create a data URL for a grayscale pixel with the specified intensity
  const pixelDataUrl = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwAAAgAB/wEnhwAAAABJRU5ErkJggg==`;

  return (
    <div>
      {/* <h1>Byte to Image Conversion</h1> */}
      <img
        src={pixelDataUrl}
        alt={`Pixel with Intensity ${byteValue}`}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
}

export default ByteToImage;

import React, { Component } from "react";

class ByteToImageConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      byteData: null, // Replace with your actual byte array
      imageDataURL: null,
    };
  }

  componentDidMount() {
    // Replace this with your actual byte array or fetch it from an API
    const byteData = [
      /* Your byte data here */
    ];

    const byteArrayToDataURL = (byteArray) => {
      const blob = new Blob([byteArray], { type: "image/png" }); // Adjust MIME type as needed
      const dataURL = URL.createObjectURL(blob);
      return dataURL;
    };

    const imageDataURL = byteArrayToDataURL(byteData);
    this.setState({ imageDataURL });
  }

  render() {
    return (
      <div>
        {this.state.imageDataURL && (
          <img src={this.state.imageDataURL} alt="Converted Image" />
        )}
      </div>
    );
  }
}

export default ByteToImageConverter;

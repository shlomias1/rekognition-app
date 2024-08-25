import Appbar from "../widgets/Appbar";
import "./RekognitionPage.css";
import { useState } from "react";
const uuid = require("uuid");

function RekognitionPage() {
  const [image, setImage] = useState("");
  const [uploadResultMessage, setUploadResultMessage] = useState("");
  const [imgName, setImgName] = useState("placeholder.jpeg");
  const [isAuth, setIsAuth] = useState(false);
  const [number, setNumber] = useState(0);
  function sendImage(e) {
    e.preventDefault();
    setImgName(image.name);
    const visitorImageName = uuid.v4();
    console.log(visitorImageName);
    fetch(
      `https://hbnk456s1k.execute-api.us-east-1.amazonaws.com/dev/befit-visitor-images/${visitorImageName}.jpeg`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "image/jpeg",
        },
        body: image,
      }
    )
      .then(async () => {
        const response = await authenticate(visitorImageName);
        if (response.Message === "Success") {
          setIsAuth(true);
          setUploadResultMessage(
            `Hi ${response["firstName"]} ${response["lastName"]}, welcome to Befit! Have a great training!`
          );
        } else {
          setIsAuth(false);
          setUploadResultMessage(
            "Authentication Failed: this person is not in our list."
          );
        }
      })
      .catch((error) => {
        if (number === 0) {
          setIsAuth(false);
          setUploadResultMessage(
            "Welcome to the Pilate Center Shlomi Assayag! The door is open."
            // "There is an error during the authentication process. Please try again."
          );
          setNumber(number + 1);
        } else if (number === 2) {
          setIsAuth(false);
          setUploadResultMessage(
            "Welcome to the Pilate Center Gabriel Nakache! The door is open."
            // "There is an error during the authentication process. Please try again."
          );
          setNumber(number + 1);
        } else {
          setIsAuth(true);
          setUploadResultMessage(
            // "Welcome to the Pilate Center Elon Musk! The door is open."
            "You are not allowed to enter the Pilates Center. Please contact us: 0526418229"
          );
          setNumber(number + 1);
        }
        console.log(error);
      });
  }

  async function authenticate(visitorImageName) {
    const requestUrl =
      "https://hbnk456s1k.execute-api.us-east-1.amazonaws.com/dev/customers?" +
      new URLSearchParams({
        objectKey: `${visitorImageName}.jpeg`,
      });
    return await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="App">
        <Appbar />
        <h2>Facial Rekognition System</h2>
        <form onSubmit={sendImage}>
          <div id="marg">
            <label for="images" className="drop-container" id="dropcontainer">
              <input
                type="file"
                name="image"
                id="images"
                accept="image/*"
                required
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
            </label>
          </div>

          <button type="submit" className="button-9">
            Authenticate
          </button>
        </form>
        <div className={isAuth ? "failure" : "success"}>
          {uploadResultMessage}
        </div>
        <div id="space"></div>

        {imgName === "placeholder.jpeg" ? (
          <div></div>
        ) : (
          <img
            src={require(`../visitors/${imgName}`)}
            alt="Visitor"
            height={150}
            width={150}
          />
        )}
      </div>
    </>
  );
}

export default RekognitionPage;

import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import deleteIcon from "../img/delete-icon.png";

import "./Customers.css";
import image1 from "../visitors/Bill_Gates.jpeg";
import image2 from "../visitors/Elon_Musk.jpeg";
import image3 from "../visitors/Jeff_Bezos.jpg";
import image4 from "../visitors/Mark_Zuckerberg.jpeg";
import image5 from "../visitors/Sundar_Pichai.jpeg";

import Appbar from "../widgets/Appbar";
import GuestbookComponent from "../widgets/GuestbookComponent";
import AddCustomerPopUp from "../widgets/AddCustomerPopUp";
import GetDynamo from "../widgets/GetDynamo";

const Customers = () => {
  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerPhoto, setCustomerPhoto] = useState("");
  const [customers, setCustomers] = useState([]);

  const peopleList = [
    {
      fullName: "Shlomi Assayag",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t1.6435-9/49442962_2065430790169597_5351069543286439936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=md5AVwV7kdgAX_SkWu-&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfB90LIyOnKoG4H4Dj7NkuyfywM-LnjlAJbzujLpuMRzRg&oe=650C4300",
    },
    // {
    //   fullName: "Shai Sigawi",
    //   link: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
    // },
    // {
    //   fullName: "Jeff Bezos",
    //   link: "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
    // },
    // {
    //   fullName: "Mark Zuckerberg",
    //   link: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    // },
    {
      fullName: "Gabriel Nakache",
      link: "https://scontent.ftlv20-2.fna.fbcdn.net/v/t1.6435-9/133691216_1814805955345627_6367806716010010924_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z8MOL0GHl6MAX_rfEYj&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfBXyxFETOAl7Z7kU2wi23A8dBXNWytFa1szPI-EtCznYg&oe=650C363F",
    },
    {
      fullName: "Noa Cohen",
      link: "https://scontent.ftlv20-2.fna.fbcdn.net/v/t39.30808-6/367976001_3686788338217754_4650446034240777136_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QGG-H2AFgSkAX8xSo4m&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfCRmFVbOKgd8AsSGP8FZ0uN9Vb_Jrcq4G4bSsyxaqMUUA&oe=64E4BFE4",
    },
    {
      fullName: "Maya Levi",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/366275909_10167713562205585_3992044733101574323_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=F_WjK0Bqtm8AX-wsV0P&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfAJLWLJcRPPglD9SbK4f-zL7G6GgCXarfa7OgwtCgMvlg&oe=64E37DA7",
    },
    {
      fullName: "Tamar Rosenberg",
      link: "https://scontent.ftlv20-2.fna.fbcdn.net/v/t1.6435-9/169971473_10225601405164579_7846874915660967302_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6EMezirXoA8AX_MIG11&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfBJb3hltDeumiZNYyy_wByKWz4iSbzCjbX_abQjXr60iA&oe=650701DD",
    },
    {
      fullName: "Yael Cohen",
      link: "https://scontent.ftlv20-2.fna.fbcdn.net/v/t39.30808-6/273319381_10221955853627076_8798796455515476571_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kOlcziWdPDsAX-K6P0J&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfDZuZk578_ojGUU2e4xI-LE_jh2ifla0TsJVRstcdpTnA&oe=64E525B7",
    },
    {
      fullName: "Liora David",
      link: "https://scontent.ftlv20-2.fna.fbcdn.net/v/t1.18169-9/22281925_112636009493722_4944600928439130058_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TtLBZ61UH7YAX-pt4Xz&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfDYrHwwJ_8WeSG0OrVbQWIfRzwUCakFJJG35Tqplhd-eA&oe=6506F7B4",
    },
    {
      fullName: "Noya Cohen",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t1.18169-9/16174753_10202616817858574_5441886586799447467_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=XIP8zHq4zg0AX93JyTv&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfBC7FUMFm4IlMR_kindXRTACMPJI54YpVtFcOraXRRPgA&oe=6506E872",
    },
    {
      fullName: "Orli Ben-David",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t31.18172-8/19467691_1349942945119224_4946739362870707710_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TSFU6mLVzfUAX8V7TAO&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfBicisQTvIBjzGEcZWwHOg6ujsDPtxpO5Ipc8hxh2mMxg&oe=6506D6BD",
    },
    {
      fullName: "Adi Levi",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t1.6435-9/69948294_916778208662195_2616086480031842304_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=6sg1PFcr4iAAX_Tv34I&_nc_oc=AQlcTwab3GfRlg-1oygRR3uNZv3T7GD7cGlX-Z1sGkpcksnmu_MaCj0QaLnpvn7XLITPfhm5Jv3tc0ts3l5QUlmU&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfCHr2Ol-4IyAbugugMuW4KlbS7uj61UDEGsO8eO3xexPQ&oe=65070169",
    },
    {
      fullName: "Shira Malka",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/331550262_679097353997178_2742179908247848956_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z7WfVsbO6YYAX9AGEbs&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfDVAbE8yU6tqX3YVENWMM2_d02V9bYSQZS7qBXi5VAXYQ&oe=64EA5CAF",
    },
    {
      fullName: "Rinat Cohen",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/366566188_679512910886025_8834492640037503805_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pGVJLepY-GUAX-mYCUX&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfDC-kIXm44faPV2aymDEj84IyUiFNMIidjQoDqqZyX0Zg&oe=64E55F86",
    },
    {
      fullName: "Michal Abramov",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/337291000_525607999733278_5896930418319764304_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1ivpLD2Ap-EAX-7kfMV&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfDt4hpX43XeZhIcQ0z-Vc-nRZXuLU8KIBCTPSTQWzUXzw&oe=64EAAD2C",
    },
    {
      fullName: "Galit Cohen",
      link: "https://scontent.ftlv20-2.fna.fbcdn.net/v/t39.30808-6/272245087_10160000912723851_365829016748393522_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cvmmiJXbkxUAX90_aJO&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfC1DssruFLJ6lgmVgHvUJNIixujDVMLRbLSznhwd4Qm7Q&oe=64E3E862",
    },
    {
      fullName: "Dana Levi",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/287150267_107909698616133_1866356402746335870_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5pnAJFX4HhwAX_ynfYd&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfDL37c5NOwvK-dCFpAeHiW4znjZy9VhIITAkuWziJu_Mg&oe=64E437A9",
    },
    {
      fullName: "Avital Cohen",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/348615730_2251238775264107_2955319992407531211_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ym3yhNsVJ2QAX_N7Crz&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfCW22hAuf1ImAuj81GPDPh-Gi6v1s3XCI2bdxBzxZ7vvQ&oe=64E405E0",
    },
    {
      fullName: "Nurit Azulay",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/281760730_5635912949852897_2487949783566628637_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lwKW4Xkw0ikAX9k1jyE&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfBnC0-big4Yq5_Z1N5DUanVKPckks7WQ33yvNKzYhmhNw&oe=64E44DB4",
    },
    {
      fullName: "Hadar Levi",
      link: "https://scontent.ftlv20-2.fna.fbcdn.net/v/t1.6435-9/149393881_10159102453152208_1369842298236761225_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U7V2mHCtWsYAX-nOKmc&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfBCZn74rlaT55K5PPzw1qORMI47tOy-rKBSmvq09CRoiQ&oe=65070994",
    },
    {
      fullName: "Keren Cohen",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t1.6435-9/42147784_10156050245254401_2386655842544910336_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ilMH7a95QL4AX8Dy5jH&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfAjLjrieN27ouva11NtPVKI-vKjlf5SV2UDREPGBF3HoA&oe=6506EDF5",
    },
    {
      fullName: "Limor Davidi",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/346072927_798791905294524_8257873471103372236_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TX2UNT9AgJ8AX_NepYX&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfBjgJvJSErx9oLvs-Q4kH6_WdlWI_PKue3SYCsiHsGfeQ&oe=64E3DC84",
    },
    {
      fullName: "Shani Ben-Israel",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/356432678_10226356165784536_1065057695395323335_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-lY5i4FGZBQAX-FJEw0&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfBcJFEi5is-A1Rw1FhljxxSYubWeoGcW7NP81a0FfNkfQ&oe=64E39479",
    },
    {
      fullName: "Revital Cohen",
      link: "https://scontent.ftlv20-1.fna.fbcdn.net/v/t39.30808-6/344750566_249773790858686_8848599416377271834_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AougoBRbJOUAX_w43iM&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfAgDaBcIa4ELPqJda4zPsqyoYvbvvdF3gvUK9nLcUmrmA&oe=64E5355E",
    },
  ];
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new customer object
    const newCustomer = {
      name: customerFirstName.concat(" ").concat(customerLastName),
      photo: customerPhoto,
    };

    // Update the customers state with the new customer
    setCustomers([...customers, newCustomer]);

    // Clear form fields
    setCustomerName("");
    setCustomerPhoto("");

    // Close the modal
    closeModal();
  };
  const handleDeleteCustomer = (index) => {
    const newCustomers = [...customers]; // Create a new array using the spread operator
    newCustomers.splice(index, 1); // Remove the element at the specified index
    setCustomers(newCustomers);
  };

  useEffect(() => {
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const row = this.closest("tr");
        row.remove();
      });
    });

    const exportButton = document.getElementById("export-btn");
    const dataTable = document.getElementById("data-table");

    exportButton.addEventListener("click", function () {
      const tableData = [];

      // Get table headers
      const headers = [];
      dataTable.querySelectorAll("thead th").forEach((header) => {
        headers.push(header.textContent);
      });
      tableData.push(headers);

      // Get table rows
      dataTable.querySelectorAll("tbody tr").forEach((row) => {
        const rowData = [];
        row.querySelectorAll("td").forEach((cell, index) => {
          if (index === 1) {
            // For the second cell (image link)
            rowData.push(cell.querySelector("img").src);
          } else {
            rowData.push(cell.textContent);
          }
        });
        tableData.push(rowData);
      });

      // Create a new workbook and worksheet
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.aoa_to_sheet(tableData);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");

      // Generate and download the Excel file
      XLSX.writeFile(workbook, "table_data.xlsx");
    });
  }, []);

  return (
    <>
      <Appbar />
      <div className="customers">
        <div className="customers-content">
          <div className="customers-header">
            <h2>Our Customers</h2>
            <div className="add-customer">
              <button id="export-btn">Export to Excel</button>
              <button className="btn-add-cust" onClick={openModal}>
                Add New Customer
              </button>
            </div>
          </div>
          <GetDynamo />
          <div>
            <table className="customer-table" id="data-table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Customer Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <GetDynamo />
                <div></div>

                {peopleList.map((person, index) => (
                  <tr key={index}>
                    <td>{person.fullName}</td>
                    <td>
                      <img
                        src={person.link}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteCustomer(index)}
                      >
                        <img
                          src={deleteIcon}
                          alt=""
                          width="10px"
                          height="10px"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <GuestbookComponent />
        </div>
        {showModal && (
          <AddCustomerPopUp
            handleSubmit={handleSubmit}
            setCustomerFirstName={setCustomerFirstName}
            setCustomerLastName={setCustomerLastName}
            setCustomerPhoto={setCustomerPhoto}
            closeModal={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default Customers;

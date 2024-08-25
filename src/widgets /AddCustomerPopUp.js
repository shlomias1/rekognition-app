import React from "react";

const AddCustomerPopUp = (props) => {
  const handleSubmit = props.handleSubmit;
  const setCustomerFirstName = props.setCustomerFirstName;
  const setCustomerLastName = props.setCustomerLastName;
  const setCustomerPhoto = props.setCustomerPhoto;
  const closeModal = props.closeModal;
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="customerName">Customer First Name:</label>
            <input
              placeholder="John"
              type="text"
              id="customerName"
              // value={customerName}
              onChange={(e) => setCustomerFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="customerName">Customer Last Name:</label>
            <input
              placeholder="Doe"
              type="text"
              id="customerName"
              // value={customerName}
              onChange={(e) => setCustomerLastName(e.target.value)}
              required
            />
          </div>
          <div id="dv-ctn">
            <div className="dist">
              <label htmlFor="customerPhoto">Customer Photo:</label>
            </div>
            <div className="dist">
              <input
                type="file"
                id="customerPhoto"
                onChange={(e) =>
                  setCustomerPhoto(URL.createObjectURL(e.target.files[0]))
                }
                accept="image/*"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn">
            Add Customer
          </button>
        </form>
        <button className="close-btn" onClick={closeModal}>
          ×
        </button>
      </div>
    </div>
  );
};

export default AddCustomerPopUp;

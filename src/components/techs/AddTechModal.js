import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onChange = (e) => {
    setFirstName(e.target.value);
  };

  const onChange1 = (e) => {
    setLastName(e.target.value);
  };

  const onSubmit = (e) => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please Enter the details" });
    } else {
      addTech({ firstName, lastName });
      M.toast({ html: "Technician Added" });
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <br />
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange1}
            />
            <label htmlFor="lastName" className="active">
              last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="center-align">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-light btn "
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addTech })(AddTechModal);

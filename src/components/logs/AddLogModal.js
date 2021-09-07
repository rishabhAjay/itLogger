import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import { getTechs } from "../../actions/techActions";

const AddLogModal = ({ addLog, getTechs, techs, loading }) => {
  const [msg, setmsg] = useState("");
  const [attn, setAttn] = useState(false);
  const [tech, setTech] = useState("");

  const onChange = (e) => {
    setmsg(e.target.value);
  };

  const onChange1 = (e) => {
    setTech(e.target.value);
  };

  useEffect(() => {
    getTechs();
  }, []);
  const onSubmit = (e) => {
    if (msg === "" || tech === "") {
      M.toast({ html: "Please Enter the details" });
    } else {
      //the backend accepts form data as an object
      const formData = {
        message: msg,
        attention: attn,
        tech,
        date: new Date(),
      };
      addLog(formData);
      M.toast({ html: `Log added by ${tech}` });
      setTech("");
      setmsg("");
      setAttn(false);
    }
  };
  return (
    <div
      id="add-log-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <br />
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={msg} onChange={onChange} />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={onChange1}
            >
              <option value="" disabled>
                Select Technician
              </option>
              {!loading &&
                techs !== null &&
                techs.map((tech) => (
                  <option
                    key={tech.id}
                    value={`${tech.firstName} ${tech.lastName}`}
                  >{`${tech.firstName} ${tech.lastName}`}</option>
                ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  value={attn}
                  className="filled-in"
                  checked={attn}
                  onChange={(e) => setAttn(!attn)}
                />
                <span>Needs attention</span>
              </label>
            </p>
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

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal);

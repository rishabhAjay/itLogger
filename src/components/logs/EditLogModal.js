import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { updateLog } from "../../actions/logActions";
import { getTechs } from "../../actions/techActions";
const EditLogModal = ({ current, updateLog, techs, getTechs, loading }) => {
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
    if (current) {
      setmsg(current.message);
      setAttn(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  useEffect(() => {
    getTechs();
  }, []);
  const onSubmit = (e) => {
    if (msg === "" || tech === "") {
      M.toast({ html: "Please Enter the details" });
    } else {
      const updatedLog = {
        id: current.id,
        message: msg,
        attention: attn,
        tech,
        date: new Date(),
      };
      updateLog(updatedLog);
      M.toast({ html: "Log updated" });
      setTech("");
      setmsg("");
      setAttn(false);
    }
  };
  return (
    <div
      id="edit-log-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <br />
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={msg}
              onChange={onChange}
              placeholder="Log message"
            />
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
  current: state.log.current,
  techs: state.tech.techs,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, { updateLog, getTechs })(EditLogModal);

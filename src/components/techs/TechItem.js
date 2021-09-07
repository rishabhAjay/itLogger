import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
const TechItem = ({ tech, deleteTech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a
          href="#!"
          className="secondary-content"
          onClick={() => deleteTech(tech.id)}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech })(TechItem);

import React, { useEffect, useState } from "react";
import { getTechs } from "../../actions/techActions";
import { connect } from "react-redux";
import TechItem from "./TechItem";

const TechListModal = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Technician List</h4>
        <ul className="collection">
          {!loading && techs === null ? (
            <p className="center">No Technicians to show</p>
          ) : (
            techs.map((tech) => (
              <TechItem className="collection-item" tech={tech} key={tech.id} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);

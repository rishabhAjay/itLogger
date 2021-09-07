import React, { useEffect } from "react";

//bring in connect for linking redux with this component
import { connect } from "react-redux";

import LogItem from "./LogItem";
//bring in the action
import { getLogs } from "../../actions/logActions.js";

//anything coming from redux(state or actions) are to be passed as props to the component
const Logs = ({ logs, loading, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <h5 className="center">Loading...</h5>;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

//this piece of function maps states to props like the name tells
const mapStateToProps = (state) => ({
  logs: state.log.logs,
  loading: state.log.loading,
});

//to be able to connect the redux setup to this component, bring in the connect and have it like this
//any action(like getLogs) that you bring is also a part of redux, so link it to connect like below
export default connect(mapStateToProps, { getLogs })(Logs);

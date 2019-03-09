import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      padding: "0px 4px px 0px",
      margin: "16px 0px 0px 0px"
    };

    return (
      <div>
        <Paper style={style} elevation={1}>
          <p>Hello</p>
        </Paper>
      </div>
    );
  }
}

export default SideBar;
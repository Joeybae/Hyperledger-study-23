import React, { Component } from "react";

class Reactjs extends Component {
  render() {
    return <div>
      <form method="post">
        <p>Create Car</p>
        <p>CarNO <input type="text" name="carno" ></input></p>
        <p>Colour <input type="text" name="colour" ></input></p>
        <p>Maker <input type="text" name="maker" ></input></p>
        <p>Modek <input type="text" name="modek" ></input></p>
        <p>Owner <input type="text" name="owner" ></input></p>
        <p><input type="submit" class="btn btn-warning"></input></p>
      </form>
  </div>;
  }
}

export default Reactjs;

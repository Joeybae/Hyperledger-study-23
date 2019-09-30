import React, { Component } from "react";

class createcar extends Component {
  render() {
    return <div>
      <form method="post">
        <p>미세 ZERO 생성하기</p>
        <p>CarNO <input type="text" name="carno" ></input></p>
        <p>Colour <input type="text" name="colour" ></input></p>
        <p>Maker <input type="text" name="maker" ></input></p>
        <p>Modek <input type="text" name="modek" ></input></p>
        <p>Owner <input type="text" name="owner" ></input></p>
        <p><button type="submit" class="btn btn-warning">생성하기</button></p>
      </form>
  </div>;
  }
}

export default createcar;

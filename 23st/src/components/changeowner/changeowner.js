import React, { Component } from "react";

class changeowner extends Component {
  render() {
    return <div>
      <p>미세 ZERO 변경하기</p>
      <form>
        <p>CarNO <input type="text" name="carno" ></input></p>
        <p>Owner <input type="text" name="owner" ></input></p>
        <p><button type="submit" class="btn btn-info">변경하기</button></p>
      </form>
    </div>;
  }
}

export default changeowner;

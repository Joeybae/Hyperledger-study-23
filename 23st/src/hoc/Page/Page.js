import React, { Component } from "react";
import Index from "../../components/index/index";
import Createcar from "../../components/createcar/createcar";
import Query from "../../components/query/query";
import Changeowner from "../../components/changeowner/changeowner";

class Page extends Component {
  displayPage = no => {
    switch (no) {
      case 0:
        return <Index />;
      case 1:
        return <Createcar />;
      case 2:
        return <Query />;
      case 3:
        return <Changeowner />;    
      default:
        return <Index />;
    }
  };

  render() {
    return <div>{this.displayPage(this.props.page)}</div>;
  }
}

export default Page;

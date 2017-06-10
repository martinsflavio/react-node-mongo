import React from "react";

import Zones from "../containers/Zones";
import Comments from "../containers/Comments";


class Home extends React.Component {
  render () {
    return (
        <div className="container">
          <div className="row">
            <div className="col s12 col m4">
              <Zones />
            </div>
            <div className="col s12 col m8">
              <Comments />
            </div>
          </div>
        </div>
    )
  }
}


export default Home;
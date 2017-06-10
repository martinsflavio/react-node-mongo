import React from "react";


import Zone from "../presentation/Zone";

class Zones extends React.Component {

  constructor () {
    super();
    this.state = {
      zonesList: [
        {name:"Flavio", zipCode:"94806", numComments:12},
        {name:"Stephanie", zipCode:"94806", numComments:2},
        {name:"Theo", zipCode:"94080", numComments:8},
        {name:"Gabi", zipCode:"94080", numComments:8},
      ]
    }
  }

  render () {
    let listItems = this.state.zonesList.map((zone, i) => {
      return (
          <li key={i} ><Zone currentZone={ zone } /></li>
      )
    });
    return (
      <div>
        <ol>
          { listItems }
        </ol>
      </div>
    )
  }
}



export default Zones;
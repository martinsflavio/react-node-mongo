import React from "react";
import styles  from  '../styles';

class Zone extends React.Component {

  render () {
    let style = styles.zone;

    return (
        <div style={style.container}>
          <h2 style={style.header}>
            <a style={style.title}  href="#">{ this.props.currentZone.name }</a>
          </h2>
          <span>{ this.props.currentZone.zipCodes }</span><br />
          <span>{ this.props.currentZone.numComments } Comments</span>
        </div>
    )

  }
}




export default Zone;
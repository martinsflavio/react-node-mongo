import React from "react";
import styles from "../layout/styles";


class Comment extends React.Component {

  render () {
    const style = styles.comment;

    return (
        <div style={style.box}>
          <p style={style.body}>
            { this.props.currentComment.body }
          </p>

          <p style={style.footer}>
            { this.props.currentComment.username }
            <span style={style.plit}> | </span>
            { this.props.currentComment.timestamp }
          </p>
          <hr/>
        </div>
    )

  }
}




export default Comment;
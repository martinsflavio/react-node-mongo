import React from "react";
import styles  from  "../layout/styles";
import Comment from "../presentation/Comment";

class Comments extends React.Component {
  constructor () {
    super();
    this.state = {
      commentsList: [
        {body:"comment 1", username:"Flavio", timestamp:'10:30'},
        {body:"comment 2", username:"Stephanie", timestamp:'10:08'},
        {body:"comment 3", username:"Theo", timestamp:'11:30'}
      ]
    }
  }

  render () {
    let style = styles.comment;


    const commentsList = this.state.commentsList.map((comment, i) => {
      return (
          <li key={i}><Comment currentComment={ comment }/></li>
      )
    });
    return (
        <div>
          <h3>Comments: Zone 1</h3>
          <div style={style.container}>
            <ul>
              { commentsList }
            </ul>
          </div>
        </div>
    )

  }
}




export default Comments;
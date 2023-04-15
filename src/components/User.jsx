import React, { Component } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

export class User extends Component {
  user = this.props.users;
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          onClick={() => this.props.onDelete(this.user.id)}
          className="delete-icon"
        />
        <IoHammerSharp className="edit-icon" />
        <h3>
          {this.user.firstname} {this.user.lastname}
        </h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? "Счастлив :)" : "Не особо :("}</b>
      </div>
    );
  }
}

export default User;

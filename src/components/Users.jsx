import React, { Component } from "react";
import User from "./User";

export class Users extends Component {
  render() {
    if (this.props.users.length > 0)
      return (
        <div>
          {this.props.users.map((el) => (
            <User onDelete={this.props.onDelete} key={el.id} users={el} />
          ))}
        </div>
      );
    else
      return (
        <div className="user">
          <h3>Пользователей нет</h3>
        </div>
      );
  }
}

export default Users;

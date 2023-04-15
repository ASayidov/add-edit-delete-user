import React, { Component } from "react";

export class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      bio: "",
      age: 1,
      isHappy: false,
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          onChange={(e) => this.setState({ firstname: e.target.value })}
          placeholder="Имя"
        />
        <input
          onChange={(e) => this.setState({ lasttname: e.target.value })}
          placeholder="Фамилия"
        />
        <textarea placeholder="Биография"></textarea>
        <input type="text" placeholder="Возраст" />
        <label htmlFor="isHappy">Счастлив?</label>
        <input type="checkbox" name="" id="isHappy" />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.props.onAdd({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            });
          }}
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default AddUser;

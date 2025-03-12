import "./Note.css";
import React from "react";
/* React Icons */

import { IoTrashOutline } from "react-icons/io5"; // trash icon
import { IoCheckmarkSharp } from "react-icons/io5"; // check icon
import { IoRefresh } from "react-icons/io5"; // refresh icon

class Note extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      text: "",
      complete: null,
      bg: "",
    };

    console.log("Note --> constructor run");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Note --> getDerivedStateFromProps", props, state);

    return {
      id: props.id,
      text: props.text,
      complete: props.complete,
      bg: props.bg,
    };
  }

  componentDidMount() {
    console.log("note component mount");
  }

  componentDidUpdate() {
    console.log("note component update");
  }

  // Events
  checkNote(noteId) {
    this.props.onCheck(noteId);
  }

  removeNote(noteId) {
    this.props.onRemove(noteId);
  }

  uncheck(noteId) {
    this.props.onUncheck(noteId);
  }

  render() {
    return (
      <div className={`note ${this.state.complete ? "note--done" : ""}`} style={{ backgroundColor: this.state.bg }}>
        <span className="note__text">{this.state.text}</span>
        <div className="note__btns">
          <button className="note__btn note__btn-done" onClick={this.checkNote.bind(this, this.state.id)}>
            <IoCheckmarkSharp />
          </button>
          <button className="note__btn note__btn-remove" onClick={this.removeNote.bind(this, this.state.id)}>
            <IoTrashOutline />
          </button>
        </div>
        <div className="note__restore" onClick={this.uncheck.bind(this, this.state.id)}>
          <IoRefresh />
        </div>
      </div>
    );
  }
}

export default Note;

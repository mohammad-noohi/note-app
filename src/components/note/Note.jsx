import "./Note.css";
import React from "react";
/* React Icons */

import { IoTrashOutline } from "react-icons/io5"; // trash icon
import { IoCheckmarkSharp } from "react-icons/io5"; // check icon
import { IoRefresh } from "react-icons/io5"; // refresh icon
import { TiThList } from "react-icons/ti";

class Note extends React.Component {
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
    const { id, text, complete, bg } = this.props;

    return (
      <div className={`note ${complete ? "note--done" : ""}`} style={{ backgroundColor: bg }}>
        <span className="note__text">{text}</span>
        <div className="note__btns">
          <button className="note__btn note__btn-done" onClick={this.checkNote.bind(this, id)}>
            <IoCheckmarkSharp />
          </button>
          <button className="note__btn note__btn-remove" onClick={this.removeNote.bind(this, id)}>
            <IoTrashOutline />
          </button>
        </div>
        <div className="note__restore" onClick={this.uncheck.bind(this, id)}>
          <IoRefresh />
        </div>
      </div>
    );
  }
}

export default Note;

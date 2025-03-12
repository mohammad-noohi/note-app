import "./NoteApp.css";
import React from "react";
import ColorDot from "./../colorDot/ColorDot";
import Note from "../note/Note";
import { IoAddSharp } from "react-icons/io5"; // plus icon
import { GrClearOption } from "react-icons/gr"; // clear icon

class NoteApp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        { id: 1, bg: "#fff" },
        { id: 2, bg: "#FFD37F" },
        { id: 3, bg: "#FFFA81" },
        { id: 4, bg: "#D5FA80" },
        { id: 5, bg: "#78F87F" },
        { id: 6, bg: "#79FBD6" },
        { id: 7, bg: "#79FDFE" },
        { id: 8, bg: "#7AD6FD" },
        { id: 9, bg: "#7B84FC" },
        { id: 10, bg: "#D687FC" },
        { id: 11, bg: "#FF89FD" },
      ],

      notes: [
        // {id : 1 , text : '....', bg : 'red' , complete : false}
      ],

      noteText: "",
      inputColor: "#fff",
    };

    console.log("noteApp --> constructor run");
  }

  componentDidMount() {
    console.log("noteapp comp mount");
  }

  // Events Methods
  setColorNote(color) {
    this.setState({
      inputColor: color,
    });
  }

  noteInputHandler(e) {
    this.setState({
      noteText: e.target.value,
    });
  }

  addNote(e) {
    e.preventDefault();

    const newNote = {
      id: this.state.notes.length + 1,
      text: this.state.noteText,
      complete: false,
      bg: this.state.inputColor,
    };

    this.setState(prevState => {
      return { notes: [...prevState.notes, newNote], noteText: "", inputColor: "#fff" };
    });
  }

  checkNote(noteId) {
    this.setState(prevState => {
      return {
        notes: prevState.notes.map(note => {
          if (note.id === noteId) {
            return { ...note, complete: true };
          } else {
            return note;
          }
        }),
      };
    });
  }

  removeNote(noteId) {
    this.setState(prevState => {
      return { notes: prevState.notes.filter(note => note.id !== noteId) };
    });
  }

  disCheck(noteId) {
    this.setState(prevState => {
      return {
        notes: prevState.notes.map(note => {
          if (note.id === noteId) {
            return { ...note, complete: false };
          } else {
            return note;
          }
        }),
      };
    });
  }

  clearNotes() {
    this.setState({
      notes: [],
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">note app project</h1>

        <form action="" onSubmit={this.addNote.bind(this)}>
          <div className="input-group">
            <input className="app__input" value={this.state.noteText} type="text" style={{ backgroundColor: this.state.inputColor }} onChange={this.noteInputHandler.bind(this)} />
            <div className="colors">
              {this.state.colors.map(color => (
                <ColorDot key={color.id} bg={color.bg} onSetColorNote={this.setColorNote.bind(this)} />
              ))}
            </div>
          </div>

          <div className="app__btns">
            <button type="submit" className="app__btn app__btn-add">
              <IoAddSharp />
            </button>
            <button type="button" className="app__btn app__btn-clear" onClick={this.clearNotes.bind(this)}>
              <GrClearOption />
            </button>
          </div>
        </form>

        <div className="notes">
          {/* 
              I use index here because when delet a note then add new one get an error for duplicated key
            */}
          {this.state.notes.map((note, index) => (
            <Note key={index} {...note} onRemove={this.removeNote.bind(this)} onCheck={this.checkNote.bind(this)} onUncheck={this.disCheck.bind(this)} />
          ))}
        </div>
      </div>
    );
  }
}

export default NoteApp;

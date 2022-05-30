import Delete from "../images/delete-icon.png";
import Edit from "../images/edit.png";
import EditGray from "../images/edit-gray.png";
const Note = (props) => {
  return (
    <div
      className="note"
      style={{ backgroundColor: props.index % 2 === 0 ? "#82dbd8" : "#3BACB6" }}
    >
      <div className="note-header">
        <h2>{props.item.title}</h2>
      </div>
      <p>{props.item.message}</p>
      <div className="icon-holder">
        <button
          className="icon"
          style={{ cursor: props.displayAddNotes ? "no-drop" : "pointer" }}
          title="Edit note"
        >
          <img
            src={props.displayAddNotes ? EditGray : Edit}
            alt="delete note"
            onClick={() => props.editNote(props.item)}
          />
        </button>
        <button className="icon" title="Delete note">
          <img
            src={Delete}
            alt="delete note"
            onClick={() => props.deleteNote(props.item.id)}
          />
        </button>
      </div>
    </div>
  );
};

export default Note;

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

        <button
          className="edit"
          style={{ cursor: props.displayAddNotes ? "no-drop" : "pointer" }}
        >
          <img
            src={props.displayAddNotes ? EditGray : Edit}
            alt="delete note"
            title="Edit note"
            onClick={() => props.editNote(props.item)}
          />
        </button>
      </div>
      <p>{props.item.message}</p>
      <button className="delete">
        <img
          src={Delete}
          alt="delete note"
          title="Delete note"
          onClick={() => props.deleteNote(props.item.id)}
        />
      </button>
    </div>
  );
};

export default Note;

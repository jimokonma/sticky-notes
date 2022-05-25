import Delete from "../images/delete-icon.png";
import Edit from "../images/edit.png";
const Note = (props) => {
  return (
    <div
      className="note"
      style={{ backgroundColor: props.index % 2 === 0 ? "#82dbd8" : "#3BACB6" }}
    >
      <div className="note-header">
        <h2>{props.item.title}</h2>
        <button className="edit">
          <img
            src={Edit}
            alt="delete note"
            onClick={() => props.editNote(props.item)}
          />
        </button>
      </div>
      <p>{props.item.message}</p>
      <button className="delete">
        <img
          src={Delete}
          alt="delete note"
          onClick={() => props.deleteNote(props.item.id)}
        />
      </button>
    </div>
  );
};

export default Note;

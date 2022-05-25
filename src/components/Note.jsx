import Delete from "../images/delete-icon.png";
const Note = (props) => {
  return (
    <div
      className="note"
      style={{ backgroundColor: props.index % 2 === 0 ? "#82dbd8" : "#3BACB6" }}
    >
      <h2>{props.item.title}</h2>
      <p>{props.item.message}</p>
      <button>
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

import Note from "./Note";
const Notes = (props) => {
  return (
    <div className="notes">
      {props.notes.map((item, index) => {
        return (
          <Note
            item={item}
            key={index}
            index={index}
            deleteNote={props.deleteNote}
          />
        );
      })}
    </div>
  );
};

export default Notes;

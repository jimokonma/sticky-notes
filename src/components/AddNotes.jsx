const AddNotes = (props) => {
  return (
    <form onSubmit={props.saveNote}>
      <label>Title</label>
      <input
        type="text"
        placeholder="enter note title"
        value={props.title}
        onChange={props.handleTitle}
      />
      <label>Note</label>
      <textarea
        cols="30"
        rows="5"
        placeholder="enter note"
        onChange={props.handleMessage}
        value={props.message}
      ></textarea>
      <span>
        <div onClick={() => console.log("listening..")}>audio</div>
        {!props.showEdit ? (
          <button type="submit">save</button>
        ) : (
          <div onClick={props.handleEdit()}>Save Edit</div>
        )}
      </span>
    </form>
  );
};

export default AddNotes;

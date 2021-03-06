const Navbar = (props) => {
  return (
    <nav>
      <h1>Sticky notes</h1>
      <button
        onClick={props.displayNotes}
        style={{
          color: props.noteStates ? "#FFf" : "#ff7700",
          backgroundColor: props.noteStates ? "#FF7700" : "#fff",
        }}
        title={props.noteStates ? "Close note" : "Add note"}
      >
        {props.noteStates ? "-" : "+"}
      </button>
    </nav>
  );
};
export default Navbar;

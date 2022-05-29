import { useState, useEffect } from "react";

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
        <div onClick={() => console.log("listening..")}>
          <img
            src="https://www.figma.com/file/wnO1uQIoRQxJPOjcIXAhGp/Untitled?node-id=35%3A2"
            alt="voice input"
            title="voice input"
          />
        </div>
        <button type="submit" title="Save note">
          save
        </button>
      </span>
    </form>
  );
};

export default AddNotes;

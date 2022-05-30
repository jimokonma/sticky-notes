import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Mic from "../images/mic.png";
import NoMic from "../images/no-mic.png";
import Save from "../images/save.png";

const AddNotes = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

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
        value={props.message || transcript}
      ></textarea>
      <span>
        <div>
          {listening ? (
            <button onClick={SpeechRecognition.stopListening} className="icon">
              <img src={NoMic} alt="stop listing" />
            </button>
          ) : (
            <button onClick={SpeechRecognition.startListening} className="icon">
              {" "}
              <img src={Mic} alt="start listing" />
            </button>
          )}
        </div>
        <button type="submit" title="Save note" className="icon">
          <img src={Save} alt="Save note" />
        </button>
      </span>
    </form>
  );
};

export default AddNotes;

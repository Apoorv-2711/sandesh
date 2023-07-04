import { CircularProgress } from "@mui/material";
import AudioPlayer from "./AudioPlayer";

export default function ChatMessages({
  messages,
  user,
  roomId,
  audioId,
  setAudioId,
}) {
  if (!messages) return null;

  return messages.map((messages) => {
    const isSender = messages.uid === user.uid;

    return (
      <div
        key={messages.id}
        className={`chat__message ${isSender ? "chat__message--sender" : ""}`}
      >
        <span className="chat__name">{messages.name}</span>

        {messages.imageUrl === "uploading" ? (
          <div className="image-container">
            <div className="image__container--loader">
              <CircularProgress style={{ width: 40, height: 40 }} />
            </div>
          </div>
        ) : messages.imageUrl ? (
          <div className="image-container">
            <img src={messages.imageUrl} alt={messages.name} />
          </div>
        ) : null}

        {messages.audioName ? (
          <AudioPlayer
            sender={isSender}
            roomId={roomId}
            id={messages.id}
            audioUrl={messages.audioUrl}
            audioId={audioId}
            setAudioId={setAudioId}
           />
        ) : (
          <span className="chat__message--message">{messages.message}</span>
        )}

        <span className="chat__timestamp">{messages.time}</span>
      </div>
    );
  });
}

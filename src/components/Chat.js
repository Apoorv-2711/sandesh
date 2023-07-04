import useRoom from "@/hooks/useRoom";
import { AddPhotoAlternate, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import MediaPreview from "./MediaPreview";
import ChatFooter from "./ChatFooter";

export default function Chat({ user }) {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [src, setSrc] = useState("");
  const roomId = router.query.roomId ?? "";
  const userId = user.uid;
  const room = useRoom(roomId, userId);

  function showPreview(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSrc(reader.result);
      };
    }
  }

  function closePreview() {
    setSrc("");
    setImage(null);
  }

  if (!room) return null;

  return (
    <div className="chat">
      <div className="chat__background" />

      {/* Chat Header */}
      <div className="chat__header">
        <div className="avatar__container">
          <Avatar src={room.photoURL} alt={room.name} />
        </div>
        <div className="chat__header--info">
          <h3>{room.name}</h3>
        </div>
        <div className="chat__header--right">
          <input
            id="image"
            style={{ display: "none" }}
            accept="image/*"
            type="file"
            onChange={showPreview}
          />
          <IconButton>
            <label style={{ cursor: "pointer", height: 24 }} htmlFor="image">
              <AddPhotoAlternate />
            </label>
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <Menu id="menu" keepMounted open={false} >
            <MenuItem>Delete Room</MenuItem>
          </Menu>
        </div>
      </div>

      <MediaPreview src={src} closePreview={closePreview} />

      <ChatFooter />
    </div>
  );
}

import { MicRounded, Send } from "@mui/icons-material"

export default function ChatFooter() {
    const canRecord = true
    const recordIcons = (
        <>
            <Send style={{ width: 20, height: 20, color: "white"}} />
            <MicRounded style={{ width: 24, height: 24, color: "white"}} />
        </>
    )

  return (
    <div className="chat__footer">
        <form>
            <input placeholder="Type a message" />
            {
                canRecord ? (
                    <button type="button" className="send__btn">
                        {recordIcons}
                    </button>
                ) : (
                    <>
                        <label htmlFor="capture" className="send__btn">{recordIcons}</label>
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="capture"
                            accept="audio/*"
                            capture
                        />
                    </>
                )

            }
        </form>
    </div>
  )
}

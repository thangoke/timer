import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function PlayPauseButton({ onStatusChange }: any) {
    let [status, setStatus] = useState("pause");

    const switchStatus = () => {
        if (status === "play") {
            setStatus("pause");
            onStatusChange("pause");
        } else {
            setStatus("play");
            onStatusChange("play");
        }
    }

    return <div>
        <FontAwesomeIcon
            icon={status === "play" ? "pause" : "play"}
            style={{ color: "white", fontWeight: "bold", fontSize: "100px", marginLeft: "55px", marginRight: "55px", transform: "rotate(0deg)" }}
            onClick={e => switchStatus()}
        />
    </div>
}

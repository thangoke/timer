import StyleSheetHolder from "../type/StyleSheetHolder"
import { useEffect, useState } from "react"
import PlayPauseButton from "./PlayPauseButton";

export default function Timer({ hour, minute, second }: any) {
    let [currStatus, setCurrStatus] = useState("pause");

    let [currHour, setCurrHour] = useState(hour);
    let [currMinute, setCurrMinute] = useState(minute);
    let [currSecond, setCurrSecond] = useState(second);

    let [totalSeconds, setTotalSeconds] = useState(Number(currHour) * 3600 + Number(minute) * 60 + Number(second));

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(currStatus)
            if (currStatus !== "pause") {
                if (totalSeconds > 0) {
                    setTotalSeconds(totalSeconds - 1);
                };

                let remain = totalSeconds;

                let s = remain % 60;
                if (s < 10) {
                    setCurrSecond('0' + s);
                } else {
                    setCurrSecond('' + s);
                }
                remain -= s;

                let m = remain % 3600;
                if (m < 10) {
                    setCurrMinute('0' + m);
                } else {
                    setCurrMinute('' + m);
                }
                remain -= m * 60;

                let h = remain % 86400;
                if (h < 10) {
                    setCurrHour('0' + h);
                } else {
                    setCurrHour('' + h);
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [currStatus, totalSeconds]);

    const handleStatusChange = (status: string) => {
        console.log("receive status", status);
        setCurrStatus(status);
    }

    return <div style={styles.timerSetupContainer}>
        <div style={styles.timerElement}>{currHour} : {currMinute} : {currSecond}</div>
        <div style={styles.timerAdjustContainer}>
            <PlayPauseButton onStatusChange={(status: string) => handleStatusChange(status)} />
        </div>
    </div>
}

const styles: StyleSheetHolder = {
    timerSetupContainer: {
        display: "flex",
        flexDirection: "column",
        background: "gray",
    },
    timerAdjustContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    timerElement: {
        color: "white",
        fontWeight: "bold",
        fontSize: "100px",
        borderTop: "2px solid white",
        borderBottom: "2px solid white",
        userSelect: "none",
    }
}

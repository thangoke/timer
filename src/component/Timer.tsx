import StyleSheetHolder from "../type/StyleSheetHolder"
import { useEffect, useState } from "react"
import PlayPauseButton from "./PlayPauseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Timer({ hour, minute, second }: any) {
    let [currStatus, setCurrStatus] = useState("pause");

    let [currHour, setCurrHour] = useState(hour);
    let [currMinute, setCurrMinute] = useState(minute);
    let [currSecond, setCurrSecond] = useState(second);

    let [totalSeconds, setTotalSeconds] = useState(Number(currHour) * 3600 + Number(currMinute) * 60 + Number(currSecond));
    const initSeconds = Number(hour) * 3600 + Number(minute) * 60 + Number(second);

    let [countDownPercent, setCountDownPercent] = useState(0);

    let warningHour = localStorage.getItem(`thangoke.timer/${"alarm"}hour`) || "00";
    let warningMinute = localStorage.getItem(`thangoke.timer/${"alarm"}minute`) || "00";
    let warningSecond = localStorage.getItem(`thangoke.timer/${"alarm"}second`) || "15";
    const totalWarningSeconds = Number(warningHour) * 3600 + Number(warningMinute) * 60 + Number(warningSecond);
    const warningPercentage = totalWarningSeconds * 100 / initSeconds;

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(currStatus)
            if (currStatus !== "pause") {
                if (totalSeconds > 0) {
                    setTotalSeconds(totalSeconds - 1);
                };

                let remain = totalSeconds;

                let h = Math.floor(remain / 3600);
                if (h < 10) {
                    setCurrHour('0' + h);
                } else {
                    setCurrHour('' + h);
                }
                remain -= h * 3600;

                let m = Math.floor(remain / 60);
                if (m < 10) {
                    setCurrMinute('0' + m);
                } else {
                    setCurrMinute('' + m);
                }
                remain -= m * 60;

                let s = remain;
                if (s < 10) {
                    setCurrSecond('0' + s);
                } else {
                    setCurrSecond('' + s);
                }

                debugger;
                setCountDownPercent(100 - Math.floor(totalSeconds * 100 / initSeconds));
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
        <div style={styles.progressContainer}>
            <div style={{ background: "green", height: "30px", width: `${100 - warningPercentage}%` }} />
            <div style={{ background: "yellow", height: "30px", width: `${warningPercentage}%` }} />
        </div>
        <div style={styles.progressContainer}>
            <div style={{ height: "50px", width: `${countDownPercent}%` }} />
            <FontAwesomeIcon
                icon={"play"}
                style={{ color: "white", fontWeight: "bold", fontSize: "50px", transform: "rotate(-90deg)" }}
            />
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
    },
    progressContainer: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "50px",
        marginRight: "50px",
        userSelect: "none",
    }
}

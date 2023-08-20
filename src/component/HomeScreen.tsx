import StyleSheetHolder from "../type/StyleSheetHolder"
import { useEffect, useState } from "react"
import PlayPauseButton from "./PlayPauseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeScreen({ hour, minute, second, onChangeScreen }: any) {
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
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [currStatus, totalSeconds]);

    const handleStatusChange = (status: string) => {
        console.log("receive status", status);
        setCurrStatus(status);
    }

    return <div style={styles.timerSetupContainer}>
        <div style={styles.timerElement} onClick={() => onChangeScreen("setup")}>{currHour} : {currMinute} : {currSecond}</div>
        <div style={styles.alarmContainer}>
            <div style={styles.alarmButton} onClick={() => onChangeScreen("setupAlarm")}>00:00:00</div>
            <div style={styles.alarmButton}>
                <FontAwesomeIcon
                    icon={"lock"}
                    style={{ color: "orange", fontWeight: "bold", fontSize: "30px", marginLeft: "55px", marginRight: "55px" }}
                />
            </div>
            <div style={styles.alarmButton}>
                <FontAwesomeIcon
                    icon={"lock"}
                    style={{ color: "orange", fontWeight: "bold", fontSize: "30px", marginLeft: "55px", marginRight: "55px" }}
                />
            </div>
        </div>
        <div style={styles.timerAdjustContainer}>
            {/* <FontAwesomeIcon
                icon={"cog"}
                style={{ color: "white", fontWeight: "bold", fontSize: "100px", marginLeft: "55px", marginRight: "55px" }}
            /> */}
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
    },
    alarmContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
    },
    alarmButton: {
        color: "yellow",
        fontSize: "30px",
        marginLeft: "5px",
        marginRight: "5px",
        marginTop: "10px",
        border: "1px solid",
        borderRadius: "10%",
        paddingLeft: "30px",
        paddingRight: "30px",
        userSelect: "none",
    }
}

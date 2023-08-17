import StyleSheetHolder from "../type/StyleSheetHolder"
import AdjustUp from "./AdjustUp"
import AdjustDown from "./AdjustDown"
import { useState } from "react"

export default function TimerSetup({ onClose }: any) {
    let [hour, setHour] = useState("00");
    let [minute, setMinute] = useState("00");
    let [second, setSecond] = useState("15");

    const setElement = (name: string, direction: string) => {
        let amount = direction === "down" ? -1 : 1;
        switch (name) {
            case "hour": {
                let currentHour = Number(hour);
                if (amount <= 0 && currentHour <= 0) {
                    break;
                }
                currentHour += amount;
                let hourPresen = "";
                if (currentHour < 10) {
                    hourPresen = ('0' + currentHour);
                } else {
                    hourPresen = ('' + currentHour);
                }
                setHour(hourPresen);
                localStorage.setItem("thangoke.timer/hour", hourPresen);
                break;
            }
            case "minute": {
                let currenMinute = Number(minute);
                if (amount <= 0 && currenMinute <= 0) {
                    break;
                }
                currenMinute += amount;
                let minutePresen = "";
                if (currenMinute < 10) {
                    minutePresen = ('0' + currenMinute);
                } else {
                    minutePresen = ('' + currenMinute);
                }
                setMinute(minutePresen);
                localStorage.setItem("thangoke.timer/minute", minutePresen);
                break;
            }
            case "second": {
                let currenSecond = Number(second);
                if (amount <= 0 && currenSecond <= 0) {
                    break;
                }
                currenSecond += amount;
                let secondPresen = "";
                if (currenSecond < 10) {
                    secondPresen = ('0' + currenSecond);
                } else {
                    secondPresen = ('' + currenSecond);
                }
                setSecond(secondPresen);
                localStorage.setItem("thangoke.timer/second", secondPresen);
                break;
            }
        }
    }

    return <div style={styles.timerSetupContainer}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ color: "white", fontSize: "40px", margin: "10px" }}>set time</div>
            <button style={{ color: "red", fontSize: "40px", borderRadius: "50%", margin: "10px" }} onClick={e => onClose(e)}>x</button>
        </div>
        <div style={styles.timerAdjustContainer}>
            <AdjustUp onClick={() => setElement("hour", "up")} />
            <AdjustUp onClick={() => setElement("minute", "up")} />
            <AdjustUp onClick={() => setElement("second", "up")} />
        </div>
        <div style={styles.timerElement}>{hour} : {minute} : {second}</div>
        <div style={styles.timerAdjustContainer}>
            <AdjustDown onClick={() => setElement("hour", "down")} />
            <AdjustDown onClick={() => setElement("minute", "down")} />
            <AdjustDown onClick={() => setElement("second", "down")} />
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
    }
}

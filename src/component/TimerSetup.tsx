import StyleSheetHolder from "../type/StyleSheetHolder"
import AdjustUp from "./AdjustUp"
import AdjustDown from "./AdjustDown"
import { useState } from "react"

export default function TimerSetup({ onClose, setupFor, timeColor }: any) {
    let [hour, setHour] = useState(localStorage.getItem(`thangoke.timer/${setupFor}hour`) || "00");
    let [minute, setMinute] = useState(localStorage.getItem(`thangoke.timer/${setupFor}minute`) || "00");
    let [second, setSecond] = useState(localStorage.getItem(`thangoke.timer/${setupFor}second`) || "15");

    const getFormatted = (num: number) => {
        if (num < 10) {
            return '0' + num;
        }
        return '' + num;
    }

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
                localStorage.setItem(`thangoke.timer/${setupFor}hour`, hourPresen);
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
                localStorage.setItem(`thangoke.timer/${setupFor}minute`, minutePresen);
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
                localStorage.setItem(`thangoke.timer/${setupFor}second`, secondPresen);
                break;
            }
        }
    }

    const reset = () => {
        setHour("00");
        localStorage.setItem(`thangoke.timer/${setupFor}hour`, "00");
        setMinute("00");
        localStorage.setItem(`thangoke.timer/${setupFor}minute`, "00");
        setSecond("00");
        localStorage.setItem(`thangoke.timer/${setupFor}second`, "00");
    }

    const plusMinute = (num: number) => {
        if (Number(minute) + num > 59) {
            setMinute("59");
            localStorage.setItem(`thangoke.timer/${setupFor}minute`, "59");
        } else {
            const newMinute = getFormatted(Number(minute) + num);
            setMinute(newMinute);
            localStorage.setItem(`thangoke.timer/${setupFor}minute`, newMinute);
        }
    }

    const plusSecond = (num: number) => {
        if (Number(second) + num > 59) {
            setSecond("59");
            localStorage.setItem(`thangoke.timer/${setupFor}second`, "59");
        } else {
            const newSecond = getFormatted(Number(second) + num);
            setSecond(newSecond);
            localStorage.setItem(`thangoke.timer/${setupFor}second`, newSecond);
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
        <div style={styles.quickAdjustContainer}>
            <div style={styles.quickAdjustButton} onClick={() => reset()}>00:00</div>
            <div style={styles.quickAdjustButton} onClick={() => plusMinute(5)}>+ 05m</div>
            <div style={styles.quickAdjustButton} onClick={() => plusSecond(15)}>+ 15s</div>
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
    quickAdjustContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "30px",
    },
    quickAdjustButton: {
        color: "white",
        fontSize: "30px",
        marginLeft: "30px",
        marginRight: "30px",
        border: "1px solid",
        borderRadius: "50%",
        paddingLeft: "20px",
        paddingRight: "20px",
        userSelect: "none",
    }
}

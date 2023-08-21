import StyleSheetHolder from "../type/StyleSheetHolder"
import PlayPauseButton from "./PlayPauseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeScreen({ hour, minute, second, onChangeScreen }: any) {

    let warningHour = localStorage.getItem(`thangoke.timer/${"alarm"}hour`) || "00";
    let warningMinute = localStorage.getItem(`thangoke.timer/${"alarm"}minute`) || "00";
    let warningSecond = localStorage.getItem(`thangoke.timer/${"alarm"}second`) || "15";

    return <div style={styles.timerSetupContainer}>
        <div style={styles.timerElement} onClick={() => onChangeScreen("setup")}>{hour} : {minute} : {second}</div>
        <div style={styles.alarmContainer}>
            <div style={styles.alarmButton} onClick={() => onChangeScreen("setupAlarm")}>{warningHour} : {warningMinute} : {warningSecond}</div>
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
            <PlayPauseButton onStatusChange={() => onChangeScreen("timer")} />
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StyleSheetHolder from "../type/StyleSheetHolder"
import AdjustUp from "./AdjustUp"
import AdjustDown from "./AdjustDown"

export default function TimerSetup() {
    return <div style={styles.timerSetupContainer}>
        <div style={styles.timerAdjustContainer}><AdjustUp /><AdjustUp /><AdjustUp /></div>
        <div style={styles.timerElement}>00 : 05 : 10</div>
        <div style={styles.timerAdjustContainer}><AdjustDown /><AdjustDown /><AdjustDown /></div>
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

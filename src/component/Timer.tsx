import StyleSheetHolder from "../type/StyleSheetHolder"
import { useState } from "react"
import PlayPauseButton from "./PlayPauseButton";

export default function Timer({ hour, minute, second }: any) {
    return <div style={styles.timerSetupContainer}>
        <div style={styles.timerElement}>{hour} : {minute} : {second}</div>
        <div style={styles.timerAdjustContainer}>
            <PlayPauseButton onStatusChange={() => { }} />
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

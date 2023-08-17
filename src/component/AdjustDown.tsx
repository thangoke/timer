import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdjustDown({ onClick }: any) {
    return <div>
        <FontAwesomeIcon
            icon={"play"}
            style={{ color: "white", fontWeight: "bold", fontSize: "100px", marginLeft: "55px", marginRight: "55px", transform: "rotate(90deg)" }}
            onClick={e => onClick(e)}
        />
    </div>
}

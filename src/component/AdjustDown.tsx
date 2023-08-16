import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdjustDown({ onClick }: any) {
    return <div>
        <FontAwesomeIcon
            icon={"triangle-exclamation"}
            style={{ color: "white", fontWeight: "bold", fontSize: "100px", marginLeft: "50px", marginRight: "50px", transform: "rotate(180deg)" }}
            onClick={e => onClick(e)}
        />
    </div>
}

import { MoreVertical } from "lucide-react";

function DropDown() {
  return (
    <div>
      <button
        className="btn"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" }}
      >
        <MoreVertical />
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" }}
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
export default DropDown;

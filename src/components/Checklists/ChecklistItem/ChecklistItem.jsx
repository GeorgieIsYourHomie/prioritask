// - IMPORTING -
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ChecklistItem/ChecklistItem.css";
import PrioritiesList from "../../Priorities/PrioritiesList/PrioritiesList";

// - ChecklistItem COMPONENT -
function ChecklistItem({ checklist, checklistNumber }) {
  // const priorities = checklist.checklist_data.priorities;
  const checklistID = checklist.checklist_id;
  const priorities = checklist.priorities_data;

  // Logging
  console.log(
    `\nChecklist ${checklistNumber} with ChecklistID of ${checklistID} has ${priorities.length} priorities`
  );
  console.log("\tPriorities are:", priorities);

  // Declaring useDispatch hook as a variable
  const dispatch = useDispatch();

  // Getting userID from store
  const user = useSelector((store) => store.user);

  // Function to dispatch action with user id to remove selected checklist
  const handleDeleteChecklist = () => {
    console.log("Delete checklist button clicked");

    // Dispatch an action to the redux saga, with a payload of user id and checklist id
    dispatch({
      type: "DELETE_CHECKLIST",
      payload: { userID: user.id, checklistID: checklistID },
    });
  };

  // - RENDERING -
  return (
    <>
      <div className="checklist-item-box">
        <header className="checklist-item-header">
          <center>
            <h2 className="checklist-heading">Checklist {checklistNumber}</h2>
          </center>
        </header>

        <PrioritiesList checklistID={checklistID} />

        {/* Delete Button */}
        <div>
          <button onClick={handleDeleteChecklist} type="button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
} // - END ChecklistItem COMPONENT -

// - EXPORTING ChecklistItem COMPONENT -
export default ChecklistItem;

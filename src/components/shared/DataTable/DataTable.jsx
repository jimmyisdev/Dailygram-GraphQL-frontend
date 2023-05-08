import styles from "./DataTable.module.scss";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Stack from "react-bootstrap/Stack";
import DeleteUser from "../DeleteItem/DeleteItem";
import ShowDetails from "../ShowDetails/ShowDetails";
export default function DataTable({
  sectTitle,
  tableField,
  dataHead,
  data,
  deleteItem,
  getItem,
  getItems,
}) {
  if (data?.length === 0) {
    <span>No data found</span>;
  } else {
    return (
      <Stack className={`flex-column ${styles.container}`}>
        <Stack
          direction="horizontal"
          className={`${styles.table_layout} ${styles.head_row}`}
        >
          {dataHead.map((item, index) => (
            <div key={item+ index}>
              <span key={sectTitle + item}>{item}</span>
            </div>
          ))}
          <div className={`${styles.actions}`}>
            <span>ACTIONS</span>
          </div>
        </Stack>
        {data?.map((item) => {
          return (
            <Stack
              direction="horizontal"
              key={item.id}
              className={`${styles.table_layout} ${styles.data_row}`}
            >
              {tableField.map((fieldItem) => {
                let val = item[fieldItem];
                if (fieldItem === "isCompleted") {
                  val = val === true ? "DONE" : "PENDING";
                }
                if (fieldItem === "level" || fieldItem === "role") {
                  val = val.toUpperCase();
                }
                return (
                  <div key={item.id + fieldItem}>
                    <span>{val}</span>
                  </div>
                );
              })}
              <ButtonGroup className={`${styles.actions} mb-2`}>
                <DeleteUser
                  id={item.id}
                  sectTitle={sectTitle}
                  deleteItem={deleteItem}
                  getAllItems={getItems}
                />
                <ShowDetails
                  id={item.id}
                  sectTitle={sectTitle}
                  getItem={getItem}
                />
              </ButtonGroup>
            </Stack>
          );
        })}
      </Stack>
    );
  }
}

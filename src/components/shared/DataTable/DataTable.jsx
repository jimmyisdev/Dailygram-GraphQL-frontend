import styles from "./DataTable.module.scss";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Stack from "react-bootstrap/Stack";
import DeleteUser from "../DeleteItem/DeleteItem";
import ShowDetails from "../ShowDetails/ShowDetails";

export default function DataTable({ sectTitle, tableField, dataHead, data }) {
  if (data?.length === 0) {
    <span>No data found</span>;
  } else {
    return (
      <Stack className={`flex-column ${styles.container}`}>
        <Stack direction="horizontal" className={`${styles.table_layout} ${styles.head_row}`}>
          {dataHead.map((item) => (
            <span key={sectTitle + item}>{item}</span>
          ))}
          <span className="actions">ACTIONS</span>
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
                  val = val === true ? "Done" : "Pending";
                }
                return <span key={sectTitle + item.id + fieldItem}>{val}</span>;
              })}
              <ButtonGroup className={`${styles.actions} mb-2`}>
                <DeleteUser id={item.id} sectTitle={sectTitle} />
                <ShowDetails id={item.id} sectTitle={sectTitle} />
              </ButtonGroup>
            </Stack>
          );
        })}
      </Stack>
    );
  }
}

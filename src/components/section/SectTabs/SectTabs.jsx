import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SectUser from "../SectUser/SectUser";
import SectTask from "../SectTask/SectTask";
import SectPeopleMemo from "../SectPeopleMemo/SectPeopleMemo";
import SectExpenditure from "../SectExpenditure/SectExpenditure";

export default function SectTabs() {
  return (
    <Tabs
      defaultActiveKey="users"
      transition={false}
      className="mb-3"
    >
      <Tab eventKey="users" title="User List">
        <SectUser />
      </Tab>
      <Tab eventKey="tasks" title="Task List">
        <SectTask />
      </Tab>
      <Tab eventKey="peopleMemos" title="Connection List">
        <SectPeopleMemo />
      </Tab>
      <Tab eventKey="expenditures" title="Expenditure List">
        <SectExpenditure />
      </Tab>
    </Tabs>
  );
}

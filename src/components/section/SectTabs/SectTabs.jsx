import React, { lazy, Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const SectUser = lazy(() => import("../SectUser/SectUser"));
const SectTask = lazy(() => import("../SectTask/SectTask"));
const SectPeopleMemo = lazy(() => import("../SectPeopleMemo/SectPeopleMemo"));
const SectExpenditure = lazy(() =>
  import("../SectExpenditure/SectExpenditure")
);

export default function SectTabs() {
  const [currentTab, setCurrentTab] = useState("users");

  return (
    <Tabs
      defaultActiveKey="users"
      transition={false}
      activeKey={currentTab}
      onSelect={(currentTab) => setCurrentTab(currentTab)}
      className="mb-3"
    >
      <Tab eventKey="users" title="User List">
        <Suspense fallback={<Spinner />}>
          <SectUser currentTab={currentTab} />
        </Suspense>
      </Tab>
      <Tab eventKey="tasks" title="Task List">
        <Suspense fallback={<Spinner />}>
          <SectTask currentTab={currentTab} />
        </Suspense>
      </Tab>
      <Tab eventKey="connections" title="Connection List">
        <Suspense fallback={<Spinner />}>
          <SectPeopleMemo currentTab={currentTab} />
        </Suspense>
      </Tab>
      <Tab eventKey="expenditures" title="Expenditure List">
        <Suspense fallback={<Spinner />}>
          <SectExpenditure currentTab={currentTab} />
        </Suspense>
      </Tab>
    </Tabs>
  );
}

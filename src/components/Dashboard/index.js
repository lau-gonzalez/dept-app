import React, { useEffect } from "react";
import { getDataAPI } from "../../api";

const Dashboard = () => {
  useEffect(() => {
    (async () => {
      const data = await getDataAPI();
      console.log(data);
    })();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;

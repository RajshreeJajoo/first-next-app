"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import LoadingPage from "@/app/loading";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

const UserFetch = () => {
  const [rowData, setRowData] = useState([]);
    const router = useRouter(); // ✅ This must come after "use client"

  const [colDefs] = useState([
    { field: "name", sortable: true, filter: true },
    { field: "username", sortable: true, filter: true },
    { field: "email", sortable: true, filter: true },
    { field: "phone", sortable: true, filter: true },
    { field: "website", sortable: true, filter: true },
  ]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setRowData(res.data))
      .catch((err) => console.error("Error fetching users", err));
  }, []);

const handleRowClick = (event) => {
    const userId = event.data.id;
    router.push(`/users/${userId}`);
  };

  return (
    <div>
      {rowData?.length === 0 ? (
        <LoadingPage />
      ) : (
        <div className="ag-theme-alpine" style={{ height: 500, width: "90%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            onRowClicked={handleRowClick}
          />
        </div>
      )}
    </div>
  );
};

export default UserFetch;


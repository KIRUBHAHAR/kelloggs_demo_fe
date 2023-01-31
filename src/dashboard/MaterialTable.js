import React, { useState, useEffect, Fragment } from "react";
import MaterialTable from "material-table";
import APIService from "../service/apiservices";
import { useSelector, useDispatch } from "react-redux";

function TableData() {
  const [data, setData] = useState({
    status: "idle",
    mainData: [],
    columnData: [],
  });
  // const [columnData, setColumnData] = useState([]);
  // const tableData = useRef([]);
  const category = useSelector((state) => state.dashboard.category);
  console.log("category:", category);
  useEffect(() => {
    switch (category) {
      case "Bacterial":
        const bacterial_list = async () => {
          setData((prev) => {
            return { ...prev, status: "loading" };
          });
          let response = await APIService.getBacterialdata();

          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setData((prev) => {
            return {
              ...prev,
              status: "success",
              mainData: apiData["bacterialdata"],
              columnData: Object.keys(apiData["bacterialdata"][0]).map(
                (key) => {
                  return {
                    title: key.charAt(0).toUpperCase() + key.slice(1),
                    field: key,
                    // editable: key === "id"  ? 'never':"onUpdate"
                    
                    // editable: key === "id" ? false : true,
                  };
                }
              ),
            };
          });
        };

        bacterial_list();
        break;
    }
  }, [category]);

  console.log("outside useeffect1:", data); //tableData.current

  return (
    <Fragment>
      {data.status === "loading" && "loading"}
      {data.status === "success" && (
        <MaterialTable
          title="Expert Rules Management"
          data={data.mainData}
          columns={data.columnData}
          editable={{
            onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [...data.mainData,newRow];
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);

            }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const index = selectedRow.tableData.id;
                const updatedRows = [...data.mainData];
                updatedRows.splice(index, 1);
                setTimeout(() => {
                  setData((prev) => {
                    return { ...prev, mainData: [...updatedRows] };
                  });
                  resolve();
                }, 2000);
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                const index = oldRow.tableData.id;
                const updatedRows = [...data.mainData];
                updatedRows[index] = updatedRow;
                setTimeout(() => {
                  setData((prev) => {
                    return { ...prev, mainData: [...updatedRows] };
                  });
                  resolve();
                }, 2000);
              }),
            onBulkUpdate: (selectedRows) =>
              new Promise((resolve, reject) => {
                const rows = Object.values(selectedRows);
                const updatedRows = [...data.mainData];
                let index;
                rows.map((emp) => {
                  index = emp.oldData.tableData.id;
                  updatedRows[index] = emp.newData;
                });
                setTimeout(() => {
                  setData((prev) => {
                    return { ...prev, mainData: [...updatedRows] };
                  });
                  resolve();
                }, 2000);
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
        />
      )}
    </Fragment>
  );
}

export default TableData;

import React, { useCallback, useMemo, useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import MaterialReactTable from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux";
import APIService from "../service/apiservices";
// import { Bacterialcolumn, Foodcolumn, Gutcolumn, MicroInsightscolumn, Nutricolumn, Procolumn } from './Column'

const ReactDataTable = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => []);
  const [columnData, setColumnData] = useState(() => []);
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
        //   const isValid =
            // cell.column.id === 'email'
            //   ? validateEmail(event.target.value)
            //   : cell.column.id === 'age'
            //   ? validateAge(+event.target.value)
            //   : validateRequired(event.target.value);
        //   if (!isValid) {
        //     //set validation error for cell if invalid
        //     setValidationErrors({
        //       ...validationErrors,
        //       [cell.id]: `${cell.column.columnDef.header} is required`,
        //     });
        //   } else {
        //     //remove validation error for cell if valid
        //     delete validationErrors[cell.id];
        //     setValidationErrors({
        //       ...validationErrors,
        //     });
        //   }
        },
      };
    },
    [validationErrors],
  );


   const Bacterialcolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'matrix',
        header: 'Matrix',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'petAntibiotics',
        header: 'Pet Antibiotics',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );

   const Foodcolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'onPrescriptionDiet',
        header: 'Prescription Diet',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'hasWeightGoal',
        header: 'Weight Goal',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'petType',
        header: 'Pet Type',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'matrix',
        header: 'Matrix',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'weightType',
        header: 'Weight Type',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'digestiveIssues',
        header: 'Digestive Issues',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'butyrateClassification',
        header: 'Butyrate Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'probioticClassification',
        header: 'Probiotic Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'breedSize',
        header: 'Breed Size',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'IbdAutoImmune',
        header: 'IbdAuto Immune',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'pathogenClassification',
        header: 'Pathogen Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );

   const Gutcolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'matrix',
        header: 'Matrix',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );

   const MicroInsightscolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'probioticClassification',
        header: 'Probiotic Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'butyrateClassification',
        header: 'Butyrate Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'diversityClassification',
        header: 'Diversity Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'matrix',
        header: 'Matrix',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'stoolVariation',
        header: 'Stool Variation',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'petAntibiotics',
        header: 'Pet Antibiotics',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );

   const Nutricolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'probioticClassification',
        header: 'Probiotic Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'butyrateClassification',
        header: 'Butyrate Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'diversityClassification',
        header: 'Diversity Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'matrix',
        header: 'Matrix',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );

   const Procolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'matrix',
        header: 'Matrix',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );

  const Metricscolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'diversityClassification',
        header: 'Diversity Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      
      {
        accessorKey: 'butyrateClassification',
        header: 'Butyrate Classification',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
      {
        accessorKey: 'petAntibiotics',
        header: 'Pet Antibiotics',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );
  
  const Overallcolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'matrix',
        header: 'Matrix',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'petAntibiotics',
        header: 'Pet Antibiotics',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'petType',
        header: 'Pet Type',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'stoolVariation',
        header: 'Stool Variation',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );
  
  const Potcolumn = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'sub_Section_id',
        header: 'Sub Section Id',
        size: 140,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
      {
        accessorKey: 'mandatory',
        header: 'Mandatory',
        size: 50,
        enableColumnOrdering: true,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
      },
     
      {
        accessorKey: 'variablevalue',
        header: 'Variable Value',
        size: 150,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
      {
        accessorKey: 'result',
        header: 'Result',
        size: 200,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
          }),
      },
     
    ],
    [getCommonEditTextFieldProps],
  );

  const category = useSelector((state) => state.dashboard.category);
  console.log("category:", category);
  useEffect(() => {
    setisLoading(true);
    switch (category) {
      case "Bacterial":
        const bacterial_list = async () => {         
          let response = await APIService.getBacterialdata();
          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setTableData(apiData["data"]);
          console.log("column",Bacterialcolumn);
          setColumnData(Bacterialcolumn);
          setisLoading(false);
        };

        bacterial_list();
        break;

        case "Food":
        const food_list = async () => {         
          let response = await APIService.getFooddata();
          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setTableData(apiData["data"]);
          console.log("column",Foodcolumn);
          setColumnData(Foodcolumn);
          setisLoading(false);
        };

        food_list();
        break;

        case "Gut":
        const gut_list = async () => {         
          let response = await APIService.getGutdata();
          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setTableData(apiData["data"]);
          console.log("column",Gutcolumn);
          setColumnData(Gutcolumn);
          setisLoading(false);
        };

        gut_list();
        break;

        case "MicroInsights":
        const micro_list = async () => {         
          let response = await APIService.getMicrodata();
          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setTableData(apiData["data"]);
          console.log("column",MicroInsightscolumn);
          setColumnData(MicroInsightscolumn);
          setisLoading(false);
        };

        micro_list();
        break;

        case "Nutri":
        const nutri_list = async () => {         
          let response = await APIService.getNutridata();
          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setTableData(apiData["data"]);
          console.log("column",Nutricolumn);
          setColumnData(Nutricolumn);
          setisLoading(false);
        };

        nutri_list();
        break;

        case "Pro":
        const pro_list = async () => {         
          let response = await APIService.getProbiodata();
          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setTableData(apiData["data"]);
          console.log("column",Procolumn);
          setColumnData(Procolumn);
          setisLoading(false);
        };

        pro_list();
        break;

        case "Metrics":
        const metrics_list = async () => {         
          let response = await APIService.getMetricsdata();
          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setTableData(apiData["data"]);
          console.log("column",Metricscolumn);
          setColumnData(Metricscolumn);
          setisLoading(false);
        };

        metrics_list();
        break;

        case "Overall":
        const overall_list = async () => {         
          let response = await APIService.getOveralldata();
          const apiData = await response.data;
          console.log("inside useEffect 1:", apiData);
          setTableData(apiData["data"]);
          console.log("column",Overallcolumn);
          setColumnData(Overallcolumn);
          setisLoading(false);
        };
        overall_list();
        break;

        case "Potential":
          const pot_list = async () => {         
            let response = await APIService.getPotdata();
            const apiData = await response.data;
            console.log("inside useEffect 1:", apiData);
            setTableData(apiData["data"]);
            console.log("column",Potcolumn);
            setColumnData(Potcolumn);
            setisLoading(false);
          };
          pot_list();
          break;

    }
  }, [category]);

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

//   const handleDeleteRow = useCallback(
//     (row) => {
//       if (
//         !confirm(`Are you sure you want to delete`)
//       ) {
//         return;
//       }
//       //send api delete request here, then refetch or update local table data for re-render
//       tableData.splice(row.index, 1);
//       setTableData([...tableData]);
//     },
//     [tableData],
//   );

  

  return (
    <>{isLoading?(<Box sx={{ display: 'flex',alignContent: 'center' }}>
    <CircularProgress />
  </Box>):(<>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columnData}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            {/* <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip> */}
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New Rule
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columnData}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      /></>)
        }
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {}),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Rule</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Rule
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;

// const validateAge = (age) => age >= 18 && age <= 50;

export default ReactDataTable;

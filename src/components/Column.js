import React, { useCallback,useMemo,useState } from 'react';
import MaterialReactTable from 'material-react-table';


const getCommonEditTextFieldProps = useCallback(
  (cell) => {
    return {
      error: !!validationErrors[cell.id],
      helperText: validationErrors[cell.id],
      // onBlur: (event) => {
      //   const isValid =
      //     cell.column.id === 'email'
      //       ? validateEmail(event.target.value)
      //       : cell.column.id === 'age'
      //       ? validateAge(+event.target.value)
      //       : validateRequired(event.target.value);
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
      // },
    };
  },
  // [validationErrors],
);

export const Bacterialcolumn = useMemo(
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

  export const Foodcolumn = useMemo(
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

  export const Gutcolumn = useMemo(
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

  export const MicroInsightscolumn = useMemo(
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

  export const Nutricolumn = useMemo(
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

  export const Procolumn = useMemo(
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


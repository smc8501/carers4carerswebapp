"use client";

import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Switch,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Row {
  name: string;
  edit: boolean;
}

interface Col {
  name: string;
}

interface FormValues {
  rows: Row[];
  cols: Col[];
}

// Define Yup validation schema for row and column names
const validationSchema = Yup.object().shape({
  rows: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Row name is required'),
      edit: Yup.boolean(),
    })
  ),
  cols: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Column name is required'),
    })
  ),
});

interface TableViewProps {
  initialRows: string[];
  initialCols: string[];
}

const TableView: React.FC<TableViewProps> = ({ initialRows, initialCols }) => {
  // State for monthly or quarterly columns
  const [isMonthly, setIsMonthly] = useState(true);

  // Define monthly and quarterly columns
  const monthlyCols = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const quarterlyCols = ['Q1', 'Q2', 'Q3', 'Q4'];

  const formik = useFormik<FormValues>({
    initialValues: {
      rows: initialRows.map((row) => ({ name: row, edit: false })),
      cols: initialCols.map((col) => ({ name: col })),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission if needed
      console.log(values);
    },
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
  });

  useEffect(() => {
    const newCols = isMonthly ? monthlyCols : quarterlyCols;
    formik.setFieldValue('cols', newCols.map(col => ({ name: col })));
  }, [formik, isMonthly, monthlyCols, quarterlyCols]);

  const addNewRow = () => {
    formik.setFieldValue('rows', [...formik.values.rows, { name: 'New Row', edit: false }]);
  };

  const deleteRow = (index: number) => {
    const updatedRows = [...formik.values.rows];
    updatedRows.splice(index, 1);
    formik.setFieldValue('rows', updatedRows);
  };

  const handleRowEdit = (idx: number) => {
    const updatedRows = formik.values.rows.map((row, i) => ({
      ...row,
      edit: i === idx ? true : row.edit,
    }));
    formik.setFieldValue('rows', updatedRows);
  };

  const handleRowSave = async (idx: number) => {
    await formik.setFieldTouched(`rows.${idx}.name`, true);
    await formik.validateField(`rows.${idx}.name`);
    if (!formik.errors.rows?.[idx]?.name) {
      const updatedRows = formik.values.rows.map((row, i) => ({
        ...row,
        edit: i === idx ? false : row.edit,
      }));
      formik.setFieldValue('rows', updatedRows);
    }
  };

  return (
    <TableContainer component={Paper}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={isMonthly} onChange={(e) => setIsMonthly(e.target.checked)} />}
          label="Monthly/Quarterly"
        />
      </FormGroup>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {formik.values.cols.map((col, idx) => (
              <TableCell key={idx}>{col.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formik.values.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>
                {row.edit ? (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                      value={row.name}
                      onChange={(e) => formik.setFieldValue(`rows.${rowIndex}.name`, e.target.value)}
                      error={formik.touched.rows?.[rowIndex]?.name && Boolean(formik.errors.rows?.[rowIndex]?.name)}
                      helperText={formik.touched.rows?.[rowIndex]?.name && formik.errors.rows?.[rowIndex]?.name}
                    />
                    <IconButton onClick={() => handleRowSave(rowIndex)}>
                      <SaveIcon />
                    </IconButton>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {row.name}
                    <IconButton onClick={() => handleRowEdit(rowIndex)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteRow(rowIndex)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                )}
              </TableCell>
              {formik.values.cols.map((col, colIndex) => (
                <TableCell key={colIndex}>{`${row.name} - ${col.name}`}</TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <IconButton onClick={addNewRow}>
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableView;

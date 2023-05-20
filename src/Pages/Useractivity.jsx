import React from "react";
import Container from "../Layouts/Container";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { ImSortNumbericDesc } from "react-icons/im";
import { ImSortNumericAsc } from "react-icons/im";
import { BiLoaderCircle } from "react-icons/bi";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0938A7",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#0938A7",
      darker: "#053e85",
    },
    secondary: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const Useractivity = () => {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);

  const fetchData = () => {
    return axios
      .get("http://103.175.216.72:8000/click/average")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Button</StyledTableCell>
              <StyledTableCell align="center">Total User</StyledTableCell>
              <StyledTableCell align="center"> Average&nbsp; </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .sort((a, b) => (asc ? a.average - b.average : b.average - a.average))
              .map((row) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.responden}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.average.toFixed(2)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <Stack direction="row" spacing={72}>
        <ThemeProvider theme={theme}>
          <Button
            onClick={() => fetchData()}
            color="primary"
            variant="contained"
            size="large"
            startIcon={<BiLoaderCircle />}
          >
            UPDATE
          </Button>
        </ThemeProvider>
        <Stack direction="row" spacing={3}>
          <ThemeProvider theme={theme}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              startIcon={<ImSortNumericAsc />}
              onClick={() => setAsc(true)}
            >
              ASCENDING
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button
              onClick={() => setAsc(false)}
              color="primary"
              variant="outlined"
              size="large"
              startIcon={<ImSortNumbericDesc />}
            >
              DESCENDING
            </Button>
          </ThemeProvider>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Useractivity;

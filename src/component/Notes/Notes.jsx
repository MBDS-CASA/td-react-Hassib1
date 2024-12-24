import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import notes from "../../../data.json"; // Importer les données de notes

const Notes = () => {
  return (
    <div>
      <h2>Liste des Notes</h2>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Cours</TableCell>
              <TableCell>Étudiant</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.unique_id}>
                <TableCell>{note.unique_id}</TableCell>
                <TableCell>{note.course}</TableCell>
                <TableCell>{note.student.firstname} {note.student.lastname}</TableCell>
                <TableCell>{note.date}</TableCell>
                <TableCell>{note.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Notes;

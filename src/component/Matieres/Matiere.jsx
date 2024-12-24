import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import matieres from "../../../data.json"; // Assurez-vous que le chemin vers votre fichier JSON est correct

const Matieres = () => {
  return (
    <div>
      <h2>Liste des Matières</h2>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Matière</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matieres.map((matiere, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{matiere.course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Matieres;

import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import etudiants from "../../../data.json"; // Assurez-vous que le chemin vers votre fichier JSON est correct

const Etudiants = () => {
  return (
    <div>
      <h2>Liste des Étudiants</h2>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Nom</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {etudiants.map((etudiant) => (
              <TableRow key={etudiant.student.id}>
                <TableCell>{etudiant.student.id}</TableCell>
                <TableCell>{etudiant.student.firstname}</TableCell>
                <TableCell>{etudiant.student.lastname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Etudiants;

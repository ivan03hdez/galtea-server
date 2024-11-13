import "reflect-metadata"

import express from "express";

import { getEvalResultsFromDB } from "./service/evalResultsService.ts";
import { getProjectsFromDB } from "./service/projectsService.ts";

import "./dataSource.ts";

const app = express();

const PORT = process.env.PORT || 3000

app.get('/eval-results', async (req, res) => {
    try {
        const evalResults = await getEvalResultsFromDB();
        res.json(evalResults);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the evaluation results', error });
    }
});

app.get('/projects', async (req, res) => {
    try {
        const projects = await getProjectsFromDB();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the projects', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
const express = require('express');
const { default: mongoose } = require('mongoose');
var notesRouter = express.Router();
const Note = require("../../db/models/note.model");

// (/notes/)
notesRouter.get("/", (request, response) => {
    
    Note.find({}, (err, notes) => {
        if (err) return console.log(err);
        
        response.json({
            notes
        })
    })
})

notesRouter.post("/", (request, response) => {
    const newNote = new Note(request.body);
    newNote.save().then ((savedNote) => {
        
        response.json({
            note: savedNote,
            success: true,
        })
    })
})

notesRouter.get("/:id", (request, response) => {
    const noteId = request.params.id;
    Note.findById(noteId, (err, note) => {
        if (err) return console.log(err);
        if (!note) return response.status(404).json({
            message: "Note not found"
        })
        response.json({
            note
        })
    })
})

notesRouter.delete("/:id", (request, response) => {
    const noteId = request.params.id;
    Note.findByIdAndRemove(noteId, (err, res) => {
        if (err) return console.log(err);
        if (!res) return response.status(404).json({
            message: "Note not found"
        })
        response.json({
            message: "Delete note by id success"
        })
    })
})

notesRouter.put("/:id", (request, response) => {
    const noteId = request.params.id;
    const updatedBody = request.body;
    Note.findByIdAndUpdate(noteId, updatedBody, {new: true}, (err, updatedNote) => {
        if (err) return console.log(err);
        if (!updatedNote) return response.status(404).json({
            message: "Note not found"
        })
        response.json({
            message: "Update note by id success",
            note: updatedNote
        })
    })
})

module.exports = notesRouter
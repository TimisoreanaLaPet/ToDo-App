package com.todo.api.controller;

import com.todo.api.request.CreateNoteRequest;
import com.todo.api.request.UpdateNoteRequest;
import com.todo.api.response.HttpMessageResponse;
import com.todo.api.response.Paginated;
import com.todo.domain.Note;
import com.todo.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
@RequiredArgsConstructor
public final class NoteController {

    private final NoteService noteService;

    @GetMapping("")
    public Paginated<Note> get(@RequestParam int pageSize, @RequestParam int pageNumber) {
        return noteService.getAll(pageSize, pageNumber - 1);
    }

    @PostMapping("")
    public HttpMessageResponse create(@RequestBody CreateNoteRequest request) {
        noteService.createNote(request);
        return new HttpMessageResponse("Note created");
    }

    @PutMapping("")
    public ResponseEntity<HttpMessageResponse> update(@RequestBody UpdateNoteRequest request) {
        boolean isUpdated = noteService.update(request);
        if (isUpdated) return ResponseEntity.ok(new HttpMessageResponse("Note updated"));
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpMessageResponse> delete(@PathVariable Long id) {
        boolean isDeleted = noteService.delete(id);
        if (isDeleted) return ResponseEntity.ok(new HttpMessageResponse("Note deleted"));
        return ResponseEntity.notFound().build();
    }
}
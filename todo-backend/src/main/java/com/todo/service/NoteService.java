package com.todo.service;

import com.todo.api.request.CreateNoteRequest;
import com.todo.api.request.UpdateNoteRequest;
import com.todo.api.response.Paginated;
import com.todo.domain.Note;
import com.todo.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public final class NoteService {
    private final NoteRepository noteRepository;

    public Paginated<Note> getAll(int pageSize, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        var page = noteRepository.findAll(pageable);
        return new Paginated<>(page.getContent(), page.getTotalElements(), page.getTotalPages());
    }

    public void createNote(CreateNoteRequest request) {
        Note note = new Note();
        note.setTitle(request.title());
        note.setContent(request.content());
        noteRepository.save(note);
    }

    public boolean update(UpdateNoteRequest request) {
        Note note = noteRepository.findById(request.id()).orElse(null);
        if (note == null) return false;
        note.setTitle(request.title());
        note.setContent(request.content());
        noteRepository.save(note);
        return true;
    }

    public boolean delete(Long id) {
        Note note = noteRepository.findById(id).orElse(null);
        if (note == null) return false;
        noteRepository.delete(note);
        return true;
    }
}

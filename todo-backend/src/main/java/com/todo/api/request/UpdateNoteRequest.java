package com.todo.api.request;

public record UpdateNoteRequest(Long id, String title, String content) {
}

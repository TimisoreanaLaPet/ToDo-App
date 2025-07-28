package com.todo.api.response;

import java.util.List;

public record Paginated<T>(List<T> content, long totalCount, int totalPages) {
}

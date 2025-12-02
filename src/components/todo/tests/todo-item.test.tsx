import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom"; 
import TodoItem from "../todo-item";

import type { TodoType } from "../types";

describe("TodoItem", () => {
    it("should render the todo item", () => {
        const todo: TodoType = {
            _id: "1",
            content: "Test",
            done: false,
            createdAt: "2025-10-17T10:30:00.000Z",
            updatedAt: "2025-10-17T10:30:00.000Z"
        };
        render(<TodoItem todo={todo} markAsDone={() => {}} removeTodo={() => {}} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
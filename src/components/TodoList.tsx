import {
  VStack,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../store/hooks";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.data);

  return !todos.length ? (
    <Badge colorScheme="purple" variant="outline" borderRadius="4" p="4" m="5">
      No todos
    </Badge>
  ) : (
    <VStack>
      {todos &&
        todos.map((todo) => (
          <Todo

            key={todo.id}
            todo={todo}
          />
        ))}
    </VStack>
  );
};
export default TodoList;

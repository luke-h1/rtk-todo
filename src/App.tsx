import React from "react";
import {
  Container,
  ChakraProvider,
  Text,
  Box,
  Checkbox,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { addTodo } from "./store/reducers/todosSlice";
import { useAppDispatch } from "./store/hooks";
import createTodoSchema from "./validation/createTodoSchema";
import { InputField } from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const dispatch = useAppDispatch();
  return (
    <ChakraProvider>
      <Container>
        <Text fontSize="4xl">RTK todo</Text>

        <Box mt={4} mb={4}>
          <Formik
            validationSchema={createTodoSchema}
            initialValues={{
              completed: false,
              text: "",
              id: 0,
            }}
            onSubmit={async (values) => {
              const { text } = values;
              dispatch(addTodo(text));
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField label="text" name="text" placeholder="..." />
                <Box mb={7} />

                <Flex direction="row" alignItems={"left"}>
                  <Button type="submit" disabled={isSubmitting}>
                    Create Todo
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
        <Box>
          <TodoList />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;

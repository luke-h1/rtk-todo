import { DeleteIcon } from "@chakra-ui/icons";
import { HStack, Flex, Text } from "@chakra-ui/react";
import { useAppDispatch } from "../store/hooks";
import { removeTodo } from "../store/reducers/todosSlice";

interface Props {
  todo: {
    text: string;
    id: number;
  };
}

const Todo = ({ todo }: Props) => {
  const dispatch = useAppDispatch();
  const deleteTodo = () => dispatch(removeTodo(todo.id));

  return (
    <HStack spacing="24px" w="320px">
      <Flex p={6} w="300px" h="50px" justifyContent="space-between">
        <Text>{todo.text}</Text>
        <Flex w="10px">
          <DeleteIcon color="red.500" mr="2" onClick={deleteTodo} cursor='pointer' />
        </Flex>
      </Flex>
    </HStack>
  );
};
export default Todo;

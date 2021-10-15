import { Button } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { Stack, VStack, Heading, Container } from "@chakra-ui/layout";
import React from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import { useToast } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { ITodo } from "../../interfaces/interface";

export default function ToDo() {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  const addTodo = (text: string): void => {
    const newTodos = { text: text, isDone: false };
    setTodos([...todos, newTodos]);
  };

  const toast = useToast();

  const markTodo = (index: number) => {
    const newTodos = [...todos];

    if (newTodos[index].isDone === true) {
      newTodos[index].isDone = false;

      toast({
        title: "UnDone! ",
        description: newTodos[index].text + " - is not yet done.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } else {
      newTodos[index].isDone = true;

      toast({
        title: "Job well done! ",
        description: newTodos[index].text + " - has been completed.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<HTMLButtonElement>();

  const clearList = () => {
    setTodos([]);
    onClose();
  };

  return (
    <Container>
      <Stack>
        <VStack>
          <FormTodo addTodo={addTodo} />
        </VStack>
        {todos.length > 0 && (
          <VStack pt={5}>
            <Heading as="h4" size="md">
              Todo List
            </Heading>
          </VStack>
        )}

        {todos.map((todo: ITodo, index: number) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        ))}
        {todos.length > 1 && (
          <Stack pt={10}>
            <Button
              type="submit"
              leftIcon={<DeleteIcon />}
              colorScheme="red"
              variant="solid"
              onClick={() => setIsOpen(true)}
            >
              Clear List
            </Button>
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Remove All Items in the List
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="red" onClick={clearList} ml={3}>
                      Clear List
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

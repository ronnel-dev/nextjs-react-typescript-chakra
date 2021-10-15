import { Button } from "@chakra-ui/button";
import { CheckIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { Text } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React from "react";
import { ITodo } from "../../interfaces/interface";

interface Props {
  todo: ITodo;
  index: number;
  markTodo(index: number): void;
  removeTodo(index: number): void;
}

export default function TodoList({ todo, index, markTodo, removeTodo }: Props) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<HTMLButtonElement>();

  return (
    <Stack direction={["column", "row"]} spacing="5px" p={2}>
      <Tag
        w="100%"
        style={{ textDecoration: todo.isDone ? "line-through" : "" }}
        color={todo.isDone ? "green" : ""}
      >
        {todo.text}
      </Tag>
      <Button
        leftIcon={
          todo.isDone ? <MinusIcon w={3} h={3} /> : <CheckIcon w={3} h={3} />
        }
        colorScheme="green"
        variant="solid"
        onClick={() => markTodo(index)}
      >
        <Text fontSize="sm">{todo.isDone ? "UnDone" : "Done"}</Text>
      </Button>{" "}
      <Button
        leftIcon={<CloseIcon w={3} h={3} />}
        colorScheme="red"
        variant="solid"
        onClick={() => setIsOpen(true)}
      >
        <Text fontSize="sm">Remove</Text>
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove To Do - {todo.text}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  removeTodo(index);
                  setIsOpen(false);
                }}
                ml={3}
              >
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Stack>
  );
}

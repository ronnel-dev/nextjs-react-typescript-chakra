import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { AddIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import React from "react";

interface Props {
  addTodo(value: string): void;
}

export default function FormTodo({ addTodo }: Props) {
  const [value, setValue] = React.useState("");

  const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      toast({
        title: "Empty ToDo!",
        description: "Please enter new to do.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    } else {
      toast({
        title: "ToDo Added!",
        description: "New to do added on the list.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      addTodo(value);
    }

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={["column", "row"]} spacing="5px" p={10}>
        <FormControl w="300px" id="inputTodo">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Add new to do here..."
            borderColor="purple.500"
          />
        </FormControl>
        <Button
          type="submit"
          leftIcon={<AddIcon />}
          colorScheme="purple"
          variant="solid"
        >
          Add
        </Button>
      </Stack>
    </form>
  );
}

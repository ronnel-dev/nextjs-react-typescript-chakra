import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";

export default function TopHeader() {
  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Heading
            onClick={() =>
              window.open("https://www.fullspeedtechnologies.com/")
            }
            size="md"
            fontWeight="semibold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            cursor="pointer"
          >
            FullSpeed Technologies
          </Heading>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Link href="/">
              <Text cursor="pointer">Dashboard</Text>
            </Link>
            <Link href={`/TodoApp`}>
              <Text pl={2} cursor="pointer">
                Todo
              </Text>
            </Link>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <IconButton
            aria-label={"CloseIcon"}
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound={true}
            onClick={toggleColorMode}
          ></IconButton>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={useColorModeValue("gray.100", "gray.600")}
          p={4}
          display={{ md: "none" }}
        >
          <Stack>
            <Flex
              py={2}
              justify={"space-between"}
              align={"left"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <List spacing={4}>
                <Link href="/">
                  <ListItem onClick={onToggle}>Dashboard</ListItem>
                </Link>
                <Link href={`/TodoApp`}>
                  <ListItem onClick={onToggle}>Todo App</ListItem>
                </Link>
              </List>
            </Flex>
          </Stack>
        </Stack>
      </Collapse>
    </Box>
  );
}

import Head from "next/head";
import Layout, { siteTitle } from "../components/common/layout";
import Link from "next/link";
import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container maxW="container.sm">
        <VStack
          align={"center"}
          spacing={{ base: 8 }}
          py={{ base: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Link href={`/TodoApp`}>
              <Box
                border={"1px"}
                borderColor={"cyan.400"}
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
                _hover={{
                  border: "2px",
                  borderColor: "purple.500",
                  boxShadow: "0px 5px 20px 0px  rgb(128 0 128 / 43%)",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt={"Todo App"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src="/images/todo-app.jpg"
                />
              </Box>
            </Link>
          </Flex>
        </VStack>
      </Container>
    </Layout>
  );
}

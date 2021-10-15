import { VStack } from "@chakra-ui/layout";
import React from "react";
import Layout from "../components/common/layout";
import ToDo from "../components/todo/ToDo";
import Head from "next/head";

export default function TodoApp() {
  return (
    <Layout>
      <Head>
        <title>TodoApp</title>
      </Head>
      <VStack p={5}>
        <ToDo />
      </VStack>
    </Layout>
  );
}

import Head from "next/head";
import TopHeader from "./TopHeader";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import Header from "./Header";

export const siteTitle = "Dashboard";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <TopHeader />
      <header>
        {home ? (
          <>
            <Container maxW={"3xl"}>
              <Stack
                as={Box}
                textAlign={"center"}
                spacing={{ base: 8, md: 8 }}
                py={{ base: 10 }}
              >
                <Heading
                  color={isDark ? "cyan.400" : "blue.500"}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                  lineHeight={"110%"}
                >
                  React + Chakra UI + Typescript + NextJS Training
                </Heading>
                <Text color={"gray.500"}>
                  Powered by FullSpeed Technologies.
                </Text>
                <Stack
                  direction={"column"}
                  spacing={3}
                  align={"center"}
                  alignSelf={"center"}
                  position={"relative"}
                >
                  <Button
                    onClick={() =>
                      window.open("https://www.fullspeedtechnologies.com/")
                    }
                    colorScheme={"blue"}
                    bg={"blue.400"}
                    rounded={"full"}
                    px={6}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </>
        ) : (
          <>
            <Header />
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}

import {
  Box,
  Heading,
  Center,
  useColorModeValue,
  Image,
  AspectRatio,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Footer } from "../components/Footer";
import { Socials } from "../components/Socials";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Box
        backgroundColor={useColorModeValue("gray.100", "gray.800")}
        pb={10}
        px={5}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          mb={5}
        >
          <NextLink href="/">
            <Heading
              variant="h2"
              fontWeight="semibold"
              size="lg"
              color={useColorModeValue("blackAlpha.800", "white")}
              mb={3}
              mt={2}
            >
              <ChevronLeftIcon h={10} w={10} /> Olivia Beardsley
            </Heading>
          </NextLink>
          <Box>
            <Socials iconsRight horizontalOnly />
          </Box>
        </Flex>
        <AspectRatio ratio={1.5 / 1} maxW="2xl" margin="auto">
          <Image src="avif/4.avif" alt="olivia" rounded="md" align="50% 25%" />
        </AspectRatio>
        <Heading
          variant="h2"
          fontWeight="semibold"
          size="lg"
          color={useColorModeValue("blackAlpha.800", "white")}
          mt={10}
          mb={3}
          textAlign="center"
        >
          Contact Olivia
        </Heading>
      </Box>
      <Box
        backgroundColor={useColorModeValue("gray.50", "gray.900")}
        py={10}
        px={5}
      >
        <Center>
          <ContactForm />
        </Center>
      </Box>

      <Footer />
    </>
  );
}

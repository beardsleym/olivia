import {
  Box,
  Container,
  ColorModeScript,
  useColorModeValue,
} from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Header />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Box bg={bg} minHeight="100vh">
          <Container maxW="7xl" padding={0} bg={bg}>
            {children}
          </Container>
        </Box>
      </body>
    </html>
  );
}

import React from "react";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaYoutube, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={'#102342'}
      color={'#cf2f60'}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: 'none',
        color: '#102342'
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"#cf2f60"} color={"#102342"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={6}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 <b>PANAVERSE</b> All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"https://twitter.com/Panaverse_edu"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"https://www.youtube.com/@panaverse"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/panaverse"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label="Facebook" href="https://www.facebook.com/groups/panaverse">
            <FaFacebook />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

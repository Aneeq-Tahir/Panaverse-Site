import React, { ReactNode } from "react";
import { Heading, Text, ChakraProps, Button } from "@chakra-ui/react";
import { Jost } from "next/font/google";

interface ChildrenProps extends ChakraProps {
  children: ReactNode;
  href?: string
}

const jost = Jost({
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

const Para = (props: ChildrenProps) => {
  const { children, href, ...rest } = props;
  return (
    <>
      <Text
        m={{ base: "2rem", md: "3rem" }}
        textTransform={"capitalize"}
        color={"white"}
        fontSize={{ base: "1.2rem", md: "1.5rem" }}
        fontWeight={300}
        w={{ base: "20rem", md: "40rem" }}
        lineHeight={1.2}
        {...rest}
      >
        {children}
      </Text>
    </>
  );
};

const H1 = (props: ChildrenProps) => {
  const { children, ...rest } = props;
  return (
    <>
      <Heading
        as={"h2"}
        className={jost.className}
        textAlign={"center"}
        fontSize={{ base: "2rem", md: "2.5rem" }}
        color={"#cb2e5f"}
        fontWeight={600}
        {...rest}
      >
        {children}
      </Heading>
    </>
  );
};

const H2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading
      className={jost.className}
      textAlign={"center"}
      fontSize={{ base: "2rem", md: "3rem" }}
      color={"white"}
      fontWeight={500}
      w={{ base: "15rem", md: "23rem" }}
      pos={"relative"}
      top={"23rem"}
      left={{ base: "4.2rem", md: "6rem" }}
    >
      {children}
    </Heading>
  );
};

const Txt = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      textTransform={"capitalize"}
      color={"white"}
      fontSize={{ base: "1.3rem", md: "2rem" }}
      fontWeight={300}
      p={"1.5rem"}
      w={{ lg: "35%" }}
      lineHeight={1.2}
      mt={{ base: "-7rem", md: 0 }}
    >
      {children}
    </Text>
  );
};

const Btn = (props: ChildrenProps) => {
  const { children, ...rest } = props
  return (
    <Button
      ms={{ base: "2rem", md: "3rem" }}
      as={"a"}
      mt={"2rem"}
      variant={"outline"}
      size={"lg"}
      color={"white"}
      borderRadius={"0"}
      border={"4px solid #cb2e5f"}
      _hover={{
        bg: "#cb2e5f",
        boxShadow: "0px 1px 1rem rgb(207, 47, 96)",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export { H1, H2, Txt, Para, Btn };

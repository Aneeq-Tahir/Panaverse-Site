"use client";
import React from "react";
import { Jost } from "next/font/google";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import PkMap from "@/components/vectors/PkMap";
import { H1, Para, Btn } from "./SiteComponents";

const jost = Jost({
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

const Header = () => {
  return (
    <Box>
      <Box
        mt={{ base: "2rem", md: "3.5rem" }}
        overflow={"hidden"}
        display={"inline-block"}
      >
        <Image
          pos={"relative"}
          right={"3rem"}
          width={175}
          height={185}
          src={"/moon.svg"}
          alt="moon"
        />
      </Box>
      <Box
        pos={"absolute"}
        top={"10rem"}
        right={"4rem"}
        display={{ base: "none", lg: "inline-block" }}
      >
        <PkMap />
      </Box>
      <Box pos={"relative"} bottom={"4rem"} ms={{ base: "1.8rem", md: "4rem" }}>
        <Heading
          as={"h2"}
          lineHeight={"1"}
          fontSize={{ base: "3.3rem", md: "5rem" }}
          color={"#cb2e5f"}
          fontWeight={700}
          className={jost.className}
        >
          PANAVERSE
        </Heading>
        <Heading
          as={"h2"}
          fontSize={{ base: "1.75rem", md: "2.5rem" }}
          color={"white"}
          fontWeight={500}
          className={jost.className}
          mt={"0.5rem"}
        >
          WEB 3.0 & METAVERSE DEVELOPER PROGRAM
        </Heading>
        <Text
          textTransform={"capitalize"}
          color={"white"}
          fontSize={{ base: "1.2rem", md: "1.5rem" }}
          fontWeight={300}
          w={{ base: "20rem", md: "35rem" }}
          lineHeight={1.2}
          mt={"1rem"}
        >
          Panaverse DAO is an organization whose objective is to spread the
          latest cutting-edge technolgies globally. It is a community of Web
          3.0, Metaverse, Cloud and AI developers, designers and trainers.
        </Text>
        <Btn ms={0} href="https://piaic.org">ENROLL NOW</Btn>
      </Box>

      <Box mb={["5rem", 0]}>
        <H1 mt={{ base: "8rem", md: "15rem" }}>
          CERTIFIED WEB 3 & METAVERSE DEVELOPMENT PROGRAM
        </H1>
        <Para>
          a nationwide program in karachi, lahore, islamabad and peshawar.
          getting ready for the next generation and future of the internet -
          join a 13 trillion dollar industry with 5 billion users.
        </Para>
        <Para m={0} ms={{ base: "2rem", md: "3rem" }}>
          Check out the detailed syllabus over here:
        </Para>
        <Btn href="/syllabus">SYLLABUS</Btn>
      </Box>
      
      <Box mb={["5rem", 0]}>
        <H1>EARN WHILE YOU LEARN</H1>
        <Para>
          In this brand-new type of curriculum, students will learn to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program’s beginning. It resembles a cross
          between a corporate venture and an educational project.
        </Para>
      </Box>

    </Box>
  );
};

export default Header;

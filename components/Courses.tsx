import React from "react";
import {gsap} from 'gsap'
import { Box, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { H1, H2, Txt } from "./SiteComponents";

const Courses = () => {
  return (
    <>
      <H1>OUR COURSES</H1>

      <Stack
        justify={"space-around"}
        align={"center"}
        direction={{ base: "column", lg: "row" }}
        overflow={"hidden"}
      >
        <Box mt={{ base: "-7rem", md: 0 }}>
          <H2>WEB 3.0 & METAVERSE</H2>
          <Image
            alt={"xkxdlskxlsckslc"}
            height={768}
            width={550}
            src={"/Prototype(red).svg"}
          />
        </Box>
        <Txt>
          The Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </Txt>
      </Stack>

      <Stack
        justify={"space-around"}
        align={"center"}
        direction={{ base: "column", lg: "row-reverse" }}
        overflow={"hidden"}
      >
        <Box mt={{ base: "-7rem", md: 0 }}>
          <H2>ARTIFICIAL INTELLIGENCE</H2>
          <Image
            alt={"xkxdlskxlsckslc"}
            height={768}
            width={550}
            src={"/Prototype(blue).svg"}
          />
        </Box>
        <Txt>
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models.
        </Txt>
      </Stack>

      <Stack
        justify={"space-around"}
        align={"center"}
        direction={{ base: "column", lg: "row" }}
        overflow={"hidden"}
      >
        <Box mt={{ base: "-7rem", md: 0 }}>
          <H2>CLOUD NATIVE COMPUTING</H2>
          <Image
            alt={"xkxdlskxlsckslc"}
            height={768}
            width={550}
            src={"/Prototype(purple).svg"}
          />
        </Box>
        <Txt>
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and Cloud Development Kit(CDK) for Kubernetes.
        </Txt>
      </Stack>

      <Stack
        justify={"space-around"}
        align={"center"}
        direction={{ base: "column", lg: "row-reverse" }}
        overflow={"hidden"}
      >
        <Box mt={{ base: "-7rem", md: 0 }}>
          <H2>INTERNET OF THINGS</H2>
          <Image
            alt={"xkxdlskxlsckslc"}
            height={768}
            width={550}
            src={"/Prototype(green).svg"}
          />
        </Box>
        <Txt>
          The Ambient Computing and Internet of Things(IoT) Specialization
          focuses on building Smart Homes, Offices, Factories, and Cities using
          Voice computing, Matter and Embedded Devices.
        </Txt>
      </Stack>
    </>
  );
};

export default Courses;

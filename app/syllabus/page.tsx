"use client";
import { H1, Para } from "@/components/SiteComponents";
import React from "react";
import { Jost } from "next/font/google";
import { Box, Heading, Text } from "@chakra-ui/react";

const jost = Jost({
  style: "normal",
  subsets: ["latin"],
  preload: false,
});

const Syllabus = () => {
  return (
    <>
      <H1
        textAlign={{ base: "center", md: "left" }}
        ms={[0, "3rem"]}
        mt={"5rem"}
      >
        PROGRAM OF STUDIES
      </H1>
      <Para w={{ base: "20.5rem", md: "40rem" }}>
        This curriculum is intended for beginners who want to learn software
        development from the ground up. The first two quarters are shared by all
        specialities and are dedicated to studying Object-Oriented Programming
        and cutting-edge Full-Stack Web 2.0 development. It is going to be a
        year-long hybrid programme that includes both onsite and online classes
        and is divided into four quarters of 13 weeks each. The emphasis will be
        on hands-on learning by educating students to produce projects. To
        accommodate everyone, courses will be held primarily on weekends or
        after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid
        teaching format, with core onsite classes complemented by online Zoom
        laboratories and recorded videos.
      </Para>
      <Box ms={{ base: "1rem", md: "3rem" }}>
        <Heading
          as={"h1"}
          lineHeight={"1"}
          fontSize={{ base: "2.3rem", md: "3rem" }}
          color={"#cb2e5f"}
          fontWeight={700}
          className={jost.className}
        >
          DETAILED COURSE SYLLABUS
        </Heading>
        <H1 mt={"1rem"} textAlign={"left"}>
          QUARTER I (CORE)
        </H1>
        <Heading
          as={"h2"}
          fontSize={{ base: "1.75rem", md: "2rem" }}
          color={"white"}
          fontWeight={500}
          className={jost.className}
          mt={"1rem"}
        >
          CS-101: OBJECT-ORIENTED PROGRAMMING USING TYPESCRIPT
        </Heading>
        <Text mt={"0.5rem"} color={"white"} fontSize={"1.3rem"}>
          Duration: 13 weeks
        </Text>
        <Text mt={"0.5rem"} color={"white"} fontSize={"1.3rem"}>
          Course Description:
        </Text>
        <Para mt={{ md: "1rem" }} m={{ base: "1rem", md: 0 }}>
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
        </Para>
        <H1 mt={"1rem"} textAlign={"left"}>
          QUARTER II (CORE)
        </H1>
        <Heading
          as={"h2"}
          fontSize={{ base: "1.75rem", md: "2rem" }}
          color={"white"}
          fontWeight={500}
          className={jost.className}
          mt={"1rem"}
          w={{ md: "60%" }}
        >
          W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs
          using Next.js 13 and Cloud Development Kit (CDK) for Terraform
        </Heading>
        <Text mt={"0.5rem"} color={"white"} fontSize={"1.3rem"}>
          Duration: 13 weeks
        </Text>
        <Text mt={"0.5rem"} color={"white"} fontSize={"1.3rem"}>
          Course Description:
        </Text>
        <Para mt={{ md: "1rem" }} m={{ base: "1rem", md: 0 }}>
          The objective of this quarter is to teach participants to develop
          customer-facing planet-scale Websites, Full-Stack Apps and templates,
          Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
          the participants will be able to develop and deploy web platforms like
          Facebook, Shopify, etc. The technologies covered in this course will
          include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, GraphQL,
          Prisma, CockroachDB Serverless (PostgreSQL Compatible), AWS Serverless
          Technologies, and Cloud Development Kit for Terraform (CDKTF).
        </Para>
        <H1 mt={"1rem"} textAlign={"left"}>
          QUARTER III WEB 3 & METAVERSE (SPECIALIZATION)
        </H1>
        <Heading
          as={"h2"}
          fontSize={{ base: "1.75rem", md: "2rem" }}
          color={"white"}
          fontWeight={500}
          className={jost.className}
          mt={"1rem"}
        >
          W3-351: DEVELOPING SMART CONTRACTS & PLANET-SCALE WEB 3.0 DAPPS
        </Heading>
        <Text mt={"0.5rem"} color={"white"} fontSize={"1.3rem"}>
          Duration: 13 weeks
        </Text>
        <Text mt={"0.5rem"} color={"white"} fontSize={"1.3rem"}>
          Course Description:
        </Text>
        <Para mt={{ md: "1rem" }} m={{ base: "1rem", md: 0 }}>
          In this quarter you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters.
        </Para>
        <H1 mt={"1rem"} textAlign={"left"}>
          QUARTER IV WEB 3 & METAVERSE (SPECIALIZATION)
        </H1>
        <Heading
          as={"h2"}
          fontSize={{ base: "1.75rem", md: "2rem" }}
          color={"white"}
          fontWeight={500}
          className={jost.className}
          mt={"1rem"}
        >
          MV-361: DEVELOPING PLANET-SCALE OPEN VIRTUAL & AUGMENTED METAVERSE
          EXPERIENCES
        </Heading>
        <Text mt={"0.5rem"} color={"white"} fontSize={"1.3rem"}>
          Duration: 13 weeks
        </Text>
        <Text mt={"0.5rem"} color={"white"} fontSize={"1.3rem"}>
          Course Description:
        </Text>
        <Para mt={{ md: "1rem" }} mb={'2rem'} m={0}>
          The Web is the Metaverse. The metaverse requires an infrastructure
          that connects all of the metaverses so that we can travel between them.
          This is only achievable with open web-based metaverses. The internet
          and its browsers are magical. Federated but linked experiences connect
          pages, people, technology, businesses, standards, and nations. It’s unlike
          anything else. The metaverse should replicate the best qualities of
          the web - it should just be the web. We just have to extend online
          responsive design from mobile to desktop to 3D, Augmented Reality, and
          Virtual Reality. This course will teach you how to build the Open Social
          Spatial Web with WebXR and WebGPU technologies.
        </Para>
      </Box>
    </>
  );
};

export default Syllabus;

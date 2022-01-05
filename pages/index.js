import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('blackAlpha.200', 'blackAlpha.900')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Barcelona!
        </Box>

        <Box dissplay={{ md: 'flex' }}></Box>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page.title">
            Oscar Forra Carbonell
          </Heading>
          <p>Digital Lokiman (Developer / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 5 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="blackAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="120px"
            display="inline-block"
            borderRadius="full"
            src="images/profile.png"
            alt="Profile Image"
          ></Image>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Oscar Forra is a full-stack developer based in Barcelona with a
            passion for building digital services/stuff he wants. He has a knack
            for all things launching products from planning and designing all
            the way to solving real-life problems with code. When not online, he
            loves sport.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>}>
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Barcelona, Spain.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked as teaching assistant for first year college students at
            TecnoCampus - Universitat Pompeu Fabra. Introduction to programming
            with C#
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked at Movetia, Barcelona as iOS developer developing frameworks
            and tools using Swift. Also, got experience and fluency in working
            with services in REST, NPM and YARN.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Degree in Videogames production and design at Universitat
            Pompeu Fabra, Mataró
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Wroked at Pervasive-technologies, Barcelona as Software
            developer. Responsive of Web development featuring multiple technologies
            with Fluter , React, Material UI and Node.js. Earned experience with
            services REST, Google Cloud Platform and backend web server.
            Mandante to design web applications architecture and technical
            documentation.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Course Learn React JS, Udemy
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Course Mongodb + NoSQL + API Node JS, Udemy
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Course TDD Node JS, Udemy
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            What makes me happy
          </Heading>
          <Paragraph>Art, Music, Videogames, Boxing</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/forracar" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub}></Icon>}
                >
                  @forracar
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/oscrfc" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter}></Icon>}
                >
                  @oscrfc
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/oscrfc/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram}></Icon>}
                >
                  @oscrfc
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;

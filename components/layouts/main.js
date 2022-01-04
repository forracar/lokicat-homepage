import { Container, Box } from '@chakra-ui/react';
import Navbar from '../navbar';
import Head from 'next/head';
import { Router } from 'next/router';
import NoSsr from '../no-ssr';
import VoxelCat from '../voxel-cat';

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Oscar Forra - Homepage</title>
      </Head>

      <Navbar path={Router.asPath}></Navbar>

      <Container maxW="container.lg.md" pt={14}>
        <NoSsr>
          <VoxelCat></VoxelCat>
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;

import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import postImage from '../public/images/test.jpeg';

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="My Fish workflow" thumbnail={postImage}></GridItem>
          <GridItem title="My home" thumbnail={postImage}></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;

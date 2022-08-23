import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { PostGridItem } from '../components/grid-item';

import codeguidelineImage from '../public/images/codeguidelineImage.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <SimpleGrid  columns={[1, 1, 2]} gap={6}>
        <Section>
          <PostGridItem 
              id="codeguideline" 
              title="Code guideline for Unity" 
              thumbnail={codeguidelineImage}>
            As a programmer, it is very important to follow a coding standard and make sure others can read an easily 
            understand code.
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Posts;

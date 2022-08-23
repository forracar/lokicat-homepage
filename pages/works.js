import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import toytoyImage from '../public/images/toytoy250x90.png';
import circlespaceimage from '../public/images/circlespace250x90.png';
import caesarisMortemImage from '../public/images/ceasaris250x90.png';

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid  columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
              id="circlespace" 
              title="Circle in the Space - Unity" 
              thumbnail={circlespaceimage}>
            Circle in the Space casual mobile game done by myself. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="caesarismortem"
            title="Caesaris Mortem - Unity"
            thumbnail={caesarisMortemImage}
          >
            Game hack and slash with waves done by a group of 5 in Unity3D.
          </WorkGridItem>
        </Section>
          <Section>
          <WorkGridItem id="toytoy" title="Toy toy - Unity" thumbnail={toytoyImage}>
            Third person shooter arcade in 3D done by a group of 5 in Unity3D.
            Awarded for the best project with an excellent technical content
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;

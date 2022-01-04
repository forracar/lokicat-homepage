import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="toytoy">
      <Container>
        <Title>
          Toy toy <Badge>2016</Badge>
        </Title>
        <P>
          {' '}
          Third person shooter arcade in 3D done by a group of 5 in Unity3D.
          Awarded for the best project with an excellent technical content
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://www.youtube.com">
              https://www.youtube.com <ExternalLinkIcon></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity3D, Autodesk</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="/">
              How I've developed Toy toy <ExternalLinkIcon></ExternalLinkIcon>
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/toytoy.png" alt="toytoy"></WorkImage>
      </Container>
    </Layout>
  );
};

export default Work;

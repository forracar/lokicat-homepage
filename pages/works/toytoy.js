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
          Third person shooter arcade in 3D done by a group of 5 in Unity3D.
          Awarded for the best project with an excellent technical content.

          The goal of the player is survive the maximum rounds posible killing enemies and upgrading guns.
        </P>
        <br></br>
        <WorkImage src="/images/toytoy_gameplay01.png" alt="toytoy"></WorkImage>
        <WorkImage src="/images/toytoy_gameplay02.png" alt="toytoy"></WorkImage>
        <WorkImage src="/images/toytoy_gameplay03.png" alt="toytoy"></WorkImage>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://www.youtube.com/watch?v=W1wDrkoCWqI">
              https://www.youtube.com/watch?v=W1wDrkoCWqI <ExternalLinkIcon></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity3D, Autodesk, Adobe</span>
          </ListItem>
        </List>
        <br></br>
      </Container>
    </Layout>
  );
};

export default Work;

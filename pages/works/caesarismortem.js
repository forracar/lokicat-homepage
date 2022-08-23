import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="caesarismortem">
      <Container>
        <Title>
          Caesaris Mortem <Badge>2015</Badge>
        </Title>
        <P>
          Hack and Slash where the player have to suriveve round after round killing enemies in the arena. The last round a final boss
          appears. Once the emperor is gone the game is finished. 
        </P>
        <br></br>
        <WorkImage src="/images/caesaris_gameplay01.png" alt="toytoy"></WorkImage>
        <WorkImage src="/images/caesaris_gameplay02.png" alt="toytoy"></WorkImage>
        <WorkImage src="/images/caesaris_gameplay03.png" alt="toytoy"></WorkImage>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://www.youtube.com/watch?v=9RebV-8zYQY">
              https://www.youtube.com/watch?v=W1wDrkoCWqI <ExternalLinkIcon></ExternalLinkIcon>
            </Link>
            <Meta>GDD</Meta>
            <Link href="https://docs.google.com/document/d/13PpfSr9-gDyCYn9wtE3yZdxWt1xde404/edit?usp=sharing&ouid=115550517918176764883&rtpof=true&sd=true">
            https://docs.google.com/document <ExternalLinkIcon></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity3D, Adobe</span>
          </ListItem>
        </List>
        <br></br>
      </Container>
    </Layout>
  );
};

export default Work;

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="circlespace">
      <Container>
        <Title>
          Circle in the space <Badge>2022</Badge>
        </Title>
        <P>
          iOS/Android casual videogame. Jump and teleport and survive as much as you can. The main goal of this project was learn the process of launching a videogame in mobile stores.
        </P>
        <br></br>
        <WorkImage src="/images/circlespace_gameplay01.jpg" alt="circlespaceimage"></WorkImage>
        <WorkImage src="/images/circlespace_gameplay02.jpg" alt="circlespaceimage"></WorkImage>
        <WorkImage src="/images/circlespace_gameplay03.jpg" alt="circlespaceimage"></WorkImage>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://www.youtube.com/shorts/IiUJqYETqDM">
            https://www.youtube.com/shorts/IiUJqYETqDM <ExternalLinkIcon></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity3D, Inkscape, Adobe</span>
          </ListItem>
        </List>

       
      </Container>
    </Layout>
  );
};

export default Work;

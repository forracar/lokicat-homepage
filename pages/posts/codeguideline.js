import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { WorkImage, Meta, PostTitle } from '../../components/work';
import P from '../../components/paragraph';
import {ParagraphTitle} from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Post = () => {
  return (
    <Layout title="codeguideline">
      <Container>
        <PostTitle>
          Code guide line <Badge>2022</Badge>
        </PostTitle>
        <ParagraphTitle>Introduction</ParagraphTitle><br></br>
        <P>
        As a programmer, it is very important to follow a coding standard and make sure
        others can read and easily understand his code.<br></br><br></br>

        The 3 golden rules to forms style standard:<br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;1. Follow Unity's style in <Link href='https://docs.unity3d.com/ScriptReference/'>Scripting Reference</Link><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;2. Follow Microsoft <Link href='https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions'>C# Coding Conventions</Link><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;3. Minor tweak where we believe that can make the code clearer<br></br><br></br>
        </P>
        <ParagraphTitle>Folder structure</ParagraphTitle><br></br>
        <P>
        When the project gets bigger it's needed to have grouped all the similar files in root folders:<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Art<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Materials<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Fonts<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Animations<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Textures<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ...<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Scripts<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Managers<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Movement<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ...<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Prefabs<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Scenes<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Resources<br></br><br></br>
        </P>
        <ParagraphTitle>File Naming</ParagraphTitle><br></br>
        <P>
            File naming is simple, always use Pascal Case except for images.
        </P>
      </Container>
    </Layout>
  );
};

export default Post;

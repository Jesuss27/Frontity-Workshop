import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "./Link"
import List from "./List"
import Post from "./Post"

const Root = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link)
    return (
      <>
        <Global 
            styles={css`
                *{
                    padding:0;
                    margin:0;
                    box-sizing:border-box;
                }

                html{
                    font-family:sans-serif;
                }
            `}
            />
        <Header>
        <HeaderContent>
        <h1>Frontity Workshop</h1>
        <p>Current URL: {state.router.link}</p>
        <Menu>
            <Link href="/">Home</Link>
            <Link href="/page/2">More Posts</Link>
            <Link href="/category/nature">Nature</Link>
        </Menu>
        </HeaderContent>
        </Header>
        <Main>
            {data.isArchive && <List />}            
            {data.isPost && <Post />}            
                       
        </Main>
      </>
    );
  };

  export default connect(Root)

  const Header = styled.div`
    background:#eee;
    border-width:0 0 8px 0;
    border-style: solid;
    border-color: lightblue;
  `

  const HeaderContent = styled.div`
    max-width: 800px;
    padding:2em 1em;
    margin:auto;
  `
  const Menu = styled.nav`
    display:flex;
    margin-top: 1em;
    & > div {
        margin-right:1em;
    }

  `

  const Main = styled.div`
    max-width: 800px;
    padding:1em;
    margin:auto;

    img{
        max-width:100%;
    }
    h2{
        margin: 0.5em 0
    }
    p{
        line-height:1.25em;
        margin-bottom: 0.75
    }

   `
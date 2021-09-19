import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "@frontity/components/link"
import List from "./List"
import Post from "./Post"
import Contact from "./Contact"

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
            <Head>
              <title>Frontity Workshop</title>

            </Head>
        <Header isPostType={data.isPostType}>
          <HeaderContent>
            <h1>Frontity Workshop</h1>
            <p>Current URL: {state.router.link}</p>
            {state.theme.isMenuOpen ? (
              <>
              <button onClick={actions.theme.closeMenu}>Close</button>
              <Menu>
                <Link link="/">Home</Link>
                <Link link="/contact">Contact</Link>
                <Link link="/category/nature">Nature</Link>
              </Menu>
              </>
             ) : (
               <>
                <button onClick={actions.theme.openMenu}>Open</button>
               </>
             )}
          </HeaderContent>
        </Header>
        <Main>
            {data.isArchive && <List />}            
            {data.isPost && <Post />}  
            {data.isPage && <Contact />}          
                       
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
    border-color: ${ props => props.isPostType ?  "lightseagreen" : "maroon"}
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
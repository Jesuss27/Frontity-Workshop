import React from "react";
import { connect } from "frontity";
import Link from "./Link"
import List from "./List"

const Root = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link)
    return (
      <>
        <h1>Frontity Workshop</h1>
        <p>Current URL: {state.router.link}</p>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/page/2">More Posts</Link>
            <Link href="/category/nature">Nature</Link>
        </nav>
        <hr/>
        <main>
            {data.isArchive && <List />}            
            {data.isPost && <div>This is a Post</div>}            
            {data.taxonomy === "category" && <div>This is a Category</div>}            
        </main>
      </>
    );
  };

  export default connect(Root)
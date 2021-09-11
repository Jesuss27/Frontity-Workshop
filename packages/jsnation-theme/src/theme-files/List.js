import React from 'react'
import { connect, styled  } from "frontity"
import Link from "./Link"


function List({ state }) {

    const data = state.source.get(state.router.link)
    return (
        <Items>
            {data.items.map(item => {
                const post = state.source.post[item.id]
                return (
                    <div key={item.id}>
                        <Link href={item.link}>{post.title.rendered}</Link>
                


                    </div>
                )
            })}
            
        </Items>
    )
}

export default connect(List)

const Items = styled.div`
    & > div{
        margin: 12px 0;
        font-size: 1.2em;
    }
    
`
import React from 'react'
import { connect, styled  } from "frontity"
import Link from "@frontity/components/link"


function List({ state, actions }) {

    const data = state.source.get(state.router.link)
    return (
        <Items>
            {data.items.map(item => {
                const post = state.source.post[item.id]
                console.log(post)
                return (
                    
                    <div key={item.id}>
                        <Link link={post.link}>{post.title.rendered}</Link>
                    </div>
                    
                )
            })}
            <div>
                { data.previous ? 
                <button onClick={() => actions.router.set(data.previous)}
                    onMouseEnter={() => {
                        actions.source.fetch(data.previous)}} //prefetch on hover
                    >Previous</button> :
                null }

                {data.next ? 
                <button onClick={() => actions.router.set(data.next)}
                        onMouseEnter={() => {
                            actions.source.fetch(data.next)}} //prefetch on hover
                    >Next</button> : 
                null}
            </div>
            
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
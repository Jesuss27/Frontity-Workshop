import React from 'react'
import { connect  } from "frontity"
import Link from "./Link"


function List({ state }) {

    const data = state.source.get(state.router.link)
    return (
        <div>
            {data.items.map(item => {
                const post = state.source.post[item.id]
                return (
                    <div key={item.id}>
                        <Link href={item.link}>{post.title.rendered}</Link>
                


                    </div>
                )
            })}
            
        </div>
    )
}

export default connect(List)
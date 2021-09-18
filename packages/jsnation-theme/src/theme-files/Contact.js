import { connect } from 'frontity'
import React from 'react'

function Contact({ state, actions, libraries}) {
    const data = state.source.get(state.router.link);
    const contactForm = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component
    
    return (
        <div>
            <Html2React html={contactForm.content.rendered} />
            
        </div>
    )
}

export default connect(Contact)
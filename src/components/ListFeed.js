import React from "react"
import ItemFeed from './ItemFeed'
import { Feed } from 'semantic-ui-react'

function ListFeed(props) {
    var items = props.items
    return <Feed style={{maxHeight: '520px', overflow:'auto', willChange: 'transform' }}> {
        items.map(item => { 
            return <ItemFeed item={item}/>
        })
    }
    </Feed>
}

export default ListFeed
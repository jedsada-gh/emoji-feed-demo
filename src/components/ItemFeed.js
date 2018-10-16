import React from "react"
import { Feed } from 'semantic-ui-react'

function ItemFeed(props) {
    var item = props.item
    return(
        <div style={{ willChange: 'transform' }}>
            <Feed.Event>
                <div class="label">
                    <img style={{ width:'35px', height: '35px' }} class="ui avatar image" src={item.image_profile}/>
                </div>
                <Feed.Content>
                    <Feed.Summary><a>{item.displayName}</a></Feed.Summary>
                    <Feed.Extra text>{`${item.message} ${item.emoji}`}</Feed.Extra>
                </Feed.Content>
            </Feed.Event>
        </div>
    )
} 

export default ItemFeed
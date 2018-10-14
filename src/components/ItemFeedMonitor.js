import React from "react"
import { Feed, Card } from 'semantic-ui-react'

function ItemFeedMonitor(props) {
    var item = props.item
    return(
        <div>
            <Card style={{ width:'100%', height: '100%' }}>
                <Feed.Event style={{ margin: '80px' }}>
                    <div class="label">
                        <img style={{ width:'124px', height: '124px', marginRight: '30px' }} class="ui avatar image" src={item.image_profile}/>
                    </div>
                    <Feed.Content>
                        <Feed.Summary><a style={{ fontSize:'50px' }}>{item.displayName}</a></Feed.Summary>
                        <Feed.Extra text style={{ fontSize: '40px', marginTop: '24px'}}>{`${item.message} ${item.emoji}`}</Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            </Card>
        </div>
    )
} 

export default ItemFeedMonitor
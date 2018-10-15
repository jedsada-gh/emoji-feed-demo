import React, { Component } from 'react'
import ListFeed from '../components/ListFeed'
import { database, auth } from '../firebase'
import randomWords  from 'random-words'
import randomEmoji from '../randomEmoji'
import { Button } from 'semantic-ui-react'
import _ from 'lodash'

class Feed extends Component {

    state = {
        newItem: false,
        user: null,
        messages : [],
        isLoading: false,
        isClickAble: true,
    }

    componentWillMount() {
        auth.onAuthStateChanged((user) => {
            this.setState({ user })
        })

        const message = database.ref('messages')
        message.on('child_added', snapshot => {
            if (!this.state.newItem) return
            this.onDataUpdate(snapshot.val())
        })
        message.once('value', snapshot => {
            const messagesVal = snapshot.val()
            const messages = _(messagesVal).keys()
                .map(messageKey => {
                    const cloned = _.clone(messagesVal[messageKey])
                    cloned.key = messageKey
                    return cloned
                }).value()
            this.setState({ messages : messages.reverse(), newItem: true })
        })
    }

    onDataUpdate(values) {
        const messagesVal = values
        const newItems = this.state.messages
        newItems.splice(0, 0, messagesVal)
        this.setState({messages: newItems})
    }

    randomEmotion = () => {
        if (!this.state.isClickAble) return
        this.setState({ isLoading: true })
        database.ref('/messages').push({
            message: randomWords(),
            emoji: randomEmoji(),
            image_profile: `${this.state.user.photoURL}?height=500`,
            displayName: this.state.user.displayName
        }).then(() => {
            this.setState({ isLoading: false, isClickAble: false })
            setTimeout(() => {
                this.setState({ isClickAble: true })
            }, 10000)
        })
    }

    render() {
        return (
            <div class="ui feed" style={{ marginTop: '16px', marginBottom: '16px' }}>
                <ListFeed items={this.state.messages}/>
                <div style={{ textAlign:'center' }}>
                    <Button color='pink' 
                        loading={this.state.isLoading} 
                        disabled={!this.state.isClickAble}
                        onClick={this.randomEmotion}>
                            <i class="heart icon"></i> Give Happiness
                    </Button>
                </div>
            </div>
        )
    }
}

export default Feed
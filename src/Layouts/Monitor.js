import React, { Component } from 'react'
import ItemFeedMonitor from '../components/ItemFeedMonitor'
import { database } from '../firebase'
import _ from 'lodash'
import '../App.css'

class Monitor extends Component {

    state = {
        newItem: false,
        message: null
    }

    componentWillMount() {
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
            this.setState({ message : messages[messages.length-1], newItem: true })
        })
    }

    onDataUpdate(values) {
        const messagesVal = values
        this.setState({message: messagesVal})
    }

    render() {
        if (this.state.message != null) {
            return (
                <div className='Monitor'><ItemFeedMonitor item={this.state.message}/></div>
            )
        } else {
            return <div className='App'>Loading..</div>
        }
    }
}

export default Monitor
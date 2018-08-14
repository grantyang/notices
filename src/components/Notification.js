import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../styles/Notification.css'

export default class Notification extends Component {
    static propTypes = {
      notificationType: PropTypes.string,
      notificationMessage: PropTypes.string,
      showNotification: PropTypes.bool,
      dismissNotification: PropTypes.func.isRequired,
    }

    render() {
        const { notificationType, notificationMessage, showNotification, dismissNotification } = this.props
        let notificationClassName = `notification-${notificationType}`
        return showNotification ? (
            <div className={notificationClassName}>
                <p>{notificationMessage} </p>
                <button onClick={dismissNotification}>Dismiss</button>
            </div>
        ) : null
    }
}
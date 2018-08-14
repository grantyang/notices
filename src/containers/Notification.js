import { connect } from 'react-redux'
import Notification from '../components/Notification'
import { dismissNotification } from '../actions/notification'

const mapStateToProps = state => ({
    notificationType: state.notification.notificationType,
    notificationMessage: state.notification.notificationMessage,
    showNotification: state.notification.showNotification
})

export default connect(mapStateToProps, { dismissNotification })(Notification)
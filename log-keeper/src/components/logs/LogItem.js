import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteLogs, setCurrent } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize'

const LogItem = ({ log, deleteLogs, setCurrent }) => {

    const deleteBtn = () => {
        deleteLogs(log.id)
        M.toast({ html: "Log Deleted"})
    }
    
    return (
        <li className=" collection-item">
            <div>
                <a href='#edit-log-modal' className={` modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={(e) => { e.preventDefault(); setCurrent(log)}}>
                    { log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID: #{log.id}</span>{' '}Last Updated by: {' '}<span className="black-text">{ log.tech }</span> on <Moment format="DD-MM-YYYY, hh:mm:ss a"></Moment>
                </span>
                <a href="#!" onClick={deleteBtn} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
}

export default connect(null, {deleteLogs, setCurrent})(LogItem)

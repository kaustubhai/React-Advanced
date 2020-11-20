import React, { useEffect } from 'react'
import LogItem from './LogItem'
import { connect } from 'react-redux'
import Preloader from '../layout/Preloader'
import {getLogs} from '../../actions/logActions' 

const Logs = ({ logs: { logs, loading}, getLogs }) => {

    useEffect(() => {
        getLogs()
    // eslint-disable-next-line
    }, [])

    if (loading || logs === null)
        return <Preloader/>

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            { !loading && logs.length === 0 ? <p className="center">No Data to Show</p> : logs.map((log) => <LogItem key={log.id} log={log} />)}
        </ul>
    )
}

const mapStateToProps = state => ({
    logs: state.log
})

export default connect(mapStateToProps, {getLogs})(Logs)

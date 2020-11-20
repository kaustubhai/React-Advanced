import React, { useState, useEffect } from 'react'
import { updateLogs } from '../../actions/logActions'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = ({current, updateLogs}) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {

        if (current) {
            setMessage(current.message)
            setTech(current.tech)
            setAttention(current.attention)
        }

    }, [current])

    const onSubmit = () => {
        if (message.trim() === '' || tech.trim() === '')
            M.toast({ html: 'Please enter a message and a technician' })
        else {
            
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            console.log(current.id)

            updateLogs(newLog, current.id)

            setMessage('')
            setTech('')
            setAttention(false)
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4 style={{marginBottom: '50px'}}>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input name="editMessage" value={message} onChange={(e) => setMessage(e.target.value)} id="editMessage" type="text" className="validate" />
                        <label htmlFor="editMessage">Log Message</label>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={(e) => setTech(e.target.value)}>
                            <option value="" disabled defaultValue >Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Pam Beesley">Pam Beesley</option>
                            <option value="Ellen DeGenres">Ellen DeGenres</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                            <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={(e) => setAttention(!attention)} />
                            <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    padding: '5%'
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, {updateLogs})(EditLogModal)

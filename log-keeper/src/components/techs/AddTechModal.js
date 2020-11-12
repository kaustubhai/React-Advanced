import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const onSubmit = () => {
        if (firstname.trim() === '' || lastname.trim() === '')
            M.toast({ html: 'Please enter the first and last name of technician' })
        else {
            setFirstname('')
            setLastname('')
        }
    }

    return (
        <div id="add-tech-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4 style={{marginBottom: '50px'}}>Add a new Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="firstname" type="text" className="validate" />
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="input-field">
                        <input name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastname" type="text" className="validate" />
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue blue btn">Add Tech</a>
            </div>
        </div>
    )
}

const modalStyle = {
    padding: '5%'
}

export default AddTechModal

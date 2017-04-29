import React from 'react';

export default function studentAdd (props) {

  const changeFirstName = e => {
    props.setFirstname(e.target.value);
  };

  const changeMiddleName = e => {
    props.setMiddlename(e.target.value);
  };

  const changeLastName = e => {
    props.setLastName(e.target.value);
  };

  const changeEmail = e => {
    props.setEmail(e.target.value);
  };

  const campuses = props.campuses;
  const campusId = props.campusId;
  const changeCampus = e => {
    props.setCampus(e.target.value);
  };

  const handleSubmit = props.handleSubmit;

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register New Student</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">First Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                placeholder="Please enter firstname"
                onChange={changeFirstName}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Middle Name(s)</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                placeholder="Please enter middlename"
                onChange={changeMiddleName}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Last Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                placeholder="Please enter lastname"
                onChange={changeLastName}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Email</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                placeholder="Please enter a valid email"
                onChange={changeEmail}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Campus</label>
            <div className="col-xs-2">
              <select
                className="form-control"
                name="campus"
                onChange={changeCampus}
                value={campusId}
                required >
                <option>Choose campus</option>
                {
                  campuses && campuses.map(campus => (
                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-10">
              <button
                type="submit"
                className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}


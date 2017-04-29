import React from 'react';

export default function campusAdd (props) {

  const changeName = e => {
    props.setName(e.target.value);
  };

  const changeUrl = e => {
    props.setImageUrl(e.target.value);
  };

  const handleSubmit = props.handleSubmit;

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create New Campus</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Campus Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                placeholder="Please enter campus name"
                onChange={changeName}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Campus Image</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                placeholder="Please enter image url"
                onChange={changeUrl}/>
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


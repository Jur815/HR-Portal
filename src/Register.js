const Register = () => {

  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                       <label>User Name <span className="errmsg">*</span></label>
                       <input className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                       <label>Password <span className="errmsg">*</span></label>
                       <input type="password" className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                       <label>Full Name <span className="errmsg">*</span></label>
                       <input className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                       <label>Email <span className="errmsg">*</span></label>
                       <input className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                       <label>Phone Number <span className="errmsg">*</span></label>
                       <input className="form-control"></input>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                       <label>Country <span className="errmsg">*</span></label>
                       <select className="form-control">
                          <option value="ssd">South Sudan</option>
                          <option value="kenya">Kenya</option>
                          <option value="uganda">Uganda</option>
                          <option value="rwanda">Rwanda</option>
                          <option value="burundi">Burundi</option>
                          <option value="tanzania">Tanzania</option>
                       </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                    <label>Address</label>
                         <textarea className="form-control"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                       <label>Gender</label>
                       <br></br>
                       <input type="radio" name="gender" value="male" className="app-check"></input>
                       <label>Male</label>
                       <input type="radio" name="gender" value="female" className="app-check"></input>
                       <label>Female</label>
                    </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <a className="btn btn-danger">Back</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

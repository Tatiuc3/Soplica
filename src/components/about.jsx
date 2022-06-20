export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Nuestra historia</h2>
        </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/soplica/logo_soplica.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>1891</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3> */}
                <div className="list-style">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

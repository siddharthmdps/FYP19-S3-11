import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";
import "./index.css";

class ClassicFormPage extends React.Component {
  render() {
    return (
      <div id="classicformpage">

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Welcome to Pegasus@SIM
                  </h1>
                  <hr className="hr-light" />
                  <h2 className="mb-4">
                    Admin Management Portal
                  </h2>
                </MDBAnimation>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default ClassicFormPage;
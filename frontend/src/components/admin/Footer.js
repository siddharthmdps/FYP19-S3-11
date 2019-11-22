import React from "react";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="success-color" className="font-small pt-4 mt-4" style={{ margin: '0!important' }}>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Pegasus@SIM
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
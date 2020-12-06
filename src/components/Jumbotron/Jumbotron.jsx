import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";
import "./style.css";

const Jumbotron = () => {
  return (
    <MDBContainer className="mw-100">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-left py-5 px-4 my-5 bg">
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold"> <span className="letter">E</span>mployee <span className="letter">D</span>irectory</MDBCardTitle>
                <p className="mx-5 mb-5">
                    <span className="letter">A</span> centralized place to view employee information.
                </p>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Jumbotron;
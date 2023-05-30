import React, { useRef, useState, useEffect } from "react";
import "./LabInput.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { calculateBloodTestResult } from "../../api/bloodTestUtils";
import { getUserData } from "../../api/getUserData";

const withAuthCheck = (WrappedComponent) => {
  return () => {
    const alertShownRef = useRef(false);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
      return (
        <div className="d-flex justify-content-center loading-margin">
          <div
            className="spinner-border"
            id="placeholder-loading"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

    if (!user && !alertShownRef.current) {
      alertShownRef.current = true;
      alert("You need to log in to access this page.");
      navigate("/login");
      return null;
    }

    const userData = getUserData(user.uid);
    return <WrappedComponent userData={userData} />;
  };
};

function Labinput() {
  // const [user] = useAuthState(auth);
  // if (user) {
  //   getUserData(user.uid);
  // }
  const params = useParams();
  const navigate = useNavigate();
  const [labInput, setLabInput] = useState({
    wbc: "",
    mcv: "",
    rbc: "",
    mch: "",
    plt: "",
    mchc: "",
    hgb: "",
    dwbc: "",
    hct: "",
    rbcdw: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLabInput({ ...labInput, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    const isValid = validateInputs();

    if (isValid) {
      // Proceed with submitting the form
      const labInputCollection = collection(db, "labInput");
      const data = {
        createdBy: auth.currentUser.uid,
        createdAt: new Date(),
        wbc: parseFloat(labInput.wbc),
        mcv: parseFloat(labInput.mcv),
        rbc: parseFloat(labInput.rbc),
        mch: parseFloat(labInput.mch),
        plt: parseFloat(labInput.plt),
        mchc: parseFloat(labInput.mchc),
        hgb: parseFloat(labInput.hgb),
        dwbc: parseFloat(labInput.dwbc),
        hct: parseFloat(labInput.hct),
        rbcdw: parseFloat(labInput.rbcdw),
      };

      const result = calculateBloodTestResult(data);
      console.log(result);

      addDoc(labInputCollection, data)
        .then((e) => {
          console.log("Document successfully written!");
          navigate(`/laboutput/${e.id}`);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } else {
      // Show error or validation message to the user
      alert("Please enter valid numbers in all fields.");
    }
  };

  const validateInputs = () => {
    for (const key in labInput) {
      const value = labInput[key];
      if (isNaN(parseFloat(value))) {
        return false; // Invalid input, not a number
      }
    }
    return true; // All inputs are valid numbers
  };

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setShowComponent(true);
  }, []);

  return (
    <div
      className={`container-fluid bodylabinput ${showComponent ? "fade-in" : ""
        }`}
    >
      <div className="row">
        <div className="col-4 col-md-3 offset-1">
          <div id="maaargin">
            <button className="prevbuttons">Previous Result</button>
          </div>
        </div>
      </div>

      <div className="container square mt-5">
        <div id="paddingbox">
          <h1 className="texthead">LABORATORY TEST</h1>
          <h2 className="texthead">Complete Blood Count</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="formcontainer">
            <div className="row">
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="wbc"
                  value={labInput.wbc}
                  placeholder="WBC"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> White Blood
                  Cell Count
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="mcv"
                  value={labInput.mcv}
                  placeholder="MCV"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Mean
                  Corpuscular Volume
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="rbc"
                  value={labInput.rbc}
                  placeholder="RBC"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Red Blood
                  Cell Count
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="mch"
                  value={labInput.mch}
                  placeholder="MCH"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Mean
                  Corpuscular Hemoglobin
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="plt"
                  value={labInput.plt}
                  placeholder="PLT"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Platelet
                  Count
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="mchc"
                  value={labInput.mchc}
                  placeholder="MCHC"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Mean
                  Corpuscular Hemo Concentration
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="hgb"
                  value={labInput.hgb}
                  placeholder="HGB"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Hemoglobin
                  Level
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="dwbc"
                  value={labInput.dwbc}
                  placeholder="DWBC"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Differential
                  White Blood Cell Count
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="hct"
                  value={labInput.hct}
                  placeholder="HCT"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Hematocrit
                  Level
                </p>
              </div>
              <div className="col-6 col-md-3 margincol">
                <input
                  type="number"
                  step="any"
                  name="rbcdw"
                  value={labInput.rbcdw}
                  placeholder="RBCDW"
                  className="form-control border border-0"
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="col-6 col-md-3 mt-2">
                <p className="inlinename">
                  {" "}
                  <BsFillCheckCircleFill className="buttonCheck" /> Red Blood
                  Cell Distribution Width
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <button type="submit" value="Submit" id="submit-btn">Submit</button>
          </div>
        </form>
      </div>

      <div id="buffer">.</div>
    </div >
  );
}

export default withAuthCheck(Labinput);
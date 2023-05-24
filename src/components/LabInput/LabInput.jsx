import React, { useRef, useState } from 'react';
import './LabInput.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase';

const withAuthCheck = (WrappedComponent) => {
    return () => {
        const alertShownRef = useRef(false);
        const [user, loading] = useAuthState(auth);
        const navigate = useNavigate();

        if (loading) {
            return (
                <div className="d-flex justify-content-center loading-margin">
                    <div className="spinner-border" id="placeholder-loading" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        }

        if (!user && !alertShownRef.current) {
            alertShownRef.current = true;
            alert('You need to log in to access this page.');
            navigate('/login');
            return null;
        }
        return <WrappedComponent />;
    };
};

function Labinput() {
    const navigate = useNavigate();
    const [labInput, setLabInput] = useState({
        wbc: '',
        mcv: '',
        rbc: '',
        mch: '',
        plt: '',
        mchc: '',
        hgb: '',
        dwbc: '',
        hct: '',
        rbcdw: '',
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
            const labInputCollection = collection(db, 'labInput');
            const data = {
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

            addDoc(labInputCollection, data)
                .then(() => {
                    console.log("Document successfully written!");
                    navigate('/LabOutput');
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


    return (
        <div className="bodylabinput">
            <div className="button-container">
                <button className="prevbutton">Previous Result</button>
                <div className="divinputtime">
                    <p className="textinputtime">Test Date & Time </p>
                    <div className="innerdivinputtime">
                        <input type="datetime-local" className="inputtime" name="datetime" />
                    </div>
                </div>
            </div>
            <div className="tableinput">
                <div className="square">
                    <div className="inputnum">
                        <div className="labinputtext">
                            <h1 className="laboratorytest">LABORATORY TEST</h1>
                            <h2 className="completebloodcount">Complete Blood Count</h2>
                            <div className="formcontainer">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid">
                                        <div className="form-input">
                                            <input type="number" step="any" name="wbc" value={labInput.wbc} placeholder="WBC" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" /> White Blood Cell Count</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="mcv" value={labInput.mcv} placeholder="MCV" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" />  Mean Corpuscular Volume</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="rbc" value={labInput.rbc} placeholder="RBC" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" /> Red Blood Cell Count</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="mch" value={labInput.mch} placeholder="MCH" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" /> Red Blood Cell Count</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="plt" value={labInput.plt} placeholder="PLT" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" /> Platelete Count</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="mchc" value={labInput.mchc} placeholder="MCHC" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" /> Mean Corpuscular Hemo Concentration</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="hgb" value={labInput.hgb} placeholder="HGB" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" /> Hemoglobin Level</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="dwbc" value={labInput.dwbc} placeholder="DWBC" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" />Differential White Blood Cell Coun</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="hct" value={labInput.hct} placeholder="HCT" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" /> Hematocrit Level</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="rbcdw" value={labInput.rbcdw} placeholder="RBSDW" className="inputfield" onChange={handleInputChange} required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck" /> Red Blood Cell Distribition Width</p>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="submit" value="Submit" className="submit"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default withAuthCheck(Labinput);


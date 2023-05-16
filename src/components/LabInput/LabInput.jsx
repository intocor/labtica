import React from 'react';
import './LabInput.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


function Labinput(){
    const navigate = useNavigate();
    return (
        <div className="bodylabinput">
            <div className="button-container">
                <button className="prevbutton">Previous Result</button>
                <div className="divinputtime">
                    <p className="textinputtime">Test Date & Time </p> <input type="datetime-local" className="inputtime" name="datetime"/>
                </div>
            </div>
            <div className="tableinput">
                <div class="square">
                    <div className="inputnum">
                        <div className="labinputtext">
                            <h1 className="laboratorytest">LABORATORY TEST</h1>
                            <h2 className="completebloodcount">Complete Blood Count</h2>
                            <div className="formcontainer">
                                <form>
                                    <div className="grid">
                                        <div className="form-input">
                                            <input type="number" step="any" name="wbc" placeholder="WBC" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/> White Blood Cell Count</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="mcv" placeholder="MCV" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/>  Mean Corpuscular Volume</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="rbc" placeholder="RBC" className="inputfield" equired></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/> Red Blood Cell Count</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="mch" placeholder="MCH" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/> Red Blood Cell Count</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="plt" placeholder="PLT" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/> Platelete Count</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="mchc" placeholder="MCHC" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/> Mean Corpuscular Hemoglobin Concentration</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="hgb" placeholder="HGB" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/> Hemoglobin Level</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="dwbc" placeholder="DWBC" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/>Differential White Blood Cell Coun</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="hct" placeholder="HCT" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/> Hematocrit Level</p>
                                        </div>
                                        <div className="form-input">
                                            <input type="number" step="any" name="rbcdw" placeholder="RBSDW" className="inputfield" required></input>
                                            <p className="inlinename"> <BsFillCheckCircleFill className="buttonCheck"/> Red Blood Cell Distribition Width</p>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                    <div>
                                        <input type="submit" value="Submit" className="submit" onMouseDown={()=>{navigate('/LabOutput'); }}></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Labinput;


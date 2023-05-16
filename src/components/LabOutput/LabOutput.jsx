import React from 'react';
import './LabOutput.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {BsDot} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Laboutput(){
    const navigate = useNavigate();
    return (
        <div className="bodylaboutput">
            <div className="button-container">
                <button className="prevbutton">Previous Result</button>
                <div className="divinputtime">
                    <p className="textinputtime">Test Date & Time </p> 
                    <div className="timeanddate">
                        <p>May 9, 2021 11:11 PM</p>
                    </div>
                </div>
            </div>

            <div className="tableoutputcontainer">
                <div class="square-after">
                    <div className="laboutputtext">
                        <h1 className="laboratorytest-after">LABORATORY TEST</h1>
                        <h2 className="completebloodcount-after">Complete Blood Count</h2>
                        <table className="outouttable">
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>White Blood Cell Count (WBC)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Red Blood Cell Count (RBC)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Platelet Count (PLT)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Hemoglobin Level (HGB)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Hematocrit Level (HCT)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Mean Corpuscular Volume (MCV)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Mean Corpuscular Hemoglobin (MCH)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Mean Corpuscular Hemoglobin Concentration (MCHD)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Differential White Blood Cell Count (DWBC)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Red Blood Cell Distribution Width (RBCDW)</td>
                            <td className="cellspacing column2"><BsDot/> Normal</td>
                        </tr>
                        </table>
                        <div>
                            <input type="testagain" value="Test Again" className="testagain"onMouseDown={()=>{navigate('/LabInput'); }}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Laboutput;


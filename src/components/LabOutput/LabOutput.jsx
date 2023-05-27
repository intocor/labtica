import React from 'react';
import './LabOutput.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {BsDot} from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

function Laboutput(){
    const location = useLocation();
    const navigate = useNavigate();
    const {result, createdAt} = location.state;
    return (
        <div className="bodylaboutput">
            <div className="button-container">
                <button className="prevbutton">Previous Result</button>
                <div className="divinputtime">
                    <p className="textinputtime">Test Date & Time </p> 
                    <div className="timeanddate">
                        <p>{createdAt.toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <div className="tableoutputcontainer">
                <div class="square-after">
                    <div className="laboutputtext">
                    <div>
                            <input type="testagain" value="Run Another Test" className="testagain"onMouseDown={()=>{navigate('/LabInput'); }}></input>
                        </div>
                        <h1 className="laboratorytest-after">LABORATORY TEST</h1>
                        <h2 className="completebloodcount-after">Complete Blood Count</h2>
                        <table className="outouttable">
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>White Blood Cell Count (WBC)</td>
                            <td className="cellspacing column2"><BsDot/> {result.wbc} </td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Red Blood Cell Count (RBC)</td>
                            <td className="cellspacing column2"><BsDot/> {result.rbc}</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Platelet Count (PLT)</td>
                            <td className="cellspacing column2"><BsDot/> {result.plt}</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Hemoglobin Level (HGB)</td>
                            <td className="cellspacing column2"><BsDot/> {result.hgb}</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Hematocrit Level (HCT)</td>
                            <td className="cellspacing column2"><BsDot/> {result.hct}</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Mean Corpuscular Volume (MCV)</td>
                            <td className="cellspacing column2"><BsDot/> {result.mcv}</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Mean Corpuscular Hemoglobin (MCH)</td>
                            <td className="cellspacing column2"><BsDot/> {result.mch}</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Mean Corpuscular Hemoglobin Concentration (MCHD)</td>
                            <td className="cellspacing column2"><BsDot/> {result.mchc}</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Differential White Blood Cell Count (DWBC)</td>
                            <td className="cellspacing column2"><BsDot/> {result.dwbc}</td>
                        </tr>
                        <tr>
                            <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck"/>Red Blood Cell Distribution Width (RBCDW)</td>
                            <td className="cellspacing column2"><BsDot/> {result.rbcdw}</td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Laboutput;


import React, { useEffect, useState } from 'react';
import './LabOutput.css';
import { BsFillCheckCircleFill, BsDot } from 'react-icons/bs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from "../../Firebase";
import { calculateBloodTestResult } from '../../api/bloodTestUtils';

function Laboutput() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [isLoading, setIsLoading] = useState(true);
    const [isClicked, setClick] = useState(false);
    const [resultData, setresultData] = useState([]);
    const [mainResult, setMainResult] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const filteredResult = collection(db, 'labInput');
            const q = await getDocs(filteredResult);
            const newData = q.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }
            ));
            const result = newData.filter((e) => {
                return e.createdBy === user.uid;
            })
            setresultData(result);
            const mResult = newData.filter((e) => {
                return e.id === params.resultid;
            })
            const res = { ...calculateBloodTestResult(mResult[0]) };
            const { wbc, mcv, rbc, mch, plt, mchc, hgb, dwbc, hct, rbcdw, createdAt } = res;
            const dte = createdAt.toDate().toLocaleString();
            setMainResult({ wbc, mcv, rbc, mch, plt, mchc, hgb, dwbc, hct, rbcdw, createdDate: dte });
            setIsLoading(false);
        }

        user ? fetchData() : null;
        console.log('GUMANAAA', resultData);
    }, [user, params.resultid]);


    if (isLoading) {
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

    return (
        mainResult && resultData && !isLoading ?
            <div className="container-fluid bodylaboutput fade-in">
                <div className="button-container">
                    <button className="prevbutton" onMouseDown={(e) => { setClick(!isClicked) }}>Previous Result</button>
                    <div className={`${isClicked ? "plsshow" : "plshide"} dropdown`}>
                        {resultData.map((data) => (
                            <div className="dropdown-content" key={data.id} onMouseDown={() => navigate(`/laboutput/${data.id}`)}>
                                <p className="dropdown-text">{data.createdAt.toDate().toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                    <div className="divinputtime">
                        <p className="textinputtime">Test Date & Time </p>
                        <div className="timeanddate">
                            <p>{mainResult.createdDate}</p>
                        </div>
                    </div>
                </div>

                <div className="tableoutputcontainer">
                    <div className="square-after">
                        <div className="laboutputtext">
                            <div>
                                <input type="testagain" defaultValue="Run Another Test" className="testagain" onMouseDown={() => { navigate('/labinput'); }}></input>
                            </div>
                            <h1 className="laboratorytest-after">LABORATORY TEST</h1>
                            <h2 className="completebloodcount-after">Complete Blood Count</h2>
                            <table className="outouttable">
                                <tbody>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />White Blood Cell Count (WBC)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.wbc} </td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Red Blood Cell Count (RBC)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.rbc}</td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Platelet Count (PLT)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.plt}</td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Hemoglobin Level (HGB)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.hgb}</td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Hematocrit Level (HCT)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.hct}</td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Mean Corpuscular Volume (MCV)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.mcv}</td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Mean Corpuscular Hemoglobin (MCH)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.mch}</td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Mean Corpuscular Hemoglobin Concentration (MCHD)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.mchc}</td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Differential White Blood Cell Count (DWBC)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.dwbc}</td>
                                    </tr>
                                    <tr>
                                        <td className="cellspacing column1"><BsFillCheckCircleFill className="buttonCheck" />Red Blood Cell Distribution Width (RBCDW)</td>
                                        <td className="cellspacing column2"><BsDot /> {mainResult.rbcdw}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            : null
    );
}

export default Laboutput;

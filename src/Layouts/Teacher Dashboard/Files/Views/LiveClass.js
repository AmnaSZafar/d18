import React, {useRef } from 'react'
import {useHistory, useLocation, useParams} from "react-router-dom";

function LiveClass() {
  let {id} = useParams()
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const handleOnClick = (e) => {
      e.preventDefault()
      history.push({
        pathname:`/teacher/conference-call/${id}`,
        state: location.state})
    }

    return (
        <div>
               <>
      <div>
       {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
  {/* Page Heading */}
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Live Class</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
      <h6 className="m-0 font-weight-bold text-center text-white"> Click to join/host a Live Class</h6>
    </div>
    <div className="card-body">
    <center>
                                <div className="containerTestimonialButton mt-3 mb-3">
                                  <button  type="submit" className="btnTestimonialButton play-pause buttonTestimonialButton" style = {{fontWeight : "bold" }} onClick={(e) => handleOnClick(e)}>
                                    Join/Host a Meeting
                                  </button>
                                </div>
                                </center>
    </div>
  </div>
</div>

{/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-white">
<div className="containerBlackDashboard my-auto">
  <div className="copyright text-center my-auto">
    <span></span>
  </div>
</div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
    </>
        </div>
    )
}

export default LiveClass

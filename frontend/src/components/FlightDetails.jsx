import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FlightDetails.css'; // Import your custom CSS file

function FlightDetails() {
  const [flightDetailsData, setFlightDetailsData] = useState([]);
  const location = useLocation(); // Changed `state` to `location` for clarity

  useEffect(() => {
    if (location.state?.data) {
      setFlightDetailsData(location.state.data);
    }
  }, [location.state?.data]);

  console.log(flightDetailsData)
  return (
    <>
      <div className="container-fluid bg-body-tertiary">
        <div className="row bg-body-tertiary">
          <div className="col-lg-2 p-2">
            <h1 className="">IndiGo</h1>
          </div>
          <div className="col-lg-8 p-2">
            <h1 className="fs-3 p-2 text-center">{flightDetailsData[0]?.from}-{flightDetailsData[1]?.to}</h1>
          </div>
          <div className="col-lg-2 p-3">
            <button className="btn btn-primary float-end">Login</button>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <div className="container-fluid">
            <div className="row">
              {
                flightDetailsData.map((item, id) => (
                  <>

                    <div className="col-lg-3">
                      <div class="card-title">{item.date}</div>
                      <div class="card-title">{item.from}</div>
                    </div>
                    <div className="col-lg-3">
                      <div class="card-title">{item.airport}</div>
                    </div>
                    <div className="col-lg-3">
                      <div class="card-title">{item.time}</div>
                      <div class="card-title">{item.to}</div>
                    </div>
                    <div className="col-lg-3">
                      <div class="card-title fw-bold">₹ 2345</div>
                    </div>
                    <hr />
                  </>
                ))
              }

            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default FlightDetails;

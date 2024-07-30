import React, { useEffect, useState } from 'react';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import axios from 'axios';
import './BookingForm.jsx'
import { Form, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tripType: "",
    from: '',
    to: '',
    depart: '',
    return: '',
    passengers: '',
    class: 'Economy',
  });
  // console.log("trip type", formData.tripType);
  const [classTypes, setClassTypes] = useState([]);

  useEffect(() => {
    const fetchClassTypes = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/class-types');
        // console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log("class types", data)
        setClassTypes(data.classTypes);
      } catch (error) {
        console.error('Failed to fetch class types', error);
      }
    };

    fetchClassTypes();
  }, []);

  const [loactionDetails, setLocationDetails] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/locations');
        // console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log("location", data)
        setLocationDetails(data.locations);
      } catch (error) {
        console.error('Failed to fetch locations', error);
      }
    };

    fetchLocations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [getData, setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    try {
      const getResponse = await fetch('http://localhost:8000/api/search-flights', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!getResponse.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response (e.g., display a success message)
      const data = await getResponse.json();
      setData(data);
      console.log('Data sent successfully:', await getResponse.json());
      // const getData=await getResponse.json()

    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error sending data:', error);
    }
  };
  // console.log("setData", getData)
  const handleRadioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    if(!getData)
    {
      console.log("empty Data");
    }
    else if(getData.length !=0)
    {
        navigate('/flight-details',{
          state:{data:getData}
        })
    }
  },[getData])

  const handleDateClick = (field) => {
    document.getElementsByName(field)[0].showPicker();
  }

  // console.log(formData)

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 vw-100 " style={{ backgroundColor: "black" }}>
      <div className="p-4" style={{ maxWidth: '90%', width: '100%', backgroundColor: 'white', borderRadius: '8px', marginLeft: '20px' }}>
        <h2 className="text-center mb-4">Compare flights from all airlines and save up to -60% on your ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className='container-fluid' >
            <div className="row mb-3">
              <div className="col-4" >
                <input
                  type="radio"
                  name="tripType"
                  defaultValue="returnTripType"
                  // value={formData.tripType}
                  checked={formData.tripType == 'returnTripType'}
                  className='mx-2'
                  onClick={handleRadioChange}
                />
                <label htmlFor="returnTripType">Return</label>
              </div>
              <div className="col-4">
                <input
                  type="radio"
                  name="tripType"
                  defaultValue="onewayTripType"
                  //value={formData.tripType}
                  checked={formData.tripType == 'onewayTripType'}
                  onClick={handleRadioChange}
                  className='mx-2'
                />
                <label htmlFor="onewayTripType">One-Way</label>
              </div>

            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">From</label>
              <select name="from" className="form-select" value={formData.from} onChange={handleChange}>
                {loactionDetails && loactionDetails.map((index, id) => (
                  <option key={index.id} value={index.city_name}>
                    {index.city_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-1">
              <label htmlFor="" className='form-label'></label>
              <FaArrowRightArrowLeft size={40} className='mt-4 pt-2 mx-2' />
            </div>
            <div className="col-md-4">
              <label className="form-label">To</label>
              {/* <input type="text" className="form-control" name="to" placeholder="To" value={formData.to} onChange={handleChange} /> */}
              <select className="form-select" value={formData.to} name="to" onChange={handleChange}>
                {loactionDetails && loactionDetails.map((index, id) => (
                  <option key={index.id} value={index.city_name}>
                    {index.city_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100" onClick={navigate('')}>Search flights</button>
            </div>
          </div>
          <div className="row mb-3 g-0">
            <div className="col-md-2 position-relative">
              <label className="form-label">Depart</label>
              <input
                type="date"
                className="form-control date-picker"
                name="depart"
                value={formData.depart}
                onChange={handleChange}
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
              />
              <div
                className="form-control btn-date-picker"
                onClick={() => handleDateClick('depart')}
              >
                {formData.depart ? formData.depart : "Select Date"}
              </div>
            </div>
            <div className="col-md-2 position-relative">
              <label className="form-label">Return</label>
              <input
                type="date"
                className="form-control date-picker"
                name="return"
                value={formData.return}
                onChange={handleChange}
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
              />
              <div
                className="form-control btn-date-picker"
                onClick={() => handleDateClick('return')}
              >
                {formData.return ? formData.return : "Select Date"}
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <label className="form-label">Passengers</label>
              <input type="number" className="form-control" name="passengers" placeholder="1" min="1" value={formData.passengers} onChange={handleChange} />
            </div>
            <div className="col-md-2">
              <label className="form-label">Class</label>
              <select name="class" className="form-select" value={formData.class} onChange={handleChange}>

                {classTypes &&
                  classTypes?.map((name, i) => (

                    <option key={name.id} value={name.classType}>
                      {name.classType}
                    </option>
                  ))}
              </select>
            </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export default BookingForm;
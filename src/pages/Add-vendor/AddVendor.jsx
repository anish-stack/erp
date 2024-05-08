import React, { useState } from 'react';
import Headings from '../../components/Headings/Headings';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
const AddVendor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };
  const Defaultimg = "https://i.ibb.co/ssStfvR/image.png"
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNo: '',
    CompanyName: '',
    CompanyAddress: '',
    Gst: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle DatePicker separately
    if (name === 'followUpDate') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value // Update with the value directly for DatePicker
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value // For other input types, update with the value directly
      }));
    }
  };


  // const handleCommentChange = (e, index) => {
  //     const { name, value } = e.target;
  //     const updatedComments = [...formData.comments];
  //     updatedComments[index][name] = value;
  //     setFormData(prevState => ({
  //         ...prevState,
  //         comments: updatedComments
  //     }));
  // };

  // const addComment = () => {
  //     setFormData(prevState => ({
  //         ...prevState,
  //         comments: [...prevState.comments, { comment: '', name: '', id: '', department: '', role: '', commentDateTime: '' }]
  //     }));
  // };

  // const removeComment = (index) => {
  //     const updatedComments = [...formData.comments];
  //     updatedComments.splice(index, 1);
  //     setFormData(prevState => ({
  //         ...prevState,
  //         comments: updatedComments
  //     }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <Headings heading={'Add Vendor'} />

      <div className="container px-4 py-3 mt-4">
        <div className='col-12 col-md-12'>
          <div className="row">
            <div className="col-12 col-md-4">

              <div className="mt-3">
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected" className="img-fluid" />
                ) : (
                  <img src={Defaultimg} alt="Default" className="img-fluid" />
                )}
              </div>
              <form action="">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control"
                />
              </form>
            </div>
            <div className="col-12 mt-5 col-md-8">
              <form className='text-capitalize' onSubmit={handleSubmit}>
                <div className='container'>
                  <div className='col-12'>
                    <div className="row">
                      <div className="col-6 mb-3">
                        <label htmlFor="FirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control text-capitalize" id="FirstName" name="FirstName" value={formData.FirstName} onChange={handleChange} />
                      </div>
                      <div className=" col-6 mb-3">
                        <label htmlFor="LastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control text-capitalize" id="LastName" name="LastName" value={formData.LastName} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='container'>
                  <div className='col-12'>
                    <div className="row">
                      <div className="col-6 mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="text" className="form-control text-capitalize" id="Email" name="Email" value={formData.Email} onChange={handleChange} />
                      </div>
                      <div className=" col-6 mb-3">
                        <label htmlFor="PhoneNo" className="form-label">Phone No </label>
                        <input type="text" className="form-control text-capitalize" id="PhoneNo" name="PhoneNo" value={formData.PhoneNo} onChange={handleChange} />
                      </div>

                    </div>
                  </div>
                </div>
                <div className='container'>
                  <div className='col-12'>
                    <div className="row">
                      <div className="mb-3 col-6">
                        <label htmlFor="contactPersonName" className="form-label">Company Name</label>
                        <input type="text" className="form-control text-capitalize" id="CompanyName" name="CompanyName" value={formData.CompanyName} onChange={handleChange} />
                      </div>
                      <div className="mb-3 col-6">
                        <label htmlFor="Gst" className="form-label">GST</label>
                        <input type="text" className="form-control text-capitalize" id="gst" name="Gst" value={formData.Gst} onChange={handleChange} />
                      </div>

                     
                    </div>
                  </div>
                </div>

                <div className="mb-3 ml-4 col-12">
                        <label htmlFor="contactPersonNumber" className="form-label">Company Address</label>
                        <textarea type="text" className="form-control text-capitalize" id="contactPersonNumber" name="contactPersonNumber" value={formData.CompanyAddress} onChange={handleChange} />
                      </div>
                <div className='ml-5'>

                  <button type="submit" className=" px-5 py-2 bg-yellow  white fw-bolder  ">Add Vendor</button>
                </div>



              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AddVendor;

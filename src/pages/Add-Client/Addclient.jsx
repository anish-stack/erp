import React, { useState } from 'react';
import Headings from '../../components/Headings/Headings';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
const Addclient = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        companyAddress: '',
        companyTIN: '',
        companyPAN: '',
        gst: '',
        contactPersonName: '',
        contactPersonNumber: '',
        followUp: false,
        followUpDate: new Date(),
        requirements: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        // Handle DatePicker separately
        if (name === 'followUpDate') {
            setFormData(prevState => ({
                ...prevState,
                [name]: newValue
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: newValue
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
            <Headings heading={'Add Clients'} />

            <div className="container px-4 py-3 mt-4">

                <form className='text-capitalize' onSubmit={handleSubmit}>
                    <div className='container'>
                        <div className='col-12'>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control text-capitalize" id="name" name="name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className=" col-6 mb-3">
                                    <label htmlFor="companyName" className="form-label">Company Name</label>
                                    <input type="text" className="form-control text-capitalize" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='col-12'>
                            <div className="row">
                                <div className="col-4 mb-3">
                                    <label htmlFor="Company Address" className="form-label">Company Address</label>
                                    <input type="text" className="form-control text-capitalize" id="Company Address" name="companyAddress" value={formData.companyAddress} onChange={handleChange} />
                                </div>
                                <div className=" col-4 mb-3">
                                    <label htmlFor="companyPAN" className="form-label">Company Pan</label>
                                    <input type="text" className="form-control text-capitalize" id="companyPAN" name="companyPAN" value={formData.companyPAN} onChange={handleChange} />
                                </div>
                                <div className=" col-4 mb-3">
                                    <label htmlFor="companyTIN" className="form-label">Company Tin</label>
                                    <input type="text" className="form-control text-capitalize" id="companyTIN" name="companyTIN" value={formData.companyTIN} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='col-12'>
                            <div className="row">
                                <div className="mb-3 col-4">
                                    <label htmlFor="gst" className="form-label">GST</label>
                                    <input type="text" className="form-control text-capitalize" id="gst" name="gst" value={formData.gst} onChange={handleChange} />
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="contactPersonName" className="form-label">Contact Person Name</label>
                                    <input type="text" className="form-control text-capitalize" id="contactPersonName" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} />
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="contactPersonNumber" className="form-label">Contact Person Number</label>
                                    <input type="text" className="form-control text-capitalize" id="contactPersonNumber" name="contactPersonNumber" value={formData.contactPersonNumber} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="col-12">
                            <div className="row">


                                <div className="mb-3">
                                    <label htmlFor="followUpDate" className="form-label">Follow Up Date</label>
                                    <DatePicker
                                    required={true}
                                    className="form-control text-capitalize"
                                        onChange={(date) => handleChange({ target: { name: 'followUpDate', value: date } })}
                                        value={formData.followUpDate}
                                    />
                                </div>
                                {/* <div className="mb-3 col-4">
                                <label htmlFor="requirements" className="form-label">Requirements</label>
                                <textarea className="form-control text-capitalize" id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} />
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 margin col-4 form-check">
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input" id="followUp" name="followUp" checked={formData.followUp} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="followUp">Follow Up</label>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='col-12'>
                            <div className="row">
                                <div className="mb-3 col-12">
                                    <label htmlFor="comments" className="form-label">Comments</label>
                                    <textarea type="text" rows={10} className="form-control text-capitalize mb-2" placeholder="Comment" name="comments" value={formData.comments} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className='ml-3'>

                            <button type="submit" className=" px-5 py-2 bg-blue white fw-bolder  ">Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        </>
    );
};

export default Addclient;

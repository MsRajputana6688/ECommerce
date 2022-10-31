import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const ShFrom = () => {
    const [Data, SetData] = useState({
        shi_FullName: '',
        shi_Email: '',
        shi_Phone: '',
        shi_Company: '',
        shi_Zip: '',
        shi_Country: '',
        shi_Address1: '',
        shi_Address2: '',

    })
    const [DtData, SetDtData] = useState({
        bil_FullName: '',
        bil_Email: '',
        bil_Phone: '',
        bil_Company: '',
        bil_Zip: '',
        bil_Country: '',
        bil_Address1: '',
        bil_Address2: '',

    })
    const InputData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        SetData({ ...Data, [name]: value })
    }

    const InputData2 = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        SetDtData({ ...Data, [name]: value })
    }

    const [Cdata, SetCData] = useState(false)
    const DubData = (event) => {
        SetCData(event.target.checked)
        if (!event.target.checked) {
            SetDtData({
                bil_FullName: '',
                bil_Email: '',
                bil_Phone: '',
                bil_Company: '',
                bil_Zip: '',
                bil_Country: '',
                bil_Address1: '',
                bil_Address2: '',
            })
        }
    }
    return (
        <form>
            <div className="address_one">
                <div className="sh-form-heading">Shipping Address</div>
                <div className="Address-field">
                    <div className="field-cont">
                        <label htmlFor="shi_FullName">Full Name</label>
                        <input type="text" id='shi_FullName' name='shi_FullName' value={Data.shi_FullName} onChange={InputData} className='form-field' />
                    </div>
                    <div className="field-cont">
                        <label htmlFor="shi_Email">Email Address</label>
                        <input type="text" id='shi_Email' name='shi_Email' value={Data.shi_Email} onChange={InputData} className='form-field' />
                    </div>
                </div>
                <div className="Address-field">
                    <div className="field-cont">
                        <label htmlFor="shi_Phone">Phone Number</label>
                        <input type="text" id='shi_Phone' name='shi_Phone' value={Data.shi_Phone} onChange={InputData} className='form-field' />
                    </div>
                    <div className="field-cont">
                        <label htmlFor="shi_Company">Company</label>
                        <input type="text" id='shi_Company' name='shi_Company' value={Data.shi_Company} onChange={InputData} className='form-field' />
                    </div>
                </div>
                <div className="Address-field">
                    <div className="field-cont">
                        <label htmlFor="shi_Zip">Zip Code</label>
                        <input type="text" id='shi_Zip' name='shi_Zip' value={Data.shi_Zip} onChange={InputData} className='form-field' />
                    </div>
                    <div className="field-cont">
                        <label htmlFor="shi_Country">Country</label>
                        <input type="text" id='shi_Country' name='shi_Country' value={Data.shi_Country} onChange={InputData} className='form-field' />
                    </div>
                </div>
                <div className="Address-field">
                    <div className="field-cont">
                        <label htmlFor="shi_Address1">Address 1</label>
                        <input type="text" id='shi_Address1' name='shi_Address1' value={Data.shi_Address1} onChange={InputData} className='form-field' />
                    </div>
                    <div className="field-cont">
                        <label htmlFor="shi_Address2">Address 2</label>
                        <input type="text" id='shi_Address2' name='shi_Address2' value={Data.shi_Address2} onChange={InputData} className='form-field' />
                    </div>
                </div>
            </div>

            <div className="address_two">
                <div className="sh-form-heading">Billing Address</div>
                <div className="sh-checkbox">
                    <input type="checkbox" onChange={DubData} name="shCheck" id="shCheck" />
                    <label htmlFor="shCheck">Same as shipping address</label>

                </div>
                <div className="Address-field">
                    <div className="field-cont">
                        <label htmlFor="bil_FullName">Full Name</label>
                        <input type="text" id='bil_FullName' name='bil_FullName' onChange={InputData2} value={Cdata ? Data.shi_FullName : DtData.bil_FullName} className='form-field' />
                    </div>
                    <div className="field-cont">
                        <label htmlFor="bil_Email">Email Address</label>
                        <input type="text" id='bil_Email' name='bil_Email' onChange={InputData2} value={Cdata ? Data.shi_Email : DtData.bil_Email} className='form-field' />
                    </div>
                </div>
                <div className="Address-field">
                    <div className="field-cont">
                        <label htmlFor="bil_Phone">Phone Number</label>
                        <input type="text" id='bil_Phone' name='bil_Phone' onChange={InputData2} value={Cdata ? Data.shi_Phone : DtData.bil_Phone} className='form-field' />
                    </div>
                    <div className="field-cont">
                        <label htmlFor="bil_Company">Company</label>
                        <input type="text" id='bil_Company' name='bil_Company' onChange={InputData2} value={Cdata ? Data.shi_Company : DtData.bil_Company} className='form-field' />
                    </div>
                </div>
                <div className="Address-field">
                    <div className="field-cont">
                        <label htmlFor="bil_Zip">Zip Code</label>
                        <input type="text" id='bil_Zip' name='bil_Zip' onChange={InputData2} value={Cdata ? Data.shi_Zip : DtData.bil_Zip} className='form-field' />
                    </div>
                    <div className="field-cont">
                        <label htmlFor="bil_Country">Country</label>
                        <input type="text" id='bil_Country' name='bil_Country' onChange={InputData2} value={Cdata ? Data.shi_Country : DtData.bil_Country} className='form-field' />
                    </div>
                </div>
                <div className="Address-field">
                    <div className="field-cont">
                        <label htmlFor="bil_Address1">Address 1</label>
                        <input type="text" id='bil_Address1' name='bil_Address1' onChange={InputData2} value={Cdata ? Data.shi_Address1 : DtData.bil_Address1} className='form-field' />
                    </div>
                    <div className="field-cont">
                        <label htmlFor="bil_Address2">Address 2</label>
                        <input type="text" id='bil_Address2' name='bil_Address2' onChange={InputData2} value={Cdata ? Data.shi_Address2 : DtData.bil_Address2} className='form-field' />
                    </div>
                </div>
            </div>

            <div className="Address-field">
                <NavLink to='/Cart' className='Link-cont'>
                    <button className='link-btn' type='button'>Back To Cart</button>
                </NavLink>
                <NavLink to='/Payment' className='Link-cont'>
                    <button className='link-btn active' type='button'>Proceed To Payment</button>
                </NavLink>
            </div>
        </form>
    )
}

export default ShFrom
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { saveShippingAddress } from '../actions/cartActions';
// import CheckoutSteps from '../components/CheckoutSteps';

// export default function ShippingAddressScreen(props) {
//   const userSignin = useSelector((state) => state.userSignin);

//   const { userInfo } = userSignin;
//   const cart = useSelector((state) => state.cart);
//   const { shippingAddress } = cart;
//   const [lat, setLat] = useState(shippingAddress.lat);
//   const [lng, setLng] = useState(shippingAddress.lng);
//   const userAddressMap = useSelector((state) => state.userAddressMap);
//   const { address: addressMap } = userAddressMap;

//   if (!userInfo) {
//     props.history.push('/signin');
//   }
//   const [fullName, setFullName] = useState(shippingAddress.fullName);
//   const [address, setAddress] = useState(shippingAddress.address);
//   const [city, setCity] = useState(shippingAddress.city);
//   const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
//   const [country, setCountry] = useState(shippingAddress.country);
//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const newLat = addressMap ? addressMap.lat : lat;
//     const newLng = addressMap ? addressMap.lng : lng;
//     if (addressMap) {
//       setLat(addressMap.lat);
//       setLng(addressMap.lng);
//     }
//     let moveOn = true;
//     if (!newLat || !newLng) {
//       moveOn = window.confirm(
//         'You did not set your location on map. Continue?'
//       );
//     }
//     if (moveOn) {
//       dispatch(
//         saveShippingAddress({
//           fullName,
//           address,
//           city,
//           postalCode,
//           country,
//           lat: newLat,
//           lng: newLng,
//         })
//       );
//       props.history.push('/placeorder');
//     }
//   };
//   const chooseOnMap = () => {
//     dispatch(
//       saveShippingAddress({
//         fullName,
//         address,
//         city,
//         postalCode,
//         country,
//         lat,
//         lng,
//       })
//     );
//     props.history.push('/map');
//   };
//   return (
//     <div>
//       <CheckoutSteps step1 step2></CheckoutSteps>
//       <form className="form" onSubmit={submitHandler}>
//         <div>
//           <h1>ระบุวัน เดือน ปีที่ได้ไป</h1>
//         </div>
//         <div>
//           <label htmlFor="fullName">Full Name</label>
//           <input
//             type="text"
//             id="fullName"
//             placeholder="Enter full name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             id="address"
//             placeholder="Enter address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="city">City</label>
//           <input
//             type="text"
//             id="city"
//             placeholder="Enter city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             required
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="postalCode">Postal Code</label>
//           <input
//             type="text"
//             id="postalCode"
//             placeholder="Enter postal code"
//             value={postalCode}
//             onChange={(e) => setPostalCode(e.target.value)}
//             required
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="country">Country</label>
//           <input
//             type="text"
//             id="country"
//             placeholder="Enter country"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             required
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="chooseOnMap">Location</label>
//           <button type="button" onClick={chooseOnMap}>
//             Choose On Map
//           </button>
//         </div>
//         <div>
//           <label />
//           <button className="primary" type="submit">
//             Continue
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if(!userInfo) {
        props.history.push('/signin');
    }
    const [day, setDay] = useState(shippingAddress.day);
    const [month, setMonth] = useState(shippingAddress.month);
    const [year, setYear] = useState(shippingAddress.year);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({day, month, year})
        );
        props.history.push('/placeorder');
        //TODO: dispatch save shipping address action
    }
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>ระบุ วัน เดือน ปี ที่ได้ไป</h1>
                </div>
                <div>
                    <label htmlFor="day">วัน</label>
                    <input
                        type="text"
                        id="fday"
                        placeholder="Enter Day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        required>
                    </input>
                </div>
                <div>
                    <label htmlFor="month">เดือน</label>
                    <input
                        type="text"
                        id="month"
                        placeholder="Enter Day"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        required>
                    </input>
                </div>
                <div>
                    <label htmlFor="year">ปี</label>
                    <input
                        type="text"
                        id="year"
                        placeholder="Enter Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required>
                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        ต่อไป
                    </button>
                </div>
            </form>
        </div>
    );
}
// components/Signup.jsx

import React from 'react'
import  { useState } from 'react';


const Signup = ({ openSignUpModal, setopenSignUpModal }) => {
    const [mobile, setMobileNumber] = useState('');
    const [inputDate, setInputDate] = useState('');
   

    function handlePhoneNumber(event) 
    {
       const value = event.target.value;
        setMobileNumber(value);
      }

      function handleDate(event)
      {
             const input=event.target.value;
             setInputDate(input);
            //  let currDate = new Date();
            //  let dd = String(currDate.getDate()).padStart(2, '0');
            //  let mm = String(currDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            //  let yyyy = currDate.getFullYear();
            //  //currDate = mm + '-' + dd + '-' + yyyy;
            //  currDate = yyyy + '-'+ mm + '-' +dd;
            //  // Compare the input date with the current date
            // if (input > currDate) {
               
            //    alert("Invalid date of birth.Date of birth cannot be in future"+input);
            //    return false;
               
            // } 
            // else
            // {
                //setInputDate(input);

            //}

      }


      function myFunction() {
      
        //for date
        let currDate = new Date();
        let dd = String(currDate.getDate()).padStart(2, '0');
        let mm = String(currDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = currDate.getFullYear();
        //currDate = mm + '-' + dd + '-' + yyyy;
        currDate = yyyy + '-'+ mm + '-' +dd;
        // Compare the input date with the current date
       if (inputDate > currDate) {
          
          alert("Invalid date of birth.Date of birth cannot be in future"+inputDate);
          return false;
          
       } 
       else
       {
           setInputDate(inputDate);

       }


//for ph
       if (mobile.length > 10) {
        alert('Mobile number must be exactly 10 digits.');
        return false;
      } else {
        setMobileNumber(mobile);
      }

      }

     // Get the modal

   // When the user clicks anywhere outside of the modal, close it
//    var modal = document.getElementById('myModal');
  
// window.onclick = function(event) {
//    if (event.currentTarget.id === modal) {
//     modal.style.display = "none";
//    }
//  }



    return (
        <div style={{ opacity: openSignUpModal ? 1 : 0 }}
        id="myModal"    className='modal'>
           <form onSubmit={myFunction} >
            <div >
                <div className='header'>
                    <p>Fill Details</p>
                  
                </div>
                <div className='modal-content' >
                <label >
                        Username:
                        </label>
                    <input
                       
                        type="text"
                        id="username"
                        name="username"
                       required
                    />
                   <label>
                        Email address:
                        </label>

                        <input type="email" id="email" name="email" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" />
                 
                    <label >
                        Phone number:
                        </label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}"required value={mobile}  onChange={handlePhoneNumber} />
                    
                   <label >
                        Date of Birth:
                        </label>
                    <input
                       type="date"
                        id="dob"
                        name="Date of Birth"
                        required
                        value={inputDate} onChange={handleDate}
                    />
                </div>
                <button class="submit-button" type="submit">
            Submit
          </button>
            </div>
            </form>
        </div>
    )
}

export default Signup

import React from 'react';

const Contact = () =>{
    return(
        <>
            <div className='my-5' id='six'>
            <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container content-div'>
            <div className='col-md-6 col-10 mx-auto'>
            <form>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" /> <br/>

  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone" />
  
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="mail" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button class='btn btn-outline-primary' type='submit'>Submit Form</button>
            </form>
            </div>

            </div>
        </>
    );
};
export default Contact;
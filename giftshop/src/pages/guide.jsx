//import React from 'react';
import '../css/guide.css'
import LeftSidebar from './leftsidebar';
import Navigation from './navigationBar'; 
// import LeftSidebar from './leftsidebar';
// import RightSidebar from './rightsidebar';


const step1a='https://res.cloudinary.com/dg2jouca2/image/upload/c_pad,w_958/v1708597386/login_ksgysr.png';
const step1b='https://res.cloudinary.com/dg2jouca2/image/upload/c_pad,w_960/v1708597388/sign_up_pna4oi.png';
const step2a='https://res.cloudinary.com/dg2jouca2/image/upload/c_pad,w_960/v1708597388/upload_ipndu1.png';
const step3a='https://res.cloudinary.com/dg2jouca2/image/upload/c_pad,w_960/v1708597387/uploadimage_xfrfzi.png';
const step3b='https://res.cloudinary.com/dg2jouca2/image/upload/c_pad,w_960/v1708597387/upload_done_jcefkg.png';
const step4a='https://res.cloudinary.com/dg2jouca2/image/upload/c_pad,w_960/v1708597387/assets_knimhv.png';
const step4b='https://res.cloudinary.com/dg2jouca2/image/upload/c_pad,w_957/v1708597389/url_mzu8p3.png';



const Guide = () => {
  return (
    <div>
      <Navigation/>
      <LeftSidebar/>
      <br/><br/>
      <br/><br/>
      
      <p className="h11">Gift Image Upload Guide</p>
      <p>
        To upload an image for your gift, follow the steps below:
      </p>
      <br/><br/>

      <div>
        <p>
          <strong>Step 1:</strong> Go to Cloudinary and sign in or create an account.
        </p>
        <br/>
        <p>
          <strong>Step 2:</strong> Once logged in, find the Media Library or Upload section.
        </p>
        <br/>
        <p>
          <strong>Step 3:</strong> Click on the Upload button to select and upload your image.
        </p>
        <br/>
        <p>
          <strong>Step 4:</strong> After uploading, copy the image link provided by Cloudinary.
        </p>
      </div>
      <br/><br/>
      <p>
        Here are some screenshots to help you visualize the process:
      </p>

      <div>
        <img className="imgc1" src={step1a} alt="Step 1: Cloudinary Login" />
        <img className="imgc1" src={step1b} alt="Step 1: Cloudinary SignUp" />
        <p>Step 1: Login or SignUp into Cloudinary</p>
      </div>
      <br/><br/>
      <div>
        <img className="imgc1" src={step2a} alt="Step 2: Media Library or Upload" />
        <p>Step 2: In Media Library , Select the Upload buttton in top right corner. </p>
      </div>
      <br/><br/>
      <div>
        <img className="imgc1" src={step3a} alt="Step 3: Browse File" />
        <img className="imgc1" src={step3b} alt="Step 3: Click Upload" />
        <p>Step 3: Browse the file from the desktop and Click Upload</p>
      </div>
      <br/><br/>
      <div>
        <img className="imgc1" src={step4a} />
        <img className="imgc1"src={step4b} alt="Step 4: Copy Image Link" />
        <p>Step 4: In Media Library in Assets tab , you will find the images you uploaded, Copy Image Link </p>
      </div>
      <br/><br/>  
      <p>
        Now, you can use the copied link to add the image to your gift.
      </p>
    </div>
  );
};

export default Guide;

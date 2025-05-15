import React from 'react';
//import Header from './Header';
//import Footer from './Footer';
import { staticAsset } from '../libs';
//import type { FormObject } from '../types';

export default function ThankYou(): React.JSX.Element {
    return (
      <>
        <div className="form-card thank-you">
            <img src={staticAsset('/assets/images/icon-thank-you.svg')} alt="thank you icon"/>
          <h1>Thank you!</h1>
          <p className="my-4">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </>
    );
}
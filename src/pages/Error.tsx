import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/countdowns/countdown/Countdown';
import Page from '../components/page/Page';

interface Props {
  errorCode: number;
}

const Error = (props: Props): JSX.Element => {
  const { errorCode } = props;

  const getErrorText = () => {
    switch (errorCode) {
      case 404:
        return (
          <p>
            This page does not exist...
            <br />
            <br />
            <Link to="/">Return Home</Link>
          </p>
        );
      case 418:
        return <p>We&apos;re more of a Red Bull kind of company.</p>;
      default:
        return <p>Something has gone really wrong!</p>;
    }
  };

  return (
    <Page title={`${errorCode}`}>
      <div style={{ minHeight: '100vh' }}>
        <Countdown
          fill
          index={errorCode}
          heading=""
          subHeading="Something has gone wrong"
          content={getErrorText()}
          image=""
        />
      </div>
    </Page>
  );
};

export default Error;

export default function Thankscontent() {
    return (
      <div className="thankyou">
        <h2>{`You're In!`}</h2>
        <p>
          {`You have entered for a chance to win a Golden Ticket for two to the
          Mobil 1™ x Count's Kustoms VIP event on Thursday, November 4. If your
          entry is selected to be one of our exclusive winners, you will be
          notified by text and email by November 3.`}
        </p>
        <h3>Ride on. And on.</h3>
        <a href="https://www.mobil.com/en/lubricants/for-personal-vehicles/motorcycles" target="_blank">
        <button className="thanksbtn">
          Experience the difference
        </button>
        </a>
      </div>
    );
  }
export default function About() {
  return (
    <div className="container my-4 fade-in">
      <h1 className="text-center mb-5">About Us</h1>

      <p className="lead text-center mb-5">
        At Tax Management, we believe financial clarity empowers confident decisions.
        Our team provides reliable tax solutions, transparent communication,
        and a personalized approach for every client.
      </p>

      <div className="row text-center mt-5">
        {/* Our Mission */}
        <div className="col-md-4 mb-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Our Mission"
            className="img-fluid mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <h4 className="text-primary">Our Mission</h4>
          <p>
            To provide accurate, efficient, and transparent tax and financial services that
            empower individuals and businesses to thrive.
          </p>
        </div>

        {/* Our Vision */}
        <div className="col-md-4 mb-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png"
            alt="Our Vision"
            className="img-fluid mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <h4 className="text-primary">Our Vision</h4>
          <p>
            To be recognized as a trusted financial partner that brings peace of mind and
            long-term success to every client.
          </p>
        </div>

        {/* Our Values */}
        <div className="col-md-4 mb-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Our Values"
            className="img-fluid mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <h4 className="text-primary">Our Values</h4>
          <p>
            Integrity, precision, and client satisfaction guide every service we provide.
          </p>
        </div>
      </div>

      {/* --- Company Info Section --- */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <h3 className="text-center text-primary mb-4">Who We Are</h3>

          <p className="text-muted">
            <strong>SM Tax Services, Inc.</strong> offers a wide range of full-accounting and tax services
            located in the USA. We provide comprehensive tax accounting solutions and bookkeeping
            support to businesses across the nation. Having more than 15 years of experience, we
            understand that each client has different needs, and we tailor our services accordingly.
            We believe in personal interaction to understand your unique tax situations before we
            recommend the best approach to optimize your tax benefits.
          </p>

          <h5 className="text-primary mt-4">Authorized IRS e-File Provider</h5>
          <p className="text-muted">
            We are an authorized <strong>Internal Revenue Service (IRS)</strong> e-File Provider.
          </p>

          <h5 className="text-primary mt-4">Benefits of Authorized IRS e-File Providers</h5>
          <p className="text-muted">
            IRS e-file builds strong client relationships and improves business. Authorized IRS
            e-file Providers meet the expectations of their clients by electronically filing their
            clients’ returns including business, individual and information returns. The IRS
            processes e-file returns faster and with fewer errors, meaning quicker refunds and less
            contact with the IRS. IRS e-file provides proof of receipt within 24 hours of sending
            returns to the IRS. Individual and business clients can e-file balance due returns and
            schedule an electronic funds transfer (EFT) from their account for any date. Taxpayers
            can delay out-of-pocket expenses by paying their individual income tax with a credit
            card.
          </p>
          <p className="text-muted">
            IRS e-file provides excellent returns on your investment by saving money on printing,
            mailing, and document storage costs. It also helps to keep client information organized,
            centralized, and readily available when needed. The IRS also benefits when tax return
            preparers participate in IRS e-file and comply with e-file standards, ensuring honesty
            and compliance with all Service requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

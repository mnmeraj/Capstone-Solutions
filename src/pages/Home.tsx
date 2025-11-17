export default function Home() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center fade-in"
      style={{
        minHeight: "80vh",
        padding: "2rem",
      }}
    >
      <h1 className="mb-3">Welcome to SM Tax Services Inc.</h1>
      <p className="lead mb-5">
        Professional Tax Preparation • Financial Clarity • Trusted Advisors
      </p>

      <div className="text-center" style={{ maxWidth: "600px" }}>
        <h3 className="text-primary mb-2">INDIVIDUAL TAXES</h3>
        <p>
          We file individual tax returns for federal as well as those for all the
          50 states.
        </p>

        <h3 className="text-primary mt-4 mb-2">BUSINESS TAXES</h3>
        <p>
          We file business taxes for Sole Proprietorship, LLC, 1120S, 1120, and
          1065.
        </p>
      </div>
    </div>
  );
}

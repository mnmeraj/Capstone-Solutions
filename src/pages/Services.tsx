export default function Services() {
  return (
    <div className="fade-in container my-5">
      <h1 className="display-5 fw-bold text-center mb-4">Our Services</h1>
      <p className="text-muted text-center mb-5">
        SM Tax Services, Inc. is a complete accounting and tax firm accommodating both individuals and businesses in the US. 
        We provide comprehensive financial and tax solutions tailored to your needs.
      </p>

      <div className="accordion shadow-sm" id="servicesAccordion">

        {/* TAX PLANNING */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPlanning">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePlanning"
              aria-expanded="true"
              aria-controls="collapsePlanning"
            >
              Tax Planning
            </button>
          </h2>
          <div
            id="collapsePlanning"
            className="accordion-collapse collapse show"
            aria-labelledby="headingPlanning"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body">
              <p>
                You need tax planning to successfully and legally reduce your tax liability. 
                We recommend tax-saving strategies in compliance with up-to-date legislation 
                to maximize your after-tax income.
              </p>
            </div>
          </div>
        </div>

        {/* TAX PREPARATION */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPreparation">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePreparation"
              aria-expanded="false"
              aria-controls="collapsePreparation"
            >
              Tax Preparation
            </button>
          </h2>
          <div
            id="collapsePreparation"
            className="accordion-collapse collapse"
            aria-labelledby="headingPreparation"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body">
              <p>
                We proactively apply our mastery of current tax law, complex tax code, 
                and new regulations to bring maximum cost benefit to our clients. 
                We optimize your taxes for sustainable, audit-compliant returns and a stress-free filing process.
              </p>
            </div>
          </div>
        </div>

        {/* BOOKKEEPING SERVICES */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingBookkeeping">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBookkeeping"
              aria-expanded="false"
              aria-controls="collapseBookkeeping"
            >
              Bookkeeping Services
            </button>
          </h2>
          <div
            id="collapseBookkeeping"
            className="accordion-collapse collapse"
            aria-labelledby="headingBookkeeping"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body text-start">
              <ul>
                <li>Assessment of existing accounting system</li>
                <li>Accounts payable & receivable</li>
                <li>Bank reconciliations (Checking and Credit Cards)</li>
                <li>Electronic Document Management</li>
                <li>Inventory Management</li>
                <li>Recording and Reconciling Payroll Transactions</li>
                <li>Revenue Reconciliation with Bank Deposit</li>
                <li>State and local tax filings (Sales and Use Tax)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PAYROLL SERVICES */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPayroll">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePayroll"
              aria-expanded="false"
              aria-controls="collapsePayroll"
            >
              Payroll Services
            </button>
          </h2>
          <div
            id="collapsePayroll"
            className="accordion-collapse collapse"
            aria-labelledby="headingPayroll"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body text-start">
              <ul>
                <li>Payroll Entries & Processing</li>
                <li>Payroll Provider Selection</li>
                <li>Payroll Reports</li>
                <li>Setup and Modify Employee Payroll Information</li>
                <li>Issue W2, 1099, 1096, W3, 940, 941 & TWC Forms</li>
                <li>Monthly & Quarterly Sales Tax</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LLC FORMATION & REGISTRATION */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingLLC">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLLC"
              aria-expanded="false"
              aria-controls="collapseLLC"
            >
              LLC Formation & Registration
            </button>
          </h2>
          <div
            id="collapseLLC"
            className="accordion-collapse collapse"
            aria-labelledby="headingLLC"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body text-start">
              <p>
                Limited Liability Companies (LLCs) are popular business structures 
                for partnerships and individuals due to their tax advantages, 
                legal protections, and flexibility. We assist with every step of the process:
              </p>
              <ul>
                <li>Locate your state’s LLC laws</li>
                <li>Provide guidance on which state to form your LLC</li>
                <li>Review name requirements and restrictions</li>
                <li>Help choose and verify availability of LLC name</li>
                <li>Assist in selecting a Registered Agent</li>
                <li>File Articles of Formation or Organization</li>
                <li>Prepare and execute an Operating Agreement</li>
                <li>Obtain an Employer Identification Number (EIN)</li>
                <li>File IRS Form 8832, if required</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="container fade-in my-5">
      <h1 className="text-center mb-5 fw-bold">Frequently Asked Questions</h1>

      <div className="accordion" id="faqAccordion">
        {/* Question 1 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. Why do the wages reported on my W-2 not match my true earnings?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Due to government regulations, pre-tax deductions, retirement, and annuity
              contributions deducted from your paycheck may not be included in wages subject
              to taxes. If you have none of these deductions or contributions on your paycheck,
              your W-2 wages will equal your true gross wages.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Why are there four wage amounts listed on my W-2 form and why are they different?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Government regulations determine how each type of wage is reported and taxed.
              Your W-2 may show these:
              <ul className="mt-2">
                <li><strong>Box 1 – Wages, Tips, Other Compensation:</strong> Subject to federal income tax.</li>
                <li><strong>Box 3 – Social Security Wages:</strong> Subject to Social Security tax.</li>
                <li><strong>Box 5 – Medicare Wages and Tips:</strong> Subject to Medicare tax.</li>
                <li><strong>Box 16 – State Wages, Tips, Etc.:</strong> Subject to state income tax.</li>
              </ul>
              <p>
                Gross wages for Social Security and Medicare are reduced by pre-tax payroll deductions 
                such as health, dental, or vision insurance, and dependent care. Social Security tax 
                applies up to the annual wage cap ($118,500 in 2015 & 2016), while Medicare has no maximum.
              </p>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. What should I do if the address on my W-2 is incorrect?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              It’s okay to file your tax return even if the address on your W-2 is outdated. 
              Payroll Services doesn’t reissue W-2s for address errors. 
              However, you should contact your HR department to update your address for future forms.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. Will I receive any health care tax forms to complete my tax return?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes. You may receive one or more of the following:
              <ul className="mt-2">
                <li><strong>Form 1095-A:</strong> Sent by the Health Insurance Marketplace.</li>
                <li><strong>Form 1095-B:</strong> Sent by health insurance providers.</li>
                <li><strong>Form 1095-C:</strong> Sent by employers offering coverage.</li>
              </ul>
              These forms provide coverage information that may be needed when filing your tax return.
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              5. How long does the IRS take to process my tax refund?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Paper returns are typically processed within <strong>6-8 weeks</strong>.  
              E-filed returns with direct deposit are usually processed in <strong>less than 3 weeks</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

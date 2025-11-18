export default function Resources() {
  return (
    <div className="container fade-in my-5">
      <h1 className="text-center mb-4 fw-bold">Resources</h1>
      <p className="text-center text-muted mb-5">
        Use the links below to check your refund status or access helpful federal resources.
      </p>

      <h4 className="fw-bold mb-3">Refund Status Locator</h4>

      {/* Table of Links */}
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <tbody>
            <tr>
              <td><a href="https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp" target="_blank">Federal</a></td>
              <td><a href="https://www.irs.gov/filing/correcting-your-tax-return" target="_blank">Federal (Amended)</a></td>
              <td><a href="https://otr.cfo.dc.gov" target="_blank">Dist. of Columbia</a></td>
              <td><a href="https://revenue.alabama.gov" target="_blank">Alabama</a></td>
              <td><a href="https://aztaxes.gov" target="_blank">Arizona</a></td>
              <td><a href="https://www.dfa.arkansas.gov" target="_blank">Arkansas</a></td>
            </tr>
            <tr>
              <td><a href="https://www.ftb.ca.gov" target="_blank">California</a></td>
              <td><a href="https://tax.colorado.gov" target="_blank">Colorado</a></td>
              <td><a href="https://portal.ct.gov/DRS" target="_blank">Connecticut</a></td>
              <td><a href="https://revenue.delaware.gov" target="_blank">Delaware</a></td>
              <td><a href="https://floridarevenue.com" target="_blank">Florida</a></td>
              <td><a href="https://dor.georgia.gov" target="_blank">Georgia</a></td>
            </tr>
            <tr>
              <td><a href="https://tax.hawaii.gov" target="_blank">Hawaii</a></td>
              <td><a href="https://tax.idaho.gov" target="_blank">Idaho</a></td>
              <td><a href="https://www2.illinois.gov/rev" target="_blank">Illinois</a></td>
              <td><a href="https://www.in.gov/dor" target="_blank">Indiana</a></td>
              <td><a href="https://tax.iowa.gov" target="_blank">Iowa</a></td>
              <td><a href="https://www.ksrevenue.org" target="_blank">Kansas</a></td>
            </tr>
            <tr>
              <td><a href="https://revenue.ky.gov" target="_blank">Kentucky</a></td>
              <td><a href="https://revenue.louisiana.gov" target="_blank">Louisiana</a></td>
              <td><a href="https://www.maine.gov/revenue" target="_blank">Maine</a></td>
              <td><a href="https://marylandtaxes.gov" target="_blank">Maryland</a></td>
              <td><a href="https://www.mass.gov/orgs/massachusetts-department-of-revenue" target="_blank">Massachusetts</a></td>
              <td><a href="https://www.michigan.gov/taxes" target="_blank">Michigan</a></td>
            </tr>
            <tr>
              <td><a href="https://www.revenue.state.mn.us" target="_blank">Minnesota</a></td>
              <td><a href="https://www.dor.ms.gov" target="_blank">Mississippi</a></td>
              <td><a href="https://dor.mo.gov" target="_blank">Missouri</a></td>
              <td><a href="https://revenue.nebraska.gov" target="_blank">Nebraska</a></td>
              <td><a href="https://www.state.nj.us/treasury/taxation" target="_blank">New Jersey</a></td>
              <td><a href="https://www.tax.newmexico.gov" target="_blank">New Mexico</a></td>
            </tr>
            <tr>
              <td><a href="https://www.tax.ny.gov" target="_blank">New York</a></td>
              <td><a href="https://www.ncdor.gov" target="_blank">North Carolina</a></td>
              <td><a href="https://tax.ohio.gov" target="_blank">Ohio</a></td>
              <td><a href="https://www.ok.gov/tax" target="_blank">Oklahoma</a></td>
              <td><a href="https://revenueonline.dor.oregon.gov" target="_blank">Oregon</a></td>
              <td><a href="https://www.revenue.pa.gov" target="_blank">Pennsylvania</a></td>
            </tr>
            <tr>
              <td><a href="https://tax.ri.gov" target="_blank">Rhode Island</a></td>
              <td><a href="https://dor.sc.gov" target="_blank">South Carolina</a></td>
              <td><a href="https://tax.utah.gov" target="_blank">Utah</a></td>
              <td><a href="https://www.tax.virginia.gov" target="_blank">Virginia</a></td>
              <td><a href="https://tax.wv.gov" target="_blank">West Virginia</a></td>
              <td><a href="https://www.revenue.wi.gov" target="_blank">Wisconsin</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Useful Links */}
      <div className="mt-5">
        <h4 className="fw-bold mb-3">Useful Links</h4>
        <ul>
          <li>
            <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">
              Internal Revenue Service
            </a>
          </li>
          <li>
            <a href="https://www.sba.gov" target="_blank" rel="noopener noreferrer">
              Small Business Administration
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

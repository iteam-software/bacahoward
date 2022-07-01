import React from 'react'
import logo from "../images/bacahoward-line.png"
import accreditationLogo from "../images/cpa-abv.png"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <div className="logo">
              <img alt="Company Logo" src={logo} />
            </div>
            <p className="address">
              <a
                className="address"
                href="https://goo.gl/maps/FwHn5TdGceq"
                target="_blank"
                rel="noopener noreferrer"
              >
                2155 Louisiana Blvd. NE #7000<br/>
                Albuquerque, New Mexico 87110
              </a>
            </p>
              <table className="numbers">
                <tbody>
                  <tr>
                    <td>
                      <strong>Office</strong>
                    </td>
                    <td>
                      <a href="tel:+15052003800">(505) 200 &ndash; 3800</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fax</strong>
                    </td>
                    <td>(505) 884 &ndash; 0510</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Email</strong>
                    </td>
                    <td>
                    <a href="mailto:office@bacahoward.com">office@bacahoward.com</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cpa-abv">
                <img src={accreditationLogo} alt="CPA/ABV Accreditation Logo" />
              </div>
          </div>
          <a className="map" href="https://goo.gl/maps/FwHn5TdGceq" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <div className="copyright">&copy; 2019 Baca &amp; Howard P.C.</div>
      <div className="credit"><small>Website by <a href="https://iteamnm.com/?utm_source=bacahoward&utm_medium=site" target="_blank" rel="noopener noreferrer">iTEAM Consulting</a></small></div>
    </div>
    </footer>
  )
}

export default Footer
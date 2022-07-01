import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import '../styles/site.scss'

export default () => {
  return (
    <>
      <SEO title="Careers | Baca &amp; Howard P.C." />
      <Layout>
        <div className="container">
          <h1>Careers</h1>
          <section className="card">
            <h2>We're Hiring!</h2>
            <p>Uptown full service CPA firm hiring <strong>CPAs</strong> or <strong>CPA Candidates</strong> (ready to take the CPA exam) for audit, tax, business valuation and consulting, including litigation support. Salary DOE. Good opportunities for advancement, excellent working conditions and benefits. Candidates must be proficient with <i>Microsoft Office, CCH Prosystem fx Enagement, Ultratax CS, Practice CS, and Planner CS.</i> Candidates will be invited for personal interview based on complete resume including (a) job history from college through present day, (b) references, and (c) salary requirement. <a href="mailto:adam.baca@bacahoward.com" target="_blank" rel="noopener noreferrer">adam.baca@bacahoward.com</a></p>
          </section> 
        </div>
      </Layout>
    </>
  )
}
import React from 'react'

const AdminHome = () => {
  return (
    <div><main>
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1>Welcome to Admin Panel</h1>
          <p>
            Are you ready to take your business to the next level with
            cutting-edge IT solutions? Look no further! At Thapa Technical,
            we specialize in providing innovative IT services and solutions
            tailored to meet your unique needs.
          </p>
          <div className="btn btn-group">
            <a href="/contact">
              <button className="mybtn mx-2">connect now</button>
            </a>
            
          </div>
        </div>

        {/* hero images  */}
        <div className="hero-image">
          <img
            src="../adminHome.png"
            alt="coding together"
            width="400"
            height="500"
          />
        </div>
      </div>
    </section>
  </main></div>
  )
}

export default AdminHome
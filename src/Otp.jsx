import React from 'react'

const Otp = () => {
  return (
    <>
      <div className="otp">
        <aside>
          <h3>OTP Sent Successfully</h3>
          <input
            type="text"
            placeholder="Enter Your Otp"
            required
            maxLength={4}
            minLength={4}
          />

          <button>otp</button>
        </aside>
      </div>
    </>
  );
}

export default Otp
import React from 'react'

const Group = () => {
  return (
    <>
      <div className="info">
        <div className="details">
          <p>
            <i className="fa-solid fa-child"></i> Member-1
          </p>
          <input type="text" placeholder="Age" />
        </div>

        <div className="details">
          <p>
            <i className="fa-solid fa-child"></i> Member-2
          </p>
          <input type="text" placeholder="Age" />
        </div>

        <div className="details">
          <p>
            <i className="fa-solid fa-child"></i> Member-3
          </p>
          <input type="text" placeholder="Age" />
        </div>

        <div className="details">
          <p>
            <i className="fa-solid fa-child"></i> Member-4
          </p>
          <input type="text" placeholder="Age" />
        </div>

        {/* <div className="details">
          <p>
            <i className="fa-solid fa-child"></i> Member-5
          </p>
          <input type="text" placeholder="Age" />
        </div> */}
      </div>
    </>
  );
}

export default Group
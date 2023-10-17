import React from 'react'
import { useState } from 'react';
import Child from "./Child"

const Family = () => {
  let [count,setCount]=useState([]);
  let [dCount,setDCount] = useState([]);


function handleDaughter(gender){
  setDCount([...dCount,gender])
}

function handleSon(gender) {
  setCount([...count, gender]);
}


  return (
    <>
      <div className="info">
        <div style={{ display: "flex", width: "100%", flex: 1, gap: "1em" }}>
          <div className="details">
            <p>
              <i className="fa-solid fa-child"></i> self
            </p>
            <div className="box">
              <input type="number" placeholder="Age" />
            </div>
          </div>
          <div className="details">
            <p>
              <i className="fa-solid fa-child"></i> spouse
            </p>
            <div className="box">
              <input type="number" placeholder="Age" />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", flex: 1, gap: "1em" }}>
          <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
            {/* son */}
            <div className="details">
              <p>
                <i className="fa-solid fa-child"></i> Son
              </p>
              <div className="count">
                <div className="box">
                  <input type="number" placeholder="Age" />
                </div>
                <button
                  onClick={() => {
                    count.length<=1 && handleSon("Son");
                    
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            {count.map((e, index) => (
              <Child
                key={index}
                relation={e}
                members={count}
                setMembers={setCount}
                id={index}
              />
            ))}
          </div>
          <div style={{ flexDirection: "column", display: "flex", flex: 1 }}>
            <div className="details">
              <p>
                <i className="fa-solid fa-child"></i> Daughter
              </p>
              <div className="count">
                <div className="box">
                  <input type="number" placeholder="Age" />
                </div>
                <button
                  onClick={() => {
                    
                     dCount.length <= 1 && handleDaughter("Daughter");
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            {dCount.map((e, index) => (
              <Child
                key={index}
                relation={e}
                members={dCount}
                setMembers={setDCount}
                id={index}
              />
            ))}
          </div>
        </div>

        {/* {members.map((e, index) => (
          <Child
            key={index}
            relation={e}
            members={members}
            setMembers={setMembers}
            id={index}
          />
        ))} */}
      </div>
    </>
  );
}

export default Family
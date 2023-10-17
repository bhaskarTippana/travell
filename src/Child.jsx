import React from 'react'
 const Child = ({relation,members,setMembers,id}) => {
  // console.log(relation,members,setMembers);
  // console.log();

  function handleRemove(id){
   setMembers(members.filter((e,index)=> index !== id));
  }






  return (
    <>
      <div className="details">
        <p>
          <i class="fa-solid fa-child"></i> {relation}
        </p>
        <div className="count">
          <div className="box">
            <input type="number" placeholder="Age" />
          </div>
          <button onClick={() => {
            handleRemove(id);
          }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Child;
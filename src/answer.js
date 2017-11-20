import React from 'react'

const Answer = ({
    submited,
    isCorrect,
    ans,
    handleButton1
}) => {
  return (
    <div className="mainBody">
    
       <p className=" questionTitle"> Your answer is {isCorrect ? 'CORRECT' : 'WRONG'} </p>
       <p className="questionTitle">Answer:</p>
       <p className="question"> {!submited ? "" :ans } </p>

       <div className="buttonnext ">
         <input type="button" value="NEXT" onClick={handleButton1} />

       </div>


     </div>
  )
}

export default Answer

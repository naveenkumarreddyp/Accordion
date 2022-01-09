// import React, { useState } from 'react';

// const Accordion = ({index, question, answer})=>{
//     const [opened, setOpened] = useState(false)
//     const selected = (index)=>{
//         if (opened === index){
//             return setOpened(null)
//         }
//         else{
//             setOpened(index)
//         }
//     }
//     return (
//         <div className="item">
//             <div className="question" onClick={()=> selected(opened)} key={index}>
//                 <h3>{question}</h3>
//                 <span>{opened === index? '˄' : '˅'}</span>
//             </div>
//             {opened === index ? (<p>{answer}</p>): null}
//         </div>
//     )
// }

// export default Accordion


// function App() {
//     return (
//       <div className="body">
//         <div className="accordion">
//           <h2>All About React...</h2>
//             {data.map((data) => (
//               <Accordion index={data.id} question={data.question} answer={data.answer} />
//             ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default App;
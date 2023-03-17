// import React, { useState } from "react";

// import { useMutation } from "@apollo/client";
// import { ADD_QUESTION } from "../utils/mutations";

// const CreateQuestion = (props) => {
//   const { onRemove, number } = props;
//   const [formState, setFormState] = useState({
//     type: "",
//     name: "",
//     title: "",
//     isRequired: "",
//     choices: [],
//     correctAnswer: "",
//   });

//   const [addQuestion, { error, data }] = useMutation(ADD_QUESTION);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = await addQuestion({
//         variables: { ...formState },
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <div className="card-body">
//             {data ? (
//               <p>Question saved!</p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input className="form-input" placeholder="question name (no spaces):" name="name" type="text" value={formState.name} onChange={handleChange} />
//                 <input className="form-input" placeholder="question text:" name="title" type="text" value={formState.text} onChange={handleChange} />
//                 <input className="form-input" placeholder="choice 1:" name="choiceOne" type="text" value={formState.choiceOne} onChange={handleChange} />
//                 <input className="form-input" placeholder="choice 2:" name="choiceTwo" type="text" value={formState.choiceTwo} onChange={handleChange} />
//                 <input className="form-input" placeholder="choice 3:" name="choiceThree" type="text" value={formState.choiceThree} onChange={handleChange} />
//                 <input className="form-input" placeholder="choice 4:" name="choiceFour" type="text" value={formState.choiceThree} onChange={handleChange} />
//                 <input className="form-input" placeholder="correct answer:" name="choiceCorrect" type="text" value={formState.choiceCorrect} onChange={handleChange} />
//                 <button style={{ cursor: "pointer" }} onClick={() => onRemove()}>
//                   Remove
//                 </button>
//                 <button style={{ cursor: "pointer" }} type="submit">
//                   Submit
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default CreateQuestion;

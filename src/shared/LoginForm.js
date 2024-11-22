import React from "react";

// function LoginForm(prop) {
//     const { name } = prop; // desctructing the objec to get the name property
//     return (
//         <div>
//             <h2>Welcome {prop.name}! to react  </h2>
//         </div>
//     )

// }
function LoginForm({ name }) {
    return (
        <div>
            <h2>Welcome {name}! to react  </h2>
        </div>
    )

}

export default LoginForm;
// import { useState } from 'react';
//
// const Home = ({ LoginData }) => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     };
//
//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };
//
//     const sendData = async () => {
//         try {
//             const response = await fetch('http://localhost:3030/users/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, password }),
//             });
//
//             try {
//                 const result = await response.json();
//                 console.log(result);
//             } catch (error) {
//                 console.error('JSON形式の解釈に失敗しました:', error);
//             }
//         } catch (error) {
//             console.error('エラーが発生しました:', error);
//         }
//     };
//
//     return (
//         <div>
//             <h2>{LoginData.data.content}</h2>
//             <div>
//                 <h2>{LoginData.data.content}</h2>
//                 <div>
//                     <div>
//                         <label>Name:</label>
//                         <input type="text" value={name} onChange={handleNameChange}/>
//                     </div>
//                     <div>
//                         <label>Password:</label>
//                         <input type="password" value={password} onChange={handlePasswordChange}/>
//                     </div>
//                     <button onClick={sendData}>{LoginData.data.content}</button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export async function getStaticProps() {
//     try {
//         const response = await fetch('http://localhost:3030/users/signup');
//         const LoginData = await response.json();
//
//         return {
//             props: {LoginData},
//         };
//     } catch (error) {
//         console.error('エラーが発生しました:', error);
//         return {
//             props: {LoginData: null},
//         };
//     }
// }
//
// export default Home;  // () を削除してデフォルトエクスポートします


import { useState } from 'react';

const Home = ({ SignupData }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const sendData = async () => {
        try {
            const response = await fetch('http://localhost:3030/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            });

            try {
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('JSON形式の解釈に失敗しました:', error);
            }
        } catch (error) {
            console.error('エラーが発生しました:', error);
        }
    };

    return (
        <div>
            <h2>{SignupData.data.content}</h2>
            <div>
                <div>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={handleNameChange}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <button onClick={sendData}>{SignupData.data.finish}</button>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const response = await fetch('http://localhost:3030/users/signup');
        const SignupData = await response.json();

        return {
            props: {SignupData},
        };
    } catch (error) {
        console.error('エラーが発生しました:', error);
        return {
            props: {SignupData: null},
        };
    }
}

export default Home;  // () を削除してデフォルトエクスポートします

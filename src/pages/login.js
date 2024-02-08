// import { useState } from 'react';
//
// const Login = () => {
//     const [name, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//
//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };
//
//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };
//
//     const handleLogin = async () => {
//         try {
//             const response = await fetch('http://localhost:3030/users/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, password }), // ここで username を参照しています
//             });
//
//             if (response.ok) {
//                 // ログイン成功時の処理
//                 console.log('ログイン成功');
//             } else {
//                 // ログイン失敗時の処理
//                 setError('ログインに失敗しました。ユーザー名とパスワードを確認してください。');
//             }
//         } catch (error) {
//             console.error('ログインエラー:', error);
//             setError('ログイン中にエラーが発生しました。後でもう一度お試しください。');
//         }
//     };
//
//     return (
//         <div>
//             <h2>ログイン</h2>
//             <div>
//                 <div>
//                     <label>ユーザー名:</label>
//                     <input type="text" value={name} onChange={handleUsernameChange}/>
//                 </div>
//                 <div>
//                     <label>パスワード:</label>
//                     <input type="password" value={password} onChange={handlePasswordChange}/>
//                 </div>
//                 <button onClick={handleLogin}>ログイン</button>
//                 {error && <p>{error}</p>}
//             </div>
//         </div>
//     );
// };
//
// export default Login;


import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
                // ユーザー名とパスワードを送信
            });

            if (response.ok) {
                // ログイン成功時の処理
                console.log('ログイン成功');
            } else {
                // ログイン失敗時の処理
                setError('ログインに失敗しました。ユーザー名とパスワードを確認してください。');
            }
        } catch (error) {
            console.error('ログインエラー:', error);
            setError('ログイン中にエラーが発生しました。後でもう一度お試しください。');
        }
    };

    return (
        <div>
            <h2>ログイン</h2>
            <div>
                <div>
                    <label>ユーザー名:</label>
                    <input type="text" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>パスワード:</label>
                    <input type="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button onClick={handleLogin}>ログイン</button>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default Login;

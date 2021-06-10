import { useState } from 'react';
import axios from 'axios';

const projectID = 'e803b8fe-7327-4530-bcf1-4dba6dab8399';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops!..Incorrect...Credentials...');
    }
  };

  return (


    <div className="login-box">
      <div>
        <h1 className="user-box poktext">JOIN DISSCUSSION</h1>
        <form id="choto" onSubmit={handleSubmit}>
          <div className='user-box'>
          <input type="text" value={username} className="input" onChange={(e) => setUsername(e.target.value)}  placeholder="USERNAME" required /><label>USERNAME</label></div>
          <div className='user-box'>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="PASSWORD" required /><label>PASSWORD</label>
          </div>
            <div align="center">
    <button type="submit">Submit</button>
          </div>
          <div className="poktext">{error}</div>
        </form>
        
      </div>
    </div>)
}
    
    
    
    


export default Modal;

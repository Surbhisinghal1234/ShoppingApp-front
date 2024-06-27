import React, { useState } from 'react';
import axios from 'axios';

function User() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');



  async function handleSubmit(e){
   e.preventDefault();
   try{
    const res = await axios.post("http://localhost:3000/users/register",
       {
        fullName, email,password,
      });
      console.log(res.data,"owner created sucessfully")
      setMessage("owner created")

  } catch(err){
    setMessage("error",err)
  }
  }
  return (
   <>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Create User</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Full Name:</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-500 text-white font-bold rounded-lg "
                    >
                        Submit
                    </button>
                </form>
                {message && <p className="mt-4 text-red-500">{message}</p>}
            </div>
        </div>
   </>
  )
}

export default User

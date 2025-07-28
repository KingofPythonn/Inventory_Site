import React,{useState} from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";



const Login =() =>{

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   const {login} = useAuth();
   const navigate = useNavigate();




   const handlesubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      

      try {
         
         const response = await axios.post("http://localhost:3000/api/auth/login", { email,password});
         if (response.data.success) {
          await login(response.data.token, response.data.user);
          if (response.data.user.role === "admin") {
               navigate("/admin/dashboard");
            }else {  
               navigate("/customers/dashboard");
            }

         }
         else {
            alert    (response.data.error);
           }
      

      } catch (err) {
         if(err.response){
            setError(err.response.data.message);
         }


      } finally {
         setLoading(false);
      }

   }




      return (
         <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-b from-green-600 from-50% to-gray-100
         to-50% space-y-6">

            <h2 className="text-3xl text-white">Inventory Managment System</h2>
            <div className="border  bg-white rounded shadow-lg p-6 w-80">
            <h3 className="text-2xl font-semibold mb-4">Login</h3>
            {error && <div className="text-red-500 mb-4">{error}</div>}



            <form onSubmit={handlesubmit}>
               <div className="mb-4">
                  <label className="block text-gray-700">Email:</label>
                  <input type="email" onChange={(e)=> setEmail(e.target.value)} className ="w-full px-3 py-2 border"  id="email" name="email" required placeholder="Enter Email" />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700">Password:</label>
                  <input type="password" onChange={(e)=> setPassword(e.target.value)} className ="w-full px-3 py-2 border" id="password" name="password" required placeholder="Enter Password" />
               </div>
               <div className="mb-4">
                   <button type="submit" className="w-full bg-green-600 text-white py-2">{loading ?"Loading....":"Login"} </button>
               </div>
              
            </form>
            </div>
            <p>Don't have an account? <a href="/register">Register here</a></p>
         </div>
      )
}
export default Login;
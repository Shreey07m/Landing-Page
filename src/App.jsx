import { useState,useEffect } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Mic, Send } from "lucide-react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  

  const [interviewStarted, setInterviewStarted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [responses, setResponses] = useState([]);

  const startInterview = () => {
    setInterviewStarted(true);
    setResponses([
      "Welcome to the AI Interview Simulator! Let's begin.",
      "Tell me about yourself.",
    ]);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      setResponses([...responses, `You: ${userInput}`, "AI: Interesting! Can you elaborate?"]);
      setUserInput("");
    }
  };





  return (
    <div className="font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-5">
          <div className="text-3xl font-extrabold text-blue-600">Edudigno</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden block text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"} {/* Toggle between hamburger and close icon */}
          </button>

          {/* Desktop Menu */}
          <ul className="md:flex space-x-8 hidden font-medium text-lg">
            <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-600">Companies</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Post a Job</a></li>
            <li><a href="#" className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">Login</a></li>
            <li><a href="#" className="hover:text-blue-600">Register</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden bg-white shadow-lg fixed top-16 left-0 w-full py-5 space-y-4 text-center font-medium text-lg transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-[150%]"
          }`}
        >
          <li><a href="#" className="block py-2 hover:text-blue-600">Jobs</a></li>
          <li><a href="#" className="block py-2 hover:text-blue-600">Companies</a></li>
          <li><a href="#" className="block py-2 hover:text-blue-600">Services</a></li>
          <li><a href="#" className="block py-2 hover:text-blue-600">Post a Job</a></li>
          <li><a href="#" className="block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">Login</a></li>
          <li><a href="#" className="block py-2 hover:text-blue-600">Register</a></li>
        </ul>
      </nav>
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-indigo-500 py-36 mt-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            “Connecting talent with <span className="text-yellow-300">opportunity”</span>
          </h1>
          <p className="text-xl mt-5">Your next career move is just a few clicks away.</p>

          {/* Search Inputs */}
          
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-white/80 p-4 rounded-lg">
            <input
              type="text"
              placeholder="Skills, Companies"
              className="px-6 py-4 border rounded-lg text-lg text-gray-800 focus:ring-2 focus:ring-blue-400 w-full md:w-auto flex-grow" // Added flex-grow
            />

            <input
              type="text"
              placeholder="Location"
              className="px-6 py-4 border rounded-lg text-lg text-gray-800 focus:ring-2 focus:ring-blue-400 w-full md:w-auto flex-grow" // Added flex-grow
            />
            <select
              className="px-6 py-4 border rounded-lg text-lg text-gray-800 focus:ring-2 focus:ring-blue-400 w-full md:w-auto flex-grow" // Added flex-grow
            >
              <option>Experience Level</option> 
              <option>Fresher</option>
              <option>1-3 Years</option>
              <option>3+ Years</option>
            </select>
            <button className="bg-yellow-400 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-yellow-500 transition duration-300 w-full"> {/* w-full for mobile responsiveness */}
                Search
            </button>
          </div>
         
        </div>
        {/* Add an illustration or image */}

      </section>

      <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose Edudigno?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-bold mb-4">Wide Range of Jobs</h3>
        <p className="text-gray-600">Access thousands of job opportunities across various industries.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-bold mb-4">Easy Application Process</h3>
        <p className="text-gray-600">Apply to jobs with just a few clicks and track your applications.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-bold mb-4">Career Resources</h3>
        <p className="text-gray-600">Get access to resume builders, interview tips, and more.</p>
      </div>
    </div>
  </div>
</section> 


      {/* Add these sections below the Hero Section */}

 {/* Blog/Resources Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Career Resources & Blogs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src="https://resumegenius.com/wp-content/uploads/resume-icons-for-contact-information-header-image.png" alt="Resume Tips" className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-xl font-bold mt-4">How to Write a Winning Resume</h3>
        <p className="text-gray-600 mt-2">Learn the key elements of crafting a resume that gets you hired.</p>
        <a href="#" className="text-blue-500 font-semibold mt-3 inline-block">Read More →</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src="https://staticlearn.shine.com/l/m/images/blog/mobile/basic_accounting_questions_for_interview.webp" alt="Interview Tips" className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-xl font-bold mt-4">Ace Your Next Interview</h3>
        <p className="text-gray-600 mt-2">Master the most commonly asked interview questions.</p>
        <a href="#" className="text-blue-500 font-semibold mt-3 inline-block">Read More →</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src="data:image/jpeg;base64,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" alt="Tech Trends" className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-xl font-bold mt-4">Top Tech Skills in Demand for 2024</h3>
        <p className="text-gray-600 mt-2">Stay ahead in your career with these trending tech skills.</p>
        <a href="#" className="text-blue-500 font-semibold mt-3 inline-block">Read More →</a>
      </div>
    </div>
  </div>
</section>
     

      {/* Job Categories Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Popular Job Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"> {/* Changed to 4 columns */}
            {/* First 4 Categories */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="data:image/png;base64,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" alt="Engineering" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Engineering</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfn_2re53FFfDkJhV9Xj51BglIjNN8igwOJA&s" alt="Marketing" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Marketing</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="data:image/png;base64,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" alt="Startup" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Startup</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhMSEBMVFhMVGRcYFhcYFhkYFxgWFxYXGBcYHhYaHigiGBslGxUVJjEhJSorLi4uGCAzODMtNygtLi0BCgoKDg0OGhAQGysiICY3Ly8xKysyLSstLS0tLS4rLS0vLS0vLy0tKy0tLS0tLisrLS8tLS0tLS0uLy03LS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCAQj/xABMEAABAwIDAwYKBwUGBAcAAAABAAIDBBEFEiEGMVEHEyJBYXEUMjNCcoGRobGyIzRSc5LBwhU2Q2KCNWOis8PRVJPS4RYlRVOD0+L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQQG/8QAMBEAAgIBAQYDCAIDAQAAAAAAAAECAxEhBBIxMkFRE2FxFEKBkaGx0fAiUiPB4QX/2gAMAwEAAhEDEQA/ALxREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERRfa/baDDwW+UntpG07uBe7zR7zwUpZKynGCzJnexLEIqaN0s72sY3eT8BxPYNVT+2XKZPNdtEXQxt1D9OceRu36Nb2dfXwXErKysxea7rvI1sOjFE3jrowdp1PauvFhEFJG5xayplsbmRpMI4hsehd6brdgG9aqGDmW7W5NJaL6s7exfK1HLlhxG0Um4TDSJ3pD+Ge3xe5Wix4cAQQQdQRqCON1+c6zZyCpu6icIZf+Hlf0HH+6nd8j7ekV92b2xrsGkMD2uMbT0qeW7cvawkXZ6rg8DvVHHseyFzXN8z9GouBsptfS4kzNA+zwOnE6wkb6usdouF31Q9CaeqCIiEhERAEREAREQBERAEREAREQBERAEREAREQBeJZAxpc4gNaCSSbAAC5JJ3Cy9rRx2ldNTVETLZpIpGNvoMzmOaLnhcoQ+BW+2fKYTmhw82G505Gp9AHd6R9XFRfDNmHP+lrHOYHdLJ/Gkvrc38mD9p2p6gd6kEWzrMOeGm0lQACZCNGE62jadxH2jrwyr643NzqTvPWV6oxWND57adplvNS1f0X7+5PQcGsEcbRHENQxu6/FxOr3fzG5WpiXkn+iVtxROeQ1oJcdwAuSpLRbGc4w+EuLQ4WytIuL8XG4v2C6mTUUYUVW3WJpZ8yn67ycnou+BWnR7REsENbGKmBujQ42miH91N4zerom7dNynu1PJ5UwskMH07MrtGi0g0Pmed/T7FU0rC0lrgQRcEEWIPAg7isVhnZkpRZJ34E5rzPhU7pTESS1t2VcVjYkxjx2/zsuNdQFOtiuVwHLDiWh0AqGjQ/eMG70m6dg3qusLeW1Mrmkhwc4gg2IOfeCNxUsosNjxeUQztDah4cW1LAA4lrS76Vg0l3b9HdqhloNp/xLzgmbI1r2ODmOALXNIIc0i4II0II617XO2doHU1LT07iC6GKOMkbiWMDSRfq0XRWZ7kEREAREQBERAEREAREQBERAEREAREQBERAEWpiWJRU7c8zw0dXEngBvJUUptrn1NVDHGMkRdrexc4WO/qA7B7UIyae2X1p3ot+CYRs1LPZz/o4+JHSI7G/mfepDjE1LTymaUZ5iBlbvItuNtze8+pRjFtoJqi4JyM+y3r7z1/BeiLbWEcC+umu2UrHl55V/tndkxOloQWU7Q+TrN76/wAz/wAh7lEdpMVlqI3mR2gGjRo0dw/M6rEvFRSvlje2JjnuynRrS4+wK26ksmHtM7JRitFlaI1cJ2+qqNpzHn42gnK89KwG4Sbx67jsUgbXYPtAA2UCKpIsM1o5gf5X+LKN+hv3KtcQaQyQEEENdcHQg2PV1KKOGhWODs+K1o9UWti3JlU00sk0BE8brmwFpG3de2Tzu8G/YvvJ00jEYQQQRzgIOhB5t+hHUufsrt9WU00sbn89C1zrMkNyBnIs2TeNOo3A4KzcAx2hr5mSNYGVbQbBws+2Ug2cNHixOnVvsFDyaRUW04kpila8Xa4OAJFwQdWkhw06wQQRxC9qlqyKroa6pqMJlLi+aR01FKRllcXnM6N2gzHho4bgX7lP9jNu6bErxi8NUzylNJ0ZGkb7A2zDtGo6wFQ9RKkREAREQBERAEREAREQBERAEREAREQBERAQTlN303dL/pqPbJ/XIPS/SVIeU7fTd0v+muNszRSsqqdz43taXaEtIB6J6yFJR8TpbY/Wnei34Lk0tK+V2WNpceAHxPV61NsWwWJ0rp6iTKyzRlvlvYdbvyC59VtNHC3m6OMAfaIsO/LvPeV6Iy0SRwr9mirZTtlhZenFs+UeyzYxzlXIGtHmg2Hrd+Q9q+121kNKwilhzNbqfMB7jYkntIUbrK2SZ2aV5ce3cO4bh6lz8S8k/uRwzzFIbVGElGmOPN6tkqfi2F4q0sqWhkhFun0Ha8JRoe6/qUR2h5GpGgvoJhI3qjls1/qkHRd6w3vUTrvJyei74FaeAbYVtB9XncGD+G/pxfgPi/02Kyw+h1nZF8yNp+GTU1VM2eJ8ZJcW5mkBwz3uDucNRqFMOTb+0Iu6T/Lcu1hnKZT1TpKevp7BpcC4DnIyA61ywjM091138A2cohOyroZbtbmBY12dvSaR19Jh13FQ33Lxgs5iyF499ZqPvZPnKxU9PHU1FM6oaTLHJEY5mnLK3K8WaXfxGdWV24E2IWXH/rNR97J85WPCPLw/eR/OFU26lzoiKDQIiIAiIgCIiAIiIAiIgCIiAIiIAsVTUMiaXyODWje5xAA9ZUO2m5Qoqcuip287K0lpJuI2uGhBO9xB6h7VBmurcWlaCXPvmtfowty+NbS1xcbru161dQfU809pinux1ZKNptt4XPb4NE2R7Lhssg6Lb2uWsO86DU23dagUu2tfFWNy1UlnuZma6zmm5sbNcCG+qyn2z2xUTRUmp+lfC8saBcR+Rjkvl3uN5CNdNBoqhr/rcXfF8wVsLoeeUrN5OTLh2weTVPBJsA2wvoLtF7cFxFL8Y2flqKl7hZrOj0j12aL2A1PuXsUNFRazO5yQdR6R/ANB61oppJI51uyWTtnKX8Vl6sjmHYRNP5Nht9o6N9vX6rrvjZSnjYfDJRZwt43Nt17b3J9nctbENrpHdGBojbxNi72bh71FcZmdJHI57i42OpNyj3n5CEtmrklFb77vRfI6mO8l5cx/gcwOZps2TtH/ALjR+n1qp8e2XrKK/hMD2NF+nbNH+NtwPWpHS49U0jHOp5nss0kC92XA+w67fcu7gvLO8DLXU7XjrfFobdsbjY/iHcstUdV+HLyIHR/WZ/Sf85U65Nz/AOYRdokv2/RuUiio8ExKR/MuZFUEkODfoXl19foz0Xm/WAe9bez+w0lHWRzNka+JucG4LXjMwgaag6niobLxraaa1Ixj/wBaqPvZPnKx4P5eH7yP5wtLGts6Lw2qgqoZISyaVnPxHnGuyvIzPhOoOmuQ+pdjAqNs0sUtJNFUxtkYXGJ13NGYePEekz1hVN2i3ERFBcIiIAiIgCIiAIiIAiIgCIiAIiICpqbAYZ24vUSAl8L6nmxezQQ17g6w3m/qUwqcWYaiBlEwTFjZW2YQ2JviDylsthbUNuRpoovR0DZIcae8v6D6ktaHlrMwY8hxa22Y3tvuNBopPLjEb6iBtGznsrZm9DoxDyf8UjLYW1y3IuNFpI8lKSX73Zr0uFvm8OdUyHSQ5oo3FsRcKeHUnR79MosTbS9tVRtf9bi74vmCvOkw6Wbw0zzOYOcdmjhOVhd4PEdZLZyLWFgQDY8bKjK/63F3xfMERnbxj8fuXZtXi0zZnxNeWsFvF0Ju0E3O/rUaXe2jpJJauQRsc49DcN3QG87h61nodj5HazPDBwHSd7dw962i4xijlXVXX3Swm9X6EZWZ2Dz1EbxDE51wbHQA+t1gpaPAKThI8f8AyOv8rfcufi+28jWOdBG1uUXGe7r+oEW9qhybWiLQ2aquS8SevZalW45h8sDJBNG+M5XeM0jqO47j6lDXble9NymxOYRWU/RscxZZ7SLa3Y62nrK1zhmz2J+SdHFI7dkcad9z/dus1x/pKyydV1KXKyq6L6xP6T/nKsfk3xWfwuOAyvMRD7sJu3RhItfxdQN1lmq+SVzJJJaaoDg+5ySNsRc38dtwfwhZtjtmaqlr4nTREMAk6YIc3VjgNRu9dlDaaJhCUZLJXLMBjxHH6ulle9jHz1ZzMtmBYXuG8EEXCP5O6gET4TVR1WXVpieYKlnbzbiCND1Ovv0XW2T/AHoqfva74SLSwym6EroJhm5ttgTzTweehO8nL1dTikY5NLrnW1hZ4mbCuVXFMOeIa+Mygb2ztMU3qfbXvLT3qztmuVfDq0hjpDTynzJrNBPZJ4h36AkE8FAZ9oqmOnjjrY2VDHPkBZVR57ta2EtLXHXe51nXKifKLhNPTyUb6WIxMqYGzOjzue1ri8ghpdrbsUOLRaq+Nmi4n6kReY9w7gvSqbBERAEREAREQBERAEREAREQFXUmHRyw4zJJclj6ksbmdkDgx5a7IDYuBtYkG3UpPUY0x9RAKNhnLWzAZOjFrzf8V3RIFtcuY6jRRiioYnw4zJILuY+oyXccodleQcl8pde1ja/BSapx1klTB4Ix05ayYDIMsevN7pXWaQLa5b9Wi0Z4q3hdvvxZgp6Kol8NdLNzQEji6OHrd4PF/FcMxbbLuDetUbX/AFuL0ovmCvOnpaqUVhfK2FvOOLo4gHuLuYi05148WwbuYDv1VGV/1uL0ovmCIrasNfH7l+bQbSvgkdFGxtxbpHXeAfFHfxUVrcTmm8pI4jhub+EaLc2u+tSf0/IFpUmGTS+TjcRxtYfiOi2iopZOTtVt1lsoZbWXov8AhqLXxLyT+5S6k2OldrI9rBwHSP5D3rZnwbD4GkVEgdcWOZ9vcy1kdiFOw27ylJYXmUxXeTk9F3wKiztxV+VPJ/QVbHeC1BbmBHRe2VouOB1/xKG4pyNVjL8xNDMO28bj6jcf4lipI68qZdDg4FjdTT1E4hnkY0OfZoccnlD5h6PuVm7EbZ1NTUMp58jg4O6Qbld0Wk9Rsd3BV5LspW088zpaaQNJcQ4DO0gvJBuy9tOKkHJv/aEQ67Sf5bkfAtByUsHH2S/eip+9rv1rQoY4XRzZXuZ9E24kGZo+mh89gudbeYujsf8AvTUffVv61zqCaF0c2aIs+iFzG8kW56HzJLkm9vOH5qaym2+78TZbBOynYITnbzkpcIyJGkZILZo9e3RzRb1rn8qjif2USACaNl7AAeUPUNB3BbLqZjoYubmAtJKRzgMZvkg6xmaNw1LhvWHlXzXwvObu8EZc5g655w65gTm77pZwI2PmfofpKPcO4L0vLNw7l6WR0AiIgCIiAIiIAiIgCIiAIiICrqKigdFi8kzWFzJJxGX7g7K+2UHTNfcd6lFXjLX1NOaWN81mTAZRkYb83qJH2a4C2uW+8KLUcUHN4xJMI+cD6hsbn5c1y1+jb9ZNt2qlVVjQkqYDTxSy2ZMNG5Gm/Nah8mUEC2pF94WkuJ5KsKP73Zgp2VcorLvjgAe7O1redffmIzYPdYAWt5p61RWIfW4u+L5gr1pWVcgrDmihaZHF4AMr78xFoHHK0aAa2O8qisQ+uRelF8wRFLeaPxP0Di2KUsEri6LPNpc5QTuFuk7dpbcuTVbYyu0jY1g7ekfyHuXM26lLJp3De1oI7xGFWlRjE798hHo9H4LWMFhZOddtFzslGLwk3wLFqsUml8pK8jhew/CLBcrEvJP7lsM3DuC18S8k/uV2tDwRlKVicnnVEYabG40PEaH2rrUW1lZBYMqX9zyHjus+/uXIXJ2g3M7z+SwO9vNcC0KHlNqG6TRRyDi27D+Y9wUm2e2vpq2djBC5s9nFrnNabWab2eNRpfqX53o5nBzQHEDMNLm2/grP5Nv7Qi7pP8tyhxRrXbJvBx9jv3oqPvq39a51DXXZNzkUTrRt8zmz5aHT6LL368F0tjP3pqPva39a+UVLXCOU2klBjGWzhUNJ52LdYvB6Ob1BKym2JvGPM0ZXQOgju2SP6Sa1i2QXyQX0OU23dfFa/KqAP2VlNx4Gyxta4z8OpbVTVFsMYmhjJ5ybQsMZ0ZB1RluuvDqC1+VYg/skgZQaNlhcmwz7rneps4FNj536H6SZuHcvS8s3BelkdEIiIAiIgCIiAIiIAiIgCIiAqyilpmNxYzGITF87Ys2XnDcPFm313nqW/tDyjUsMkc0bZJQwSN0GUEvy21dY26PBQLHHA1dSBqeel0Gp8d3UNVhqtm6ypjyw0s5NwbujMYsP5pMoWzS4s5kbZ8sV+5N6blXqC6VsEMTGzyZjnLpHAFjI7C2UXs2+471FcR+uR+lF8wXYp+TmraWuqJKWnAIJ52oaCAD/ACZh710qzZmj55s0mK04DSw5Y43TXym9rtP5KNOhZ7zaciVcoPlKn0P9MKqSrSx/aDC6h0jnTznOLERxEaZcuhe1RgS4M3+HXv7zE0e4rRPRHilV/kk8rVvqduPcO4fBYMS8k/uX07YYePFpJz3ygfAlY5Ns6IgtNA8g771BHwCs5acDzw2bEk3JfX8EZXJ2g3M7z+SmB2iw4/8AprvVUv8A9liqMSwmW3OUE4tuy1DuvvIWWH2Om5wfvL6/gr+m8dnpN+IVpcm39oRejJ8jlxmswS4PM1zbG/RfG7d6RUh2dxfCqWds7JqoFocMskbSOkCN7B2qGnjgWrlBPmRwNiv3pqPvq34vXM2O2fp5qSGV8dpOl02vex3jkb2kX3BSrZ6nw6HFn4kMSBzvmeYnU8jLc9fTnCbGxPBZtl9nmw07II6ykmLc3iygE3cSOi7dvUQWH/IbdOUq14L1z0fqcqtoJYo5HR1lVZrXODJJBNHo0nxZWu4KPcpk5kZg73WzOooibNDRcuBNmtADR2AWViYts7VczKBC5143gZS11yWm1g0qveUykkjhwfnI3syUUTH5mkZXAi7XXHRPYVNmOg/8+VrUvFz8T9Ks3BfV8buC+rI6IREQBERAEREAREQBa1bXxQNzzSMjbxe4NHvWw4XFv+3vXGm2Uo3uzyQNkf8AakLpHe15JUorLe6HExPlOoYriMvmP8jbN/E+3uuotiHK7MdIII2dr3F5t3DLY+1TnFKbDaFofJT07SfFDYWF7j2C3v3LgHlAhYfoqQAek1p9gabe1WzFdDB13S97HoiEu2wxKa/NOc0G5tDCBqd+obf3rTlpsTqPHZWyX+02Yj36K59lNpRXiS0eTm8t+lmvmzdg+ytTGtuqencWMBleNDlIDQesZjvPcCp8TsjN7I3zTbKji2Jr3bqST15W/MQtyHk6xF2+AN9KRn5Eqe03KUwn6SBwHFrw4+wgfFTLDMRiqWCSFwc0+0HgRvBTxWQtgr7sp2LktrzvMDe+Q/k0rdh5JKk+PUQjuD3fEBWfhGLsqedDdHxPcx7esZXEA9xA+I6l0VHiSLrYqiqouSA+dVj1Q/7vW7FyRwefUynuaxvxBU4xvFmUsYe/e4hrG9bnHq7uslae1O0QoWxkxl+ckaOy2sAeB4pvyLrZal0I/DyUUTfGfUO73sHysC9v5LKE7jMO6Qfm1Yhyls/4d3/MH/SpJs9tLDW3Ed2vbqWO324i2hCjfl3Lez1f1RGnck1H1S1I/rj/APrWF3JHTdVRP68h+DQpdtNjjaKISEZnFwa1vHW7vY0H3LpwTNka17DdrgCDxBFwU35dyPZqv6laS8kDPMq3DviB+DgtSXkhk82qYe+Mj4OKsPH8dZR80ZQckji1xG9ulwbdYXUgma9ocwhzXC4INwRxBU+JIq9kq7fcqFvJpiMOsFRGPRlkYfc1bDcN2ggFmvMg4F8UgP8AzNVNtqdqm0DmNdEX5ml2jgLWNusL1tLtIaLIXQF7H7nBwFnfZItw17deCb76j2WK5W16MikO1mMQfWMPMgH2GPDvawvHuXUpOUynuG1UU9M7+dhLfaNf8KluF4gypiZNGei4X7QesHtBuFwoNsI56jwaKF0l3Fubo5LDxna+aNe/TioyuxZVzjwl89fwdvDMWgqRmp5WSDryuBI7xvHrW6uXNs9SudnNPEHjc9rQx47nts4e1dGGPKA0EkDiS4+06n1qDWO91PaIigsEREAREQBERAVPjANdihie4hvOc0OxjPGt2mzj3lWdR4dFC0Mija1o6gB7z1ntKgG3OCSwVHhtODlJDyWi5je22pH2Ta99173W5RcpDMo56F2brLCC0njZxBHdqgO5tfKKaknfC0Me7K0uaAD0nBt7jrAcbKP8nGAxSRuqJWh7sxawOF2tAAubcdfcutS4izGIKiIMMYGUAuIJzG7mmw4FoUTwbGZ8JkfDPESwm5be2u7Ox24ggD2dSAsjEcGgqGFksbSDuIADh2g7wVXuw0zqbEHU17tcZY3cCYsxDrcegfxLpYhykNyEQQuDyNC8iwPGwJze5feT/AJBIauoBBIOQO0cS7xnkdXXbjc9iAjX7XfR180sev0soc3qc3nDcf7HirUhxeF8HhIeOay5iT1W3gjiDpbiq3wijZPic8Ugux76kEet2o4EcVjqMAqmT/s9rnGN7ucB8wtGnOHhYbxxA7EBqYzjjq2qZI7Rgc0Rt+y3MPed5/7KVcq3iU/pP+AXE2uwyOlqKWGPcGMuetzjK67j2ldvlW8Sn9J/wCAyYXtRQR0sUctnObG1r280TdwaARctsde1cPk9gL64yRtIjaHk8A11w1t+O78KlOz+zFJJTQSPga5zo2OJJdqS0Em17LNtTWx4fSOEDWxuf0Iw0AdIjV1hwGt+NkBFdoHvxSuMEJ6EQeGnqu0dJ3rdlbfuK7PJri+aN1LJo+K5aDvyE6j+l3zBRrZhtdA0y0tPmEgHSc2+gJ3dIaX+AWvLU1NJVtqpojG9zi4ttla4bpANTvv7SgJXyq+Rg+8PyFR3AsaqMNLBI0mCUB4adxa4A5mHcDrqPbbeu9ymTtkpqaRhu1zszTxBYSF3sMw2KpoKeOZoc0xR94OQag9RQEI5RcRjqTTyQuDmlj+8G4uCOo9isfFcNZUwuhk3OG/raRucO0FVTtVsxJREnx4T4r7bux3A+4+5XIEBTn7QqMPFTRnTNoTrpxc30m/lwU72D2f8Fh5yQfTSgE8WM3hvf1nt06lGNvf7Ri9GL53Kz0AREQBERAEREAREQBEWCqq2RC73AfE9w3n1IDOtKXCKdxu6CIniY2k+2y5VXtUBpBS1Mx4iF7W/icL+5cepxzFZNIaPmx2i7va4ge5ATWCnZGLMa1o4NAA9yxV/Mltp+by8JMtv8Sr2fDcYn8cyDs51jB7GELUGwVa83dzYPF0hJ9wKAmP7TwunOZppw4dbGBx9rAVin5QKNvi84/0WW+chRyPk5qD40sQ7sx/SFsx8mr/OqGjujJ/UgM7tvqZrs0dK7Nr0iGNOu/UXWN/KVwpfWZf/AMLPHyas86oee5gHxJWyzk5phvkmPrYP0IDiT7f5yC6kiJG4udcj15V5qNv3yWz00Lrbs13W9oUmj2BoxvbI7vkP5WWzHsXQj+BfvfIfi5ARJnKLM0ANgiAGgAzAAdy8zbfOktztLC+27Nra++1wbbgpbJsRQn+CR3SSfDMtaTk/ozu51vc//qBQHEh5Ry0AeCtAGgDZLAAdQGTRZn7fwS25+kLrbtWPt3ZgFuP5OKfzZZh3lh/SFrScmrfNqHDvjB+DggMv/jHD5WtZLA4Nb4rXRMc0dwBNvYuxRbW0GUNZM1gAADS1zAANw1AFlGZOTV/m1DT3xkfqK15OTmoG6WI+tw/SgLAbWU9Q0tEkUjXCxaHNcCOBF1vKp5OT+sG4RO7n/wC4CyQ7P4rB5LnB2Nmbb2F1kBY1Xg8ErxJLExzxaziNRY3Gvet5V7S4njEXjwGQfzMaT7YyPzXao9q5N1RRVMf8zY3Pb8AfigJQi1qKvjmF43eogtcO9rgCFsoAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//Z" alt="MNC" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">MNC</h3>
            </div>

            {/* Second 4 Categories (New Row) */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="https://c8.alamy.com/comp/HXHT9T/recruitment-human-resources-icon-HXHT9T.jpg" alt="HR" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">HR</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="data:image/png;base64,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" alt="Remote" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Remote</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="data:image/png;base64,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" alt="Fresher" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Fresher</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/8920/8920701.png" alt="Internship" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Internship</h3>
            </div>
          </div>
        </div>
      </section>
     


        {/* Featured Companies */}
        <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Top Companies Hiring Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            <div className="bg-white p-8 shadow-xl rounded-lg text-xl font-semibold transform transition hover:scale-105">Google</div>
            <div className="bg-white p-8 shadow-xl rounded-lg text-xl font-semibold transform transition hover:scale-105">Amazon</div>
            <div className="bg-white p-8 shadow-xl rounded-lg text-xl font-semibold transform transition hover:scale-105">Microsoft</div>
            <div className="bg-white p-8 shadow-xl rounded-lg text-xl font-semibold transform transition hover:scale-105">Infosys</div>
          </div>
        </div>
      </section>

        {/* Trending Jobs Section (Like Naukri's "Jobs by Location/Industry") */}
        <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Trending Jobs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example Job Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-medium text-gray-800">Software Engineer</h3>
              <p className="text-gray-600">Google - Bangalore</p>
              <p className="text-gray-600">Experience: 2-5 years</p>
              <p className="text-gray-600">Salary: ₹8-12 LPA</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">Apply Now</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-medium text-gray-800">ML Engineer</h3>
              <p className="text-gray-600">Microsoft - Mumbai</p>
              <p className="text-gray-600">Experience: 0-5 years</p>
              <p className="text-gray-600">Salary: ₹6-12 LPA</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">Apply Now</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-medium text-gray-800"> Site Reliability Engineer</h3>
              <p className="text-gray-600">Amazon - Bangalore</p>
              <p className="text-gray-600">Experience: 0-2years</p>
              <p className="text-gray-600">Salary: ₹8-10 LPA</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">Apply Now</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-medium text-gray-800"> Software Engineer</h3>
              <p className="text-gray-600">Google - Bangalore</p>
              <p className="text-gray-600">Experience: 0-2years</p>
              <p className="text-gray-600">Salary: ₹8-10 LPA</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">Apply Now</button>
            </div>


            {/* Repeat the above div for other trending jobs */}
          </div>
          <div className="text-center mt-6">
            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400">View All Trending Jobs</button>
          </div>
        </div>
      </section>

    <div>


{/* AI interview section*/}
<div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center">
        Virtual AI Interview Preparation
      </h2>
      {!interviewStarted ? (
        <div className="text-center">
          <p className="text-gray-600">
            Prepare for job interviews with real-time AI-driven Q&A sessions.
          </p>
          <button 
            onClick={startInterview} 
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
            Start AI Interview
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg h-60 overflow-y-auto">
            {responses.map((msg, index) => (
              <p key={index} className={msg.startsWith("You") ? "text-right text-blue-500" : "text-left text-gray-700"}>
                {msg}
              </p>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your response..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button onClick={handleSend} className="bg-green-500 text-white px-3 py-2 rounded-lg">
              <Send size={18} />
            </button>
            <button className="bg-gray-300 px-3 py-2 rounded-lg">
              <Mic size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
       

      {/* More sections of your Job Portal */}
    </div>
  

      {/* Testimonials/Success Stories Section (Like Internshala's success stories) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Testimonial */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"I landed my dream job through Edudigno! The platform was easy to use, and the resources were incredibly helpful." - John Doe</p>
              <p className="text-gray-800 font-medium mt-4">- Software Engineer at Google</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"Rising from challenges to achievements, our employees turn aspirations into success stories."-Sarah Williams</p>
              <p className="text-gray-800 font-medium mt-4">- Project Manager at Accenture</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"From perseverance to excellence, our employees transform dreams into remarkable achievements."-ohn Smith</p>
              <p className="text-gray-800 font-medium mt-4">- Data Science Engineer at Microsoft</p>
            </div>
            {/* Repeat the above div for other testimonials */}
          </div>
        </div>
      </section>

    

      {/* Call to Action Section (e.g., "Register Now" or "Find Your Dream Job") */}
    

      <section className="py-16 bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-6">Create your profile and discover exciting job opportunities.</p>
          <button className="bg-yellow-400 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-yellow-500 transition duration-300">Register Now</button>
        </div>
      </section>

     {/* Footer */}
<section className="py-16 bg-white">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
    <p className="text-xl mb-6">Subscribe to our newsletter for the latest job opportunities and career tips.</p>
    <div className="flex justify-center">
      <input type="email" placeholder="Enter your email" className="px-5 py-3 border rounded-lg text-lg text-gray-800 focus:ring-2 focus:ring-blue-400" />
      <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 ml-4">Subscribe</button>
    </div>
  </div>
</section>

<footer className="bg-gray-900 text-white py-14">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10">
    <div>
      <h3 className="text-xl font-bold mb-5">Company</h3>
      <ul className="space-y-3 text-lg">
        <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
        <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-5">Support</h3>
      <ul className="space-y-3 text-lg">
        <li><a href="#" className="hover:text-yellow-400">Help Center</a></li>
        <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-5">Resources</h3>
      <ul className="space-y-3 text-lg">
        <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
        <li><a href="#" className="hover:text-yellow-400">Community</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-5">Legal</h3>
      <ul className="space-y-3 text-lg">
        <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-5">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-yellow-400"><i className="fab fa-facebook-f"></i> Facebook</a>
        <a href="#" className="hover:text-yellow-400"><i className="fab fa-twitter"></i> Twitter</a>
        <a href="#" className="hover:text-yellow-400"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
        
      </div>
    </div>
  </div>
</footer>
</div>

  
  );
}

export default App;

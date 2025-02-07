import { useState,useEffect } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <section className="bg-gradient-to-r from-purple-400 to-indigo-500 py-36 mt-20 text-center text-white">
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
  <img src="https://example.com/illustration.png" alt="Job Search" className="absolute bottom-0 right-0 w-1/3 opacity-50 md:opacity-100" />
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
        <img src="/blog-image-1.jpg" alt="Resume Tips" className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-xl font-bold mt-4">How to Write a Winning Resume</h3>
        <p className="text-gray-600 mt-2">Learn the key elements of crafting a resume that gets you hired.</p>
        <a href="#" className="text-blue-500 font-semibold mt-3 inline-block">Read More →</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src="/blog-image-2.jpg" alt="Interview Tips" className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-xl font-bold mt-4">Ace Your Next Interview</h3>
        <p className="text-gray-600 mt-2">Master the most commonly asked interview questions.</p>
        <a href="#" className="text-blue-500 font-semibold mt-3 inline-block">Read More →</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src="/blog-image-3.jpg" alt="Tech Trends" className="w-full h-40 object-cover rounded-md" />
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
              <img src="your-image-url.jpg" alt="Engineering" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Engineering</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="your-image-url.jpg" alt="Marketing" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Marketing</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="your-image-url.jpg" alt="Startup" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Startup</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="your-image-url.jpg" alt="MNC" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">MNC</h3>
            </div>

            {/* Second 4 Categories (New Row) */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="your-image-url.jpg" alt="HR" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">HR</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="your-image-url.jpg" alt="Remote" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Remote</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="your-image-url.jpg" alt="Fresher" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-center">Fresher</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src="your-image-url.jpg" alt="Internship" className="w-16 h-16 mx-auto mb-2" />
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

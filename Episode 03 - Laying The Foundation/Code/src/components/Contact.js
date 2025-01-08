const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hi, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
            <p className="text-gray-600">
              📍 123 Main Street, Suite 400 <br />
              Cityville, Country 12345
            </p>  

            <h3 className="text-xl font-semibold text-gray-800">
              Contact Details
            </h3>
            <p className="text-gray-600">
              📞 Phone:{" "}
              <a href="tel:+1234567890" className="text-blue-500">
                +1 (234) 567-890
              </a>{" "}
              <br />
              ✉️ Email:{" "}
              <a href="mailto:info@example.com" className="text-blue-500">
                info@example.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault}>
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

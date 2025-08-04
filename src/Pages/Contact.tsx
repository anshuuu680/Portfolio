import { useRef, useState } from "react";
import Button from "../components/Button";
import emailjs from "emailjs-com";
import Colors from "../components/Colors";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(() => {
        setSent(true);
        setError(false);
        form.current?.reset();
      })
      .catch(() => {
        setError(true);
        setSent(false);
      });
  };
  return (
    <div id="contact" className="min-h-screen w-full flex flex-col px-4">
      <div className="w-full flex justify-center">
        <div className="w-fit">
          <Button text="Get In Touch" />
        </div>
      </div>

      <div className="flex flex-col pt-[4em] gap-6 lg:pt-[6em] flex-1">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 items-center">
          <div className="relative w-full md:w-1/2 h-[30vmax] flex items-center justify-center">
            <img
              className="w-[50vmax] h-[50vmax] object-contain pointer-events-none drop-shadow-xl"
              src="vector-2.png"
              alt="Contact Illustration"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 rounded-2xl shadow-lg border border-gray-200">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <h2 className="text-project-detail-lg font-semibold text-gray-800">
                Send a Message
              </h2>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-sm text-heading font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="i.g. John Smith"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm text-heading font-inter font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="text-sm text-heading font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-heading hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
              >
                Send Message
              </button>

              {sent && (
                <p className="text-green-600 text-sm font-medium">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-600 text-sm font-medium">
                  Failed to send. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="flex-1 gap-3 flex-wrap mt-12 px-4 flex items-end py-4">
          <Colors customClass="bg-[#fe832b]" color="#fe832b" />
          <Colors customClass="bg-[#f6f7f6]" color="#f6f7f6" />
          <Colors customClass="bg-[#1b140e]" color="#1b140e" />
          <Colors customClass="bg-[#fae4d3]" color="#fae4d3" />
          <Colors customClass="bg-[#49423f]" color="#49423f" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

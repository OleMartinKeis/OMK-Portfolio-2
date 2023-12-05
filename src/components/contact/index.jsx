import React from "react";

function Contact() {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-darkblue flex justify-center items-center p-4 text-white"
        >
            <form
                method="POST"
                action="https://getform.io/f/d7618dce-86c3-4f99-88e6-d1101404c72e"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <h2 className="text-4xl font-bold  text-orange">
                        Contact Form
                    </h2>
                    <p className="border-b-4 border-pink px-4">
                        Submit the form below or send me an email -
                        keisero@outlook.com
                    </p>
                </div>
                <input
                    className="bg-[#1C5A8D] p-2 my-4"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="my-4 p-2 bg-[#1C5A8D] text-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#1C5A8D] p-2 my-4"
                    placeholder="Your message"
                    name="message"
                    rows="10"
                ></textarea>
                <button className="text-orange border-2 border-orange rounded-md px-4 py-3 m-4 text-center text-xl hover:bg-orange hover:text-black duration-300 font-bold">
                    Let's Talk
                </button>
            </form>
        </div>
    );
}

export default Contact;

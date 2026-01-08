"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const contactDetails = [
    {
        title: "Email",
        value: "tedxcisdubai@gmail.com",
        description: "Reach out for partnerships, press, or general questions."
    },
    {
        title: "Location",
        value: "Cambridge International School, Dubai",
        description: "Find us on campus or arrange a visit by appointment."
    }
];

export default function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const fullName = (formData.get("fullName") as string) || "N/A";
        const email = (formData.get("email") as string) || "N/A";
        const inquiryType = (formData.get("inquiryType") as string) || "General Inquiry";
        const message = (formData.get("message") as string) || "";

        const subject = `TEDxCIS Dubai Inquiry - ${inquiryType}`;
        const body = `Name: ${fullName}\nEmail: ${email}\nTopic: ${inquiryType}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:tedxcisdubai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <Header />
            <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
                <section className="text-center space-y-6 px-4">
                    <p className="uppercase tracking-[0.3em] text-sm text-red-500">
                        Get In Touch
                    </p>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
                        Let's build something remarkable together.
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you are a speaker, sponsor, volunteer, or simply curious about TEDxCIS Dubai,
                        we would love to hear from you. Drop us a message and we will respond within two business days.
                    </p>
                </section>

                <section className="grid gap-10 md:grid-cols-2">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Contact Information</h2>
                            <p className="text-gray-600">
                                Connect with the team directly or follow us on social for live updates about upcoming events.
                            </p>
                        </div>
                        <div className="grid gap-6">
                            {contactDetails.map((detail) => (
                                <div
                                    key={detail.title}
                                    className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <p className="text-sm uppercase tracking-wide text-gray-500">
                                        {detail.title}
                                    </p>
                                    <p className="text-xl font-semibold mt-1">{detail.value}</p>
                                    <p className="text-gray-600 mt-2">{detail.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-gray-200">
                            <iframe
                                title="TEDxCIS Dubai Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.1490714087454!2d55.37207037417415!3d25.265586728929527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d731b6709e1%3A0x60bde96b0e43d58b!2sCambridge%20International%20School!5e1!3m2!1sen!2sae!4v1767844602058!5m2!1sen!2sae"
                                className="w-full h-64"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-gray-200 shadow-lg space-y-6 bg-gray-50">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">Send Us A Message</h2>
                            <p className="text-gray-600">Fill out the form and we will reply shortly.</p>
                        </div>
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Alex Johnson"
                                    name="fullName"
                                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="alex@example.com"
                                    name="email"
                                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">How can we help?</label>
                                <select
                                    name="inquiryType"
                                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                                >
                                    <option>Speaking at TEDxCIS</option>
                                    <option>Sponsorship & Partnerships</option>
                                    <option>Volunteer Opportunities</option>
                                    <option>Press & Media</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us more about your idea."
                                    name="message"
                                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-red-500 px-6 py-3 text-white font-semibold tracking-wide hover:bg-red-600 transition"
                            >
                                Send Message
                            </button>
                            <p className="text-xs text-gray-500 text-center">
                                We value privacy. Your details stay with the TEDxCIS Dubai team.
                            </p>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>

    )
}
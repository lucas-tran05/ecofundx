import React, { useState } from 'react';
import { Mail, Phone, Clock, Upload } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
        attachments: null as FileList | null,
        agreeToPolicy: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            attachments: e.target.files
        }));
    };

    const handleSubmit = () => {
        // Basic validation
        if (!formData.fullName || !formData.email || !formData.message || !formData.agreeToPolicy) {
            alert('Please fill in all required fields and agree to the privacy policy.');
            return;
        }

        console.log('Form Data:', formData);

        // Reset form after submission
        setFormData({
            fullName: '',
            email: '',
            subject: 'General Inquiry',
            message: '',
            attachments: null as FileList | null,
            agreeToPolicy: false
        });

        // Reset file input
        const fileInput = document.getElementById('attachments') as HTMLInputElement;
        if (fileInput) fileInput.value = '';

        alert('Message sent successfully!');
    };

    return (
        <div className="py-32 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        We'd Love to Hear from You!
                    </h1>
                    <p className="text-lg text-gray-600">
                        Have questions about EcoFundX? We're here to help and listen to your feedback.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quick Contact Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/80 backdrop-blur-lg rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Contact</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <Mail className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Email Us</h3>
                                        <p className="text-sm text-gray-600">support@ecofundx.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <Phone className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Call Us</h3>
                                        <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <Clock className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Working Hours</h3>
                                        <p className="text-sm text-gray-600">Mon - Fri, 9AM - 6PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/80 backdrop-blur-lg rounded-lg shadow-md p-6">
                            <div className="space-y-6">
                                {/* Full Name and Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@example.com"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Billing Question">Billing Question</option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        placeholder="Your message here..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                                        required
                                    />
                                </div>

                                {/* Attachments */}
                                <div>
                                    <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-2">
                                        Attachments (Optional)
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-600 mb-2">Drag and drop files here or click to browse</p>
                                        <input
                                            type="file"
                                            id="attachments"
                                            name="attachments"
                                            onChange={handleFileChange}
                                            multiple
                                            className="hidden"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => document.getElementById('attachments')?.click()}
                                            className="text-green-600 hover:text-green-700 font-medium"
                                        >
                                            Browse Files
                                        </button>
                                    </div>
                                </div>

                                {/* Privacy Policy Agreement */}
                                <div className="flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        id="agreeToPolicy"
                                        name="agreeToPolicy"
                                        checked={formData.agreeToPolicy}
                                        onChange={handleInputChange}
                                        className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded"
                                        required
                                    />
                                    <label htmlFor="agreeToPolicy" className="text-sm text-gray-700">
                                        I agree to the{' '}
                                        <a href="/legal?type=privacy" className="text-green-600 hover:text-green-700 underline">
                                            privacy policy
                                        </a>{' '}
                                        and{' '}
                                        <a href="/legal?type=terms" className="text-green-600 hover:text-green-700 underline">
                                            terms of service
                                        </a>
                                    </label>
                                </div>

                                {/* reCAPTCHA Notice */}
                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <div className="w-4 h-4 bg-gray-300 rounded-sm flex items-center justify-center">
                                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                    </div>
                                    <span>Protected by reCAPTCHA</span>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
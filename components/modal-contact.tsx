'use client';

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import './modal-contact.css';

export default function ModalContact({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 方案1: 使用Formspree (免费)
      const response = await fetch('https://formspree.io/f/mqabbloo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // 方案2: 调用自定义API (需要自行实现)
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setIsSubmitting(false);
        }, 1500);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-xl transition-all duration-300">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          &times;
        </button>
        <h2 className="mb-6 text-2xl font-bold text-white">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border border-gray-700 bg-gray-700 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-700 bg-gray-700 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-md border border-gray-700 bg-gray-700 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative">
                <div className="h-16 w-16 text-green-500 animate-[checkmark_0.5s_ease-in-out]">
                  <FaCheck size={64} />
                </div>
                <div className="absolute inset-0 rounded-full bg-green-500/10 animate-[ripple_1s_ease-in-out_infinite]" />
              </div>
              <p className="mt-4 text-lg font-medium text-white">Message Sent!</p>
            </div>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-md px-4 py-2 font-medium text-white transition-all ${
                isSubmitting 
                  ? 'bg-indigo-700 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

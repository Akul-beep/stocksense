'use client';

import { useState } from 'react';

// Your deployed Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyALDSqO0Tvrc57sR5WglHwOVumBqh3cIQJlPgvNckqlbgTKv7VOAT4lgusFiWcK33B/exec';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Use GET with query params to send data
      const url =
        SCRIPT_URL +
        `?email=${encodeURIComponent(email)}&source=${encodeURIComponent('StockSense Landing Page')}`;
      
      await fetch(url, {
        method: 'GET',
        mode: 'no-cors'
      });

      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Failed to save email. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <div className="text-green-600 text-3xl mb-2">🎉</div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          You're on the list!
        </h3>
        <p className="text-green-700">
          We'll notify you when StockSense Academy launches.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        disabled={loading}
        className="w-full sm:w-80 px-6 py-4 rounded-2xl text-gray-900 font-medium text-lg border-2 border-teal-200 focus:ring-4 focus:ring-teal-200 focus:border-teal-400 outline-none disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading || !email}
        className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-lg hover:scale-105 disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Save my spot!'}
      </button>

      {error && (
        <p className="text-red-600 text-sm mt-2 text-center w-full">{error}</p>
      )}
    </form>
  );
};

export default WaitlistForm;

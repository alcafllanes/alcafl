'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const initialForm = {
  name: '',
  email: '',
  type: 'Shopify store build',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const { error } = await supabase.from('messages').insert([form]);

    if (error) {
      console.error(error);
      setStatus('error');
      return;
    }

    setStatus('sent');
    setForm(initialForm);
  };

  if (status === 'sent') {
    return (
      <div className="form-success show">
        <div className="check">ok</div>
        <h3>Message sent</h3>
        <p>Thanks for reaching out, I will get back to you within a day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
      </div>

      <div className="form-row">
        <label htmlFor="type">Project type</label>
        <select id="type" name="type" value={form.type} onChange={handleChange}>
          <option>Shopify store build</option>
          <option>QA / bug testing</option>
          <option>Klaviyo email audit</option>
          <option>Ongoing store management</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me a bit about your store and what you need."
          required
        />
      </div>

      <button type="submit" className="submit-btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'error' && (
        <div className="form-note" style={{ color: 'var(--mauve-600)' }}>
          Something went wrong on my end, try again in a bit or email me directly.
        </div>
      )}

      <div className="form-note">This form saves straight to Supabase, no extra setup needed once your env keys are in place.</div>
    </form>
  );
}

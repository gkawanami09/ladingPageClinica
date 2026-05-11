"use client";

import { FormEvent, useState } from "react";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  preferredDate: "",
  service: "General Dentistry",
  message: ""
};

export function LeadForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
      setFormData(initialState);
    } catch {
      setError("Sorry, something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="text-2xl font-semibold text-slate-900">Request your free consultation</h3>
      <p className="mt-2 text-slate-600">Fill out the form and our team will contact you shortly.</p>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
          Thanks! Your request was received. A BrightSmile coordinator will reach out soon.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-label="Free consultation lead form">
        {[
          ["Full Name", "fullName", "text"],
          ["Email", "email", "email"],
          ["Phone Number", "phone", "tel"],
          ["Preferred Appointment Date", "preferredDate", "date"]
        ].map(([label, key, type]) => (
          <label key={key} className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
            <input
              required
              type={type}
              value={formData[key as keyof typeof formData]}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  [key]: event.target.value
                }))
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </label>
        ))}

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Service of Interest</span>
          <select
            value={formData.service}
            onChange={(event) => setFormData((prev) => ({ ...prev, service: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          >
            {[
              "General Dentistry",
              "Teeth Whitening",
              "Dental Implants",
              "Invisalign",
              "Emergency Dental Care",
              "Routine Cleaning"
            ].map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Message / Notes</span>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            placeholder="Tell us about your needs or preferred times."
          />
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Request My Free Consultation"}
        </button>
      </form>

      <p className="mt-4 text-xs text-slate-500">
        Developer note: replace <code>/api/lead</code> with a Google Apps Script URL, webhook endpoint, or email automation API to store and route new leads.
      </p>
    </div>
  );
}

import Image from "next/image";
import { CalendarCheck2, Clock3, HeartHandshake, PhoneCall, ShieldCheck, Sparkles, Stethoscope, Stars, Smile, Timer, Workflow } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { SectionTitle } from "@/components/section-title";

const benefits = [
  { title: "Experienced Dental Team", description: "Our licensed dentists and hygienists provide consistent, high-quality care for adults and children.", icon: ShieldCheck },
  { title: "Comfortable Modern Care", description: "Digital imaging and gentle techniques help make visits smooth, efficient, and low-stress.", icon: Sparkles },
  { title: "Flexible Appointments", description: "Early, evening, and same-week slots make it easier to fit care into your schedule.", icon: Clock3 },
  { title: "Personalized Plans", description: "Every treatment plan is built around your goals, budget, and oral health needs.", icon: HeartHandshake }
];

const services = [
  ["General Dentistry", "Comprehensive exams, fillings, and preventive care for long-term oral health.", ShieldCheck],
  ["Teeth Whitening", "Professional whitening designed to safely brighten your smile in fewer visits.", Stars],
  ["Dental Implants", "Restore missing teeth with durable, natural-looking implant solutions.", Smile],
  ["Invisalign", "Straighten teeth discreetly with clear aligners and expert treatment tracking.", Workflow],
  ["Emergency Dental Care", "Same-day urgent care for tooth pain, chipped teeth, and unexpected issues.", Timer],
  ["Routine Cleaning", "Regular cleanings and gum care to keep your smile healthy and fresh.", Stethoscope]
] as const;

const testimonials = [
  { name: "Emily R.", quote: "I was nervous about finding a new dentist, but BrightSmile made everything easy. The team was kind, clear, and very professional.", rating: "★★★★★" },
  { name: "James T.", quote: "Got a same-week appointment and a treatment plan I could actually understand. Great experience from start to finish.", rating: "★★★★★" },
  { name: "Monica L.", quote: "Our whole family comes here now. Clean office, friendly staff, and they are wonderful with kids.", rating: "★★★★★" }
];

const faqs = [
  ["Do you accept new patients?", "Yes. BrightSmile Dental Clinic is currently accepting new adult and family patients."],
  ["Do you offer free consultations?", "Yes. We offer free initial consultations so you can discuss your goals and options with our team."],
  ["What services do you provide?", "We offer general dentistry, whitening, implants, Invisalign, emergency care, and routine cleanings."],
  ["How do I book an appointment?", "Use the consultation form on this page or call our office directly for the fastest scheduling."],
  ["Do you treat dental emergencies?", "Yes. We provide same-day emergency appointments whenever possible."]
];

export default function Home() {
  return (
    <main>
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="section-container flex items-center justify-between py-4">
          <p className="text-lg font-bold text-slate-900">BrightSmile Dental Clinic</p>
          <a href="tel:+13125550198" className="hidden items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700 sm:inline-flex"><PhoneCall size={16} /> (312) 555-0198</a>
        </div>
      </header>

      <section className="section-container grid gap-10 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-brand-50 px-4 py-1 text-sm font-semibold text-brand-700">Trusted family dental care in the U.S.</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Get a Healthier, Brighter Smile with a Free Consultation</h1>
          <p className="mt-5 text-lg text-slate-600">At BrightSmile, we combine modern technology with compassionate care to deliver comfortable, personalized dental treatment for every stage of life.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#lead-form" className="rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700">Book Free Consultation</a>
            <a href="tel:+13125550198" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-brand-600 hover:text-brand-700">Call Now</a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {["Same-week appointments", "Friendly dental team", "Modern technology"].map((item) => (
              <p key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">✓ {item}</p>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-soft">
          <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" alt="Friendly dentist with patient in a modern clinic" width={1200} height={900} className="h-auto w-full rounded-2xl object-cover" priority />
        </div>
      </section>

      <section className="section-container py-10">
        <SectionTitle eyebrow="Why Choose BrightSmile" title="Premium care with a personal touch" description="Everything we do is designed to help you feel confident, informed, and comfortable." center />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <Icon className="text-brand-600" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container py-14">
        <SectionTitle eyebrow="Services" title="Comprehensive dental services under one roof" description="From preventive care to advanced restorative treatments, our team is here to support your healthiest smile." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, Icon]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-soft">
              <Icon className="text-brand-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-50 py-14">
        <div className="section-container">
          <SectionTitle eyebrow="How It Works" title="Your path to a healthier smile in 3 simple steps" center />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Book your consultation", "Visit the clinic", "Receive your personalized treatment plan"].map((step, index) => (
              <article key={step} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700">{index + 1}</div>
                <h3 className="mt-3 font-semibold text-slate-900">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-14">
        <SectionTitle eyebrow="Testimonials" title="What patients are saying" center />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-amber-500">{testimonial.rating}</p>
              <p className="mt-3 text-slate-700">“{testimonial.quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-slate-900">— {testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="lead-form" className="bg-slate-100 py-14">
        <div className="section-container grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionTitle eyebrow="Free Consultation" title="Take the first step toward your best smile" description="Share your information and we’ll contact you to confirm your appointment and answer any questions." />
            <ul className="mt-6 space-y-3 text-slate-700">
              {["No obligation consultation", "Fast response from our front desk", "Treatment options tailored to your needs"].map((item) => (
                <li key={item} className="flex items-center gap-2"><CalendarCheck2 size={18} className="text-brand-600" /> {item}</li>
              ))}
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section-container py-14">
        <SectionTitle eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-8 space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-semibold text-slate-900">{question}</summary>
              <p className="mt-2 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-brand-700 py-14 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold">Ready for a healthier, more confident smile?</h2>
          <p className="mt-3 text-brand-100">Schedule your free consultation today and discover care designed around you.</p>
          <a href="#lead-form" className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50">Book Free Consultation</a>
        </div>
      </section>

      <footer className="bg-slate-900 py-10 text-slate-300">
        <div className="section-container grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">BrightSmile Dental Clinic</h3>
            <p className="mt-2 text-sm">Helping U.S. families smile with confidence through trusted, modern dental care.</p>
          </div>
          <div className="space-y-1 text-sm">
            <p><strong className="text-white">Phone:</strong> (312) 555-0198</p>
            <p><strong className="text-white">Email:</strong> hello@brightsmiledental.com</p>
            <p><strong className="text-white">Address:</strong> 1842 W Lakeview Ave, Chicago, IL 60614</p>
            <p><strong className="text-white">Hours:</strong> Mon–Fri 8:00 AM–6:00 PM, Sat 9:00 AM–2:00 PM</p>
          </div>
          <div>
            <p className="font-semibold text-white">Follow us</p>
            <div className="mt-3 flex gap-3 text-sm">
              {['Facebook', 'Instagram', 'X'].map((social) => (
                <a key={social} href="#" className="rounded-lg border border-slate-700 px-3 py-2 transition hover:border-brand-400 hover:text-white">{social}</a>
              ))}
            </div>
          </div>
        </div>
        <p className="section-container mt-8 border-t border-slate-800 pt-6 text-xs text-slate-400">© {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.</p>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-soft sm:hidden">
        <a href="#lead-form" className="block rounded-xl bg-brand-600 px-5 py-3 text-center font-semibold text-white">Book Free Consultation</a>
      </div>
    </main>
  );
}

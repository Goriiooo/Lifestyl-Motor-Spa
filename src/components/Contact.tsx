import { useState } from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Book Your Appointment</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Request A Quote
          </h3>
          <p className="text-muted mt-4">
            Fill out the form below and we'll get back to you within 24 hours with a custom quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background border border-border p-8 md:p-12 rounded-2xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider mb-2 text-muted-foreground">First Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider mb-2 text-muted-foreground">Last Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider mb-2 text-muted-foreground">Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider mb-2 text-muted-foreground">Phone</label>
              <input 
                type="tel" 
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider mb-2 text-muted-foreground">Vehicle Make & Model</label>
              <input 
                type="text" 
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                placeholder="e.g. Porsche 911"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider mb-2 text-muted-foreground">Vehicle Type</label>
              <select 
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none"
              >
                <option value="">Select Type...</option>
                <option value="coupe">Coupe / Sedan</option>
                <option value="suv">SUV / Truck</option>
                <option value="exotic">Exotic / Supercar</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold uppercase tracking-wider mb-2 text-muted-foreground">Service of Interest</label>
            <select 
              required
              className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none"
            >
              <option value="">Select Package...</option>
              <option value="refresh">The Refresh (From $150)</option>
              <option value="revival">The Revival (From $450)</option>
              <option value="signature">The Spa Signature (From $1,200)</option>
              <option value="custom">Custom / Not Sure</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              'Sending...'
            ) : isSuccess ? (
              'Quote Request Sent!'
            ) : (
              <>
                Request Quote <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

import { Calendar, Car, Sparkles, Key } from 'lucide-react';

const steps = [
  {
    icon: <Calendar size={32} />,
    title: '1. Request a Quote',
    description: 'Fill out our simple form with your vehicle details and desired service.'
  },
  {
    icon: <Car size={32} />,
    title: '2. Drop-off or Mobile',
    description: 'Bring your car to our detailing bay or schedule our mobile unit to come to you.'
  },
  {
    icon: <Sparkles size={32} />,
    title: '3. The Spa Treatment',
    description: 'We meticulously clean, correct, and protect your vehicle using premium products.'
  },
  {
    icon: <Key size={32} />,
    title: '4. The Reveal',
    description: 'Pick up your vehicle looking better than the day it rolled off the showroom floor.'
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">How It Works</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            The Process
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                {step.icon}
              </div>
              <h4 className="text-xl font-display font-bold uppercase mb-3">{step.title}</h4>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

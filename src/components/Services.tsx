import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const packages = [
  {
    id: 'refresh',
    name: 'The Refresh',
    description: 'Basic exterior & interior maintenance to keep your vehicle looking sharp.',
    price: 'From $150',
    features: [
      'Hand Wash & Dry',
      'Wheel & Tire Cleaning',
      'Interior Vacuum',
      'Wipe Down Surfaces',
      'Window Cleaning',
      'Tire Dressing'
    ],
    popular: false,
  },
  {
    id: 'revival',
    name: 'The Revival',
    description: 'Paint correction and deep clean to restore your vehicle\'s natural gloss.',
    price: 'From $450',
    features: [
      'Everything in The Refresh',
      'Clay Bar Treatment',
      '1-Step Paint Correction',
      'Deep Interior Shampoo',
      'Leather Conditioning',
      '6-Month Sealant'
    ],
    popular: true,
  },
  {
    id: 'signature',
    name: 'The Spa Signature',
    description: 'The ultimate preservation package with full ceramic coating and engine bay detail.',
    price: 'From $1,200',
    features: [
      'Everything in The Revival',
      'Multi-Step Paint Correction',
      '5-Year Ceramic Coating',
      'Wheel Face Coating',
      'Engine Bay Detail',
      'Glass Coating'
    ],
    popular: false,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Spa Packages</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Choose Your Level of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Perfection</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative p-8 rounded-2xl border transition-all duration-300 flex flex-col",
                pkg.popular 
                  ? "border-primary bg-background shadow-[0_0_30px_rgba(212,175,55,0.1)] md:-translate-y-4" 
                  : "border-border bg-background/50 hover:border-primary/50"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-2xl font-display font-bold uppercase mb-2">{pkg.name}</h4>
                <p className="text-muted text-sm min-h-[40px]">{pkg.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-border">
                <span className="text-4xl font-display font-bold">{pkg.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#booking"
                className={cn(
                  "w-full py-4 rounded-full font-bold uppercase tracking-wider text-center transition-all text-sm mt-auto",
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "bg-white/5 text-foreground hover:bg-white/10"
                )}
              >
                Select Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

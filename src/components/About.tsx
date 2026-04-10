export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605810730444-638520226845?auto=format&fit=crop&q=80&w=1200" 
            alt="Detailing Professional" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-background/80 backdrop-blur-md border border-border p-6 rounded-xl">
              <p className="font-display font-bold text-xl uppercase mb-1">Born on Instagram.</p>
              <p className="text-primary text-sm font-bold tracking-widest uppercase">Built for perfection.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">
            More Than Just A Wash
          </h3>
          
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Lifestyle Motor Spa started as a passion project showcased on Instagram. We didn't just want to clean cars; we wanted to document the art of automotive preservation.
            </p>
            <p>
              What began as weekend details for fellow enthusiasts quickly grew into a full-scale detailing studio. We understand that for our clients, a car isn't just transportation—it's an extension of their lifestyle, a reward for their hard work, and a prized possession.
            </p>
            <p>
              We treat every vehicle that enters our bay as if it were our own. From the careful selection of pH-neutral soaps to the meticulous application of 5-year ceramic coatings, we cut no corners.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-10">
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
              <div className="text-sm uppercase tracking-wider text-muted font-semibold">Vehicles Detailed</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">5★</div>
              <div className="text-sm uppercase tracking-wider text-muted font-semibold">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

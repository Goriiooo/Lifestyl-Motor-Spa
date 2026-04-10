import { motion } from 'motion/react';
import { Star, ShieldCheck, Instagram } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Car Detailing"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            <ShieldCheck size={14} />
            <span>Authorized Ceramic Pro Installer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 uppercase tracking-tight">
            Preserve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
              The Pride
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-8 max-w-lg font-light leading-relaxed">
            Don't just wash your car. Experience the ultimate preservation and the "new car" feeling with our premium detailing and ceramic coating services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold uppercase tracking-wider text-center hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-center border border-border hover:bg-white/5 transition-all"
            >
              View Packages
            </a>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
            <div className="flex items-center gap-3">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-foreground">5.0</span>
                <span className="text-muted ml-1">Google Reviews</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Instagram size={16} />
              <span>As seen on Instagram</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

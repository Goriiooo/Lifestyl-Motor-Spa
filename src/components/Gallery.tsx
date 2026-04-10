import { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

export function Gallery() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }
    
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleMove(e);
    const handleMouseMove = (e: MouseEvent) => handleMove(e as unknown as React.MouseEvent);
    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleMove(e);
    const handleTouchMove = (e: TouchEvent) => handleMove(e as unknown as React.TouchEvent);
    const handleTouchEnd = () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">The Results</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Before & After
          </h3>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Drag the slider to see the dramatic difference our detailing packages make.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* After Image (Base) */}
            <img 
              src="https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=1600" 
              alt="Clean Car" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              referrerPolicy="no-referrer"
            />
            
            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1600" 
                alt="Dirty Car" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] contrast-75"
                draggable={false}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] text-primary-foreground">
                <MoveHorizontal size={20} />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-primary-foreground">
              After
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

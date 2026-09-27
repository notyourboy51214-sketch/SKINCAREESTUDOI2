import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface ImageMaskRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  caption?: string;
}

export const ImageMaskReveal: React.FC<ImageMaskRevealProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  caption
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#EEF3ED] border border-[#3C4A3B]/10 ${className}`}>
      {/* Wipe Reveal Mask Container */}
      <motion.div
        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', opacity: 0.85 }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full relative ${aspectRatioClass} overflow-hidden`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
          />
        ) : (
          /* Graceful Fallback Container */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EEF3ED] to-[#FBF9F4] text-[#3C4A3B]">
            <div className="w-12 h-12 rounded-full bg-[#8FA88A]/20 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-[#8FA88A]" />
            </div>
            <p className="font-serif text-sm font-medium text-[#3C4A3B]">{alt}</p>
            <span className="text-xs text-[#3C4A3B]/60 mt-1">Skin Care Axis · Lahore</span>
          </div>
        )}

        {/* Subtle Brushed Gold Corner Accent */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C6A664]/40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C6A664]/40 pointer-events-none" />
      </motion.div>

      {caption && (
        <div className="p-3 bg-[#FBF9F4] border-t border-[#3C4A3B]/5 text-xs text-[#3C4A3B]/75 italic flex items-center justify-between">
          <span>{caption}</span>
          <span className="text-[10px] uppercase tracking-wider text-[#8FA88A] not-italic font-medium">Verified Protocol</span>
        </div>
      )}
    </div>
  );
};

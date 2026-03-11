'use client'

import { motion } from 'framer-motion'

// All images confirmed to exist in /public/images/vegaluna-pics/
const GALLERY_IMAGES = [
  { src: '/images/vegaluna-pics/IMG_20250114_185550.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250407_175207.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250407_184155.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250407_184843.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250407_190829.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250428_171321.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250523_121249.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250623_183319.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250701_190714.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250701_190924.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250806_173343.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250806_183737.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250806_204949.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250820_161623.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250820_170640.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250820_170719.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250825_115706.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20250827_184141.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20251103_164638.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20251118_202404.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20251118_202559.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20251118_202606.jpg', alt: 'vegAluna Impressionen' },
  { src: '/images/vegaluna-pics/IMG_20251118_202742.jpg', alt: 'vegAluna Impressionen' },
]

export default function PhotoMasonryGallery() {
  return (
    <section className="bg-vl-warm-white py-24 md:py-32">
      <div className="vl-container">
        <div className="text-center mb-14">
          <span className="vl-label">Galerie</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-vl-forest mt-2">
            Impressionen
          </h2>
        </div>

        {/* CSS Masonry columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.4) }}
              className="break-inside-avoid rounded-xl overflow-hidden mb-3 group relative"
            >
              {/* Using standard img for masonry to allow natural height */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

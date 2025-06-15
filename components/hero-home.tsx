'use client';

import { useState } from 'react';
import ModalContact from './modal-contact';
import { useTheme } from '@/app/theme/ThemeProvider';
import { useLanguage } from '@/context/LanguageContext';

import ModalVideo from './modal-video';
import VideoThumb from '../public/images/hero-image-01.jpg';
import localFont from 'next/font/local';

export default function HeroHome() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <ModalContact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-8 md:py-12">
          {/* Section header */}
          <div className="pb-6 text-center md:pb-10">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              style={{
                backgroundImage: `linear-gradient(to right, ${useTheme().theme.primary}, ${useTheme().theme.secondary}, ${useTheme().theme.muted}, ${useTheme().theme.accent}, ${useTheme().theme.primary})`
              }}
              data-aos="fade-up"
            >
              {language === 'en' ? 'AI Solution Konsult Sweden' : 'AI Lösningskonsult Sverige'}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl"
                style={{
                  color: useTheme().isDarkMode ? 'rgba(199, 210, 254, 0.65)' : useTheme().theme.text
                }}
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {language === 'en' 
                  ? 'We provide comprehensive AI consulting services, guiding you from concept to deployment and beyond, ensuring innovative and effective solutions for your business needs.'
                  : 'Vi erbjuder omfattande AI-konsulttjänster som guidar dig från koncept till implementering och vidare, med innovativa och effektiva lösningar för dina affärsbehov.'}
              </p>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
    </>
  );
}

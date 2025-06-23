'use client';
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import { useTheme } from '@/app/theme/ThemeProvider';
import Head from 'next/head';
import { useLanguage } from '@/context/LanguageContext';

import en from '@/locales/en.json';
import sv from '@/locales/sv.json';

export default function Workflows() {
  const theme = useTheme();
  const { language } = useLanguage();
  const t = language === 'sv' ? sv.solutions.workflows : en.solutions.workflows;

  return (
    <>
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t.pageTitle} />
        <meta property="og:description" content={t.pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com/workflows" />
      </Head>

      <main>
        <section aria-labelledby="workflow-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pb-12 md:pb-20">
              {/* Section header */}
              <header className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    {t.sectionHeader}
                  </span>
                </div>
                <h1
                  id="workflow-heading"
                  className="animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${theme.theme.primary}, ${theme.theme.secondary}, ${theme.theme.muted}, ${theme.theme.accent}, ${theme.theme.primary})`
                  }}
                  data-aos="fade-up"
                >
                  {t.mainTitle}
                </h1>
                <p
                  className="mb-8 text-xl"
                  style={{
                    color: theme.isDarkMode ? 'rgba(199, 210, 254, 0.65)' : theme.theme.text
                  }}
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {t.mainDescription}
                </p>
              </header>

              {/* Spotlight items */}
              <article>
                {/* From Concept to Reality - 6 Steps */}
                <Spotlight className="group mx-auto grid max-w-4xl items-start gap-8 lg:max-w-none lg:grid-cols-2">
                  {t.steps.map((step, idx) => (
                    <section
                      key={idx}
                      className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-6 flex flex-col"
                      data-aos="fade-up"
                      data-aos-delay={idx * 100}
                    >
                      <div className="text-5xl font-semibold mb-2" style={{ color: theme.theme.primary }}>{idx + 1}.</div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-indigo-200/80">
                        {step.description}
                      </p>
                    </section>
                  ))}
                </Spotlight>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

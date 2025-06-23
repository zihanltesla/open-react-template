'use client';
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import { useTheme } from '@/app/theme/ThemeProvider';
import Head from 'next/head';

export default function Workflows() {
  const theme = useTheme();
  const pageTitle = "AI-Powered Workflow Solutions | Streamline Your Processes";
  const pageDescription = "Discover our tailored AI workflows that transform ideas into intelligent solutions with built-in tools, instant scalability, and customized flows.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
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
                    Tailored Workflows
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
                  AI Revolution
                </h1>
                <p
                  className="mb-8 text-xl"
                  style={{
                    color: theme.isDarkMode ? 'rgba(199, 210, 254, 0.65)' : theme.theme.text
                  }}
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Transforming Ideas into Intelligent Solutions
                </p>
              </header>

              {/* Spotlight items */}
              <article>
                <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
                  {/* Card 1 */}
                  <section className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none" aria-hidden="true">
                          <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                        </svg>
                      </div>
                      <Image
                        className="inline-flex"
                        src={WorflowImg01}
                        width={350}
                        height={288}
                        alt="Built-in AI workflow tools dashboard showing analytics and automation features"
                        priority={false}
                        loading="lazy"
                      />
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                              Built-in Tools
                            </span>
                          </span>
                        </div>
                        <p className="text-indigo-200/65">
                          Streamline the product development flow with a content platform that's aligned across specs and insights.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Card 2 */}
                  <section className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none" aria-hidden="true">
                          <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                        </svg>
                      </div>
                      <Image
                        className="inline-flex"
                        src={WorflowImg02}
                        width={350}
                        height={288}
                        alt="AI workflow scaling interface demonstrating growth metrics and expansion capabilities"
                        priority={false}
                        loading="lazy"
                      />
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                              Scale Instantly
                            </span>
                          </span>
                        </div>
                        <p className="text-indigo-200/65">
                          Streamline the product development flow with a content platform that's aligned across specs and insights.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Card 3 */}
                  <section className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none" aria-hidden="true">
                          <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                        </svg>
                      </div>
                      <Image
                        className="inline-flex"
                        src={WorflowImg03}
                        width={350}
                        height={288}
                        alt="Customizable AI workflow interface showing personalized settings and configurations"
                        priority={false}
                        loading="lazy"
                      />
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                              Tailored Flows
                            </span>
                          </span>
                        </div>
                        <p className="text-indigo-200/65">
                          Streamline the product development flow with a content platform that's aligned across specs and insights.
                        </p>
                      </div>
                    </div>
                  </section>
                </Spotlight>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
import { motion } from "framer-motion";
import aboutImage from "../assets/kay-studio.png";

export const AboutSection = () => {
    return (
        <section id="about" className="py-48 px-8 md:px-24 bg-white overflow-hidden">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-48">
                    <div className="lg:col-span-12 mb-32">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="text-architectural text-black/30 mb-8"
                        >
                            The Philosophy
                        </motion.p>

                        <h2 className="font-light tracking-tight leading-[1.1] mb-16 uppercase max-w-6xl">
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="block text-4xl md:text-6xl lg:text-[4.5rem] text-black/90 mb-4 md:mb-8"
                            >
                                I don't divide Design,
                                <br className="hidden md:block" /> Build and Operate;
                            </motion.span>

                            <motion.span
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)", x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                                transition={{ duration: 1.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className="block italic text-black/40 text-3xl md:text-5xl lg:text-7xl mt-8 md:mt-12 md:ml-32"
                            >
                                "to me they are one."
                            </motion.span>
                        </h2>
                    </div>

                    <motion.div
                        className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-24"
                    >
                        <div className="lg:col-span-5 space-y-8 text-base text-black/60 font-light leading-relaxed max-w-md">
                            <p>
                                Kay Design Studio was founded in 2002 with a unified vision, where design, build, and operate seamlessly merge into one cohesive entity.
                            </p>
                            <p>
                                With extensive expertise in interior design, construction management, and architectural woodworking, our studio has redefined standards for exceptional interiors and brand excellence.
                            </p>
                            <p>
                                Over the years, we've crafted some of the most exciting and innovative brands, while also expanding our services to become a strategic marketing partner, helping our clients target specific niche markets.
                            </p>
                            <p>
                                Today, our studio remains committed to this holistic approach, offering comprehensive solutions in Design, Construction, Operations, and Unique visual design.
                            </p>
                            <div className="pt-12 border-t border-black/5">
                                <p className="text-sm uppercase tracking-architectural opacity-40 mb-4">Established 2002</p>
                                <p className="text-sm font-light">4784 Cantrell Rd. Suite 200<br />Flowery Branch, GA 30542</p>
                            </div>
                        </div>

                        <motion.div
                            className="lg:col-span-7 aspect-[16/9] bg-muted overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000"
                            initial={{ opacity: 0, scale: 1.05 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={aboutImage}
                                alt="Architectural Masterpiece"
                                className="w-full h-full object-cover brightness-90 transition-all duration-1000"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Google Map Integration - Clickable linking to Google Maps */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full aspect-[21/9] bg-stone-100 overflow-hidden relative opacity-90 hover:opacity-100 transition-all duration-1000 group cursor-pointer"
                >
                    <a
                        href="https://www.google.com/maps/place/4784+Cantrell+Rd.+Suite+200,+Flowery+Branch,+GA+30542"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors duration-500"
                    >
                        <div className="bg-white px-6 py-3 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                            <span className="text-xs uppercase tracking-architectural font-medium">Open in Google Maps</span>
                        </div>
                    </a>
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=4784%20Cantrell%20Rd.%20Suite%20200,%20Flowery%20Branch,%20GA%2030542+(Kay%20Design%20Studio)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, pointerEvents: 'none' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

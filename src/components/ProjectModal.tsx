import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MapPin, Calendar, Layout } from "lucide-react";

interface Project {
    id: string;
    name: string;
    image: string;
    category: string;
    location?: string;
    year?: string;
    description?: string;
    details?: string[];
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-12 overflow-hidden"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-white/95 backdrop-blur-xl cursor-crosshair"
                onClick={onClose}
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full bg-white shadow-2xl overflow-y-auto no-scrollbar flex flex-col md:flex-row"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-50 p-4 bg-black text-white hover:bg-black/80 transition-colors shadow-lg"
                >
                    <X className="w-6 h-6 stroke-1" />
                </button>

                {/* Left Side: Large Hero Image */}
                <div className="w-full md:w-2/3 h-[50vh] md:h-full relative overflow-hidden group">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Right Side: Project Info */}
                <div className="w-full md:w-1/3 p-12 md:p-20 flex flex-col justify-between bg-stone-50">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="h-[1px] w-8 bg-black/20" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-black/40">
                                {project.category}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-extralight tracking-tighter leading-none mb-12 uppercase italic"
                        >
                            {project.name}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-2 gap-8 py-8 border-y border-black/5">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-black/40">
                                        <MapPin className="w-3 h-3" />
                                        <span className="text-[9px] uppercase tracking-widest font-medium">Location</span>
                                    </div>
                                    <p className="text-xs font-light">{project.location || "Confidential"}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-black/40">
                                        <Calendar className="w-3 h-3" />
                                        <span className="text-[9px] uppercase tracking-widest font-medium">Date</span>
                                    </div>
                                    <p className="text-xs font-light">{project.year || "2024"}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-black/40">
                                    <Layout className="w-3 h-3" />
                                    <span className="text-[9px] uppercase tracking-widest font-medium">Philosophy</span>
                                </div>
                                <p className="text-sm font-light leading-relaxed text-black/70">
                                    {project.description || "Every space is a dialogue between human experience and architectural form. This project represents our commitment to precision, material integrity, and the elevation of the everyday through thoughtful design."}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12"
                    >
                        <button className="flex items-center gap-6 group">
                            <span className="text-[10px] uppercase tracking-widest font-medium group-hover:mr-4 transition-all">View Full Case Study</span>
                            <ArrowRight className="w-4 h-4 stroke-1 group-hover:scale-x-150 origin-left transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

import React from "react";

export const TechNews = () => {
    return (
        <div className='relative min-h-screen flex items-center justify-center bg-[var(--bg-primary)]'>
            <div className="text-center">

                <img
                    src="/photos/projects/technews/technews_laptop.png"
                    alt="TechNews Project"
                    className="w-full max-w-3xl h-auto mx-auto rounded-lg shadow-lg mb-8"
                />
                <div className="flex justify-center mt-6">
                    <a
                        href="https://blog-tech-news.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[var(--bg-primary)] px-6 py-3 rounded-full shadow-[var(--custom-shadow)] hover:shadow-lg transition-all duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <path d="M10 2a8 8 0 018 8v7a4 4 0 01-8 0V2zM10 12v4a4 4 0 008 0v-4M8 10h8" />
                        </svg>
                        <span className="font-semibold">Show Live Demo</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

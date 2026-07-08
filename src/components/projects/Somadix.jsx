import React from "react";
import { useTheme } from "../theme-provider";
import { useTranslation } from "react-i18next";

export const Somadix = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className='relative min-h-screen flex items-center justify-center bg-[var(--bg-primary)] font-["CabinetGrotesk"]'>
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-12">
        <div className="flex justify-center">
          <img
            src="/photos/projects/somadix/somadix_laptop.png"
            alt="Somadix Project"
            className="w-full max-w-3xl h-auto rounded-lg shadow-[var(--custom-shadow)]"
          />
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="https://somadix.ma/"
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
        
        <style>
          {`
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `}
        </style>
      </div>
    </div>
  );
};

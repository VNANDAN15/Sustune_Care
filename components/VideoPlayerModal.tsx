"use client";

import React, { useEffect, useRef } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { VideoConfig } from "@/data/videos";

interface VideoPlayerModalProps {
  video: VideoConfig | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    } else {
      document.body.style.overflow = "unset";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 bg-brand-marine/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-950 rounded-2xl max-w-sm sm:max-w-md w-full overflow-hidden shadow-2xl border border-brand-gold/40 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="w-full flex justify-between items-center px-4 py-3 bg-brand-marine/90 border-b border-white/10 text-white z-10">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span id="video-modal-title" className="text-xs font-bold truncate">
              {video.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 9:16 Video Container */}
        <div className="relative w-full max-h-[75vh] aspect-[9/16] bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            playsInline
            controls
            preload="metadata"
            className="w-full h-full object-contain"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            {/* Caption Integration Point */}
            <track
              kind="captions"
              srcLang="en"
              label="English"
              src=""
              default={false}
            />
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* Supporting verified copy below player */}
        <div className="w-full p-4 bg-slate-900 border-t border-white/10 text-left space-y-2">
          <div className="flex items-center justify-between text-[11px] text-brand-gold font-bold uppercase tracking-wider">
            <span>{video.badge}</span>
            <span>Duration: {video.durationFormatted}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {video.description}
          </p>
          <div className="text-[10px] text-slate-400">
            Target Audience: <span className="text-slate-200">{video.audience}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

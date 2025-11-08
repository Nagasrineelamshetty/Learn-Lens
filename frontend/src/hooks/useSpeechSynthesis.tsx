// src/hooks/useSpeechSynthesis.ts
import { useEffect, useRef, useState } from "react";

export function useSpeechSynthesis() {
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (synth) synth.cancel();
    };
  }, [synth]);

  function speak(text: string) {
    if (!synth || !text.trim()) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1; // speed
    u.pitch = 1; // tone
    u.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };
    u.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };
    u.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utteranceRef.current = u;
    synth.speak(u);
  }

  function pause() {
    if (!synth) return;
    synth.pause();
    setIsPaused(true);
  }

  function resume() {
    if (!synth) return;
    synth.resume();
    setIsPaused(false);
  }

  function cancel() {
    if (!synth) return;
    synth.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    utteranceRef.current = null;
  }

  return { isSpeaking, isPaused, speak, pause, resume, cancel };
}

"use client";

import { motion } from "motion/react";
import { site } from "@/lib/content";
import { track } from "@/lib/track";
import { useApp } from "./Providers";

export function WhatsAppFab() {
  const { introDone } = useApp();
  if (!site.whatsapp) return null;
  const href = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Bonjour WePushX, je souhaite réserver un audit gratuit.")}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Nous écrire sur WhatsApp"
      data-cursor="WhatsApp"
      onClick={() => track("whatsapp_click", { location: "fab" })}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0a0610] shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={introDone ? { scale: 1, opacity: 1 } : undefined}
      transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.35-.2-3.56.93.95-3.47-.23-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.43 9.43m8.03-17.46A11.28 11.28 0 0 0 12.05.72C5.8.72.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.64l6.03-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.1 11.35-11.36 0-3.03-1.18-5.89-3.33-8.03" />
      </svg>
    </motion.a>
  );
}

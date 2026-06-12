"use client";

import { useState } from "react";
import { BootSequence } from "./BootSequence";
import { LightsaberScrollbar } from "./LightsaberScrollbar";
import { AudioController } from "./AudioController";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}
      
      {bootComplete && (
        <>
          <LightsaberScrollbar />
          <AudioController />
        </>
      )}

      {/* Main Page Content - Unlocks after boot */}
      <div className={`flex flex-col transition-opacity duration-1000 ${bootComplete ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        {children}
      </div>
    </>
  );
}

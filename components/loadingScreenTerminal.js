"use client";
import { Terminal } from "@/components/ui/terminal";

export function TerminalDemo() {
  return (
    <section className="w-full py-10 md:py-20">
      <Terminal
        commands={[
          "Initializing Portfolio...",
          "Fetching Projects...",
          "Loading Experience...",
          "Connecting GitHub...",
          "Importing Components...",
          "Deploying Creativity...",
          "Portfolio Ready.",
        ]}
        outputs={{
          0: ["✔ Core Engine Online"],
          1: ["✔ 5 Projects cataloged"],
          2: ["✔ Experience timeline mapped"],
          3: ["✔ Profiles connected"],
          4: ["✔ Components loaded"],
          5: ["✔ Creative shaders active"],
          6: ["✔ Welcome to Sid Kaushik's Portfolio!"],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000} />
    </section>
  );
}

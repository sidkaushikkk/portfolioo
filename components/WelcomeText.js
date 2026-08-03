import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function EncryptedTextDemoSecond() {
  return (
    <p className="mx-auto max-w-lg py-10 text-left">
      <EncryptedText
        text="Building AI-powered products that solve real-world problems."
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black"
        revealDelayMs={50} />
    </p>
  );
}

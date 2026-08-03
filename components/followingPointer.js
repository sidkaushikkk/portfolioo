import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function FollowingPointerDemo() {
  return (
    <div className="mx-auto w-80">
      <FollowerPointerCard title="Sid Kaushik">
        <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl text-white">
          <h2 className="text-lg font-bold">ATS Tracker</h2>
          <p className="text-xs text-neutral-400">AI-powered resume optimization platform.</p>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

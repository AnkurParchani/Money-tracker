"use client";
import { useAppColor } from "@/contexts/AppColorContext";

const colorVariants = {
  green: "bg-green-200 from-green-400 to-green-300",
  red: "bg-red-200 from-red-400 to-red-300",
  blue: "bg-blue-200 from-blue-400 to-blue-300",
  yellow: "bg-yellow-200 from-yellow-400 to-yellow-300",
  purple: "bg-purple-200 from-purple-400 to-purple-300",
  orange: "bg-orange-200 from-orange-400 to-orange-300",
  gray: "bg-gray-200 from-gray-400 to-gray-300",
  pink: "bg-pink-200 from-pink-400 to-pink-300",
  violet: "bg-violet-200 from-violet-400 to-violet-300",
  indigo: "bg-indigo-200 from-indigo-400 to-indigo-300",
  amber: "bg-amber-200 from-amber-400 to-amber-300",
  cyan: "bg-cyan-200 from-cyan-400 to-cyan-300",
  teal: "bg-teal-200 from-teal-400 to-teal-300",
  lime: "bg-lime-200 from-lime-400 to-lime-300",
  sky: "bg-sky-200 from-sky-400 to-sky-300",
  fuchsia: "bg-fuchsia-200 from-fuchsia-400 to-fuchsia-300",
  rose: "bg-rose-200 from-rose-400 to-rose-300",
  slate: "bg-slate-200 from-slate-400 to-slate-300",
  zinc: "bg-zinc-200 from-zinc-400 to-zinc-300",
  stone: "bg-stone-200 from-stone-400 to-stone-300",
};

export default function MainBody({ children }: { children: React.ReactNode }) {
  const { appColor } = useAppColor();

  return (
    <body className={colorVariants[appColor] || "bg-gray-200"}>
      <div className={`absolute top-0 left-0 w-full h-96 bg-gradient-to-br ${
        colorVariants[appColor] || "from-gray-400 to-gray-300"
      } opacity-70 -z-50 filter blur-3xl`} />
      {children}
    </body>
  );
}
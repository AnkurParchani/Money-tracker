"use client";

import { AVAILABLE_COLORS, useAppColor } from "@/contexts/AppColorContext";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import getUser from "../../../utils/getUser";

const Page = () => {
  const { toggleAppColor } = useAppColor();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      if (!userData) {
        router.push("/login");
      }
    };
    fetchUser();
  }, [router]);

  async function handleClick(color: AVAILABLE_COLORS) {
    const res = await fetch(`${process.env.SERVER_URL}/api/theme-selector`, {
      method: "POST",
      body: JSON.stringify(color),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(res.ok) {
      toggleAppColor(color);
    }
  }

  return (
    <div className="px-2 py-4 max-w-md mx-auto">
      <h1 className="mb-2 font-semibold text-gray-800 ">Choose Color for App:-</h1>

      <div className="flex flex-col gap-4 mt-5">
        <Button className="bg-red-400 hover:bg-red-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.RED)}>
          Red
        </Button>
        <Button className="bg-green-400 hover:bg-green-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.GREEN)}>
          Green
        </Button>
        <Button className="bg-yellow-400 hover:bg-yellow-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.YELLOW)}>
          Yellow
        </Button>
        <Button className="bg-pink-400 hover:bg-pink-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.PINK)}>
          Pink
        </Button>
        <Button className="bg-blue-400 hover:bg-blue-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.BLUE)}>
          Blue
        </Button>
        <Button className="bg-purple-400 hover:bg-purple-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.PURPLE)}>
          Purple
        </Button>
        <Button className="bg-violet-400 hover:bg-violet-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.VIOLET)}>
          Violet
        </Button>
        <Button className="bg-orange-400 hover:bg-orange-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.ORANGE)}>
          Orange
        </Button>
        <Button className="bg-indigo-400 hover:bg-indigo-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.INDIGO)}>
          Indigo
        </Button>
        <Button className="bg-gray-400 hover:bg-gray-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.GRAY)}>
          Gray
        </Button>
        <Button className="bg-teal-400 hover:bg-teal-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.TEAL)}>
          Teal
        </Button>
        <Button className="bg-cyan-400 hover:bg-cyan-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.CYAN)}>
          Cyan
        </Button>
        <Button className="bg-amber-400 hover:bg-amber-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.AMBER)}>
          Amber
        </Button>
        <Button className="bg-gray-400 hover:bg-gray-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.GRAY)}>
          Gray
        </Button>
        <Button className="bg-zinc-400 hover:bg-zinc-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.ZINC)}>
          Zinc
        </Button>
        <Button className="bg-slate-400 hover:bg-slate-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.SLATE)}>
          Slate
        </Button>
        <Button className="bg-rose-400 hover:bg-rose-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.ROSE)}>
          Rose
        </Button>
        <Button className="bg-fuchsia-400 hover:bg-fuchsia-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.FUCHSIA)}>
          Fuchsia
        </Button>
        <Button className="bg-sky-400 hover:bg-sky-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.SKY)}>
          Sky
        </Button>
        <Button className="bg-lime-400 hover:bg-lime-500" variant="contained" onClick={() => handleClick(AVAILABLE_COLORS.LIME)}>
          Lime
        </Button>
      </div>
    </div>
  );
};

export default Page;
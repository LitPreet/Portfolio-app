"use client"
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { SiGit, SiJavascript, SiNextdotjs, SiPostgresql, SiPostman, SiReact, SiRedux, SiSupabase, SiTailwindcss } from "react-icons/si";

export default function Skills() {
    const skills = [{
        text:"React",
        Icon: SiReact
    },
    {
        text:"Next.js",
        Icon: SiNextdotjs
    },{
        text:"Tailwind",
        Icon: SiTailwindcss
    },{
        text:"Supabase",
        Icon: SiSupabase
    },{
        text:"Postgres",
        Icon: SiPostgresql
    },{
        text:"Javascript",
        Icon: SiJavascript
    },{
        text:"Redux",
        Icon:SiRedux
    },{
        text:"RestApi",
        Icon:SiPostman
    },{
        text:"Git",
        Icon: SiGit
    }]
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text={"Skills 🔪"}
        className={"flex flex-col justify-center items-center -rotate-6 group"}
      />
      <HoverEffect items={skills}/>
    </div>
  );
}

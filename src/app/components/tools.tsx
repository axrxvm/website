import { IconTools } from '@tabler/icons-react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAngular,
  SiBootstrap,
  SiMui,
  SiVuedotjs,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiGo,
  SiRust,
  SiGnubash
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

import { FC } from 'react';

import Tool from './components/tool';

const Tools: FC = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <IconTools className="text-foreground" />
          <p className="text-paragraph-sm font-bold uppercase text-foreground">
            Tools and technologies in my arsenal
          </p>
        </div>
      </div>

      {/* Languages */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Languages
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="JavaScript" icon={<SiJavascript />} description="Scripting Language" />
          <Tool name="TypeScript" icon={<SiTypescript />} description="Typed JavaScript" />
          <Tool name="Python" icon={<SiPython />} description="General Purpose" />
          <Tool name="Java" icon={<FaJava />} description="Enterprise & Android" />
          <Tool name="C++" icon={<SiCplusplus />} description="Systems Programming" />
          <Tool name="C#" icon={<TbBrandCSharp />} description=".NET Framework" />
          <Tool name="Go" icon={<SiGo />} description="Concurrent Programming" />
          <Tool name="Rust" icon={<SiRust />} description="Memory Safe" />
          <Tool name="PHP" icon={<SiPhp />} description="Server-side Scripting" />
          <Tool name="HTML" icon={<SiHtml5 />} description="Markup Language" />
          <Tool name="CSS" icon={<SiCss3 />} description="Styling" />
          <Tool name="Bash" icon={<SiGnubash />} description="Shell Scripting" />
        </div>
      </div>

      {/* Frontend */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Frontend
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="React" icon={<SiReact />} description="UI Library" />
          <Tool name="Next.js" icon={<SiNextdotjs />} description="React Framework" />
          <Tool name="Vue.js" icon={<SiVuedotjs />} description="Progressive Framework" />
          <Tool name="Angular" icon={<SiAngular />} description="Full Framework" />
          <Tool name="TailwindCSS" icon={<SiTailwindcss />} description="Utility-first CSS" />
          <Tool name="Bootstrap" icon={<SiBootstrap />} description="CSS Framework" />
          <Tool name="Material UI" icon={<SiMui />} description="React Components" />
          <Tool name="shadcn/ui" icon={<SiReact />} description="Component Library" />
          <Tool name="Framer Motion" icon={<SiFramer />} description="Animation" />
        </div>
      </div>

      {/* Backend */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Backend
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="Node.js" icon={<SiNodedotjs />} description="JavaScript Runtime" />
          <Tool name="Express.js" icon={<SiExpress />} description="Web Framework" />
          <Tool name="FastAPI" icon={<SiFastapi />} description="Python API Framework" />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Mobile
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="React Native" icon={<SiReact />} description="Cross-platform" />
          <Tool name="Java" icon={<FaJava />} description="Android" />
        </div>
      </div>

      {/* Databases */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Databases
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="MongoDB" icon={<SiMongodb />} description="NoSQL Database" />
          <Tool name="PostgreSQL" icon={<SiPostgresql />} description="Relational Database" />
          <Tool name="MySQL" icon={<SiMysql />} description="Relational Database" />
          <Tool name="Redis" icon={<SiRedis />} description="In-memory Cache" />
          <Tool name="Firebase" icon={<SiFirebase />} description="Backend Platform" />
        </div>
      </div>

      {/* Developer Tools */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Developer Tools
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="Git" icon={<SiGit />} description="Version Control" />
          <Tool name="GitHub" icon={<SiGithub />} description="Code Hosting" />
          <Tool name="Postman" icon={<SiPostman />} description="API Testing" />
        </div>
      </div>
    </div>
  );
};

export default Tools;

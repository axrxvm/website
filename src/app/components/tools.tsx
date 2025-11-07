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
          <Tool name="JavaScript" icon={<SiJavascript />} />
          <Tool name="TypeScript" icon={<SiTypescript />} />
          <Tool name="Python" icon={<SiPython />} />
          <Tool name="Java" icon={<FaJava />} />
          <Tool name="C++" icon={<SiCplusplus />} />
          <Tool name="C#" icon={<TbBrandCSharp />} />
          <Tool name="Go" icon={<SiGo />} />
          <Tool name="Rust" icon={<SiRust />} />
          <Tool name="PHP" icon={<SiPhp />} />
          <Tool name="HTML" icon={<SiHtml5 />} />
          <Tool name="CSS" icon={<SiCss3 />} />
          <Tool name="Bash" icon={<SiGnubash />} />
        </div>
      </div>

      {/* Frontend */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Frontend
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="React" icon={<SiReact />} />
          <Tool name="Next.js" icon={<SiNextdotjs />} />
          <Tool name="Vue.js" icon={<SiVuedotjs />} />
          <Tool name="Angular" icon={<SiAngular />} />
          <Tool name="TailwindCSS" icon={<SiTailwindcss />} />
          <Tool name="Bootstrap" icon={<SiBootstrap />} />
          <Tool name="Material UI" icon={<SiMui />} />
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
          <Tool name="Node.js" icon={<SiNodedotjs />} />
          <Tool name="Express.js" icon={<SiExpress />} />
          <Tool name="FastAPI" icon={<SiFastapi />} />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Mobile
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="React Native" icon={<SiReact />} />
          <Tool name="Java" icon={<FaJava />} description="Android" />
        </div>
      </div>

      {/* Databases */}
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Databases
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="MongoDB" icon={<SiMongodb />} />
          <Tool name="PostgreSQL" icon={<SiPostgresql />} />
          <Tool name="MySQL" icon={<SiMysql />} />
          <Tool name="Redis" icon={<SiRedis />} />
          <Tool name="Firebase" icon={<SiFirebase />} />
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

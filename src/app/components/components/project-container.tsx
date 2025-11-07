import { FC } from 'react';

import Project from './components/project';
import ProjectContainerWrapper from './components/project-container-wrapper';

const ProjectContainer: FC = () => {
  return (
    <ProjectContainerWrapper>
      <Project
        name="AHFC"
        description="High-performance file encryption tool built with modern cryptographic standards."
        color="ahfc"
        type="CLI Tool / NPM Package"
        openSource={true}
        websiteURL="https://npmjs.com/package/ahfc"
        githubURL="https://github.com/axrxvm/ahfc"
        startTime="March 2025"
        endTime="Present"
      />
      <Project
        name="AChat"
        description="Real-time chatting application with blazing fast speeds."
        color="achat"
        type="Web Application"
        openSource={true}
        discontinued
        websiteURL="https://achat-0r7u.onrender.com/"
        githubURL="https://github.com/axrxvm/achat"
        startTime="2024"
        endTime="Present"
      />
      <Project
        name="Synkros"
        description="Fast and secure file sharing service. No ads, no tracking, just files."
        color="synkros"
        type="File Sharing Service"
        openSource={true}
        websiteURL="https://synkross.alwaysdata.net/"
        githubURL="https://github.com/axrxvm/synkros/"
        startTime="April 2025"
        endTime="Present"
      />
      <Project
        name="Giva Bot"
        description="Feature-packed Discord bot with 150+ commands across 16+ categories."
        color="givabot"
        type="Discord Bot"
        discontinued
        websiteURL="https://givabot.netlify.app/"
        startTime="Jan 2022"
        endTime="June 2025"
      />
      <Project
        name="aOS"
        description="Operating System built from scratch. Coming Soon!"
        color="aos"
        type="Operating System"
        openSource={false}
        websiteURL="https://discord.gg/7MQczhh2pS"
        startTime="March 2025"
        endTime="Present"
      />
      <Project
        name="Nemora"
        description="AI-powered Discord moderation—analyze, act, appeal. Your server, always in control."
        color="nemora"
        type="Discord Bot"
        openSource={false}
        websiteURL="https://discord.com/oauth2/authorize?client_id=1195686438939926538"
        startTime="July 2025"
        endTime="Present"
      />
      <Project
        name="UBLDA"
        description="Universal Block-Level Data Accelerator that makes file storage leaner, faster, and smarter."
        color="ublda"
        type="Data Management"
        openSource={true}
        websiteURL="https://www.npmjs.com/package/ublda"
        githubURL="https://github.com/axrxvm/ublda"
        startTime="June 2025"
        endTime="Present"
      />
      <Project
        name="BetterDiscordJS"
        description="A modern, modular, and extensible framework for Discord.js"
        color="betterdiscordjs"
        type="Library"
        openSource={true}
        websiteURL="https://axrxvm.github.io/betterdiscordjs/"
        githubURL="https://github.com/axrxvm/betterdiscordjs"
        startTime="September 2025"
        endTime="Present"
      />
    </ProjectContainerWrapper>
  );
};

export default ProjectContainer;

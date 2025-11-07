import {
  IconBrandGithub,
  IconCalendar,
  IconCode,
  IconFlag,
  IconWorld
} from '@tabler/icons-react';

import { StaticImageData } from 'next/image';
import { FC } from 'react';

import ProjectTag from './components/project-tag';
import ProjectWrapper from './components/project-wrapper';

export type ProjectColor = 'marvo' | 'spoke' | 'ahfc' | 'achat' | 'synkros' | 'givabot' | 'aos' | 'nemora' | 'ublda' | 'betterdiscordjs';

interface Props {
  name: string;
  description: string;
  icon?: StaticImageData;
  color: ProjectColor;
  type: string;
  openSource?: boolean;
  discontinued?: boolean;
  githubURL?: string;
  websiteURL?: string;
  startTime: string;
  endTime: string;
}

const Project: FC<Props> = ({
  name,
  description,
  color,
  type,
  openSource,
  discontinued,
  githubURL,
  websiteURL,
  startTime,
  endTime
}) => {
  return (
    <ProjectWrapper color={color}>
      <div className="flex flex-col space-y-3">
        <div className="flex items-start justify-between">
          <p className="text-paragraph-md font-semibold">{name}</p>
          <div className="flex shrink-0 items-center space-x-[6px]">
            <IconCalendar className="text-foreground" size={16} />
            <p className="text-paragraph-xs font-medium text-foreground">
              {startTime} &ndash; {endTime}
            </p>
          </div>
        </div>
        <p className="text-paragraph-sm font-medium text-foreground">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ProjectTag content={type} icon={<IconFlag />} />
        <ProjectTag
          content={openSource ? 'Open Source' : 'Proprietary'}
          icon={<IconCode />}
        />
        {githubURL && (
          <ProjectTag
            content="View on GitHub"
            icon={<IconBrandGithub />}
            url={githubURL}
          />
        )}
        {websiteURL && (
          <ProjectTag
            content={discontinued ? 'Visit Archive' : 'Visit Website'}
            icon={<IconWorld />}
            url={websiteURL}
          />
        )}
      </div>
    </ProjectWrapper>
  );
};

export default Project;

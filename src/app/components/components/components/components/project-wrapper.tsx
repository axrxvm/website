'use client';

import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import { ProjectColor } from '../project';

const projectAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'backOut' }
  },
  hidden: {
    opacity: 0
  }
};

interface Props {
  color: ProjectColor;
}

const ProjectWrapper: FC<PropsWithChildren<Props>> = ({ children, color }) => {
  const getColor = () => {
    switch (color) {
      case 'ahfc':
        return 'hover:bg-projects-ahfc/10 hover:border-projects-ahfc';
      case 'achat':
        return 'hover:bg-projects-achat/10 hover:border-projects-achat';
      case 'synkros':
        return 'hover:bg-projects-synkros/10 hover:border-projects-synkros';
      case 'givabot':
        return 'hover:bg-projects-givabot/10 hover:border-projects-givabot';
      case 'aos':
        return 'hover:bg-projects-aos/10 hover:border-projects-aos';
      case 'nemora':
        return 'hover:bg-projects-nemora/10 hover:border-projects-nemora';
      case 'ublda':
        return 'hover:bg-projects-ublda/10 hover:border-projects-ublda';
      case 'betterdiscordjs':
        return 'hover:bg-projects-betterdiscordjs/10 hover:border-projects-betterdiscordjs';
    }
  };

  return (
    <motion.div
      variants={projectAnimation}
      className={clsx(
        'flex h-[125px] select-none flex-col justify-between space-y-3 rounded-lg border border-border p-4 transition',
        getColor()
      )}
    >
      {children}
    </motion.div>
  );
};

export default ProjectWrapper;

'use client';

import { Variants, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const projectContainerAnimation: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1
    }
  }
};

const ProjectContainerWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={projectContainerAnimation}
      className="grid grid-cols-1 gap-4 lg:grid-cols-2"
    >
      {children}
    </motion.div>
  );
};

export default ProjectContainerWrapper;

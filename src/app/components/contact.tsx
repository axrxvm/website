import Constants from '@/utils/constants';
import { IconBrandDiscord } from '@tabler/icons-react';

import Link from 'next/link';
import { FC } from 'react';

import EmailContactButton from './components/email-contact-button';

const Contact: FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h4 className="text-center text-mobile-h4 font-bold lg:text-desktop-h4">
          Get in Touch
        </h4>
        <p className="text-center text-paragraph-sm font-medium text-foreground">
          Feel free to reach out via email or join the community.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <EmailContactButton />
        <Link
          className="flex h-full items-center space-x-3 rounded-lg border border-border p-4 transition hover:bg-background-hover"
          href={Constants.DISCORD_URL}
          target="_blank"
          rel="noopener,noreferrer"
        >
          <IconBrandDiscord />
          <p className="text-paragraph-sm font-semibold">
            Join the Discord server
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

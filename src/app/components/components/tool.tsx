import Image, { StaticImageData } from 'next/image';
import { FC, ReactElement, cloneElement, isValidElement } from 'react';

interface Props {
  name: string;
  description?: string;
  icon: StaticImageData | ReactElement;
}

const Tool: FC<Props> = ({ name, description, icon }) => {
  return (
    <div className="flex h-full select-none items-center space-x-3 rounded-lg border border-border p-4 transition hover:bg-background-hover">
      {isValidElement(icon) ? (
        <div className="flex size-6 items-center justify-center">
          {cloneElement(icon, { size: 24 } as any)}
        </div>
      ) : (
        <Image
          className="w-6 rounded"
          src={icon as StaticImageData}
          sizes="24px"
          alt="tool image"
        />
      )}
      <div className="flex flex-col">
        <p className="text-paragraph-sm font-semibold">{name}</p>
        {description ? (
          <p className="text-paragraph-xs font-semibold text-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Tool;

import Image from "next/image";
import profile from "../../assets/profile.jpg";
import { DATA } from "../../constants/aboutme.config";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 flex md:mt-52 mt-28 mx-4 md:mx-8 lg:mx-0 text-muted-foreground ">
        <div className="relative z-40 mx-auto  max-w-[52rem] ">
        <div className="flex flex-col justify-between space-y-10  md:flex-row md:space-x-10 md:space-y-0">
  <div>
    <h1 className="max-w-3xl text-2xl font-bold dark:text-zinc-50 md:text-5xl md:leading-tight ">
      Hey! I'm{" "}
      <RoughNotation
        type="highlight"
        show
        color="#f59e0b"
        animationDelay={1000}
      >
        Aarav Mehta
      </RoughNotation>{" "}
    </h1>
    <p className="mt-8 max-w-2xl text-sm tracking-wide text-muted-foreground md:text-base md:leading-loose">
      I love creating cool things, mostly with code. I'm a full-stack web developer with a chaotic edge and a love for open-source and chess. Nice to meet you!
    </p>
  </div>
  <div className="order-first md:order-last">
    <Image
      src={profile}
      alt="heroimage"
      className="rounded-2xl cursor-pointer h-32 w-32 md:h-36 md:w-36"
      height={150}
      width={150}
      draggable={false}
    />
    <div className="mt-2 flex flex-row justify-start space-x-2 md:justify-center">
      <a
        href={DATA.twitter}
        className="relative text-sm text-zinc-500"
        target="__blank"
      >
        <span className="relative z-10 inline-block px-2 py-2 hover:text-cyan-500">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            className="hover:text-primary h-5 w-5 transition duration-150"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
          </svg>
        </span>
      </a>
      <a
        href={DATA.discord}
        className="relative text-sm text-zinc-500"
        target="__blank"
      >
        <span className="relative z-10 inline-block px-2 py-2 hover:text-cyan-500">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="hover:text-primary h-5 w-5 transition duration-150"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371c-1.6016.3633-3.1508.9252-4.8852 1.5152a.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.8731.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286ZM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189Zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
          </svg>
        </span>
      </a>
      <a
        href={DATA.github}
        className="relative text-sm text-zinc-500"
        target="__blank"
      >
        <span className="relative z-10 inline-block px-2 py-2 hover:text-cyan-500">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            className="hover:text-primary h-5 w-5 transition duration-150"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
          </svg>
        </span>
      </a>
    </div>
  </div>
</div>

          <p className="mt-8 text-sm tracking-wide  md:text-base md:leading-loose">
          Aarav Mehta (axrxvm) is a passionate Full-Stack Developer specializing in Node.js, an open-source innovator, a strategic thinker who enjoys chess and Minecraft, and a chaotic yet brilliant problem-solver open to collaborations on Discord. Let's
            <span className="text-blue-600">
                {" "}
                <Link href="https://discord.gg/7MQczhh2pS" target="_blank">
                  connect
                </Link>
            </span>{" "}
            if you want to bring your MVP idea to life.{" "}
            <Link href="/about">
              <span className="text-blue-600">Read more</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;

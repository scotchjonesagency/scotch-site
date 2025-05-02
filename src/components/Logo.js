import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="relative mt-10 sm:mt-10 md:mt-10 w-[50%] max-w-[250px] min-w-[100px] h-[100px]">
  <MotionLink href="/" className="block" whileHover={{ scale: 1.05 }}>
    <Image
      src="/images/svgs/ScotchJonesLogoOfficial.svg"
      alt="Scotch Jones Logo"
      width={250}
      height={100}
      className="object-contain"
      priority
    />
  </MotionLink>
</div>

  );
};

export default Logo;

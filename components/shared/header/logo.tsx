import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='flex-start'>
      <Link href='/' className='flex-start'>
        <Image
          src='/images/logo.svg'
          alt={`${APP_NAME} LOGO`}
          height={48}
          width={48}
          priority={true}
        />
        <span className='hidden lg:block font-bold text-2xl ml-3'>
          {APP_NAME}
        </span>
      </Link>
    </div>
  );
};

export default Logo;

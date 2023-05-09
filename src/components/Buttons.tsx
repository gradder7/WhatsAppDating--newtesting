import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Link from 'next/link';

import Constants from './Constants';

const WAButton = () => {
  return (
    <Link target="_blank" href={Constants.whatsapp}>
      <h1 className="rounded-lg bg-green-400 py-2 px-4 text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800">
        WhatsApp
      </h1>
    </Link>
  );
};
export default WAButton;
export const WAButtonRound = () => {
  return (
    <Link href="/learn-more">
      <h1 className="rounded-full bg-green-500 px-8 py-4 font-bold text-white transition duration-300 hover:bg-green-600">
        WhatsApp
      </h1>
    </Link>
  );
};

export function BackToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="text-secondary rounded-full bg-yellow-400 p-2 font-bold"
      >
        <ArrowCircleUpIcon />
      </button>
    </div>
  );
}

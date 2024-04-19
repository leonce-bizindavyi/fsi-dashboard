import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <>
    <p className="text-[44px]">Manage</p>
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">FSI</p>
    </div>
    </>
  );
}

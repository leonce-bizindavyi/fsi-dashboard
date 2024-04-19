import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'Femme',
          'bg-green-500 text-white': status === 'Homme',
        },
      )}
    >
      {status === 'Homme' ? (
        <>
          homme
        </>
      ) : null}
      {status === 'Femme' ? (
        <>
          femme
        </>
      ) : null}
    </span>
  );
}

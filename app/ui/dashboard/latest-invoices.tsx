import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchAllStaffs, fetchLastestStaffs } from '@/app/lib/data';

function joursEntreDates(dateString1:string) {
  // Convertir les chaînes de caractères en objets Date
  const date1 = new Date(dateString1);
  const date2 = new Date();

// Différence d'années
let differenceAnnees: number = date2.getFullYear() - date1.getFullYear();

// Vérifier si l'année de départ est bissextile
if (estBissextile(date1.getFullYear()) && date2.getMonth() < 2) {
  differenceAnnees++;
}

// Fonction pour vérifier les années bissextiles
function estBissextile(annee: number): boolean {
  return (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
}

return differenceAnnees;
}

export default async function LatestInvoices() {
  const latestStaffs = await fetchLastestStaffs();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Staffs Members
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

         <div className="bg-white px-6">
          {latestStaffs.map((staf, i) => {
            return (
              <div
                key={i}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                   <Image
                    src={staf.image_url}
                    alt={`${staf.name_staff}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {staf.name_staff}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {staf.email_st}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {joursEntreDates(staf.period)} Years
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}

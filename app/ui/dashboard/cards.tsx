import {
  ClockIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  BanknotesIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData, getAllMaxValues } from '@/app/lib/data';

const iconMap = {
  Staffs: DocumentDuplicateIcon,
  Filière: BanknotesIcon,
  Students: UserGroupIcon,
  Departements: InboxIcon
};

export default async function CardWrapper() {
    const results = await getAllMaxValues()
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <Card title="Students" value={results[0].count} type="Students" />
      <Card title="Staffs" value={results[1].count} type="Staffs" />
      <Card title="Filière" value={results[2].count} type="Filière" /> 
      <Card title="Departement" value={results[3].count} type="Departements" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'Students' | 'Staffs' | 'Filière'|'Departements' ;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

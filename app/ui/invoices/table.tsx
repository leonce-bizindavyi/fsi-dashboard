import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredStaffs } from '@/app/lib/data';

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

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const staffs = await fetchFilteredStaffs(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {staffs?.map((staff,i) => (
              <div
                key={i}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={staff.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${staff.name_staff}'s profile picture`}
                      />
                      <p>{staff.name_staff}</p>
                    </div>
                    <p className="text-sm text-gray-500">{staff.email_st}</p>
                  </div>
                  <InvoiceStatus status={staff.sexe} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {joursEntreDates(staff.period)} Years
                    </p>
                    <p>{joursEntreDates(staff.date_naiss)} Years</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={staff.Id_staf} />
                    <DeleteInvoice id={staff.Id_staf} /> 
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Staff Member
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Periode
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Birth Years
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sexe
                </th>
                <th scope="col" className="ml-5 px-3 py-5 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {staffs?.map((staff,i) => (
                <tr
                  key={i}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={staff.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${staff.name_staff}'s profile picture`}
                      />
                      <p>{staff.name_staff}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {staff.email_st}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {joursEntreDates(staff.period)} Years
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {joursEntreDates(staff.date_naiss)} Years
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={staff.sexe} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    <UpdateInvoice id={staff.uniid_staf} />
                    <DeleteInvoice id={staff.Id_staf} /> 
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {  fetchStaffsById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import EditForm from '@/app/ui/invoices/edit-form';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const staff = await fetchStaffsById(id)
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/staff' },
          {
            label: 'Edit Staff',
            href: `/dashboard/staff/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm /> 
    </main>
  );
}
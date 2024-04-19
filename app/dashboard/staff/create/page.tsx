import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Staffs', href: '/dashboard/staff' },
          {
            label: 'Add Person',
            href: '/dashboard/staff/create',
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}
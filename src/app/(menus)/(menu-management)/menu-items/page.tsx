//src/app/(menus)/(menu-management)/menu-items/page.tsx

import { getMenuItems } from "@/actions/menu-item-actions";
import { MenuItem } from "@prisma/client";

export default async function MenuItemsPage() {
  const menuItems: (MenuItem & {
    menu: { name: string };
    product: { description: string };
  })[] = await getMenuItems(); // Obtener elementos del menú desde el servidor

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Elementos del Menú</h1>
      </div>
      <table className="min-w-full text-center bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-2">Menú</th>
            <th className="py-2">Producto</th>
            <th className="py-2">Cantidad</th>
            <th className="py-2">Costo Total</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((menuItem) => (
            <tr key={menuItem.id} className="border-t">
              <td className="py-2">{menuItem.menu.name}</td>
              <td className="py-2">{menuItem.product.description}</td>
              <td className="py-2">{menuItem.quantity}</td>
              <td className="py-2">{menuItem.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

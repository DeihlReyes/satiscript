import LogoutButton from "./logout-button";
import SideBarItems from "./sidebar-items";

export const Sidebar = () => {
  return (
    <aside className="flex h-full flex-col justify-between border border-solid border-[#0d0d0d]/10 py-8 px-4 dark:border-[#fefefe]/10">
      <SideBarItems />
      <LogoutButton />
    </aside>
  );
};

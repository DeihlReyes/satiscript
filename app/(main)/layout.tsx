import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/providers/theme-provider";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative h-full overflow-clip transition-all ease-linear">
      <div className="hidden h-full w-screen md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <Sidebar />
      </div>
      <div className="md:pl-64">
        <Navbar />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </div>
    </section>
  );
};

export default MainLayout;

import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";
import DashCodeSidebar from '@/components/partials/sidebar'
import { auth } from "@/lib/auth";
import { redirect } from "@/components/navigation";
import AgroHeader from "@/components/partials/header";
import AgroFooter from "@/components/partials/footer";
import AgroSidebar from "@/components/partials/sidebar";
const layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();
    if (!session) {
        redirect({ href: '/', locale: 'en' })
    }
    return (
        <LayoutProvider >
            <AgroHeader />
            <AgroSidebar />
            <LayoutContentProvider>
                {children}
            </LayoutContentProvider>
            <AgroFooter />
        </LayoutProvider>
    )


};

export default layout;

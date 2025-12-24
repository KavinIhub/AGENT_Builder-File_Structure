export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <nav>Sidebar</nav>
            {children}
        </section>
    );
}

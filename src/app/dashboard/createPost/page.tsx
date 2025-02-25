import CreatePost from "@/app/components/CreatePost";
import MainLayout from "@/app/components/layouts/MainLayout";

export default function HomePage() {
    return(
        <MainLayout>
            <CreatePost />
        </MainLayout>
    );
}


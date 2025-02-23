import CreatePost from "@/app/components/CreatePost";
import MainLayout from "@/app/components/layouts/MainLayout";
import { DiVim } from "react-icons/di";

export default function HomePage() {
    return(
        <MainLayout>
            <CreatePost />
        </MainLayout>
    );
}


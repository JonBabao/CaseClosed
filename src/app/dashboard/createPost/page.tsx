import CreatePost from "@/app/components/CreatePost";
import MainLayout from "@/app/components/layouts/MainLayout";
import { DiVim } from "react-icons/di";
import TiptapEditor from "@/app/components/Editor";
import AddPost from "@/app/components/Tiptap/AddPost";

export default function HomePage() {
    return(
        <MainLayout>
            <CreatePost />
        </MainLayout>
    );
}


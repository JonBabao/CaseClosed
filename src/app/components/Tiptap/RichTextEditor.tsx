import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextEditorMenuBar from "./TextEditorMenuBar";


type TextEditorProps = {
    onChange: (content: string) => void;
    initialContent?: string; // Add this line
  };


export default function RichTextEditor({
    onChange,
    initialContent,
  }: TextEditorProps) {

    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: initialContent,
        onUpdate : ({editor}) => {
            onChange(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: "min-h-[150px] cursor-text rounded-md border p-5 focus-within:outline-none"
            }
        },
        immediatelyRender: false
    })
  return (
    <div>
      <TextEditorMenuBar editor={editor}/>
        <EditorContent editor={editor} />
    </div>
  )
}

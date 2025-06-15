// src/components/TextEditor.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

export const TextEditor = ({
  onChange,
}: {
  onChange: (content: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing your blog here...</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html); // Send updated content to parent
    },
  });

  useEffect(() => {
    if (editor) {
      onChange(editor.getHTML());
    }
  }, [editor]);

  return (
    <div className="h-[500px] border border-gray-300 rounded-lg p-4 w-full bg-white cursor-text">
      <EditorContent editor={editor} className="h-full overflow-y-auto" />
    </div>
  );
};

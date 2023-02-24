"use client";

import Editor from "@/components/Editor";
import { useState } from "react";
import ExampleDocument from "@/utils/ExampleDocument";
import { Descendant } from "slate";
import Title from "@/components/Title";
import Footer from "@/components/Footer";

export default function Home() {
  const [document, updateDocument] = useState<Descendant[]>(ExampleDocument);

  return (
    <div className="grid place-content-center max-w-2xl mx-auto py-4 border border-black dark:border-white">
      <>
        <Title className="mb-4 text-lg">
          Rich Text Editor with NextJs
        </Title>

        <Editor document={document} onChange={updateDocument} />
      </>
      <Footer />
    </div>
  );
}

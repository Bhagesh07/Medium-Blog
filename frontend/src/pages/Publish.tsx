import axios from "axios";
import { Appbar } from "../components/Appbar";
import { TextEditor } from "../components/TextEditor";
import { BACKEND_URL } from "../config";
import { useState } from "react";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-4 md:px-8 mx-auto mt-10">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="w-full text-4xl font-bold outline-none placeholder-gray-400 mb-6"
            placeholder="Title"
          />

          <div className="relative">
            <TextEditor
              onChange={(content) => {
                setDescription(content);
              }}
            />

            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => {
                  axios
                    .post(
                      `${BACKEND_URL}/api/v1/blog`,
                      {
                        title,
                        content: description,
                      },
                      {
                        headers: {
                          Authorization: localStorage.getItem("token") || "",
                        },
                      }
                    )
                    .then(() => {
                      alert("Blog published!");
                    })
                    .catch(() => {
                      alert("Failed to publish blog");
                    });
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

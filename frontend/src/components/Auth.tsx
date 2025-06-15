import { Link, useNavigate } from "react-router-dom";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { SignupInput } from "@wolfop/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInput] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.error("Error during auth:", e);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="px-10">
          <div className="flex flex-col gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">
                Create an account to get started
              </div>
              <div className="text-slate-500 text-center w-full">
                {type === "signin"
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <Link
                  className="pl-2 underline"
                  to={type === "signin" ? "/signup" : "/signin"}
                >
                  {type === "signin" ? "Sign up" : "Sign in"}
                </Link>
              </div>
            </div>
            <div>
              {type === "signup" ? (
                <LabelInput
                  label="Name"
                  placeholder="Bhagesh.."
                  onChange={(e) => {
                    setPostInput({
                      ...postInputs,
                      name: e.target.value,
                    });
                  }}
                />
              ) : null}

              <LabelInput
                label="Username"
                placeholder="Bhagesh07"
                onChange={(e) => {
                  setPostInput({
                    ...postInputs,
                    username: e.target.value,
                  });
                }}
              />
              <LabelInput
                label="Password(Min-6)"
                type={"password"}
                placeholder="1234"
                onChange={(e) => {
                  setPostInput({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                onClick={sendRequest}
                className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {type === "signup" ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelInput({ label, placeholder, onChange, type }: LabelInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-900 dark:text-white font-bold">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

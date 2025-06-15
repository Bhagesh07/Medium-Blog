import type { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-4 pt-10">
        <div className="md:col-span-8 space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 font-mono">
            {blog.title}
          </h1>
          <div className="text-slate-500">Posted on 2nd March 2025</div>
          <p className="text-gray-700 text-lg leading-relaxed font-serif">
            {blog.content}
          </p>
        </div>

        <div className="md:col-span-4 bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-md font-semibold pl-15 italic">Author</h2>
          <div className="flex">
            <div className="pr-2">
              <Avatar size="small" name={blog.author.name || "Anonymous"} />
            </div>

            <div>
              <div className="text-xl font-bold pl-2">
                {blog.author.name || "Anonymous"}
              </div>
              <p className="text-gray-600 text-sm">He is the best Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    // Skeleton Loader UI //Bhagesh Don't Touch skeleton
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div className="max-w-xl w-full mx-auto p-4 space-y-4">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="w-full max-w-sm rounded-md border border-blue-300 p-4 animate-pulse"
              >
                <div className="flex space-x-4">
                  <div className="size-10 rounded-full bg-gray-200"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 rounded bg-gray-200"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                        <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                      </div>
                      <div className="h-2 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"nfnirejbfjirefojnre"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

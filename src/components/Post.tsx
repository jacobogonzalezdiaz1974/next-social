import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/**USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/videos/27401134/ape-furry-gorilla-leaves-27401134.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/**DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/27177674/pexels-photo-27177674.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident,
          eaque velit et, esse, at aperiam quis commodi quae architecto in
          repellat sint. Odit consectetur dicta possimus eius assumenda
          expedita.
        </p>
      </div>
      {/**INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
          </div>
          <Comments />
    </div>
  );
};

export default Post;

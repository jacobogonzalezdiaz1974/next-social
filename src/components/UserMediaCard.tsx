// import prisma from "@/lib/client";
// import { User } from "@prisma/client";
// import Image from "next/image";
// import Link from "next/link";

// const UserMediaCard = async ({ user }: { user: User }) => {
//   const postsWithMedia = await prisma.post.findMany({
//     where: {
//       userId: user.id,
//       img: {
//         not: null,
//       },
//     },
//     take: 8,
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
//       {/* TOP */}
//       <div className="flex justify-between items-center font-medium">
//         <span className="text-gray-500">User Media</span>
//         <Link href="/" className="text-blue-500 text-xs">
//           See all
//         </Link>
//       </div>
//       {/* BOTTOM */}
//       <div className="flex gap-4 justify-between flex-wrap">
//         {postsWithMedia.length
//           ? postsWithMedia.map((post) => (
//               <div className="relative w-1/5 h-24" key={post.id}>
//                 <Image
//                   src={post.img!}
//                   alt=""
//                   fill
//                   className="object-cover rounded-md"
//                 />
//               </div>
//             ))
//           : "No media found!"}
//       </div>
//     </div>
//   );
// };


import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const UserMediaCard = ({user}:{user?:string}) => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/**TOP */}
        <div className="flex justify-between items-center font-medium">
          <span className="text-gray-500">User Media</span>
          <Link href="/" className="text-blue-500 text-xs">
            See all
          </Link>
        </div>
        {/**BOTTOM */}
        <div className="flex gap-4 justify-between flex-wrap">
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/videos/27298118/pexels-photo-27298118.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    );
}

export default UserMediaCard


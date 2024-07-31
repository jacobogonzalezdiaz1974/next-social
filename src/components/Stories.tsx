import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sx scroll-hide">
      <div className="flex gap-8 w-max">
        {/**STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/videos/27418809/agricultural-fields-blue-sky-cereal-plant-cereals-27418809.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            height={80}
            width={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/videos/27418809/agricultural-fields-blue-sky-cereal-plant-cereals-27418809.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            height={80}
            width={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/videos/27418809/agricultural-fields-blue-sky-cereal-plant-cereals-27418809.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            height={80}
            width={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/videos/27418809/agricultural-fields-blue-sky-cereal-plant-cereals-27418809.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            height={80}
            width={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/videos/27418809/agricultural-fields-blue-sky-cereal-plant-cereals-27418809.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            height={80}
            width={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/videos/27418809/agricultural-fields-blue-sky-cereal-plant-cereals-27418809.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            height={80}
            width={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/videos/27418809/agricultural-fields-blue-sky-cereal-plant-cereals-27418809.jpeg?w=200&h=200&fit=crop&dpr=1"
            alt=""
            height={80}
            width={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
}

export default Stories

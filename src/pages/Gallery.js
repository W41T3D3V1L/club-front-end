import React from 'react';

const images = [
  "https://www.shutterstock.com/image-photo/computer-science-startup-conference-on-600nw-1746589124.jpg",
  "https://www.firstevent.co.uk/wp-content/uploads/2023/10/AIBlog.png",
  "https://media.licdn.com/dms/image/D5612AQEvI8d9UFhByQ/article-cover_image-shrink_720_1280/0/1678159047470?e=2147483647&v=beta&t=bRzTT9RZlSrztmFEhA0lRPziS8zGpCdkxIKBgurqxrI",
  "https://today-obs.line-scdn.net/0hCntp0yvqHEFJCQ6An_pjFnFfEDB6bwZIa2lWJWlZF3lhJV0UcjpPIjxaEm1tbF5DaWtVcGgOQnljbFkWdw/w644",
  "https://image.sggp.org.vn/w1000/Uploaded/2024/negeslyselx/2023_09_14/30-5179.jpg",
  "https://embed-ssl.wistia.com/deliveries/4855aca8a055bb8e4095932eaac8a642.webp?image_crop_resized=1280x720",
  "https://bstglobal.com/wp-content/uploads/2024/05/11.-AI-The-Human-Element.jpg",
  "https://media.licdn.com/dms/image/v2/D4E10AQHDls9luv2jNQ/image-shrink_800/image-shrink_800/0/1713459613232?e=2147483647&v=beta&t=KO5THvOGZmb-XOGKSyOTJFT4rFIKi2XWHttiUpAq9X8",
  "https://media.licdn.com/dms/image/v2/D4E22AQFw-Jq-KaPK8w/feedshare-shrink_800/feedshare-shrink_800/0/1713448180874?e=2147483647&v=beta&t=1EFlSZ_6Cwf-rGku8Osrr59VBzbHsrAiTW8Z7sI5SaU",
  "https://media.licdn.com/dms/image/v2/D4D22AQFJDwO7LtDIRQ/feedshare-shrink_800/feedshare-shrink_800/0/1718247754699?e=2147483647&v=beta&t=sHSFdEvNSIS-frFjFWIa1e70LRv_TM-xvNE_gg17lLs"
];

const Gallery = () => {
  return (
    <div
      className="min-h-screen bg-[url('https://img.freepik.com/premium-photo/ai-generated-ai-generative-night-open-air-concert-show-perfomance-stage-live-music-event-with-many-people-around-celebration-fun-party-rave-background-graphic-art-illustration_1080685-96.jpg')] bg-cover bg-center flex items-center justify-center py-10 px-4"
    >
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((imgUrl, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500"
            >
              <img
                src={imgUrl}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-blue-800 bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-semibold text-lg">Item {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

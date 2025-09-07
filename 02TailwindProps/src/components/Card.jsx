import React from "react";

function Card({username, btnText}) {
    console.log("props: ", username);
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg" />
  </div>
  <div className="flex">
    <h1 className="bg-green-100 text-black">{username}</h1>
    <h1 className="bg-green-100 text-black">{btnText}</h1>
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium">The Anti-Patterns</span>
    <span className="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>[]
  </div>
</div>
  );
}

export default Card;
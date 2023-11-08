// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div>
//         Hello Dolphin
//       </div>
     
//     </main>
//   )
// }
// pages/index.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function JumpingGame() {
  const [jumpHeight, setJumpHeight] = useState(0);

  const jump = () => {
    if (jumpHeight === 0) {
      setJumpHeight(100); // Adjust the jump height as needed
      setTimeout(() => {
        setJumpHeight(0);
      }, 1000); // Adjust the jump duration as needed
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/download.png" // Replace with your character image
        alt="Character"
        width={100}
        height={100}
        style={{
          position: 'relative',
          bottom: jumpHeight,
          transition: jumpHeight ? 'bottom 1s' : 'none',
        }}
      />
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4"
        onClick={jump}
      >
        Jump
      </button>
    </div>
  );
}


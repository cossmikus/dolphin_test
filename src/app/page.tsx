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

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [ballY, setBallY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setBallY(100); // Adjust the jump height as needed
      setTimeout(() => {
        setIsJumping(false);
        setBallY(0);
      }, 1000); // Adjust the jump duration as needed
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative">
        <div
          className="absolute w-16 h-16 bg-red-500 rounded-full"
          style={{
            bottom: ballY,
            transition: isJumping ? 'bottom 1s' : 'none',
          }}
        ></div>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={jump}
        >
          Jump
        </button>
      </div>
    </main>
  );
}

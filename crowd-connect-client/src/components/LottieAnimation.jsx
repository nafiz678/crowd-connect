
import Lottie from 'react-lottie';  // Import Lottie library
import animationData from '../assets/animte.json';  // Path to your JSON file

const LottieFiles = () => {
  return (<>
        {/* Left Section (Lottie Animation) */}
          <Lottie
            options={{
              animationData: animationData,  // Provide the JSON animation data
              loop: true,  // Set to true if you want the animation to loop
              autoplay: true,  // Set to true to play the animation immediately
            }}  // Set the width of the animation
          />
          </>
  );
};

export default LottieFiles;

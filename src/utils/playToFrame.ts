import { AnimationItem } from 'lottie-web';

// Custom function to play the animation from its current state to a target
// frame, automatically plays forward or backwards as needed
// Avoids weird behavior when interrupting in lottie's built-in playSegments()
const playToFrame = (anim: AnimationItem | undefined, target: number) => {
  if (!anim) return;

  anim.pause(); // First, pause the animation
  anim.removeEventListener('enterFrame'); // Remove any dangling event listeners

  // Round the frame number, lottie reports non-integer frames for whatever reason
  const current = ~~anim.currentFrame;
  if (current === target) return; // We're already there

  // Reverse if we need to go backwards
  const direction = current > target ? -1 : 1;
  anim.setDirection(direction);

  // Add event to stop when we've reached the target
  anim.addEventListener('enterFrame', () => {
    if (~~anim.currentFrame === target) {
      anim.pause();
      anim.removeEventListener('enterFrame'); // Clean up
    }
  });

  anim.play(); // Play the animation
};

export default playToFrame;
import { useEffect, useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = 0.4;

      audio.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));

      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="music-btn">
      <button onClick={toggleMusic}>
        {playing ? "🔊" : "🔈"}
      </button>

      <audio ref={audioRef} src="/music.mp3" loop />
    </div>
  );
}

export default MusicPlayer;
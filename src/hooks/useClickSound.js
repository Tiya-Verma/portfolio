import { useRef, useEffect } from 'react';

const useClickSound = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Create and preload the audio
        audioRef.current = new Audio('/sounds/click.mp3');
        audioRef.current.load();
    }, []);

    const playClickSound = () => {
        try {
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                const playPromise = audioRef.current.play();

                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Audio playback failed:', error);
                    });
                }
            }
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    };

    return playClickSound;
};

export default useClickSound; 
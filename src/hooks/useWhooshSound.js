import { useRef, useEffect } from 'react';

const useWhooshSound = () => {
    const audioRef = useRef(null);
    const isPlaying = useRef(false);

    useEffect(() => {
        // Create and preload the audio
        audioRef.current = new Audio('/sounds/whoosh.mp3');
        audioRef.current.load();
        // Set volume lower for whoosh sound
        audioRef.current.volume = 0.5;
        // Enable looping
        audioRef.current.loop = true;
    }, []);

    const playWhooshSound = () => {
        try {
            if (audioRef.current && !isPlaying.current) {
                audioRef.current.currentTime = 0;
                const playPromise = audioRef.current.play();

                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        isPlaying.current = true;
                    }).catch(error => {
                        console.log('Audio playback failed:', error);
                    });
                }
            }
        } catch (error) {
            console.log('Error playing whoosh sound:', error);
        }
    };

    const stopWhooshSound = () => {
        try {
            if (audioRef.current && isPlaying.current) {
                audioRef.current.pause();
                isPlaying.current = false;
            }
        } catch (error) {
            console.log('Error stopping whoosh sound:', error);
        }
    };

    return { playWhooshSound, stopWhooshSound };
};

export default useWhooshSound; 
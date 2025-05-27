import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PreLoader = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [isCookingVisible, setIsCookingVisible] = useState(true);
    const [showStartButton, setShowStartButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate loading progress in intervals of 10
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsReady(true);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isReady) {
            setTimeout(() => {
                setIsCookingVisible(false);
                setShowStartButton(true);
            }, 500);
        }
    }, [isReady]);

    const handleStart = async () => {
        // Add your start logic here
        if (onLoadComplete) {
            onLoadComplete();
        }
    };

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="overlay absolute inset-0 bg-black transition-opacity duration-1000"></div>
            
            {isCookingVisible && (
                <div className="flex items-center gap-4 absolute bottom-1/2.5 left-1/2 -translate-x-1/2">
                    <span className="text-white text-4xl font-bold transition-opacity duration-1000" style={{ fontFamily: 'MakeaNote, sans-serif' }}>
                        L o a d i n g ..... {progress}%
                    </span>
                </div>
            )}

            {showStartButton && (
                <button 
                    className="start fadeIn text-white text-8xl px-0 py-2 hover:text-blue-400 transition-all duration-300"
                    style={{ fontFamily: 'MakeaNote, sans-serif' }}
                    onClick={handleStart}
                >
                    START
                </button>
            )}
        </div>
    );
};

export default PreLoader; 
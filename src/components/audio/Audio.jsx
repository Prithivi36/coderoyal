import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

let client = null;
let localAudioTrack; 

function initializeClient() {
    client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    setupEventListeners();
}

async function joinChannel(channel) {
    await client.join(
        'a93ba219be3f40749b249260dea5b140',
        'coderoyal',
        '007eJxTYEjM1p5W91ZdRvvB1pB0R9vajddNLy5deeE0r7rHNOadVwQVGBItjZMSjQwtk1KN00wMzE0sk4xMLI3MDFJSE02TDE0MkjTqMxoCGRmSVvCyMDJAIIjPyZCcn5JalF+ZmMPAAACHyh+e',
        0 
    );
    await createMicrophoneAudioTrack();
    await publishMicrophoneAudioTrack();
}

async function createMicrophoneAudioTrack() {
    localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
}

async function publishMicrophoneAudioTrack() {
    await client.publish([localAudioTrack]);
}

function setupEventListeners() {
    client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'audio') {
            const remoteAudioTrack = user.audioTrack;
            remoteAudioTrack.play();
        }
    });

    client.on('user-unpublished', async (user) => {
        // Handle user unpublished (you can handle cleanup here)
    });
}

async function leaveChannel() {
    if (localAudioTrack) {
        localAudioTrack.close();
        localAudioTrack = null;
    }
    await client.leave();
}

const Audio = () => {
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        initializeClient();
        joinChannel();

        // Clean up when component is unmounted
        return () => {
            leaveChannel();
        };
    }, []);

    const toggleAudio = async () => {
        if (isMuted) {
            // Unmute the audio
            await localAudioTrack.setEnabled(true);
        } else {
            // Mute the audio
            await localAudioTrack.setEnabled(false);
        }
        setIsMuted(!isMuted);
    };

    return (
        <div>
            <h1>Agora Audio Streaming</h1>
            <p>Your audio will be streamed live to others in the channel.</p>
            <button onClick={toggleAudio}>
                {isMuted ? 'Unmute' : 'Mute'}
            </button>
        </div>
    );
};

export default Audio;

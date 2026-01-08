'use client';

import { useEffect } from 'react';

export default function TitleAnimation() {
    useEffect(() => {
        const messages = [
            "Hi I'm Kavindu Sahan Silva",
            'Cyber Security Student',
            'Penetration Tester',
            'CTF Player',
            'Security Researcher',
            'Network Security Specialist'
        ];

        let messageIndex = 0;
        let position = 0;
        let timeoutId: NodeJS.Timeout;

        function scroll() {
            const message = "🔐 " + messages[messageIndex] + " | Portfolio     ";

            document.title = message.substring(position) + message.substring(0, position);
            position = (position + 1) % message.length;

            // After scrolling through the entire message twice, move to next message
            if (position === 0) {
                messageIndex = (messageIndex + 1) % messages.length;
            }

            timeoutId = setTimeout(scroll, 200);
        }

        // Start scrolling
        scroll();

        // Cleanup
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return null;
}

"use client";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const WhatsappButton = () => {
    const nodeRef = useRef(null);
    const [dragThreshold] = useState(5);
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

    const openWhatsApp = (phone, message) => {
        if (typeof window === "undefined") return;

        const encodedMessage = encodeURIComponent(message);
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        const baseUrl = isMobile
            ? `https://wa.me/${phone}`
            : `https://web.whatsapp.com/send`;

        const url = isMobile
            ? `${baseUrl}?text=${encodedMessage}`
            : `${baseUrl}?phone=${phone}&text=${encodedMessage}`;

        window.open(url, "_blank");
    };

    const HandleButtonClick = () => {
        const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
        const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "";
        openWhatsApp(phone, message);
    }

    const handleDragStart = (e, data) => {
        setInitialPosition({ x: data.x, y: data.y });
    };
    const handleDragStop = (e, data) => {
        const diffX = data.x - initialPosition.x;
        const diffY = data.y - initialPosition.y;
        // now we will check if the difference is less then the threshhold then it is a click and will call the function
        if (Math.abs(diffX) < dragThreshold && Math.abs(diffY) < dragThreshold) {
            HandleButtonClick();
        }
    };

    return <Draggable
        nodeRef={nodeRef}
        onStart={handleDragStart}
        onStop={handleDragStop}
    >
        <div
            ref={nodeRef}
            className="fixed bottom-4 right-4 z-50 cursor-move shadow-2xl border-[1px] border-gray-600 p-1 rounded-lg bg-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 464 488"
                className="w-10 h-10 bg-white text-green-500 hover:text-green-700 transition duration-300 ease-in-out rounded-sm"
                fill="currentColor"
            >
                <path d="M462 228q0 93-66 159t-160 66q-56 0-109-28L2 464l40-120q-32-54-32-116q0-93 66-158.5T236 4t160 65.5T462 228zM236 39q-79 0-134.5 55.5T46 228q0 62 36 111l-24 70l74-23q49 31 104 31q79 0 134.5-55.5T426 228T370.5 94.5T236 39zm114 241q-1-1-10-7q-3-1-19-8.5t-19-8.5q-9-3-13 2q-1 3-4.5 7.5t-7.5 9t-5 5.5q-4 6-12 1q-34-17-45-27q-7-7-13.5-15t-12-15t-5.5-8q-3-7 3-11q4-6 8-10l6-9q2-5-1-10q-4-13-17-41q-3-9-12-9h-11q-9 0-15 7q-19 19-19 45q0 24 22 57l2 3q2 3 4.5 6.5t7 9t9 10.5t10.5 11.5t13 12.5t14.5 11.5t16.5 10t18 8.5q16 6 27.5 10t18 5t9.5 1t7-1t5-1q9-1 21.5-9t15.5-17q8-21 3-26z" />
            </svg>

        </div>
    </Draggable>

};




export default WhatsappButton;

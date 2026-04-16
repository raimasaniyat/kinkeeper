import React, { createContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import friendsData from './friends.json';

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [timeline, setTimeline] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFriends(friendsData);
            setLoading(false);
        }, 800);
    }, []);

    const addInteraction = (type, friendName) => {
        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleDateString('en-GB'),
            type: type,
            title: `${type} with ${friendName}`
        };
        setTimeline([newEntry, ...timeline]);
        toast.success(`${type} logged for ${friendName}!`);
    };

    return (
        <FriendContext.Provider value={{ friends, timeline, loading, addInteraction }}>
            {children}
            <Toaster position="top-center"/>
        </FriendContext.Provider>
    );
};

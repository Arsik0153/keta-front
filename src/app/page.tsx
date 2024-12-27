'use client';
import React from 'react';
import FileIcon from '@/assets/icons/file.svg';
import { useUser } from '@/components/providers/UserProvider';
import Header from './_components/header';

export default function Home() {
    const { user } = useUser();

    return (
        <div>
            <Header />
        </div>
    );
}

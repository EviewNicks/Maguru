'use client';

import { Toast } from 'flowbite-react';
import React from 'react';

export function ToastComponent() {
  return (
    <Toast>
      <div className="text-sm font-normal">Conversation archived.</div>
      <div className="ml-auto flex items-center space-x-2">
        <a
          href="#"
          className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
        >
          Undo
        </a>
        <Toast.Toggle />
      </div>
    </Toast>
  );
}

import { Tabs } from 'flowbite-react';
import React from 'react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

export function TabComponent() {
  return (
    <Tabs aria-label="Tabs with icons" variant="underline">
      <Tabs.Item active title="Profile" icon={HiUserCircle}>
        This is{' '}
        <span className="font-medium text-gray-800 dark:text-white">
          Profile tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title="Dashboard" icon={MdDashboard}>
        This is{' '}
        <span className="font-medium text-gray-800 dark:text-white">
          Dashboard tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        This is{' '}
        <span className="font-medium text-gray-800 dark:text-white">
          Settings tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        This is{' '}
        <span className="font-medium text-gray-800 dark:text-white">
          Contacts tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
}

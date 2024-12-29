'use client';

import React from 'react';
import { Button, ButtonGroup } from 'flowbite-react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

export const ButtonGroupComponent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <ButtonGroup outline>
          <Button color="gray">Profile</Button>
          <Button color="gray">Settings</Button>
          <Button color="gray">Messages</Button>
        </ButtonGroup>
        <Button.Group outline>
          <Button color="gray">Profile</Button>
          <Button color="gray">Settings</Button>
          <Button color="gray">Messages</Button>
        </Button.Group>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button.Group outline>
          <Button color="gray">
            <HiUserCircle className="mr-3 h-5 w-5" />
            Profile
          </Button>
          <Button color="gray">
            <HiAdjustments className="mr-3 h-5 w-5" />
            Settings
          </Button>
          <Button color="gray">
            <HiCloudDownload className="mr-3 h-5 w-5" />
            Messages
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};

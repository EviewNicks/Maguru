import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import React from 'react';

export function AlertComponent() {
  return (
    <Alert
      color="success"
      icon={HiInformationCircle}
      onDismiss={() => alert('Alert dismissed!')}
      rounded
    >
      <span className="font-medium">Info alert!</span> Change a few things up
      and try submitting again.
    </Alert>
  );
}

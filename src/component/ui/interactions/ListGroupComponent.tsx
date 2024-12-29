'use client';
import { ListGroup } from 'flowbite-react';
import React from 'react';

export function ListGroupComponent() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroup.Item onClick={() => alert('Profile clicked!')} active>
          Profile
        </ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

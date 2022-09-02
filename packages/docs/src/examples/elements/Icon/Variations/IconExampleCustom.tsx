import Icon from '@growth-ui/react/elements/Icon';
import React from 'react';

const IconExampleCustom = () => (
  <>
    <Icon viewBox="0 0 20 20">
      <title>ContactCardLink icon</title>
      <path d="M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v5.84a3.49 3.49 0 0 0-1.5-.34h-4a3.5 3.5 0 0 0-3.16 5H3.5A1.5 1.5 0 0 1 2 14.5v-9zm3 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm4 3.2a.95.95 0 0 0-.95-.95h-3.1a.95.95 0 0 0-.95.95c0 .85.58 1.58 1.4 1.79l.06.01c.68.18 1.4.18 2.08 0l.06-.01c.82-.2 1.4-.94 1.4-1.8zM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm1 4a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
    </Icon>

    <Icon viewBox="0 0 16 16" color="red-600">
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
      />
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
    </Icon>

    <Icon viewBox="0 0 16 16" width={50} height={50}>
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
      />
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
    </Icon>

    <Icon viewBox="0 0 16 16" flipped>
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
      />
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
    </Icon>

    <Icon viewBox="0 0 16 16" rotated="clockwise">
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
      />
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
    </Icon>

    <Icon viewBox="0 0 16 16" rotated="counterclockwise">
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
      />
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
    </Icon>
  </>
);

export default IconExampleCustom;

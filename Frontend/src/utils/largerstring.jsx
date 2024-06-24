import React from "react";

const insertBrTags = (message, charsPerSegment) => {
  let segments = [];
  for (let i = 0; i < message.length; i += charsPerSegment) {
    segments.push(message.slice(i, i + charsPerSegment));
  }
  return segments.join("<br>");
};

const LongMessage = ({ message, charsPerSegment }) => {
  const formattedMessage = insertBrTags(message, charsPerSegment);
  return <div dangerouslySetInnerHTML={{ __html: formattedMessage }} />;
};

export default LongMessage;

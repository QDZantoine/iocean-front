import React from 'react';
import { RichTextBlock } from '@/types/types';

interface Props {
  blocks: RichTextBlock[];
}

export default function RichTextRenderer({ blocks }: Props) {
  return (
    <div className="prose max-w-none">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index}>
                {block.children?.map((child, i) => (
                  <React.Fragment key={i}>{child.text}</React.Fragment>
                ))}
              </p>
            );
          case 'heading':
          case 'heading1':
            return (
              <h1 key={index}>
                {block.children?.map((child, i) => (
                  <React.Fragment key={i}>{child.text}</React.Fragment>
                ))}
              </h1>
            );
          case 'heading2':
            return (
              <h2 key={index}>
                {block.children?.map((child, i) => (
                  <React.Fragment key={i}>{child.text}</React.Fragment>
                ))}
              </h2>
            );
          case 'heading3':
            return (
              <h3 key={index}>
                {block.children?.map((child, i) => (
                  <React.Fragment key={i}>{child.text}</React.Fragment>
                ))}
              </h3>
            );
          case 'list':
            return (
              <ul key={index}>
                {block.children?.map((item, i) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

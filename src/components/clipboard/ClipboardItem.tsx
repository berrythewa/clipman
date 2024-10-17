import { Component } from 'solid-js';

interface ClipboardItemProps {
  content: string;
}

const ClipboardItem: Component<ClipboardItemProps> = (props) => {
  return (
    <li class="bg-gray-100 p-2 rounded hover:bg-gray-200 transition-colors">
      {props.content}
    </li>
  );
};

export default ClipboardItem;
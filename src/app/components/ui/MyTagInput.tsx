import React, { useState } from 'react';

interface OptionType {
  value: string;
  label: string;
}

interface MyTagInputProps {
  value: OptionType[];
  onChange: (value: OptionType[]) => void;
}

const MyTagInput: React.FC<MyTagInputProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      const newTag = {
        value: inputValue.trim(),
        label: inputValue.trim()
      };
      if (!value.some(tag => tag.value === newTag.value)) {
        onChange([...value, newTag]);
      }
      setInputValue('');
    }
  };

  return (
    <div className="w-full">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter to add a skill"
        className="w-full border p-2 rounded-lg"
      />
    </div>
  );
};

export default MyTagInput; 
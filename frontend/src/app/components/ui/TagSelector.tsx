import React from 'react';

interface TagSelectorProps {
  options: string[];
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({ options, selectedTags, onChange }) => {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter(t => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 rounded-full border ${
            selectedTags.includes(tag)
              ? 'bg-purple-600 text-white border-purple-600'
              : 'border-gray-300 text-gray-700'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagSelector; 
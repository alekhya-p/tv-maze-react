import React from 'react'

interface Props {
    placeHolder: string;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}
const SearchInput: React.FC<Props> = ({
    placeHolder,
    handleOnChange,
    // onClear,
    value
}) => {
  return (
    <div>
      <input
      type='text'
      placeholder={placeHolder}
      onChange={handleOnChange}
      value={value}
      />
    </div>
  )
}

export default SearchInput

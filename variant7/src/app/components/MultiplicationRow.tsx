import React, { useState } from 'react';

interface MultiplicationRowProps {
  multiplication: number[];
  key: number;
  index: number;
  selectedValue: number | null;
  handleClick: (value: number) => void;
}

const MultiplicationRow: React.FC<MultiplicationRowProps> = ({ multiplication, index, selectedValue, handleClick }) => {
    //console.log('selectedValue', selectedValue)
    return (
        <tr>
            {multiplication.map((value: number, i: number) => 
                index === 0 ? <th key={i} className="p-2 border">{value}</th> : (i === 0 ? <th key={i} className="p-2 border">{value}</th> : <td key={i} onClick={() => handleClick(value)} style={selectedValue === value ? {backgroundColor: 'yellow'} : {}} className="p-2 border">{value}</td>)
            )}
        </tr>
    )
}

export default MultiplicationRow;
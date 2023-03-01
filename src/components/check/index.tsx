import React from "react";
import './style.css';
import { useMovie } from '../../context';

interface CheckProps {
  title: string;
  onCheck: (isChecked: boolean) => void;
}

const Check: React.FC<CheckProps> = ({ title, onCheck }) => {
  const { state } = useMovie();
  const isSelect = state.checkedMovies[title];

  const handleOnClick = () => {
    onCheck(!isSelect);
  }

  return (
    <button 
      className={isSelect ? "check check--enabled" : "check check--disabled"}
      onClick={handleOnClick}
    >
      {isSelect ? '✓' : 'x'}
    </button>
   )
};

export default Check;

import { FC, ReactNode } from "react";

interface LoadMoreBtnProps {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
}

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ children, onClick, disabled }) => {
    return (
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  };

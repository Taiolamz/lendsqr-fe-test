import React, { createContext, PropsWithChildren, useState } from "react";
import { ContextType } from "./types";

const ActionContext = createContext<ContextType>({
  isFilterDrop: false,
  setIsFilterDrop: () => {},
});

export const ActionContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [isFilterDrop, setIsFilterDrop] = useState<boolean>(false);

  const handleSetFilterDrop = () => {
    setIsFilterDrop((prevState) => !prevState);
  };

  const contextValue: ContextType = {
    isFilterDrop: isFilterDrop,
    setIsFilterDrop: handleSetFilterDrop,
  };

  return (
    <ActionContext.Provider value={contextValue}>
      {props.children}
    </ActionContext.Provider>
  );
};

export { ActionContext };

import { useState } from "#imports";

export const useMinimalArchive = () => {
  const foo2 = useState("foo2", () => "はじめてのFoo2");
  const foo3 = useState("foo3", () => "はじめてのFoo3");

  return {
    foo2,
    foo3
  };
};

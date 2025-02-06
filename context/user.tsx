"use client";

import { createContext, useContext } from "react";
import { ICatalystUser } from "zcatalyst-sdk-node/lib/utils/pojo/common";

export const UserContext = createContext< ICatalystUser | null>(null);


export function UserProvider({ app, children }: { app:ICatalystUser; children: React.ReactNode }) {
  return <UserContext.Provider value={app}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}

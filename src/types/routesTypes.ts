import React from "react";

export interface AppointmentRoute {
  path: string;
  Component: React.ComponentType;
  exact?: boolean;
}
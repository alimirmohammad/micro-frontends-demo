import React, { useEffect, useRef } from "react";

import { mount } from "dashboard/DashboardApp";

export default function DashboardApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}

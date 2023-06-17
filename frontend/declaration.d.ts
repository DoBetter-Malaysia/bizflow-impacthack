declare module "react-responsive-masonry" {
  import React, { CSSProperties, ReactNode } from "react";

  const Masonry: React.FC<{
    columnsCount?: number;
    gutter?: string;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
  }>;

  export const ResponsiveMasonry: React.FC<{
    columnsCountBreakPoints?: Record<number, number>;
    className?: string;
    style?: CSSProperties;
  }>;

  export default Masonry;
}

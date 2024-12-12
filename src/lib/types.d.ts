declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

interface Navigation {
  title: string;
  path: string;
}

interface Team {
  img: string;
  position: string;
  name: string;
  exec?: boolean;
}

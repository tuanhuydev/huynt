declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    const component: React.FC<React.SVGProps<SVGSVGElement>>;
    export default component;
  }
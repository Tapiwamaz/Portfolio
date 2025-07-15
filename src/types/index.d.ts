declare module '*.svg' {
    const content: string;
    export default content;
  }
 
  interface ImportMetaEnv {
    readonly VITE_SERVICE_ID: string;
    readonly VITE_TEMPLATE_ID: string;
    readonly VITE_PUBLIC_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
  interface TimelineItem {
    time: string;
    location: string;
    title: string;
    content: string;
    image: string;
  }
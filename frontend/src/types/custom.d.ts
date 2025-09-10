declare module "lowlight/lib/core" {
  import { Lowlight } from "lowlight";
  export const lowlight: Lowlight;
}

declare module "highlight.js/lib/languages/javascript" {
  const lang: any;
  export default lang;
}

declare module "highlight.js/lib/languages/python" {
  const lang: any;
  export default lang;
}

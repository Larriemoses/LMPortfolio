// src/utils/editor.ts
export const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const convertEditorBlocksToHtml = (data: any): string => {
  if (!data || !Array.isArray(data.blocks)) return "";
  const htmlParts: string[] = [];

  data.blocks.forEach((b: any) => {
    const d = b.data || {};
    switch (b.type) {
      case "header":
        htmlParts.push(`<h${d.level}>${d.text}</h${d.level}>`);
        break;
      case "paragraph":
        htmlParts.push(`<p>${d.text}</p>`);
        break;
      case "list":
        const tag = d.style === "ordered" ? "ol" : "ul";
        const items = d.items.map((it: string) => `<li>${it}</li>`).join("");
        htmlParts.push(`<${tag}>${items}</${tag}>`);
        break;
      case "quote":
        htmlParts.push(
          `<blockquote><p>${d.text}</p><footer>${
            d.caption || ""
          }</footer></blockquote>`
        );
        break;
      case "code":
        htmlParts.push(`<pre><code>${escapeHtml(d.code || "")}</code></pre>`);
        break;
      case "image":
        htmlParts.push(
          `<figure><img src="${d.file?.url || d.url || ""}" alt="${
            d.caption || ""
          }" /><figcaption>${d.caption || ""}</figcaption></figure>`
        );
        break;
      case "embed":
        htmlParts.push(d.embed || "");
        break;
      default:
        htmlParts.push(`<div>${d.text ? d.text : JSON.stringify(d)}</div>`);
    }
  });

  return htmlParts.join("\n");
};

const escapeHtml = (unsafe: string) =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

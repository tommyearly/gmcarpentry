import fs from "fs";
import path from "path";

export type EmailImageMode = "cid" | "data" | "url";

const LOGO_REL = "images/email/logo-email.png";

function readPublicFile(relativePath: string) {
  return fs.readFileSync(path.join(process.cwd(), "public", relativePath));
}

let logoBuffer: Buffer | null = null;

function getLogoBuffer() {
  if (!logoBuffer) logoBuffer = readPublicFile(LOGO_REL);
  return logoBuffer;
}

function toDataUri(buffer: Buffer, mime = "image/png") {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

export function emailImageSrc(mode: EmailImageMode, absoluteFallback: string) {
  if (mode === "url") return absoluteFallback;
  try {
    if (mode === "cid") return "cid:gm-logo";
    return toDataUri(getLogoBuffer());
  } catch {
    return absoluteFallback;
  }
}

export type InlineEmailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
  inlineContentId: string;
};

export function getInlineEmailAttachments(): InlineEmailAttachment[] {
  return [
    {
      filename: "logo-email.png",
      content: getLogoBuffer(),
      contentType: "image/png",
      inlineContentId: "gm-logo",
    },
  ];
}

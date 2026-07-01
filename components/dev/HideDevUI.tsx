"use client";

import { useEffect } from "react";

const isDev = process.env.NODE_ENV === "development";
const hideDevUI =
  isDev && process.env.NEXT_PUBLIC_HIDE_DEV_UI !== "false";

const DEV_UI_SELECTOR = [
  "nextjs-portal",
  "#next-logo",
  "[data-nextjs-dev-tools-button]",
  "[data-next-mark]",
  "[data-nextjs-toast]",
  ".nextjs-toast",
  ".nextjs-toast-errors-parent",
  "[data-issues]",
  "[data-indicator-status]",
  ".devtools-indicator",
].join(", ");

function suppressDevElements(root: ParentNode = document) {
  root.querySelectorAll(DEV_UI_SELECTOR).forEach((node) => {
    const el = node as HTMLElement;
    el.style.setProperty("display", "none", "important");
    el.style.setProperty("visibility", "hidden", "important");
    el.style.setProperty("pointer-events", "none", "important");
    el.style.setProperty("opacity", "0", "important");
  });
}

export function HideDevUI() {
  useEffect(() => {
    if (!hideDevUI) return;

    document.documentElement.setAttribute("data-hide-dev-ui", "true");
    suppressDevElements();

    fetch("/__nextjs_devtools_config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ disableDevIndicator: true }),
      keepalive: true,
    }).catch(() => {});

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches(DEV_UI_SELECTOR)) {
              suppressDevElements(node.parentNode ?? document);
            } else {
              suppressDevElements(node);
            }
          }
        });
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      document.documentElement.removeAttribute("data-hide-dev-ui");
    };
  }, []);

  return null;
}

const ANALYTICS_ENDPOINT = "/analytics";
const eventQueue = [];

function queueEvent(eventName, payload = {}) {
  const event = {
    name: eventName,
    payload,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    variant: document.body.dataset.variant || "a",
  };
  eventQueue.push(event);
}

function flushQueue(useBeacon = false) {
  if (!eventQueue.length) return;
  const data = JSON.stringify({ events: eventQueue.splice(0) });
  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(ANALYTICS_ENDPOINT, data);
    return;
  }
  fetch(ANALYTICS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
    keepalive: true,
  }).catch(() => {
    /* network errors are ignored in demo */
  });
}

function trackElement(element) {
  const descriptor = element.dataset.track;
  if (!descriptor) return;
  const eventName = `ui:${descriptor}`;
  const handler = (event) => {
    const payload = {
      eventType: event.type,
      tagName: element.tagName,
      text: (element.textContent || "").trim().slice(0, 80),
    };
    queueEvent(eventName, payload);
  };

  if (element.tagName === "FORM") {
    element.addEventListener("submit", handler);
  } else {
    element.addEventListener("click", handler);
  }
}

function initAnalytics() {
  const tracked = document.querySelectorAll("[data-track]");
  tracked.forEach(trackElement);
  queueEvent("page:view", { title: document.title });
}

function onReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
}

onReady(initAnalytics);
window.addEventListener("beforeunload", () => flushQueue(true));
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    flushQueue(true);
  }
});

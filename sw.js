self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { console.log("Service Worker مفعل ✅"); });
self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : "تنبيه!";
  event.waitUntil(
    self.registration.showNotification("🕌 الصلاة", { body: data, icon: "icon.png" })
  );
});

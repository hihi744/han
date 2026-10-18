"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

/** 207 Giải Phóng, Phường Bạch Mai, Hà Nội (OpenStreetMap / Nominatim). */
const OFFICE: [number, number] = [21.0001105, 105.8418439];

const pinHtml = `
  <span class="office-pin" aria-hidden="true">
    <svg viewBox="0 0 48 60" width="48" height="60">
      <path d="M24 59C24 59 4 37.5 4 22a20 20 0 0 1 40 0c0 15.5-20 37-20 37z" fill="#B93636" stroke="#fff" stroke-width="2.5"/>
      <circle cx="24" cy="22" r="13" fill="#fff"/>
    </svg>
    <img src="/brand/dom-hoa-mark.png" alt="" width="18" height="18" />
  </span>`;

/**
 * Office location. A static, pre-rendered map (same tiles, same pin) shows first and
 * stays as the fallback; once Leaflet loads, an interactive map takes its place.
 */
export function OfficeMap({ address, directionsHref }: { address: string; directionsHref: string }) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !box.current) return;
      map = L.map(box.current, { center: OFFICE, zoom: 17, scrollWheelZoom: false, attributionControl: true });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        className: "office-map-tiles",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      const icon = L.divIcon({ html: pinHtml, className: "", iconSize: [48, 60], iconAnchor: [24, 59], popupAnchor: [0, -54] });
      L.marker(OFFICE, { icon, title: "Văn phòng Đơm Hoa" })
        .addTo(map)
        .bindPopup(
          `<strong>Văn phòng Đơm Hoa</strong><br>${address}<br><a href="${directionsHref}" target="_blank" rel="noopener noreferrer">Chỉ đường trên Google Maps</a>`,
        );
      box.current.dataset.live = "";
    });
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [address, directionsHref]);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-sprout">
      {/* Static fallback: also what the no-JavaScript preview shows. */}
      <img src="/maps/van-phong.png" alt={`Bản đồ: ${address}`} className="absolute inset-0 size-full object-cover" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full" dangerouslySetInnerHTML={{ __html: pinHtml }} />
      <span className="absolute bottom-1 right-2 text-[10px] text-ink-muted">© OpenStreetMap</span>
      <div ref={box} className="office-map absolute inset-0" aria-label={`Bản đồ tương tác: ${address}`} />
    </div>
  );
}

type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function ArrowUpRight({ size = 18 }: IconProps) {
  return <svg {...base(size)}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>;
}
export function Github({ size = 20 }: IconProps) {
  return <svg {...base(size)}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9.5S17.7.1 15 2a13.4 13.4 0 0 0-6 0C6.3.1 5.1.5 5.1.5A5.1 5.1 0 0 0 5 3.7 5.5 5.5 0 0 0 3.5 7.5c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></svg>;
}
export function Linkedin({ size = 20 }: IconProps) {
  return <svg {...base(size)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
}
export function Mail({ size = 20 }: IconProps) {
  return <svg {...base(size)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}
export function External({ size = 17 }: IconProps) {
  return <svg {...base(size)}><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>;
}
export function ChevronDown({ size = 16 }: IconProps) {
  return <svg {...base(size)}><path d="m6 9 6 6 6-6" /></svg>;
}
export function Briefcase({ size = 22 }: IconProps) {
  return <svg {...base(size)}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /><path d="M10 12v2h4v-2" /></svg>;
}
export function Shield({ size = 22 }: IconProps) {
  return <svg {...base(size)}><path d="M12 3 20 6v5c0 5.3-3.4 8.7-8 10-4.6-1.3-8-4.7-8-10V6l8-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
}
export function Code({ size = 22 }: IconProps) {
  return <svg {...base(size)}><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></svg>;
}
export function Database({ size = 22 }: IconProps) {
  return <svg {...base(size)}><ellipse cx="12" cy="5" rx="7.5" ry="3" /><path d="M4.5 5v7c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5" /><path d="M4.5 12v7c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-7" /></svg>;
}
export function Sparkles({ size = 22 }: IconProps) {
  return <svg {...base(size)}><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" /><path d="m19 13 .7 2.3L22 16l-2.3.7L19 19l-.7-2.3L16 16l2.3-.7L19 13Z" /><path d="m5 14 .7 2.3L8 17l-2.3.7L5 20l-.7-2.3L2 17l2.3-.7L5 14Z" /></svg>;
}

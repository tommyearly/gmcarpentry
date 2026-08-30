export function PageTransition({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}

export function MotionBoot() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion')}catch(e){}",
      }}
    />
  );
}

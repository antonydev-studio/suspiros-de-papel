export function HeroBackground() {
  return (
    <>
      {/* Blob superior derecho — primary-fixed */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-fixed organic-blob pointer-events-none blur-3xl opacity-10"
      />

      {/* Blob izquierdo — tertiary-fixed */}
      <div
        className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-tertiary-fixed organic-blob-alt pointer-events-none blur-3xl opacity-15"
      />
    </>
  )
}

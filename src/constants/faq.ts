/** A single question-answer pair. */
export type FAQItem = { q: string; a: string }

/** A named group of related FAQItems. */
export type FAQCategory = { title: string; items: FAQItem[] }

export const FAQ_DATA: FAQCategory[] = [
  {
    title: "Pedidos y proceso",
    items: [
      {
        q: "¿Cómo puedo hacer un pedido?",
        a: "Me puedes escribir por WhatsApp o por DM en Instagram — yo te atiendo directamente. No hay intermediarios ni formularios complicados.",
      },
      {
        q: "¿Cuánto tarda en estar listo mi pedido?",
        a: "Por lo general tomo el pedido un día y al siguiente ya está listo para entrega. Depende del producto y la cantidad, pero siempre te digo con honestidad cuánto tiempo necesito.",
      },
      {
        q: "¿Aceptan pedidos urgentes?",
        a: "Sí, si hay espacio disponible los hacemos al instante. Escríbeme y vemos cómo te ayudo — hago mi mejor esfuerzo para que llegues a tiempo.",
      },
      {
        q: "¿Hay un mínimo de piezas para pedir?",
        a: "No hay mínimo. Puedes pedir desde una sola pieza, sin problema.",
      },
    ],
  },
  {
    title: "Personalización",
    items: [
      {
        q: "¿Puedo mandar mi propio diseño?",
        a: "Claro que sí. Me envías tu diseño y lo trabajamos juntos para que quede perfecto en el producto que elegiste.",
      },
      {
        q: "¿Qué formatos de archivo aceptan?",
        a: "Acepto PDF, JPG, PNG y casi cualquier formato de imagen. Si tienes duda sobre el tuyo, solo pregúntame y lo revisamos.",
      },
      {
        q: "¿Qué pasa si no tengo diseño ni archivo?",
        a: "No te preocupes, la mayoría de mis clientes parten de una idea y yo les propongo opciones. Me cuentas qué tienes en mente y lo desarrollamos juntos — eso también es parte de lo que hago.",
      },
      {
        q: "¿Puedo ver cómo quedará antes de que lo produzcan?",
        a: "Siempre. Antes de imprimir o grabar cualquier producto te mando una vista previa para que des tu visto bueno. No empiezo la producción sin tu aprobación.",
      },
    ],
  },
  {
    title: "Pagos y envíos",
    items: [
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Por el momento acepto transferencia bancaria y efectivo.",
      },
      {
        q: "¿Se paga todo por adelantado?",
        a: "Se maneja un anticipo del 50% para arrancar el pedido. En pedidos pequeños o de bajo costo lo vemos caso por caso.",
      },
      {
        q: "¿Hacen envíos a todo México?",
        a: "Sí, enviamos a toda la república desde Zihuatanejo. El costo de envío depende del destino y el tamaño del paquete — por lo general se divide 50/50 entre cliente y negocio, salvo casos especiales.",
      },
      {
        q: "¿Hacen entregas locales?",
        a: "Sí, las entregas locales las hago personalmente. Prefiero eso para que el cliente tenga más confianza y pueda ver su producto de primera mano.",
      },
    ],
  },
  {
    title: "Productos",
    items: [
      {
        q: "¿En qué materiales trabajan sublimación?",
        a: "Tazas de cerámica, peltre y acero inoxidable, MDF, metal, y tela como almohadas, cojines, toallas y sábanas (siempre que sea poliéster). En playeras también trabajamos algodón con otra técnica. Puedes ver el catálogo completo en la página de inicio.",
      },
      {
        q: "¿Y para grabado láser?",
        a: "MDF, acero inoxidable, madera, vinil y piel son los materiales principales. El catálogo completo está en la página de inicio.",
      },
      {
        q: "¿Tienen catálogo o todo es bajo pedido?",
        a: "Todo es bajo pedido y personalizado. Puedes ver ejemplos de lo que hacemos en la galería de la página principal.",
      },
    ],
  },
  {
    title: "Garantías",
    items: [
      {
        q: "¿Qué pasa si mi producto llega dañado?",
        a: "Nos ponemos de acuerdo. Empaco con cuidado para proteger cada pieza, pero si ocurre algún accidente en el envío lo hablamos directamente y buscamos una solución justa — ya sea reposición parcial o devolución de un porcentaje según el caso.",
      },
      {
        q: "¿Hacen reposiciones o devoluciones?",
        a: "Depende de cada situación. Siempre busco que el cliente quede satisfecho y lo resolvemos juntos con buena comunicación.",
      },
      {
        q: "¿Dónde puedo ver trabajos anteriores?",
        a: "En Instagram y Facebook encuentras mi trabajo. Los links están aquí en la página.",
      },
    ],
  },
]

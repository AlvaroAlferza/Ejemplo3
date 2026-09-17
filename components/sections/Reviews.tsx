"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Mariana R.",
    city: "Arequipa",
    text: "Una de esas experiencias que quieres repetir. Todo estuvo increíble, desde la atención hasta el último detalle del plato.",
    date: "Hace 2 días",
  },
  {
    id: 2,
    name: "Carlos M.",
    city: "Lima",
    text: "La comida estuvo espectacular. Los sabores se sienten muy bien equilibrados y la presentación es impecable.",
    date: "Hace 4 días",
  },
  {
    id: 3,
    name: "Lucía P.",
    city: "Arequipa",
    text: "Fuimos a celebrar un cumpleaños y la experiencia fue excelente. El ambiente es precioso y la atención muy cercana.",
    date: "Hace 1 semana",
  },
  {
    id: 4,
    name: "Diego A.",
    city: "Cusco",
    text: "Me encantó la propuesta. Se siente como cocina peruana, pero con una presentación y ejecución mucho más contemporánea.",
    date: "Hace 1 semana",
  },
  {
    id: 5,
    name: "Andrea V.",
    city: "Arequipa",
    text: "El lugar tiene muchísimo encanto. Pedimos varios platos para compartir y absolutamente todos nos sorprendieron.",
    date: "Hace 8 días",
  },
  {
    id: 6,
    name: "Fernando C.",
    city: "Lima",
    text: "Excelente experiencia gastronómica. Los ingredientes se sienten frescos y la atención fue rápida y muy amable.",
    date: "Hace 10 días",
  },
  {
    id: 7,
    name: "Sofía T.",
    city: "Arequipa",
    text: "Un restaurante al que definitivamente volvería. El ambiente es elegante sin sentirse demasiado formal.",
    date: "Hace 12 días",
  },
  {
    id: 8,
    name: "Mateo R.",
    city: "Moquegua",
    text: "Probamos varios platos y quedamos encantados. Muy buena combinación entre tradición y creatividad.",
    date: "Hace 2 semanas",
  },
  {
    id: 9,
    name: "Valeria S.",
    city: "Arequipa",
    text: "La atención fue excelente desde que llegamos. Todo estuvo muy cuidado y la comida realmente deliciosa.",
    date: "Hace 2 semanas",
  },
  {
    id: 10,
    name: "Javier L.",
    city: "Tacna",
    text: "El lomo saltado fue de los mejores que he probado. Buen sabor, buena porción y una presentación increíble.",
    date: "Hace 17 días",
  },
  {
    id: 11,
    name: "Camila G.",
    city: "Arequipa",
    text: "Me encantó cada detalle del lugar. Es perfecto para una cena tranquila y para disfrutar sin apuro.",
    date: "Hace 3 semanas",
  },
  {
    id: 12,
    name: "Rodrigo F.",
    city: "Lima",
    text: "Una propuesta muy bien pensada. Se nota el cuidado detrás de cada plato y la calidad de los ingredientes.",
    date: "Hace 3 semanas",
  },
  {
    id: 13,
    name: "Daniela N.",
    city: "Arequipa",
    text: "Pedimos entradas para compartir y luego algunos platos de fondo. Todo llegó perfecto y con muchísimo sabor.",
    date: "Hace 24 días",
  },
  {
    id: 14,
    name: "Sebastián P.",
    city: "Cusco",
    text: "Muy buena experiencia. El ambiente, la música y la comida hacen que realmente disfrutes la visita.",
    date: "Hace 1 mes",
  },
  {
    id: 15,
    name: "Paula E.",
    city: "Arequipa",
    text: "La atención merece una mención especial. Fueron atentos en todo momento y nos recomendaron muy buenos platos.",
    date: "Hace 1 mes",
  },
  {
    id: 16,
    name: "Nicolás D.",
    city: "Lima",
    text: "Un sitio muy bonito y con una carta interesante. Definitivamente una buena opción para una ocasión especial.",
    date: "Hace 1 mes",
  },
  {
    id: 17,
    name: "Gabriela H.",
    city: "Arequipa",
    text: "El ceviche estuvo espectacular. Fresco, equilibrado y con una presentación muy bonita.",
    date: "Hace 5 semanas",
  },
  {
    id: 18,
    name: "Alejandro V.",
    city: "Arequipa",
    text: "Nos sorprendió muchísimo la calidad de la comida. Todo se sintió fresco, bien preparado y servido a tiempo.",
    date: "Hace 5 semanas",
  },
  {
    id: 19,
    name: "Renata C.",
    city: "Puno",
    text: "Un restaurante con mucha personalidad. Me gustó que cada plato tuviera algo diferente sin perder la esencia peruana.",
    date: "Hace 6 semanas",
  },
  {
    id: 20,
    name: "Martín S.",
    city: "Arequipa",
    text: "Excelente lugar para ir con amigos. Pedimos diferentes platos y compartir fue parte de la experiencia.",
    date: "Hace 6 semanas",
  },
  {
    id: 21,
    name: "Isabella M.",
    city: "Lima",
    text: "Todo estuvo muy bien. Desde la reserva hasta el momento de salir, la experiencia fue bastante agradable.",
    date: "Hace 2 meses",
  },
  {
    id: 22,
    name: "Luis A.",
    city: "Arequipa",
    text: "La carta tiene opciones para todos y los platos están muy bien ejecutados. Sin duda volveremos.",
    date: "Hace 2 meses",
  },
  {
    id: 23,
    name: "Carolina B.",
    city: "Tacna",
    text: "Me encantó el concepto del restaurante. Se siente moderno, acogedor y con mucha atención al detalle.",
    date: "Hace 2 meses",
  },
  {
    id: 24,
    name: "Tomás J.",
    city: "Arequipa",
    text: "Una experiencia muy completa. La comida estuvo excelente y el servicio hizo que la noche fuera todavía mejor.",
    date: "Hace 2 meses",
  },
  {
    id: 25,
    name: "Natalia K.",
    city: "Cusco",
    text: "Vinimos recomendados y definitivamente valió la pena. Los sabores son increíbles y el ambiente es muy agradable.",
    date: "Hace 3 meses",
  },
  {
    id: 26,
    name: "Álvaro R.",
    city: "Arequipa",
    text: "Muy buena atención y platos bastante bien presentados. Se nota que hay mucho cuidado en la cocina.",
    date: "Hace 3 meses",
  },
  {
    id: 27,
    name: "Patricia W.",
    city: "Lima",
    text: "Un lugar perfecto para una cena especial. Nos gustó mucho la experiencia y seguramente regresaremos.",
    date: "Hace 3 meses",
  },
  {
    id: 28,
    name: "Mauricio Z.",
    city: "Arequipa",
    text: "La comida fue lo mejor de la noche. Sabores intensos pero muy bien balanceados y una presentación excelente.",
    date: "Hace 4 meses",
  },
  {
    id: 29,
    name: "Fiorella Q.",
    city: "Arequipa",
    text: "Me gustó muchísimo el ambiente. Es elegante, pero al mismo tiempo se siente cálido y cómodo.",
    date: "Hace 4 meses",
  },
  {
    id: 30,
    name: "Gonzalo T.",
    city: "Lima",
    text: "Una experiencia que recomiendo totalmente. Buena comida, excelente servicio y un ambiente muy bonito.",
    date: "Hace 4 meses",
  },
];

function getRandomReviews(items: typeof reviews, count: number) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled.slice(0, count);
}

export default function Reviews() {
  const selectedReviews = useMemo(() => {
    return getRandomReviews(reviews, 3);
  }, []);

  return (
    <section
      id="resenas"
      className="relative overflow-hidden bg-[#F7F2E8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#C86B45]/[0.045] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#C86B45]/[0.04] blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-[#C86B45]/15 bg-white/70 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles
              size={13}
              className="text-[#C86B45]"
              strokeWidth={1.8}
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C86B45]">
              Lo que dicen de nosotros
            </span>
          </motion.div>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#171714] sm:text-6xl lg:text-7xl">
            Experiencias que
            <br />
            <span className="text-[#C86B45]">se quedan.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/45 sm:text-base">
            Cada visita deja una historia. Descubre lo que nuestros visitantes
            han vivido en Casa Misti.
          </p>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-16 grid gap-5 lg:grid-cols-3"
        >
          {selectedReviews.map((review, index) => (
            <motion.article
              key={review.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[1.8rem] border border-black/[0.06] bg-white p-7 shadow-[0_10px_40px_rgba(23,23,20,0.04)] transition-all duration-500 group-hover:border-[#C86B45]/20 group-hover:shadow-[0_25px_70px_rgba(23,23,20,0.11)] sm:p-8">
                {/* Decorative quote */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.2,
                    duration: 0.5,
                  }}
                  className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F2E8]"
                >
                  <Quote
                    size={18}
                    className="text-[#C86B45]"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{
                        opacity: 0,
                        scale: 0,
                        rotate: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15 + star * 0.06,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Star
                        size={14}
                        fill="#C86B45"
                        className="text-[#C86B45]"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Review text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.4,
                    duration: 0.7,
                  }}
                  className="mt-7 flex-1 font-serif text-[1.3rem] leading-[1.45] tracking-[-0.02em] text-[#171714] sm:text-[1.4rem]"
                >
                  “{review.text}”
                </motion.p>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-black/[0.06]" />

                {/* User */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171714] text-sm font-semibold text-white"
                    >
                      {review.name.charAt(0)}
                    </motion.div>

                    <div>
                      <p className="text-sm font-semibold text-[#171714]">
                        {review.name}
                      </p>

                      <p className="mt-0.5 text-xs text-black/35">
                        {review.city}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.12em] text-black/25">
                    {review.date}
                  </span>
                </div>

                {/* Bottom hover line */}
                <motion.div
                  initial={{
                    scaleX: 0,
                    opacity: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-8 right-8 h-[2px] origin-left rounded-full bg-gradient-to-r from-[#C86B45] via-[#D98A67] to-transparent"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-black/[0.06] pt-7 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star
                size={15}
                fill="#C86B45"
                className="text-[#C86B45]"
              />
              <span className="text-sm font-semibold text-[#171714]">
                5.0
              </span>
            </div>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="text-xs text-black/40">
              Opiniones de nuestros visitantes
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Reseñas anteriores"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#171714] transition-all duration-300 hover:border-[#C86B45]/30 hover:bg-[#C86B45] hover:text-white"
            >
              <ArrowLeft size={15} />
            </button>

            <button
              type="button"
              aria-label="Siguientes reseñas"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#171714] transition-all duration-300 hover:border-[#C86B45]/30 hover:bg-[#C86B45] hover:text-white"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
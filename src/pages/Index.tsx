import { Compass, Map, Calendar, Filter, Users, Car, Footprints, Utensils, BedDouble, TreePine, Plus, Minus, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

interface Route {
  id: number
  name: string
  type: "foot" | "car"
  difficulty: "easy" | "medium" | "hard"
  duration: string
  distance: string
  category: "family" | "friends" | "event"
  description: string
  rating: number
}

const routes: Route[] = [
  {
    id: 1,
    name: "Тропа Исети",
    type: "foot",
    difficulty: "easy",
    duration: "3 ч",
    distance: "8 км",
    category: "family",
    description: "Живописный маршрут вдоль реки Исеть через берёзовый лес. Идеально для семейных прогулок с детьми.",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Скалы Сысерти",
    type: "foot",
    difficulty: "medium",
    duration: "5 ч",
    distance: "14 км",
    category: "friends",
    description: "Маршрут к живописным скальным обнажениям с панорамными видами на долину реки Сысерть.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Автотур по Уралу",
    type: "car",
    difficulty: "easy",
    duration: "1 день",
    distance: "120 км",
    category: "family",
    description: "Автомобильный маршрут через ключевые точки региона: скалы, озёра, старинные заводы.",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Кольцо Сысерти",
    type: "foot",
    difficulty: "hard",
    duration: "2 дня",
    distance: "32 км",
    category: "friends",
    description: "Многодневный поход вокруг Сысерти с ночёвкой у реки. Для опытных туристов.",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Семейный пикник-тур",
    type: "car",
    difficulty: "easy",
    duration: "полдня",
    distance: "40 км",
    category: "family",
    description: "Лёгкий автомаршрут к лучшим местам для пикника с детьми: поляны, озёра, беседки.",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Фестивальный маршрут",
    type: "car",
    difficulty: "easy",
    duration: "1 день",
    distance: "80 км",
    category: "event",
    description: "Маршрут к площадкам летних фестивалей и ярмарок Уральского региона.",
    rating: 4.5,
  },
]

const events = [
  {
    date: "5 апр",
    name: "Открытие сезона",
    place: "Скалы Исети",
    type: "Туризм",
  },
  {
    date: "12 апр",
    name: "Весенний поход",
    place: "Тропа Сысерти",
    type: "Семейный",
  },
  {
    date: "26 апр",
    name: "Фото-прогулка",
    place: "Река Исеть",
    type: "Мероприятие",
  },
  {
    date: "10 май",
    name: "Майский слёт",
    place: "Поляна у Сысерти",
    type: "Друзья",
  },
  {
    date: "24 май",
    name: "Детский поход",
    place: "Лесная тропа",
    type: "Семейный",
  },
  {
    date: "7 июн",
    name: "Уральский фестиваль",
    place: "Сысерть",
    type: "Фестиваль",
  },
]

const faqs: FAQ[] = [
  {
    question: "Как выбрать подходящий маршрут?",
    answer:
      "Воспользуйтесь нашим помощником выбора: укажите тип передвижения (пешком или на машине), количество участников, наличие детей и желаемую сложность. Система предложит лучшие варианты с описанием точек на карте.",
  },
  {
    question: "Где можно остановиться на ночь?",
    answer:
      "На сайте отмечены все доступные варианты размещения: кемпинги, глэмпинги, гостевые дома и базы отдыха вблизи маршрутов. Каждая точка содержит контакты и краткое описание условий.",
  },
  {
    question: "Можно ли приехать с детьми?",
    answer:
      "Да! Большинство наших маршрутов адаптированы для семейного отдыха. В фильтрах выберите категорию «Семейный» — и система покажет маршруты с мягким покрытием, короткими переходами и интересными остановками для детей.",
  },
  {
    question: "Как узнать об актуальных мероприятиях?",
    answer:
      "Раздел «Календарь событий» обновляется регулярно. Здесь собраны фестивали, слёты, организованные походы и мастер-классы на свежем воздухе. Подпишитесь на рассылку, чтобы не пропустить ближайшие события.",
  },
]

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [filterType, setFilterType] = useState<"all" | "foot" | "car">("all")
  const [filterCategory, setFilterCategory] = useState<"all" | "family" | "friends" | "event">("all")
  const [filterDifficulty, setFilterDifficulty] = useState<"all" | "easy" | "medium" | "hard">("all")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const filteredRoutes = routes.filter((r) => {
    const typeOk = filterType === "all" || r.type === filterType
    const categoryOk = filterCategory === "all" || r.category === filterCategory
    const diffOk = filterDifficulty === "all" || r.difficulty === filterDifficulty
    return typeOk && categoryOk && diffOk
  })

  const difficultyLabel = { easy: "Лёгкий", medium: "Средний", hard: "Сложный" }
  const categoryLabel = { family: "Семейный", friends: "Друзья", event: "Мероприятие" }

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/d1a8dd33-cedf-41ed-adf2-df840e61cdf0/files/88f04491-426d-4a63-abf3-643dd1f03993.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="TreePine" size={20} />
            <span className="font-medium">Исеть-Сысерть</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Маршруты", "Карта", "Календарь", "Места", "Вопросы"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Найти маршрут</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Природные маршруты Уральского региона</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Открывайте природу Урала.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Маршруты по рекам Исеть и Сысерть — для семейных прогулок, дружеских походов и незабываемых приключений. Пешком или на машине.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Выбрать маршрут
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть на карте
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Users" size={16} />
            <span className="text-sm font-medium">Для семей, друзей и всех любителей природы</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Map" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Интерактивные карты</h3>
              <p className="text-white/80 leading-relaxed">Все маршруты и точки интереса отмечены на удобной карте.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Filter" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Умный помощник</h3>
              <p className="text-white/80 leading-relaxed">Подберём маршрут по типу, сложности и количеству участников.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Calendar" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Календарь событий</h3>
              <p className="text-white/80 leading-relaxed">Фестивали, слёты и организованные мероприятия сезона.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="BedDouble" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Места рядом</h3>
              <p className="text-white/80 leading-relaxed">Ночлег, кафе, магазины и заправки у каждого маршрута.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section with Filters */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Галерея маршрутов</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Выбирайте маршрут по своим предпочтениям — пешком или на машине, лёгкий или с вызовом.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="text-white/50 text-sm self-center mr-1">Тип:</span>
                {(["all", "foot", "car"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilterType(t)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
                      filterType === t
                        ? "bg-white text-black font-medium"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {t === "all" && "Все"}
                    {t === "foot" && <><Icon name="Footprints" size={14} /> Пешком</>}
                    {t === "car" && <><Icon name="Car" size={14} /> На машине</>}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap justify-center">
                <span className="text-white/50 text-sm self-center mr-1">Кто идёт:</span>
                {(["all", "family", "friends", "event"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilterCategory(c)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      filterCategory === c
                        ? "bg-white text-black font-medium"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {c === "all" ? "Все" : categoryLabel[c]}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap justify-center">
                <span className="text-white/50 text-sm self-center mr-1">Сложность:</span>
                {(["all", "easy", "medium", "hard"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setFilterDifficulty(d)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      filterDifficulty === d
                        ? "bg-white text-black font-medium"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {d === "all" ? "Любая" : difficultyLabel[d]}
                  </button>
                ))}
              </div>
            </div>

            {/* Route Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoutes.length === 0 && (
                <div className="col-span-3 text-center py-16 text-white/50">
                  Нет маршрутов по выбранным фильтрам
                </div>
              )}
              {filteredRoutes.map((route) => (
                <div
                  key={route.id}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2 flex-wrap">
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-white/10">
                        {route.type === "foot" ? <><Icon name="Footprints" size={12} /> Пешком</> : <><Icon name="Car" size={12} /> Машина</>}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        route.difficulty === "easy" ? "bg-green-500/20 text-green-300" :
                        route.difficulty === "medium" ? "bg-yellow-500/20 text-yellow-300" :
                        "bg-red-500/20 text-red-300"
                      }`}>
                        {difficultyLabel[route.difficulty]}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-white/10">
                        {categoryLabel[route.category]}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Icon name="Star" size={14} />
                      <span>{route.rating}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">{route.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{route.description}</p>
                  </div>

                  <div className="flex gap-4 text-sm text-white/60 mt-auto">
                    <span>⏱ {route.duration}</span>
                    <span>📍 {route.distance}</span>
                  </div>

                  <Button
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-0 rounded-full w-full"
                    variant="outline"
                  >
                    Открыть маршрут
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to use steps */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как выбрать маршрут</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Четыре простых шага до идеального похода.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { num: "01.", title: "Укажите тип", desc: "Выберите, как планируете передвигаться — пешком или на автомобиле." },
                { num: "02.", title: "Задайте фильтры", desc: "Укажите состав группы, желаемую сложность и длительность маршрута." },
                { num: "03.", title: "Изучите карту", desc: "Посмотрите точки маршрута, места отдыха, кафе и ночлег вблизи." },
                { num: "04.", title: "Отправляйтесь!", desc: "Сохраните маршрут и следуйте навигации по отмеченным точкам." },
              ].map((step) => (
                <div key={step.num} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-64 flex flex-col">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white/60 mb-4">{step.num}</div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold">
                Подобрать маршрут
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ближайшие события</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Организованные походы, фестивали и мероприятия на свежем воздухе.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 flex gap-5 items-start hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0 text-center w-14 h-14 rounded-xl bg-white/10 flex flex-col items-center justify-center">
                    <span className="text-xs text-white/60 leading-none">{event.date.split(" ")[1]}</span>
                    <span className="text-lg font-bold leading-none">{event.date.split(" ")[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 mb-2 inline-block">
                      {event.type}
                    </span>
                    <h3 className="text-base font-semibold mb-1">{event.name}</h3>
                    <p className="text-sm text-white/60 flex items-center gap-1">
                      <Icon name="MapPin" size={12} />
                      {event.place}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-0 text-white rounded-full px-10">
                Все события
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Places to Stay & Eat */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stay */}
            <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-6">
                <Icon name="BedDouble" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Где остановиться</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                На карте отмечены кемпинги, глэмпинги, базы отдыха и гостевые дома рядом с маршрутами. Найдите идеальное место для ночёвки под звёздами Урала.
              </p>
              <div className="space-y-3">
                {["Кемпинги у реки Исеть", "Глэмпинг «Уральские дали»", "База отдыха Сысерть", "Гостевой дом у скал"].map((place) => (
                  <div key={place} className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                    {place}
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-white text-black hover:bg-white/90 rounded-full px-6">
                Показать на карте
              </Button>
            </div>

            {/* Eat */}
            <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-6">
                <Icon name="Utensils" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Где поесть</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Вдоль маршрутов — кафе, столовые и места для пикников. Все точки отмечены на карте с режимом работы и кратким описанием.
              </p>
              <div className="space-y-3">
                {["Кафе «Берег Исети»", "Столовая в Сысерти", "Пикник-зоны у озёр", "Уральская кухня в центре"].map((place) => (
                  <div key={place} className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                    {place}
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-white text-black hover:bg-white/90 rounded-full px-6">
                Показать на карте
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Частые вопросы</h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед первым маршрутом по Исеть-Сысерти.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Предложить маршрут</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить маршрут</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Описание маршрута</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Опишите маршрут: название, длина, точки интереса..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <p className="text-xl text-white/90 leading-relaxed text-pretty">
                  Знаете интересный маршрут, который достоин быть на карте? Расскажите нам — мы проверим, добавим точки и опубликуем.
                </p>
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">🌲</div>
                    <div>
                      <h4 className="text-lg font-semibold">Команда Исеть-Сысерть</h4>
                      <p className="text-gray-600">Редакция маршрутов</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать нам
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="TreePine" size={24} />
                  <span className="text-xl font-semibold">Исеть-Сысерть</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Путеводитель по природным маршрутам Уральского региона. Для семей, друзей и всех, кто любит путешествовать.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">МАРШРУТЫ</h3>
                <ul className="space-y-3">
                  {["Пешие маршруты", "Автомаршруты", "Семейные", "Сложные"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">МЕСТА</h3>
                <ul className="space-y-3">
                  {["Где поесть", "Где остановиться", "Заправки", "Магазины"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">СЕРВИС</h3>
                <ul className="space-y-3">
                  {["Календарь событий", "Предложить маршрут", "Вопросы и ответы", "Контакты"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости и события</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Исеть-Сысерть — природные маршруты Урала</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index

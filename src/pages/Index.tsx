import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'fire-particle';
      const left = Math.random() * 100;
      const duration = 3 + Math.random() * 4;
      const xOffset = (Math.random() - 0.5) * 100;
      const size = 2 + Math.random() * 4;
      
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.setProperty('--x-offset', `${xOffset}px`);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      const container = document.getElementById('particles-container');
      if (container) {
        container.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
      }
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const programs = [
    {
      title: "Постановка «MYSTIC»",
      description: "Романтичное огненное шоу для свадеб и торжеств",
      duration: "15-20 минут",
      price: "от 12 000 ₽",
      features: ["Файер-шоу", "Огненные сердца", "Романтичная хореография", "Музыкальное сопровождение"]
    },
    {
      title: "Уличный перформанс",
      description: "Динамичное шоу с профессиональными трюками",
      duration: "20-30 минут",
      price: "от 20 000 ₽",
      features: ["Огненный staff", "Fire poi", "Пиротехника", "Сложные трюки", "LED-реквизит"]
    },
    {
      title: "Полное шоу OUTCAST",
      description: "Грандиозное представление с максимальным эффектом",
      duration: "35-45 минут",
      price: "от 35 000 ₽",
      features: ["Полный состав артистов", "Огненные инсталляции", "Спецэффекты", "Индивидуальный сценарий", "Световое шоу"]
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/72a14de5-7353-4caf-b47a-98d3caa2c09a/files/5ae5f14a-f713-418d-9196-ad5a311e7092.jpg",
      title: "Огненное жонглирование"
    },
    {
      url: "https://cdn.poehali.dev/projects/72a14de5-7353-4caf-b47a-98d3caa2c09a/files/340d91a4-a250-4cdd-8f36-110cb08226e7.jpg",
      title: "Poi performance"
    },
    {
      url: "https://cdn.poehali.dev/projects/72a14de5-7353-4caf-b47a-98d3caa2c09a/files/77ec3b07-07cf-4073-9a1b-bb68b6c3ecfd.jpg",
      title: "Fire staff"
    }
  ];

  const testimonials = [
    {
      name: "Анна Соколова",
      event: "Свадьба",
      rating: 5,
      text: "Церемония зажжения сердец стала изюминкой нашей свадьбы! Все гости были в восторге. Профессионализм на высшем уровне, каждый элемент продуман до мелочей. Спасибо за незабываемый вечер!"
    },
    {
      name: "Дмитрий Петров",
      event: "Корпоратив",
      rating: 5,
      text: "Заказывали уличный перформанс на корпоративное мероприятие. OUTCAST создали невероятную атмосферу, коллеги до сих пор обсуждают огненное шоу. Мобильные, профессиональные, зрелищные!"
    },
    {
      name: "Елена Морозова",
      event: "День рождения",
      rating: 5,
      text: "Заказывали полное шоу для юбилея. Огненное представление стало главным событием вечера! Безопасно, зрелищно, каждый элемент продуман. Огромное спасибо команде OUTCAST!"
    }
  ];

  const stats = [
    { value: "500+", label: "Выступлений" },
    { value: "7+", label: "Лет опыта" },
    { value: "100%", label: "Довольных клиентов" },
    { value: "24/7", label: "Поддержка" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/6542e7b2-83ab-46b5-8dee-6d7f743b92c4.jpg" 
                alt="OUTCAST Logo" 
                className="h-12 w-auto object-contain logo-animate cursor-pointer"
                onClick={() => scrollToSection('home')}
              />
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Программы</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Заказать шоу
              </Button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-primary/20 rounded-lg transition-colors"
                aria-label="Меню"
              >
                {isMobileMenuOpen ? (
                  <Icon name="X" size={24} className="text-primary" />
                ) : (
                  <Icon name="Menu" size={24} className="text-primary" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left py-2 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                Программы
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('prices')} className="block w-full text-left py-2 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('contacts')} className="block w-full text-left py-2 px-4 hover:bg-primary/20 rounded-lg transition-colors">
                Контакты
              </button>
              <Button 
                onClick={() => scrollToSection('contacts')} 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 mt-4"
              >
                <Icon name="Flame" size={18} className="mr-2" />
                Заказать шоу
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-black"></div>
        <div id="particles-container" className="absolute inset-0 overflow-hidden"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 fire-glow">
              OUTCAST
            </h1>
            <p className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FIRE SHOW
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Завораживающее зрелище уличного перформанса
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              Мы делаем не просто шоу... мы задаём атмосферу! 
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center gap-2 text-lg">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span>Челябинск</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contacts')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 hover-scale"
            >
              <Icon name="Flame" size={24} className="mr-2" />
              Заказать выступление
            </Button>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-gradient-to-b from-black to-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fire-glow">Наши программы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите подходящую программу для вашего мероприятия
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className="bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 animate-flicker">
                    <Icon name="Flame" size={24} />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary mt-1" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <div className="text-3xl font-bold text-primary">{program.price}</div>
                  <Button 
                    onClick={() => scrollToSection('contacts')}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fire-glow">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12">
            Моменты наших выступлений
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover-scale"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gradient-to-b from-card to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fire-glow">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Стоимость зависит от программы, продолжительности и сложности выступления
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center justify-between pb-6 border-b border-border last:border-0 last:pb-0">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                        <p className="text-sm text-muted-foreground">{program.duration}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{program.price}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1" />
                    <p className="text-sm text-muted-foreground">
                      Итоговая стоимость рассчитывается индивидуально и зависит от количества артистов, 
                      использования дополнительных эффектов и удаленности площадки
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-card to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all hover-scale"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 fire-glow">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fire-glow">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">
            Что говорят о нас наши клиенты
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.event}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2 mb-4">
                    <Icon name="Quote" size={24} className="text-primary/50 flex-shrink-0" />
                    <p className="text-muted-foreground italic">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-black to-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fire-glow">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь с нами для заказа выступления
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Челябинск</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@outcast-show.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Время работы</h4>
                  <p className="text-muted-foreground">Ежедневно, 10:00 - 22:00</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-4">Мы в социальных сетях</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://vk.com/fireshow74_outcast_ognennoe_show" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                    aria-label="VKontakte"
                  >
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.77c-.41.55-1.17.74-1.77.74-1.21 0-1.67-.47-2.67-1.47-.81-.81-1.18-1.18-1.86-1.18-.77 0-.89.11-1.15.51-.23.35-.38.95-.38 1.51 0 .34-.28.62-.75.62h-.98c-.78 0-3.23-.17-5.29-2.3C1.28 12.99.62 10.12.56 10c-.11-.31.07-.47.36-.47h2.03c.31 0 .42.16.54.39.12.24 1.27 3.02 1.97 3.74.13.14.22.18.31.18.11 0 .16-.06.22-.19V11.3c-.06-.93-.55-1.01-.55-1.33 0-.24.2-.49.53-.49h3.18c.26 0 .36.14.36.44v3.49c0 .26.12.36.19.36.11 0 .22-.1.41-.29 1.58-1.78 2.72-4.53 2.72-4.53.07-.14.2-.28.47-.28h2.03c.37 0 .45.19.37.44-.14.51-1.79 3.77-1.79 3.77-.1.18-.13.26 0 .47.09.14.37.36.56.57.76.76 1.35 1.39 1.5 1.82.16.43-.08.65-.46.65h-2.03z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/outcast_fireshow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                    aria-label="Instagram"
                  >
                    <Icon name="Instagram" size={24} className="text-primary" />
                  </a>
                  <a 
                    href="https://wa.me/79000000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                    aria-label="WhatsApp"
                  >
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-muted border-border min-h-[100px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-primary/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.poehali.dev/files/6542e7b2-83ab-46b5-8dee-6d7f743b92c4.jpg" 
                  alt="OUTCAST Logo" 
                  className="h-8 w-auto object-contain logo-animate cursor-pointer"
                  onClick={() => scrollToSection('home')}
                />
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://vk.com/fireshow74_outcast_ognennoe_show" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                  aria-label="VKontakte"
                >
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.77c-.41.55-1.17.74-1.77.74-1.21 0-1.67-.47-2.67-1.47-.81-.81-1.18-1.18-1.86-1.18-.77 0-.89.11-1.15.51-.23.35-.38.95-.38 1.51 0 .34-.28.62-.75.62h-.98c-.78 0-3.23-.17-5.29-2.3C1.28 12.99.62 10.12.56 10c-.11-.31.07-.47.36-.47h2.03c.31 0 .42.16.54.39.12.24 1.27 3.02 1.97 3.74.13.14.22.18.31.18.11 0 .16-.06.22-.19V11.3c-.06-.93-.55-1.01-.55-1.33 0-.24.2-.49.53-.49h3.18c.26 0 .36.14.36.44v3.49c0 .26.12.36.19.36.11 0 .22-.1.41-.29 1.58-1.78 2.72-4.53 2.72-4.53.07-.14.2-.28.47-.28h2.03c.37 0 .45.19.37.44-.14.51-1.79 3.77-1.79 3.77-.1.18-.13.26 0 .47.09.14.37.36.56.57.76.76 1.35 1.39 1.5 1.82.16.43-.08.65-.46.65h-2.03z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/outcast_fireshow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                  aria-label="Instagram"
                >
                  <Icon name="Instagram" size={20} className="text-primary" />
                </a>
                <a 
                  href="https://wa.me/79000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all hover-scale"
                  aria-label="WhatsApp"
                >
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 OUTCAST FIRE SHOW. Огненное шоу в Челябинске. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { useState } from 'react';
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
  };

  const programs = [
    {
      title: "Старт Огня",
      description: "Вводная программа с базовыми элементами огненного шоу",
      duration: "15-20 минут",
      price: "от 15 000 ₽",
      features: ["Файер-шоу", "Огненные poi", "Базовая хореография"]
    },
    {
      title: "Огненный Шторм",
      description: "Расширенная программа с профессиональными трюками",
      duration: "25-30 минут",
      price: "от 25 000 ₽",
      features: ["Огненный staff", "Сложные трюки", "Пиротехника", "Музыкальное сопровождение"]
    },
    {
      title: "Inferno Premium",
      description: "Полное огненное представление с максимальным эффектом",
      duration: "40-45 минут",
      price: "от 40 000 ₽",
      features: ["Полный состав артистов", "Спецэффекты", "Индивидуальный сценарий", "Световое шоу"]
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

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-flicker">
                <Icon name="Flame" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold fire-glow">OUTCAST</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Программы</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Заказать шоу
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-black"></div>
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
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональное огненное шоу в Челябинске
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

      <section id="contacts" className="py-20 bg-black">
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Flame" size={18} className="text-white" />
              </div>
              <span className="font-bold">OUTCAST FIRE SHOW</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 OUTCAST. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

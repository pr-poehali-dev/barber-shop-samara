import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    master: '',
    date: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking:', formData);
    alert('Спасибо! Мы свяжемся с вами для подтверждения записи.');
  };

  const services = [
    { name: 'Мужская стрижка', price: '1500 ₽', icon: 'Scissors' },
    { name: 'Стрижка бороды', price: '1000 ₽', icon: 'Sparkles' },
    { name: 'Королевское бритье', price: '1800 ₽', icon: 'Crown' },
    { name: 'Стрижка + борода', price: '2200 ₽', icon: 'Star' },
    { name: 'Детская стрижка', price: '1200 ₽', icon: 'Baby' },
    { name: 'Камуфляж седины', price: '1500 ₽', icon: 'Palette' }
  ];

  const masters = [
    { name: 'Дмитрий Соколов', experience: '12 лет', specialty: 'Классические стрижки' },
    { name: 'Александр Петров', experience: '8 лет', specialty: 'Моделирование бороды' },
    { name: 'Михаил Иванов', experience: '10 лет', specialty: 'Современные стили' }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/b3f7ea30-09d5-49f9-9504-4a96a8787ae3/files/189ba5fd-b3f7-44cf-9c21-5936d36369f4.jpg',
    'https://cdn.poehali.dev/projects/b3f7ea30-09d5-49f9-9504-4a96a8787ae3/files/b3ed2be8-2740-40ec-9d86-36f6ef98ad3c.jpg',
    'https://cdn.poehali.dev/projects/b3f7ea30-09d5-49f9-9504-4a96a8787ae3/files/07559cda-c411-49b7-8f5c-9b670794aca0.jpg'
  ];

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Scissors" className="text-gold" size={32} />
            <h1 className="text-3xl font-bold text-gold font-playfair">ЦИРЮЛ</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="text-beige hover:text-gold transition">Главная</a>
            <a href="#services" className="text-beige hover:text-gold transition">Услуги</a>
            <a href="#prices" className="text-beige hover:text-gold transition">Цены</a>
            <a href="#masters" className="text-beige hover:text-gold transition">Мастера</a>
            <a href="#gallery" className="text-beige hover:text-gold transition">Галерея</a>
            <a href="#contacts" className="text-beige hover:text-gold transition">Контакты</a>
          </div>
          <Button className="bg-gold hover:bg-gold-light text-black font-semibold">
            <a href="#booking">Записаться</a>
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-b from-black via-black to-brown/10">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Icon name="Scissors" className="text-gold" size={80} />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-gold font-playfair">ЦИРЮЛ</h2>
          <p className="text-2xl md:text-3xl mb-4 text-beige font-noto">Премиальный барбершоп в Самаре</p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Где традиции мастерства встречаются с современным стилем. Создаём образы настоящих мужчин.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-black font-bold text-lg px-8 py-6">
              <a href="#booking">Записаться онлайн</a>
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (846) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-brown/5">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold font-playfair">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Профессиональный уход для современного мужчины
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-gold/20 hover:border-gold/50 transition-all hover:scale-105 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={service.icon as any} className="text-gold" size={28} />
                    <CardTitle className="text-2xl font-playfair text-foreground">{service.name}</CardTitle>
                  </div>
                  <CardDescription className="text-3xl font-bold text-gold">{service.price}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold font-playfair">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Честные цены за премиальное качество
          </p>
          <Card className="bg-card/30 backdrop-blur border-gold/20">
            <CardContent className="p-8">
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-gold/10 last:border-0">
                    <div className="flex items-center gap-3">
                      <Icon name={service.icon as any} className="text-gold" size={24} />
                      <span className="text-lg text-foreground">{service.name}</span>
                    </div>
                    <span className="text-2xl font-bold text-gold font-playfair">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="masters" className="py-20 px-4 bg-brown/5">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold font-playfair">Наши мастера</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Профессионалы своего дела с многолетним опытом
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-gold/20 hover:border-gold/50 transition-all animate-fade-in">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <Icon name="User" className="text-gold" size={48} />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-center text-foreground">{master.name}</CardTitle>
                  <CardDescription className="text-center">
                    <p className="text-gold font-semibold mb-1">Опыт: {master.experience}</p>
                    <p className="text-muted-foreground">{master.specialty}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold font-playfair">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Атмосфера премиального барбершопа
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group animate-fade-in aspect-square">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-brown/5">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold font-playfair">Записаться онлайн</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Заполните форму, и мы свяжемся с вами для подтверждения
          </p>
          <Card className="bg-card/50 backdrop-blur border-gold/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="mt-2 bg-background/50 border-gold/20 focus:border-gold"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="mt-2 bg-background/50 border-gold/20 focus:border-gold"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground">Выберите услугу</Label>
                  <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="mt-2 bg-background/50 border-gold/20 focus:border-gold">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.name}>
                          {service.name} - {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="master" className="text-foreground">Выберите мастера</Label>
                  <Select onValueChange={(value) => setFormData({...formData, master: value})}>
                    <SelectTrigger className="mt-2 bg-background/50 border-gold/20 focus:border-gold">
                      <SelectValue placeholder="Любой мастер" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Любой мастер</SelectItem>
                      {masters.map((master, index) => (
                        <SelectItem key={index} value={master.name}>
                          {master.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date" className="text-foreground">Желаемая дата и время</Label>
                  <Input 
                    id="date" 
                    type="datetime-local"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                    className="mt-2 bg-background/50 border-gold/20 focus:border-gold"
                  />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-foreground">Комментарий (необязательно)</Label>
                  <Textarea 
                    id="comment"
                    placeholder="Особые пожелания..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="mt-2 bg-background/50 border-gold/20 focus:border-gold"
                  />
                </div>

                <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-black font-bold text-lg py-6">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gold font-playfair">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Приходите к нам — мы вас ждём
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/30 backdrop-blur border-gold/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon name="MapPin" className="text-gold" size={32} />
                </div>
                <CardTitle className="text-xl font-playfair text-foreground">Адрес</CardTitle>
                <div className="text-sm text-muted-foreground text-base">
                  г. Самара, ул. Ленинградская, 55<br/>
                  ТЦ "Московский", 2 этаж
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-card/30 backdrop-blur border-gold/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon name="Phone" className="text-gold" size={32} />
                </div>
                <CardTitle className="text-xl font-playfair text-foreground">Телефон</CardTitle>
                <div className="text-sm text-muted-foreground text-base">
                  <a href="tel:+78461234567" className="text-gold hover:text-gold-light">
                    +7 (846) 123-45-67
                  </a>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-card/30 backdrop-blur border-gold/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                  <Icon name="Clock" className="text-gold" size={32} />
                </div>
                <CardTitle className="text-xl font-playfair text-foreground">Режим работы</CardTitle>
                <div className="text-sm text-muted-foreground text-base">
                  Пн-Вс: 10:00 - 22:00<br/>
                  Без выходных
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gold/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Scissors" className="text-gold" size={24} />
            <p className="text-2xl font-bold text-gold font-playfair">ЦИРЮЛ</p>
          </div>
          <p className="text-muted-foreground">© 2024 Барбершоп ЦИРЮЛ. Все права защищены.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gold hover:text-gold-light transition">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-gold hover:text-gold-light transition">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="text-gold hover:text-gold-light transition">
              <Icon name="Send" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
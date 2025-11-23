import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [materialType, setMaterialType] = useState('leaflets');
  const [quantity, setQuantity] = useState(30000);
  const [district, setDistrict] = useState('center');

  const calculatePrice = () => {
    const baseRates: Record<string, number> = {
      leaflets: 0.8,
      businessCards: 1.2,
      letters: 1.5,
      magnets: 2.5
    };
    
    const districtMultiplier: Record<string, number> = {
      center: 1.3,
      north: 1.1,
      south: 1.0,
      west: 1.15,
      all: 1.0
    };

    const basePrice = quantity * baseRates[materialType] * districtMultiplier[district];
    const discount = quantity >= 30000 ? 0.3 : 0;
    const finalPrice = basePrice * (1 - discount);
    const savings = basePrice - finalPrice;

    return { finalPrice, savings, discount };
  };

  const { finalPrice, savings, discount } = calculatePrice();

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-secondary">РекламаКалининград</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="#howItWorks" className="text-foreground hover:text-primary transition-colors">Как работаем</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            </nav>
            <Button size="lg" className="hidden md:inline-flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🔥 СПЕЦПРЕДЛОЖЕНИЕ
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Скидка 30%<br />при заказе от<br />30 000 листовок
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное распространение рекламных материалов по Калининграду. Гарантия качества, фотоотчёты, быстрые сроки.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => window.location.href = '/#calculator'}>
                  Рассчитать стоимость
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram-бот
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <Button 
                  variant="link" 
                  className="text-primary underline p-0 h-auto"
                  onClick={() => window.location.href = '/client-dashboard'}
                >
                  Демо: Кабинет клиента
                </Button>
                <span className="text-muted-foreground">•</span>
                <Button 
                  variant="link" 
                  className="text-primary underline p-0 h-auto"
                  onClick={() => window.location.href = '/promoter-dashboard'}
                >
                  Демо: Кабинет промоутера
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-secondary">2000+</div>
                  <div className="text-sm text-muted-foreground">Выполнено заказов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Активных промоутеров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">24ч</div>
                  <div className="text-sm text-muted-foreground">Старт за сутки</div>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl animate-scale-in" id="calculator">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
                <CardTitle className="text-2xl">Экономия до {Math.round(savings).toLocaleString('ru-RU')} ₽</CardTitle>
                <CardDescription className="text-white/90">
                  {discount > 0 ? `С учётом скидки ${(discount * 100).toFixed(0)}%` : 'Увеличьте объём для получения скидки'}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label htmlFor="material" className="text-base font-semibold">Тип материала</Label>
                  <Select value={materialType} onValueChange={setMaterialType}>
                    <SelectTrigger id="material" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leaflets">Листовки</SelectItem>
                      <SelectItem value="businessCards">Визитки</SelectItem>
                      <SelectItem value="letters">Письма в почтовые ящики</SelectItem>
                      <SelectItem value="magnets">Магниты на холодильник</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="quantity" className="text-base font-semibold">Количество (шт.)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="mt-2 text-lg"
                    min="1000"
                    step="1000"
                  />
                </div>

                <div>
                  <Label htmlFor="district" className="text-base font-semibold">Район распространения</Label>
                  <Select value={district} onValueChange={setDistrict}>
                    <SelectTrigger id="district" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="center">Центр</SelectItem>
                      <SelectItem value="north">Северный район</SelectItem>
                      <SelectItem value="south">Южный район</SelectItem>
                      <SelectItem value="west">Западный район</SelectItem>
                      <SelectItem value="all">Весь город</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Стоимость без скидки:</span>
                    <span className="line-through text-muted-foreground">
                      {Math.round(finalPrice / (1 - discount)).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Итого к оплате:</span>
                    <span className="text-3xl font-bold text-primary">
                      {Math.round(finalPrice).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>

                <Button size="lg" className="w-full text-lg" onClick={() => alert('Функция в разработке')}>
                  Заказать услугу
                  <Icon name="CheckCircle" size={20} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Полный цикл распространения рекламы</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'FileText', title: 'Листовки', desc: 'Раздача в людных местах, торговых центрах' },
              { icon: 'CreditCard', title: 'Визитки', desc: 'Распространение по целевым точкам' },
              { icon: 'Mail', title: 'Почтовые ящики', desc: 'Адресная доставка по районам' },
              { icon: 'CircleDot', title: 'Магниты', desc: 'Размещение на подъездах, досках' }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="howItWorks" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Как мы работаем</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Простой процесс от заказа до результата</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', icon: 'Calculator', title: 'Расчёт', desc: 'Выбираете параметры и получаете точную стоимость' },
              { step: '02', icon: 'CreditCard', title: 'Оплата', desc: 'Оплачиваете онлайн удобным способом' },
              { step: '03', icon: 'Users', title: 'Распространение', desc: 'Наши промоутеры выполняют задание' },
              { step: '04', icon: 'Camera', title: 'Отчёт', desc: 'Получаете фотоотчёты с геолокацией' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: 'Shield', title: 'Гарантия качества', desc: 'Фотоотчёты с GPS, контроль каждого промоутера' },
              { icon: 'Clock', title: 'Быстрый старт', desc: 'Начинаем работу через 24 часа после оплаты' },
              { icon: 'TrendingUp', title: 'Масштабируемость', desc: 'От 1000 до 100 000+ материалов без проблем' },
              { icon: 'MessageCircle', title: 'Telegram-бот', desc: 'Управление заказами прямо в мессенджере' },
              { icon: 'Wallet', title: 'Прозрачная оплата', desc: 'Онлайн-оплата, чеки, договор, все законно' },
              { icon: 'Users', title: 'Опытная команда', desc: '50+ проверенных промоутеров, знающих город' }
            ].map((advantage, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={advantage.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{advantage.title}</CardTitle>
                      <CardDescription>{advantage.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Частые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на популярные вопросы</p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как быстро вы начнёте распространение?',
                a: 'Мы начинаем работу через 24 часа после оплаты. Если заказ очень крупный (более 50 000 единиц), может потребоваться 2-3 дня на подготовку.'
              },
              {
                q: 'Как я могу контролировать выполнение?',
                a: 'Каждый промоутер отправляет фотоотчёты с геолокацией через наш Telegram-бот. Вы видите в реальном времени, где и когда раздаются материалы.'
              },
              {
                q: 'Что если у меня нет готовых материалов?',
                a: 'Мы можем организовать печать! Свяжитесь с нами, и мы подберём типографию с лучшей ценой или поможем с дизайном.'
              },
              {
                q: 'В каких районах вы работаете?',
                a: 'Мы покрываем весь Калининград: центр, северные, южные и западные районы. Можем работать и в пригородах по договорённости.'
              },
              {
                q: 'Какие способы оплаты вы принимаете?',
                a: 'Онлайн-оплата картой, переводом по QR, для юридических лиц — по счёту с НДС. Все платежи безопасны и легальны.'
              },
              {
                q: 'Могу ли я стать вашим промоутером?',
                a: 'Конечно! Регистрируйтесь в нашем Telegram-боте, проходите простую проверку и начинайте зарабатывать. Выплаты автоматические.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 text-white/90">Рассчитайте стоимость и запустите рекламную кампанию уже сегодня</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Открыть Telegram-бот
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="MapPin" size={28} />
                <span className="text-xl font-bold">РекламаКалининград</span>
              </div>
              <p className="text-white/70">Профессиональное распространение рекламы по Калининграду</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li>Листовки</li>
                <li>Визитки</li>
                <li>Почтовые ящики</li>
                <li>Магниты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Контакты</li>
                <li>Публичная оферта</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (4012) 123-456
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@reklama-klgd.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Калининград
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 РекламаКалининград. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
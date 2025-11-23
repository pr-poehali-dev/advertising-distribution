import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const PromoterDashboard = () => {
  const promoterData = {
    name: 'Елена Михайлова',
    balance: 12480,
    rating: 4.9,
    completedOrders: 127,
    totalDistributed: 245600,
    level: 'Профессионал'
  };

  const activeOrders = [
    {
      id: 'ORD-2024-001',
      type: 'Листовки',
      client: 'ООО "Электросервис"',
      quantity: 5000,
      completed: 3200,
      rate: 0.8,
      district: 'Центр',
      deadline: '2024-11-25',
      status: 'active'
    },
    {
      id: 'ORD-2024-005',
      type: 'Визитки',
      client: 'ИП Петров',
      quantity: 2000,
      completed: 800,
      rate: 1.2,
      district: 'Московский',
      deadline: '2024-11-26',
      status: 'active'
    }
  ];

  const paymentHistory = [
    { date: '2024-11-20', amount: 4200, order: 'ORD-2024-003', status: 'paid' },
    { date: '2024-11-18', amount: 3800, order: 'ORD-2024-002', status: 'paid' },
    { date: '2024-11-15', amount: 5600, order: 'ORD-2024-001', status: 'paid' },
    { date: '2024-11-12', amount: 2900, order: 'ORD-2023-998', status: 'paid' }
  ];

  const todayStats = {
    distributed: 1240,
    earned: 992,
    hours: 4.5,
    orders: 2
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                👩
              </div>
              <div>
                <h1 className="text-2xl font-bold">{promoterData.name}</h1>
                <div className="flex items-center gap-3 text-sm text-white/90">
                  <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
                    {promoterData.level}
                  </Badge>
                  <span className="flex items-center gap-1">
                    <Icon name="Star" size={14} fill="currentColor" />
                    {promoterData.rating}
                  </span>
                  <span>{promoterData.completedOrders} заказов</span>
                </div>
              </div>
            </div>
            <Button variant="secondary">
              <Icon name="LogOut" size={18} className="mr-2" />
              Выход
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon name="Wallet" size={24} />
                <Icon name="TrendingUp" size={20} />
              </div>
              <p className="text-sm text-white/80 mb-1">Доступно к выводу</p>
              <p className="text-4xl font-bold">{promoterData.balance.toLocaleString()} ₽</p>
              <Button size="sm" variant="secondary" className="mt-4 w-full">
                Вывести средства
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Target" className="text-primary" size={24} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Сегодня распространено</p>
              <p className="text-3xl font-bold">{todayStats.distributed.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <Icon name="ArrowUp" size={12} />
                +18% к вчерашнему дню
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="DollarSign" className="text-blue-500" size={24} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Заработано сегодня</p>
              <p className="text-3xl font-bold">{todayStats.earned.toLocaleString()} ₽</p>
              <p className="text-xs text-muted-foreground mt-1">
                За {todayStats.hours} часа работы
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Briefcase" className="text-purple-500" size={24} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Активные заказы</p>
              <p className="text-3xl font-bold">{activeOrders.length}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {activeOrders.reduce((sum, o) => sum + (o.quantity - o.completed), 0).toLocaleString()} осталось
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="active">
              <Icon name="Briefcase" size={16} className="mr-2" />
              Активные
            </TabsTrigger>
            <TabsTrigger value="available">
              <Icon name="Search" size={16} className="mr-2" />
              Доступные
            </TabsTrigger>
            <TabsTrigger value="history">
              <Icon name="History" size={16} className="mr-2" />
              История
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeOrders.map((order) => {
              const progress = (order.completed / order.quantity) * 100;
              const earnings = order.completed * order.rate;
              const potential = order.quantity * order.rate;

              return (
                <Card key={order.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-xl">{order.type}</CardTitle>
                          <Badge variant="outline">{order.id}</Badge>
                        </div>
                        <CardDescription>{order.client}</CardDescription>
                      </div>
                      <Badge className="bg-green-500">
                        <Icon name="Activity" size={14} className="mr-1" />
                        В работе
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Район</p>
                          <p className="font-semibold">{order.district}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Дедлайн</p>
                          <p className="font-semibold">{order.deadline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="DollarSign" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Ставка</p>
                          <p className="font-semibold">{order.rate} ₽/шт</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Заработано</p>
                          <p className="font-semibold text-green-600">{earnings.toLocaleString()} ₽</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Прогресс выполнения</span>
                        <span className="text-sm font-bold">
                          {order.completed.toLocaleString()} / {order.quantity.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={progress} className="h-3" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Осталось {(order.quantity - order.completed).toLocaleString()} шт. • Потенциал: +{(potential - earnings).toFixed(0)} ₽
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Icon name="Camera" size={18} className="mr-2" />
                        Отправить отчёт
                      </Button>
                      <Button variant="outline">
                        <Icon name="MapPin" size={18} />
                      </Button>
                      <Button variant="outline">
                        <Icon name="MessageCircle" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="available" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Доступные заказы</CardTitle>
                <CardDescription>Новые задания в вашем районе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: 'Листовки', quantity: 3000, rate: 0.85, district: 'Центр', urgent: true },
                    { type: 'Магниты', quantity: 1500, rate: 2.5, district: 'Московский', urgent: false },
                    { type: 'Визитки', quantity: 2500, rate: 1.1, district: 'Ленинградский', urgent: false }
                  ].map((order, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{order.type}</h3>
                          {order.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              <Icon name="Zap" size={12} className="mr-1" />
                              Срочно
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="FileText" size={14} />
                            {order.quantity.toLocaleString()} шт.
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            {order.district}
                          </span>
                          <span className="flex items-center gap-1 text-green-600 font-semibold">
                            <Icon name="DollarSign" size={14} />
                            {order.rate} ₽/шт
                          </span>
                        </div>
                      </div>
                      <Button>
                        Взять заказ
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>История выплат</CardTitle>
                  <CardDescription>Последние начисления</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {paymentHistory.map((payment, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                            <Icon name="CheckCircle" className="text-green-500" size={20} />
                          </div>
                          <div>
                            <p className="font-semibold">{payment.amount.toLocaleString()} ₽</p>
                            <p className="text-xs text-muted-foreground">{payment.order}</p>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{payment.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Статистика за месяц</CardTitle>
                  <CardDescription>Ноябрь 2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Всего заработано</p>
                    <p className="text-3xl font-bold text-primary">32,480 ₽</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Заказов</p>
                      <p className="text-2xl font-bold">18</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Распространено</p>
                      <p className="text-2xl font-bold">42.8к</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">До следующего уровня</span>
                      <span className="font-semibold">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Ещё 12,500 материалов до уровня "Эксперт"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PromoterDashboard;

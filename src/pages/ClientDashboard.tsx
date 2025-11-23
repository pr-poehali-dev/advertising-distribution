import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ClientDashboard = () => {
  const orderData = {
    id: 'ORD-2024-001',
    status: 'in_progress',
    type: 'Листовки',
    quantity: 50000,
    distributed: 32500,
    district: 'Центр',
    startDate: '2024-11-20',
    endDate: '2024-11-25',
    totalCost: 28000,
    promoters: 8
  };

  const progress = (orderData.distributed / orderData.quantity) * 100;

  const photoReports = [
    { id: 1, promoter: 'Анна К.', location: 'ТЦ Европа', time: '14:30', count: 250, photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400' },
    { id: 2, promoter: 'Дмитрий П.', location: 'Пл. Победы', time: '13:15', count: 180, photo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
    { id: 3, promoter: 'Елена М.', location: 'Ул. Ленинский пр.', time: '12:00', count: 320, photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { id: 4, promoter: 'Игорь С.', location: 'Центральный рынок', time: '11:30', count: 290, photo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400' }
  ];

  const districtStats = [
    { name: 'Центр', distributed: 12500, total: 20000, color: 'bg-primary' },
    { name: 'Московский', distributed: 8200, total: 12000, color: 'bg-blue-500' },
    { name: 'Ленинградский', distributed: 6800, total: 10000, color: 'bg-green-500' },
    { name: 'Октябрьский', distributed: 5000, total: 8000, color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Icon name="MapPin" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold">Личный кабинет клиента</h1>
                <p className="text-sm text-muted-foreground">Отслеживайте выполнение в реальном времени</p>
              </div>
            </div>
            <Button variant="outline">
              <Icon name="LogOut" size={18} className="mr-2" />
              Выход
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Заказ {orderData.id}</CardTitle>
                  <CardDescription>Запущен {orderData.startDate}</CardDescription>
                </div>
                <Badge className="text-lg px-4 py-2" variant="default">
                  <Icon name="Activity" size={16} className="mr-2" />
                  В процессе
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Прогресс выполнения</span>
                  <span className="text-sm font-bold text-primary">
                    {orderData.distributed.toLocaleString()} / {orderData.quantity.toLocaleString()}
                  </span>
                </div>
                <Progress value={progress} className="h-3" />
                <p className="text-xs text-muted-foreground mt-1">
                  {progress.toFixed(1)}% выполнено
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="FileText" size={16} className="text-primary" />
                    <span className="text-xs text-muted-foreground">Тип</span>
                  </div>
                  <p className="font-bold">{orderData.type}</p>
                </div>
                <div className="bg-blue-500/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Users" size={16} className="text-blue-500" />
                    <span className="text-xs text-muted-foreground">Промоутеры</span>
                  </div>
                  <p className="font-bold">{orderData.promoters} чел.</p>
                </div>
                <div className="bg-green-500/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="MapPin" size={16} className="text-green-500" />
                    <span className="text-xs text-muted-foreground">Район</span>
                  </div>
                  <p className="font-bold">{orderData.district}</p>
                </div>
                <div className="bg-purple-500/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Calendar" size={16} className="text-purple-500" />
                    <span className="text-xs text-muted-foreground">Срок</span>
                  </div>
                  <p className="font-bold">{orderData.endDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Статистика</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Сегодня</p>
                  <p className="text-2xl font-bold">8,240</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-500/5 rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Вчера</p>
                  <p className="text-2xl font-bold">7,890</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Icon name="BarChart3" className="text-green-500" size={24} />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-500/5 rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Средняя скорость</p>
                  <p className="text-2xl font-bold">6.5к/день</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Icon name="Zap" className="text-blue-500" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="reports">
              <Icon name="Camera" size={16} className="mr-2" />
              Фотоотчёты
            </TabsTrigger>
            <TabsTrigger value="map">
              <Icon name="Map" size={16} className="mr-2" />
              Карта
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <Icon name="BarChart" size={16} className="mr-2" />
              Аналитика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Последние отчёты промоутеров</CardTitle>
                <CardDescription>Фотографии с геолокацией и временем</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {photoReports.map((report) => (
                    <Card key={report.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={report.photo}
                          alt={`Отчёт ${report.id}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-2 right-2">
                          {report.count} шт.
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold">{report.promoter}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              {report.location}
                            </p>
                          </div>
                          <Badge variant="outline">{report.time}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Карта распространения</CardTitle>
                <CardDescription>География выполнения заказа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10" />
                  <div className="relative z-10 text-center">
                    <Icon name="Map" size={64} className="text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Интеграция с картами Яндекс/Google</p>
                    <p className="text-sm text-muted-foreground mt-2">Здесь будут отображены точки распространения</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="font-semibold mb-3">Распределение по районам</h3>
                  {districtStats.map((district) => (
                    <div key={district.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{district.name}</span>
                        <span className="text-muted-foreground">
                          {district.distributed.toLocaleString()} / {district.total.toLocaleString()}
                        </span>
                      </div>
                      <Progress 
                        value={(district.distributed / district.total) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>График выполнения</CardTitle>
                  <CardDescription>Количество распространённых материалов по дням</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end gap-2">
                    {[4200, 5800, 7100, 6500, 8240].map((value, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all duration-500 hover:from-primary/80 hover:to-primary/40"
                          style={{ height: `${(value / 10000) * 100}%` }}
                        />
                        <span className="text-xs text-muted-foreground">
                          День {idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Активность промоутеров</CardTitle>
                  <CardDescription>Топ исполнителей по текущему заказу</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Елена М.', count: 8200, avatar: '👩' },
                      { name: 'Игорь С.', count: 7650, avatar: '👨' },
                      { name: 'Анна К.', count: 6890, avatar: '👩' },
                      { name: 'Дмитрий П.', count: 5920, avatar: '👨' },
                      { name: 'Ольга В.', count: 3840, avatar: '👩' }
                    ].map((promoter, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                          {promoter.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{promoter.name}</span>
                            <span className="text-sm text-muted-foreground">{promoter.count.toLocaleString()}</span>
                          </div>
                          <Progress value={(promoter.count / 10000) * 100} className="h-2" />
                        </div>
                      </div>
                    ))}
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

export default ClientDashboard;

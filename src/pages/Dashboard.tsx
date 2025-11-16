import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Star, ShoppingBag, MessageSquare, ShoppingCart, HelpCircle } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    users: 0,
    resources: 0,
    items: 0,
    achievements: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const [profilesRes, resourcesRes, itemsRes, achievementsRes] = await Promise.all([
      supabase.from('profiles').select('id', { count: 'exact', head: true }),
      supabase.from('resources').select('id', { count: 'exact', head: true }),
      supabase.from('marketplace_items').select('id', { count: 'exact', head: true }),
      supabase.from('achievements').select('id', { count: 'exact', head: true })
    ]);

    setStats({
      users: profilesRes.count || 0,
      resources: resourcesRes.count || 0,
      items: itemsRes.count || 0,
      achievements: achievementsRes.count || 0
    });
  };

  const statCards = [
    { title: 'Total Students', value: stats.users, icon: Users, color: 'text-blue-500' },
    { title: 'Resources', value: stats.resources, icon: BookOpen, color: 'text-green-500' },
    { title: 'Marketplace Items', value: stats.items, icon: ShoppingBag, color: 'text-purple-500' },
    { title: 'Achievements', value: stats.achievements, icon: Star, color: 'text-yellow-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-muted-foreground">Here's what's happening in your community</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={cn("h-4 w-4", stat.color)} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-24">
              <MessageSquare className="mr-2" />
              Join Chat
            </Button>
            <Button variant="outline" className="h-24">
              <ShoppingCart className="mr-2" />
              Browse Marketplace
            </Button>
            <Button variant="outline" className="h-24">
              <HelpCircle className="mr-2" />
              Ask Question
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
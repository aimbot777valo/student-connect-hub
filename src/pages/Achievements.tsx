import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  claimed: boolean;
}

export default function Achievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    loadAchievements();
  }, [user]);

  const loadAchievements = async () => {
    const { data } = await supabase
      .from('achievements')
      .select('*')
      .eq('user_id', user!.id)
      .order('created_at', { ascending: false });
    
    if (data) {
      setAchievements(data);
    }
  };

  const handleClaim = async (id: string) => {
    const { error } = await supabase
      .from('achievements')
      .update({ claimed: true })
      .eq('id', id);

    if (error) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    } else {
      toast({ title: "Achievement claimed!", description: "Great job!" });
      loadAchievements();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Achievements</h1>
        <p className="text-muted-foreground">Track your progress and earn rewards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <Card 
            key={achievement.id}
            className={achievement.claimed ? 'border-primary' : ''}
          >
            <CardContent className="p-6">
              <div className="text-4xl mb-4 text-center">
                {achievement.icon || <Trophy className="h-12 w-12 mx-auto text-yellow-500" />}
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                {achievement.description}
              </p>
              <div className="space-y-2">
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all"
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  {achievement.progress}% Complete
                </p>
              </div>
              {achievement.progress >= 100 && !achievement.claimed && (
                <Button 
                  className="w-full mt-4"
                  onClick={() => handleClaim(achievement.id)}
                >
                  Claim Reward
                </Button>
              )}
              {achievement.claimed && (
                <div className="text-center mt-4 text-sm text-green-500 font-semibold">
                  ✓ Claimed
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {achievements.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No achievements yet. Start participating to earn some!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
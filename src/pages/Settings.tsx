import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Profile {
  name: string;
  email: string;
  roll_no: string;
  college: string;
  phone_no: string;
  year: string;
  interests: string;
}

export default function Settings() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [editing, setEditing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user!.id)
      .single();
    
    if (data) {
      setProfile(data);
    }
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase
      .from('profiles')
      .update({
        name: formData.get('name') as string,
        roll_no: formData.get('roll_no') as string,
        college: formData.get('college') as string,
        phone_no: formData.get('phone_no') as string,
        year: formData.get('year') as string,
        interests: formData.get('interests') as string,
      })
      .eq('id', user!.id);

    if (error) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    } else {
      toast({ title: "Success", description: "Profile updated successfully!" });
      setEditing(false);
      loadProfile();
    }
  };

  if (!profile) return null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your profile</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Profile Information</CardTitle>
            <Button onClick={() => setEditing(!editing)}>
              {editing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-2xl">
                {profile.name?.charAt(0)?.toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="text-muted-foreground">{profile.email}</p>
            </div>
          </div>

          {editing ? (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" defaultValue={profile.name} required />
                </div>
                <div>
                  <Label htmlFor="roll_no">Roll Number</Label>
                  <Input id="roll_no" name="roll_no" defaultValue={profile.roll_no || ''} />
                </div>
                <div>
                  <Label htmlFor="college">College</Label>
                  <Input id="college" name="college" defaultValue={profile.college || ''} />
                </div>
                <div>
                  <Label htmlFor="phone_no">Phone Number</Label>
                  <Input id="phone_no" name="phone_no" defaultValue={profile.phone_no || ''} />
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" name="year" defaultValue={profile.year || ''} />
                </div>
                <div>
                  <Label htmlFor="interests">Interests</Label>
                  <Input id="interests" name="interests" defaultValue={profile.interests || ''} />
                </div>
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Roll Number</Label>
                <p className="text-sm mt-1">{profile.roll_no || 'Not set'}</p>
              </div>
              <div>
                <Label>College</Label>
                <p className="text-sm mt-1">{profile.college || 'Not set'}</p>
              </div>
              <div>
                <Label>Phone Number</Label>
                <p className="text-sm mt-1">{profile.phone_no || 'Not set'}</p>
              </div>
              <div>
                <Label>Year</Label>
                <p className="text-sm mt-1">{profile.year || 'Not set'}</p>
              </div>
              <div className="md:col-span-2">
                <Label>Interests</Label>
                <p className="text-sm mt-1">{profile.interests || 'Not set'}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
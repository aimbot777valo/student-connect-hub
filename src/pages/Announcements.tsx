import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function Announcements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Announcements</h1>
        <p className="text-muted-foreground">Important updates and news</p>
      </div>

      <Card>
        <CardContent className="p-12 text-center">
          <Bell className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">No announcements yet</p>
        </CardContent>
      </Card>
    </div>
  );
}
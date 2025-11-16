import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function Chat() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Chat</h1>
        <p className="text-muted-foreground">Connect with fellow students</p>
      </div>

      <Card>
        <CardContent className="p-12 text-center">
          <MessageSquare className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Chat feature coming soon!</p>
        </CardContent>
      </Card>
    </div>
  );
}